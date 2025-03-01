class SpreadsheetApp {
  constructor() {
    this.allData = []
    this.allColumns = []
    this.initEventListeners()
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  initEventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      this.fetchSpreadsheetData()

      // Закрытие модального окна по клику вне содержимого
      document
        .getElementById("imageModal")
        .addEventListener("click", (e) => this.handleModalClick(e))

      // Закрытие модального окна по клавише Esc
      document.addEventListener("keydown", (e) => this.handleKeydown(e))
    })

    document
      .getElementById("searchInput")
      .addEventListener("input", () => this.filterAndDisplayCards())
  }

  handleModalClick(e) {
    if (e.target.id === "imageModal") {
      this.closeModal()
    }
  }

  handleKeydown(e) {
    const modal = document.getElementById("imageModal")
    if (modal.classList.contains("open")) {
      if (e.key === "Escape" || e.key === "Esc") {
        this.closeModal()
      } else if (e.key === "ArrowRight") {
        changeModalImage(1)
      } else if (e.key === "ArrowLeft") {
        changeModalImage(-1)
      }
    }
  }

  closeModal() {
    const modal = document.getElementById("imageModal")
    modal.classList.remove("open") // Заменяем style.display на удаление класса
  }

  // Улучшенная функция загрузки данных с поддержкой обработки ошибок
  async fetchSpreadsheetData() {
    try {
      const url = `https://docs.google.com/spreadsheets/d/${CONFIG.S_ID}/gviz/tq?tqx=out:json&tq&gid=${CONFIG.S_GID}`
      const response = await fetch(url)
      const data = await response.text()

      const jsonData = data.slice(47, -2)
      const parsedData = JSON.parse(jsonData)

      this.allData = parsedData.table.rows
      this.allColumns = parsedData.table.cols

      document.getElementById("totalVtx").textContent = this.allData.length

      this.createSelectors()

      // ВАЖНОЕ ИЗМЕНЕНИЕ: добавьте привязку контекста или используйте стрелочную функцию
      this.filterAndDisplayCards.bind(this)()
    } catch (error) {
      console.error("Помилка завантаження даних:", error)
    }
  }

  // Парсинг тегов колонок (вынесен в отдельный метод)
  parseColumnLabel(label) {
    const tagMatch = label.match(/^{([^}]+)}(.+)$/)
    if (tagMatch) {
      const tags = tagMatch[1].split(",").map((tag) => tag.trim())
      return { tags, label: tagMatch[2] }
    }
    return { tags: [], label }
  }

  // Оптимизированная функция создания селекторов
  createSelectors() {
    const filtersContainer = document.getElementById("filters")
    filtersContainer.innerHTML = ""

    this.allColumns.forEach((col, colIndex) => {
      const { tags, label } = this.parseColumnLabel(col.label)

      if (!tags.includes("h")) {
        const uniqueValues = this.extractUniqueValues(colIndex)

        if (uniqueValues.size > 0) {
          const labelElement = document.createElement("label")
          labelElement.innerText = label
          labelElement.style.display = "block"

          const select = this.createSelect(colIndex, uniqueValues)
          filtersContainer.append(labelElement, select)
        }
      }
    })
  }

  // Вспомогательная функция для получения уникальных значений
  extractUniqueValues(colIndex) {
    return new Set(
      this.allData
        .map((row) => row.c[colIndex]?.v)
        .filter(
          (value) =>
            value !== undefined && value !== null && String(value).trim() !== ""
        )
        .map(String)
    )
  }

  // Создание селекта с опциями
  createSelect(colIndex, uniqueValues) {
    const select = document.createElement("select")
    select.id = `selector-${colIndex}`
    select.dataset.column = colIndex
    select.addEventListener("change", () => this.filterAndDisplayCards())

    const allOption = document.createElement("option")
    allOption.value = "all"
    allOption.innerText = "Усі варіанти"
    select.appendChild(allOption)

    uniqueValues.forEach((value) => {
      const option = document.createElement("option")
      option.value = value
      option.innerText = value
      select.appendChild(option)
    })

    return select
  }

  // Оптимизированная функция фильтрации и отображения
  filterAndDisplayCards() {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase()
    const selectedOptions = this.getSelectedFilterOptions()

    const filteredData = this.allData.filter(
      (row) =>
        this.matchesSelectedFilters(row, selectedOptions) &&
        this.matchesSearchTerm(row, searchTerm)
    )

    document.getElementById("json").innerHTML = this.renderCards(
      this.generateJSONString(filteredData)
    )
  }

  // Получение активных фильтров
  getSelectedFilterOptions() {
    return Array.from(document.querySelectorAll("select"))
      .map((select) =>
        select.value !== "all"
          ? { column: select.dataset.column, value: select.value }
          : null
      )
      .filter(Boolean)
  }

  // Проверка соответствия строки фильтрам
  matchesSelectedFilters(row, selectedOptions) {
    return selectedOptions.every((option) => {
      const cell = row.c[option.column]
      return cell && String(cell.v) === option.value
    })
  }

  // Проверка соответствия поисковому запросу
  matchesSearchTerm(row, searchTerm) {
    if (!searchTerm) return true

    return row.c.some((cell, index) => {
      if (!cell || cell.v === null || cell.v === undefined) return false

      const { tags, label } = this.parseColumnLabel(
        this.allColumns[index].label
      )

      // Пропускаем колонки с тегами b, l, p
      if (
        tags.includes("b") ||
        tags.includes("p") ||
        tags.some((tag) => tag.startsWith("l"))
      ) {
        return false
      }

      const cellValue = String(cell.v).toLowerCase()
      return cellValue.includes(searchTerm)
    })
  }

  // Генерация JSON-строки
  generateJSONString(data) {
    return JSON.stringify({ table: { rows: data, cols: this.allColumns } })
  }

  // Сокращенная функция рендеринга карточек
  renderCards(jsonData) {
    const json = JSON.parse(jsonData)
    const cards = json.table.rows
      .map((row) => this.createCard(row, json.table.cols))
      .join("")
    return `<div class="cards-container">${cards}</div>`
  }

  // Обновлена функция для извлечения данных карты
  extractCardData(row, columns) {
    const data = {
      images: [],
      headerContent: {},
      links: [],
      ButtonLink: { url: "", text: "" },
      noteContent: null,
    }

    let buttonLabel = null // Меняем начальное значение на null

    // Сначала ищем колонку с тегом b
    for (let i = 0; i < row.c.length; i++) {
      const { tags, label } = this.parseColumnLabel(columns[i].label)
      if (tags.includes("b")) {
        buttonLabel = label
        break
      }
    }

    // Теперь собираем все данные
    row.c.forEach((cell, index) => {
      const { tags, label } = this.parseColumnLabel(columns[index].label)
      const value = cell?.f || cell?.v

      if (value) {
        // Обработка фото
        const photoTags = tags.filter((tag) => tag.startsWith("p"))
        if (photoTags.length > 0) {
          photoTags.forEach((tag) => {
            const photoIndex = tag === "p" ? 0 : parseInt(tag.slice(1)) - 1
            if (photoIndex >= 0) {
              data.images[photoIndex] = value
            }
          })
        }

        // Обработка кнопки
        if (tags.includes("b")) {
          data.ButtonLink = { text: buttonLabel, url: value || "" }
        }

        // Обработка заголовков
        const tTag = tags.find((tag) => tag.startsWith("t"))
        if (tTag) data.headerContent[tTag] = `<strong>${value}</strong>`

        // Обработка дополнительной информации
        if (tags.includes("n")) {
          data.noteContent = { label, value }
        }

        // Обработка ссылок
        const lTag = tags.find((tag) => tag.startsWith("l"))
        if (lTag) data.links.push({ tag: lTag, url: value, text: label })
      }
    })

    // Устанавливаем текст кнопки
    data.ButtonLink.text = buttonLabel || "-"

    // Убираем пустые элементы и undefined из массива фото
    data.images = data.images.filter((img) => img && img.trim() !== "")

    return data
  }

  createCard(row, columns) {
    const cardData = this.extractCardData(row, columns)

    const headerItems = Object.entries(cardData.headerContent)
      .sort(
        ([tagA], [tagB]) =>
          (parseInt(tagA.slice(1), 10) || 0) -
          (parseInt(tagB.slice(1), 10) || 0)
      )
      .map(([, content]) => content)
      .join(" ")

    return `
      <div class="card">
        <div class="card-header">${headerItems}</div>
        ${this.createCardImage(cardData.images)}
        ${this.createCardDetails(row, columns, cardData)}
        ${this.createCardNote(cardData)}
        ${this.createCardFooter(cardData)}
      </div>
    `
  }

  createCardNote(cardData) {
    if (cardData.noteContent) {
      return `
        <div class="card-note">
          
          <p><strong>${cardData.noteContent.label}</strong> ${cardData.noteContent.value}</p>
        </div>
      `
    }
    return ""
  }

  createCardImage(images) {
    const defaultImage =
      "https://placehold.co/240@2x.png?text=No+picture&font=oswald"
    const imagesJson = JSON.stringify(images).replace(/"/g, "&quot;")

    const hasImages = images.length > 0
    const displayedImage = hasImages ? images[0] : defaultImage

    return `
      <div class="card-image">
        <div class="image-container">
          <img src="${displayedImage}" 
               alt="Card Image"
               style="width: 100%;"
               data-images='${imagesJson}'
               data-current-index="0"
               onclick='openModal(this.src, ${
                 hasImages ? imagesJson : JSON.stringify([defaultImage])
               }, this.dataset.currentIndex)'>
          ${
            hasImages && images.length > 1
              ? `
            <div class="image-navigation">
              <div class="image-dots">
                ${images
                  .map(
                    (_, index) => `
                  <span class="dot ${index === 0 ? "active" : ""}" 
                        onclick="changeImage(${index}, this.closest('.image-container'))">
                  </span>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
        </div>
      </div>
    `
  }

  // Создание деталей карточки
  createCardDetails(row, columns, cardData) {
    return row.c.reduce((details, cell, index) => {
      const { tags, label } = this.parseColumnLabel(columns[index].label)
      const value = cell?.f || cell?.v

      const excludedTags = ["h", "p", "b", "l", "t", "n"]
      if (!tags.some((tag) => excludedTags.includes(tag[0])) && value) {
        details += `
          <div class="card-item">
            <span>${label}</span>
            <span class="dots"></span>
            <strong>${value}</strong>
          </div>
        `
      }

      return details
    }, "")
  }

  // Создание футера карточки
  createCardFooter(cardData) {
    const linkItems = cardData.links
      .sort(
        (a, b) =>
          (parseInt(a.tag.slice(1), 10) || 0) -
          (parseInt(b.tag.slice(1), 10) || 0)
      )
      .map(
        (link) =>
          `<a href="${link.url}" target="_blank" class="search-link">${link.text}</a>`
      )
      .join(" ")

    return `
      <div class="card-footer">
        <div class="card-item">${linkItems}</div>
        ${
          CONFIG.SHOW_BUTTON
            ? `
          <button 
            ${
              cardData.ButtonLink.url
                ? `onclick="window.open('${cardData.ButtonLink.url}', '_blank')"`
                : "disabled"
            }
          >
            ${cardData.ButtonLink.text}
          </button>
        `
            : ""
        }
      </div>
    `
  }
}

// Функции для модального окна и меню
function openModal(currentImage, allImages, currentIndex = "0") {
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("imgInModal")
  const modalContent = modal.querySelector(".modal-content")

  modalImg.src = currentImage
  modal.classList.add("open")

  // Добавляем обработчик клика на изображение
  modalImg.onclick = (e) => {
    e.stopPropagation()
    closeModal()
  }

  const existingNavigation = modalContent.querySelector(".modal-navigation")
  if (existingNavigation) {
    existingNavigation.remove()
  }

  if (allImages && allImages.length > 1) {
    const navigation = document.createElement("div")
    navigation.className = "modal-navigation"
    navigation.innerHTML = `
      <button onclick="event.stopPropagation(); changeModalImage(-1)">&#10094;</button>
      <button onclick="event.stopPropagation(); changeModalImage(1)">&#10095;</button>
    `

    navigation.dataset.images = JSON.stringify(allImages)
    navigation.dataset.currentIndex = currentIndex
    navigation.onclick = (e) => e.stopPropagation()

    modalContent.appendChild(navigation)
  }
}

function changeModalImage(direction) {
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("imgInModal")
  const navigation = modal.querySelector(".modal-navigation")

  if (!navigation) return

  const images = JSON.parse(navigation.dataset.images)
  let currentIndex = parseInt(navigation.dataset.currentIndex)

  currentIndex = (currentIndex + direction + images.length) % images.length

  modalImg.src = images[currentIndex]
  navigation.dataset.currentIndex = currentIndex.toString()
}

function changeImage(index, container) {
  const image = container.querySelector("img")
  const images = JSON.parse(image.dataset.images || "[]")
  const dots = container.querySelectorAll(".dot")

  if (index >= 0 && index < images.length) {
    // Добавляем класс для затухания
    image.classList.add("fade")

    setTimeout(() => {
      image.src = images[index]
      image.dataset.currentIndex = index

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index)
      })

      // Убираем класс fade после загрузки нового изображения
      image.onload = () => {
        image.classList.remove("fade")
      }
    }, 200)
  }
}

function closeModal() {
  window.spreadsheetApp.closeModal()
}

function toggleFilters() {
  const filtersColumn = document.querySelector(".filters-column")
  const burgerMenu = document.querySelector(".burger-menu")
  const overlay = document.getElementById("overlay")
  const icon = burgerMenu.querySelector(".icon")

  const isOpen = filtersColumn.classList.toggle("open")
  burgerMenu.classList.toggle("open", isOpen)
  overlay.classList.toggle("open", isOpen)

  icon.textContent = isOpen ? "✕" : "☰"

  if (isOpen) {
    document.addEventListener("click", handleClickOutside)
  } else {
    document.removeEventListener("click", handleClickOutside)
  }
}

function handleClickOutside(event) {
  const filtersColumn = document.querySelector(".filters-column")
  const burgerMenu = document.querySelector(".burger-menu")
  const overlay = document.getElementById("overlay")
  const icon = burgerMenu.querySelector(".icon")

  if (
    !filtersColumn.contains(event.target) &&
    !burgerMenu.contains(event.target)
  ) {
    filtersColumn.classList.remove("open")
    burgerMenu.classList.remove("open")
    overlay.classList.remove("open")
    icon.textContent = "☰"
    document.removeEventListener("click", handleClickOutside)
  }
}

function resetFilters() {
  const selects = document.querySelectorAll("select")
  const searchInput = document.getElementById("searchInput")

  selects.forEach((select) => (select.selectedIndex = 0))
  searchInput.value = ""

  window.spreadsheetApp.filterAndDisplayCards()
}

// Создание экземпляра приложения
window.spreadsheetApp = new SpreadsheetApp()

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput")

  // Функция получения параметра из URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }

  const searchValue = getQueryParam("s")
  if (searchValue) {
    searchInput.value = searchValue
  }

  searchInput.addEventListener("input", function () {
    const selectedValue = searchInput.value
    const url = new URL(window.location)

    if (selectedValue) {
      url.searchParams.set("s", selectedValue)
    } else {
      url.searchParams.delete("s")
    }

    window.history.replaceState({}, "", url)
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");

  // Функция обновления видимости кнопки очистки
  function updateClearButton() {
    clearBtn.style.display = searchInput.value ? "block" : "none";
  }

  // Добавляем прослушивание на вход
  searchInput.addEventListener("input", updateClearButton);

  // Очистка поля при клике на «X»
  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    updateClearButton();
    searchInput.dispatchEvent(new Event("input")); // Запускаем событие input для обновления URL
  });

  // Вызываем обновление состояния кнопки после загрузки страницы
  updateClearButton();
});