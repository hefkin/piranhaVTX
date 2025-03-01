const translations = {
  en: {
    //GENERAL
    title: "VTX tools",
    add: "Add",
    mhz: "MHz",
    group_calculators: "Calculators",

    //READ
    read_descr: "Utility for downloading the ELRS firmware directly from RX/TX via UART. It is possible to search for a wifi password without fully downloading the firmware. To work with the utility, the receiver must be in the bootloader mode (hold down the button before powering up)",

    //DIPOLE
    dpl_title: "Dipole calculator",
    dpl_descr: "This calculator helps to calculate the length of a dipole antenna by a given frequency, or vice versa - the frequency by the total length or the length of one leg.",
    dpl_ant_length: "Antenna length (cm)",
    dpl_leg_length: "Leg length (cm)",

    //INF
    inf_title: "ELRS info",
    inf_descr: "This tool allows you to parse useful information from the ELRS firmware bin file",
    inf_copy_button: "Copy layout",
    inf_firmware: "Firmware",
    inf_lua_name: "LUA name",
    inf_password: "Password",
    inf_layout: "Hardware layout:",
    inf_gen_button: "Generate BusLRS firmware",

    //LOGO
    logo_title: "OSD logo converter",
    logo_descr:
      "A simple tool for converting almost any image to a size and format suitable for use on the Betaflight loading screen. Has a primitive editor for minor adjustments",
    logo_paste_line1: "Click here to upload a picture",
    logo_paste_line2: "Or paste it from the clipboard",
    logo_title: "OSD logo converter",
    logo_satur: "Saturation",
    logo_contr: "Contrast",
    logo_scale: "Preview scale",
    logo_orig_option: "Original",
    logo_px_color: "Pixel color:",
    logo_px_size: "Pixel size:",
    logo_reset: "Reset drawing",
    logo_download: "Dowmnload BMP",

    //CFG
    cfg_title: "VTX config generator",
    aux_select: "AUX for VTX control",
    vtx_template: "VTX template",
    vtx_serial_port: "VTX serial port",
    vtx_protocol: "VTX protocol",
    default_band: "Default band",
    default_channel: "Default channel",
    power_state_1: "Power state 1",
    power_state_2: "Power state 2",
    power_state_3: "Power state 3",
    include_checkbox: "Include VTX table for selected template",
    vtx_notice:
      "Attention! The selected transmitter is not recommended for use or the frequency table may be inaccurate.",
    vtx_notice_2: "Attention! The frequency table may be inaccurate.",

    cfg_descr: `"All-in-one" Betaflight CLI command generator for configuring VTX. It allows you to configure in detail the power/band/channel switching using the toggle on your radio. Offers templates (including frequency tables) for some popular VTX models`,

    generate_button: "Generate CLI",
    copy_button: "Copy result",
    copied_to_clipboard: "Copied to clipboard!",

    aux_select_tooltip:
      "AUX channel of the 3-position toggle switch, which will be used to select the power of the video transmitter. This is usually the SC toggle",
    vtx_template_tooltip:
      "You can choose a configuration template for some popular VTXs. Affects the settings below. Also includes a channels table for the selected VTX.",
    vtx_serial_port_tooltip:
      "The number of the UART port to which the VTX control wire is soldered. For SpeedyBee F405 v3 it is UART 1 (TX1 pin).",
    vtx_protocol_tooltip:
      "The control protocol used in VTX. Defined by the template, but can be changed manually.",
    default_band_tooltip:
      "The transmitter will be tuned to this band after applying the CLI command.",
    default_channel_tooltip:
      "The transmitter will be tuned to this channel after applying the CLI command.",

    power_state_1_tooltip:
      "Power value for the first position of the toggle (up). This is usually the lowest (25mW) power value. This is actually the sequence number of the powervalue from the frequency table. Below you can change the limits for determining this toggle position.",
    power_state_2_tooltip:
      "Power value for the second position of the toggle (center). This is usually the middle power value. This is actually the sequence number of the powervalue from the frequency table. Below you can change the limits for determining this toggle position.",
    power_state_3_tooltip:
      "Power value for the third toggle position (down). This is usually the highest power value. This is actually the sequence number of the powervalue from the frequency table. Below you can change the limits for determining this toggle position.",

    band_checkbox: "Include band/channel change capability",
    six_band_checkbox: "6-position toggle",
    band_select: "AUX for band change",
    band_select_option: "Select AUX",
    band_state_1: "Band 1",
    band_state_2: "Band 2",
    band_state_3: "Band 3",
    band_state_4: "Band 4",
    band_state_5: "Band 5",
    band_state_6: "Band 6",

    band_0_option: "Do not change band",
    band_a_option: 'Band "A"',
    band_b_option: 'Band "B"',
    band_e_option: 'Band "E"',
    band_f_option: 'Band "F"',
    band_r_option: 'Band "R"',
    band_6_option: "‼️ Band #6 in the frequency table",
    band_7_option: "‼️ Band #7 in the frequency table",
    band_8_option: "‼️ Band #8 in the frequency table",

    channel_state_1: "Channel 1",
    channel_state_2: "Channel 2",
    channel_state_3: "Channel 3",
    channel_state_4: "Channel 4",
    channel_state_5: "Channel 5",
    channel_state_6: "Channel 6",
    channel_0_option: "Do not change channel",
    channel_1_option: "Channel 1",
    channel_2_option: "Channel 2",
    channel_3_option: "Channel 3",
    channel_4_option: "Channel 4",
    channel_5_option: "Channel 5",
    channel_6_option: "Channel 6",
    channel_7_option: "Channel 7",
    channel_8_option: "Channel 8",

    band_select_tooltip:
      "3-position toggle AUX channel used for band switching. You can't select the AUX already assigned for VTX power control. No default value, must be manually selected to proceed.",
    band_state_1_tooltip:
      "Band assigned to the first toggle position (up). Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
    band_state_2_tooltip:
      "Band assigned to the second toggle position (center). Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
    band_state_3_tooltip:
      "Band assigned to the third toggle position (down). Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
    band_state_4_tooltip:
      "Band assigned to the fourth toggle position. Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
    band_state_5_tooltip:
      "Band assigned to the fifth toggle position. Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",
    band_state_6_tooltip:
      "Band assigned to the sixth toggle position. Below you can change the limits for determining this toggle position. Warning‼️ bands 6-8 might not be supported by your VTX. Only select if you are sure they are supported.",

    channel_state_1_tooltip:
      "Channel assigned to the first toggle position (up). Below you can change the limits for determining this toggle position.",
    channel_state_2_tooltip:
      "Channel assigned to the second toggle position (center). Below you can change the limits for determining this toggle position.",
    channel_state_3_tooltip:
      "Channel assigned to the third toggle position (down). Below you can change the limits for determining this toggle position.",
    channel_state_4_tooltip:
      "Channel assigned to the fourth toggle position. Below you can change the limits for determining this toggle position.",
    channel_state_5_tooltip:
      "Channel assigned to the fifth toggle position. Below you can change the limits for determining this toggle position.",
    channel_state_6_tooltip:
      "Channel assigned to the sixth toggle position. Below you can change the limits for determining this toggle position.",
    migration_banner:
      "Attention! The configurator has moved to a separate domain. Access via this URL will be disabled soon.",

    //CH
    ch_title: "Channel distribution calculator",
    ch_band: "Band",
    ch_channel: "Channel",
    ch_pilots: "Number of pilots",
    ch_selected: "Selected channels:",

    ch_pilots_tooltip:
      "Select the number of pilots who plan to fly simultaneously",

    ch_1_pilot_option: "1 pilot",
    ch_2_pilots_option: "2 pilots",
    ch_3_pilots_option: "3 pilots",
    ch_4_pilots_option: "4 pilots",
    ch_5_pilots_option: "5 pilots",
    ch_6_pilots_option: "6 pilots",

    ch_includeXBand: "Include X-band",
    ch_includeLBand: "Include L-band",
    ch_calculateChannelsButton: "Calculate channels",
    ch_descr: `A utility that helps to “share” channels between several pilots during a simultaneous flight. Using a given video channel, it searches for the most distant (by frequency) channels. Also, the script tries to find the channels that are as far away from each other as possible`,

    ch_selected_toast: "This channel has already been added",
    ch_max_toast: "A maximum of 5 channels can be added manually",

    //ANT
    ant_title: "The closest channel by frequency",
    ant_freq: "Frequency (MHz)",
    ant_freq_start: "Start (MHz)",
    ant_freq_end: "End (MHz)",
    ant_ch_count: "Number of channels",

    ant_descr:
      "This utility helps you to find the most productive video channel for a particular antenna by knowing at what frequency or in what range it has the best SWR (Standing Wave Ratio). If you measure this parameter and sort antennas by it, this utility will help you speed up the process",

    ant_freq_tooltip:
      "Enter the frequency at which your antenna has the best SWR",


      ant_freq_start_tooltip: "Enter the start frequency",
      ant_freq_end_tooltip: "Enter the end frequency to search inside a specific range, or leave it blank",
  

    //HRM
    hrm_calculate_button: "Calculate",
    hrm_channel_width: "Channel width (MHz)",
    hrm_control_frq: "Central frequency (MHz)",
    hrm_start_frq: "Start frequency (MHz)",
    hrm_end_frq: "End frequency (MHz)",
    hrm_title: "Harmonics calculator",
    hrm_harmonic: "Harmonic",
    hrm_no_result: "No harmonics found",
    hrm_tab_affected: "Affected channels",
    hrm_tab_unaffected: "Unaffected channels",

    hrm_control_tooltip:
      "The central frequency of the radiolink at which TX and RX interact. For example 915, 868 or 433 MHz",
    hrm_channel_width_tooltip:
      "The width of the channel between TX and RX. 30 MHz is the common value for custom-made regulatory domains, but this value can be unique for each custom ELRS firmware. For example, for FCC915 it is 23.4 MHz (903.500 - 926.900)",
    hrm_start_frq_tooltip:
      "The start frequency of the range. For example, for FCC915 it is 903.500 MHz",
    hrm_end_frq_tooltip:
      "The end frequency of the range. For example, for FCC915 it is 926.900 MHz",
    hrm_descr:
      "This utility helps to find video channels that may be negatively affected by harmonics generated by the TX radiation",

    //FRN
    frn_title: "Fresnel zone calculator",
    frn_descr:
      "It helps to determine the optimal, minimum, and critical distance from the center of the line of sight between the antennas to the first obstacles under this conditional line. In simpler terms, find the minimum height that will provide a line of sight and add the calculated number of meters",
    frn_frq: "Frequency (MHz)",
    frn_distance: "Distance (Km)",
    frn_zone1: "First zone: ",
    frn_zone80: "80% zone: ",
    frn_zone60: "60% zone: ",

    frn_frequency_tooltip: "TBD",
    frn_distance_tooltip: "TBD",
  },
  ru: {
    //GENERAL
    title: "VTX утилиты",
    descr: "dd",
    add: "Добавить",
    mhz: "МГц",
    vcat_title: "Каталог VTX",
    group_calculators: "Калькуляторы",
    group_elrs: "ELRS Утилиты",

    //READ
    read_descr: "Утилита для загрузки прошивки ELRS напрямую с RX/TX через UART. Есть возможность поиска wifi пароля без полной загрузки прошивки. Для работы с утилитой приемник должен быть в bootloader режиме (удерживайте кнопку перед подачей питания).",

    //INF
    inf_title: "ELRS инфо",
    inf_descr: "Эта утилита позволяет просмотреть полезную информацию из bin файла прошивки ELRS",
    inf_copy_button: "Скопировать слой",
    inf_firmware: "Прошивка",
    inf_lua_name: "LUA название",
    inf_password: "Пароль",
    inf_layout: "Слой:",

    //DIPOLE
    dpl_title: "Калькулятор диполя",
    dpl_descr: "Этот калькулятор поможет рассчитать длину диполь-антенны по заданной частоте, или наоборот - частоту по общей длине антенны или длине одного ее плеча.",
    dpl_ant_length: "Длина (см)",
    dpl_leg_length: "Плечо (см)",

    //CFG
    cfg_title: "Генератор конфигурации VTX",
    aux_select: "AUX управление VTX",
    vtx_template: "Шаблон VTX",
    vtx_serial_port: "Серийный порт VTX",
    vtx_protocol: "Протокол VTX",
    default_band: "Диапазон по умолчанию",
    default_channel: "Канал по умолчанию",
    power_state_1: "Мощность 1",
    power_state_2: "Мощность 2",
    power_state_3: "Мощность 3",
    include_checkbox: "Добавить таблицу частот для выбранного VTX",
    vtx_notice:
      "Внимание! Выбранный передатчик не рекомендован для использования, или таблица частот может иметь неточности.",
    vtx_notice_2: "Внимание! Таблица частот может иметь неточности.",

    cfg_descr: `Генератор CLI команды Betaflight для настройки VTX. Дает возможность детально настроить переключение мощности/диапазона/канала из аппаратуры. Предлагает шаблоны (включая таблицы частот) для некоторых популярных моделей VTX`,

    generate_button: "Сгенерировать CLI команду",
    copy_button: "Скопировать CLI",
    copied_to_clipboard: "Скопировано в буфер!",

    aux_select_tooltip:
      "Канал AUX 3-х позиционного переключателя с помощью которого будет изменяться мощность видеопередатчика. Обычно это переключатель SC.",
    vtx_template_tooltip:
      "Вы можете выбрать шаблон настроек для некоторых популярных видеопередатчиков. Влияет на параметры ниже. Шаблон также включает в себя таблицу каналов для выбранного видеопередатчика.",
    vtx_serial_port_tooltip:
      "Номер порта UART к которому припаян провод управления VTX. Для SpeedyBee F405 это UART 1 (контактная площадка TX1).",
    vtx_protocol_tooltip:
      "Протокол управления, используемый в VTX. Определяется шаблоном, но может быть изменен вручную.",
    default_band_tooltip:
      "Диапазон частот установлен по умолчанию. Передатчик будет настроен на этот диапазон после применения CLI команды.",
    default_channel_tooltip:
      "Канал установлен по умолчанию. Передатчик будет настроен на этот канал после применения CLI команды.",

    power_state_1_tooltip:
      "Значение мощности для первого положения переключателя (вверх). Обычно это самое низкое (25мВт) значение мощности. Фактически это порядковый номер значения мощности из таблицы частот. Ниже вы можете изменить лимиты для определения этого положения переключателя.",
    power_state_2_tooltip:
      "Значение мощности для второго положения переключателя (по центру). Обычно это среднее значение мощности. Фактически это порядковый номер значения мощности из таблицы частот. Ниже вы можете изменить лимиты для определения этого положения переключателя.",
    power_state_3_tooltip:
      "Значение мощности для третьего положения переключателя (вниз). Обычно это максимальное значение мощности. Фактически это порядковый номер значения мощности из таблицы частот. Ниже вы можете изменить лимиты для определения этого положения переключателя.",

    band_checkbox: "Добавить возможность изменения диапазона/каналов",
    six_band_checkbox: "6-позиционный переключатель",
    band_select: "AUX для изменения диапазона",
    band_select_option: "Выберите AUX",
    band_state_1: "1й диапазон",
    band_state_2: "2й диапазон",
    band_state_3: "3й диапазон",
    band_state_4: "4й диапазон",
    band_state_5: "5й диапазон",
    band_state_6: "6й диапазон",

    band_0_option: "Не менять диапазон",
    band_a_option: 'Диапазон "A"',
    band_b_option: 'Диапазон "B"',
    band_e_option: 'Диапазон "E"',
    band_f_option: 'Диапазон "F"',
    band_r_option: 'Диапазон "R"',
    band_6_option: "‼️ Диапазон #6 в таблице частот",
    band_7_option: "‼️ Диапазон #7 в таблице частот",
    band_8_option: "‼️ Диапазон #8 в таблице частот",

    channel_state_1: "1й канал",
    channel_state_2: "2й канал",
    channel_state_3: "3й канал",
    channel_state_4: "4й канал",
    channel_state_5: "5й канал",
    channel_state_6: "6й канал",
    channel_0_option: "Не менять канал",
    channel_1_option: "Канал 1",
    channel_2_option: "Канал 2",
    channel_3_option: "Канал 3",
    channel_4_option: "Канал 4",
    channel_5_option: "Канал 5",
    channel_6_option: "Канал 6",
    channel_7_option: "Канал 7",
    channel_8_option: "Канал 8",

    band_select_tooltip:
      "Канал AUX 3-х позиционного переключателя с помощью которого будет изменяться диапазон. Нельзя выбрать AUX который уже задействован для управления мощностью VTX. Не имеет стандартного значения, обязательно надо выбрать вручную для продолжения работы.",
    band_state_1_tooltip:
      "Диапазон, который будет активирован для первого положения переключателя (вверх). Ниже вы можете изменить лимиты для определения этого положения. Внимание, диапазоны 6-8 могут не поддерживаться вашим VTX. Выбирайте только если вы уверены, что они есть.",
    band_state_2_tooltip:
      "Диапазон, который будет активирован для второго положения переключателя (по центру). Ниже вы можете изменить лимиты для определения этого положения. Внимание, диапазоны 6-8 могут не поддерживаться вашим VTX. Выбирайте только если вы уверены, что они есть.",
    band_state_3_tooltip:
      "Диапазон, который будет активирован для для третьего положения переключателя (вниз). Ниже вы можете изменить лимиты для определения этого положения. Внимание, диапазоны 6-8 могут не поддерживаться вашим VTX. Выбирайте только если вы уверены, что они есть.",

    band_state_4_tooltip:
      "Диапазон, который будет активирован для для четвертого положения переключателя. Ниже вы можете изменить лимиты для определения этого положения. Внимание, диапазоны 6-8 могут не поддерживаться вашим VTX. Выбирайте только если вы уверены, что они есть.",
    band_state_5_tooltip:
      "Диапазон, который будет активирован для для пятого положения переключателя. Ниже вы можете изменить лимиты для определения этого положения. Внимание, диапазоны 6-8 могут не поддерживаться вашим VTX. Выбирайте только если вы уверены, что они есть.",
    band_state_6_tooltip:
      "Диапазон, который будет активирован для для шестого положения переключателя. Ниже вы можете изменить лимиты для определения этого положения. Внимание, диапазоны 6-8 могут не поддерживаться вашим VTX. Выбирайте только если вы уверены, что они есть.",

    channel_state_1_tooltip:
      "Канал, который будет активирован для первого положения переключателя (вверх). Ниже вы можете изменить лимиты для определения этого положения.",
    channel_state_2_tooltip:
      "Канал, который будет активирован для второго положення переключателя (по центру). Ниже вы можете изменить лимиты для определения этого положения.",
    channel_state_3_tooltip:
      "Канал, который будет активирован для третьего положення переключателя (вниз). Ниже вы можете изменить лимиты для определения этого положения.",

    channel_state_4_tooltip:
      "Канал, который будет активирован для четвертого положення переключателя. Ниже вы можете изменить лимиты для определения этого положения.",
    channel_state_5_tooltip:
      "Канал, который будет активирован для пятого положення переключателя. Ниже вы можете изменить лимиты для определения этого положения.",
    channel_state_6_tooltip:
      "Канал, который будет активирован для шестого положення переключателя. Ниже вы можете изменить лимиты для определения этого положения.",

    //CH
    ch_title: "Калькулятор распределения каналов",
    ch_band: "Диапазон",
    ch_channel: "Канал",
    ch_pilots: "Количество пилотов",
    ch_selected: "Выбранные каналы:",

    ch_pilots_tooltip:
      "Выберите количество пилотов которые планируют летать одновременно",

    ch_1_pilot_option: "1 пилот",
    ch_2_pilots_option: "2 пилота",
    ch_3_pilots_option: "3 пилота",
    ch_4_pilots_option: "4 пилота",
    ch_5_pilots_option: "5 пилотов",
    ch_6_pilots_option: "6 пилотов",

    ch_includeXBand: "Добавить X-диапазон",
    ch_includeLBand: "Добавить L-диапазон",
    ch_calculateChannelsButton: "Рассчитать каналы",
    ch_descr: `Утилита, которая помогает «поделить» каналы между несколькими пилотами при одновременном полете. Используя заданный видеоканал ищет максимально дальние (по частоте) каналы. Также, скрипт пытается подобрать максимально далекие друг от друга каналы`,
    ch_selected_toast: "Этот канал уже добавлен",
    ch_max_toast: "Вручную можно добавить максимум 5 каналов",

    //ANT
    ant_title: "Поиск канала по частоте",
    ant_freq: "Частота (МГц)",
    ant_freq_start: "Старт (МГц)",
    ant_freq_end: "Финиш (МГц)",
    ant_ch_count: "Количество каналов",
    ant_descr:
      "Позволяет найти максимально производительный видеоканал для конкретной антенны, зная на какой частоте, или в каком диапазоне у нее наилучший КСВ (Коэффициент Стоячей Волны). Если вы замеряете этот параметр и сортируете антенны по нему, то данная утилита поможет вам ускорить этот процесс",

    ant_freq_start_tooltip: "Введите стартовую частоту",
    ant_freq_end_tooltip: "Введите конечную частоту для поиска по конкретному диапазону, или оставьте пустым",

    //LOGO
    logo_title: "Конвертер логотипа для OSD",
    logo_descr:
      "Простой инструмент для конвертации почти любого изображения в размер и формат который, подходит для использования на экране загрузки Betaflight. Имеет примитивный редактор результата для незначительных корректировок",
    logo_paste_line1: "Нажмите здесь, или вставьте",
    logo_paste_line2: "изображение из буфера обмена",
    logo_title: "Конвертер логотипа для OSD",
    logo_satur: "Насыщенность",
    logo_contr: "Контраст",
    logo_scale: "Масштаб просмотра",
    logo_orig_option: "Оригинал",
    logo_px_color: "Цвет пикселя:",
    logo_px_size: "Размер пикселя:",
    logo_reset: "Отменить изменения",
    logo_download: "Загрузить BMP",

    //HRM
    hrm_calculate_button: "Рассчитать",
    hrm_channel_width: "Ширина канала (MHz)",
    hrm_control_frq: "Центральная частота (MHz)",
    hrm_start_frq: "Начальная частота (MHz)",
    hrm_end_frq: "Конечная частота (MHz)",
    hrm_title: "Калькулятор гармоник",
    hrm_harmonic: "Гармоника",
    hrm_no_result: "Гармоника не найдена",
    hrm_tab_affected: "Каналы с гармониками",
    hrm_tab_unaffected: `«Чистые» каналы`,

    hrm_control_tooltip:
      "Центральная частота управления на которой взаимодействуют TX и RX. Например 915, 868 или 433 МГц",
    hrm_channel_width_tooltip:
      "Ширина канала управления между TX и RX. Для нестандартных частот часто используют 30 МГц, но это значение может быть уникальным для каждой прошивки. Например для FCC915 это 23.4 МГц (903.500 - 926.900)",
    hrm_start_frq_tooltip:
      "Начальная частота диапазона. Например 903.500 МГц для FCC915",
    hrm_end_frq_tooltip:
      "Конечная частота диапазона. Например 926.900 МГц для FCC915",
    hrm_descr:
      "Эта утилита поможет вам найти видеоканалы, на которые могут негативно повлиять гармоники от излучения передатчика управления",

    //FRN
    frn_title: "Калькулятор зоны Френеля",
    frn_descr:
      "Помогает определить оптимальное, минимальное и критическое расстояние от центра линии прямой видимости между антеннами до первых препятствий под этой условной линией. Если сказать проще - найдите минимальную высоту которая обеспечит линию прямой видимости и добавьте рассчитанное количество метров",
    frn_frq: "Частота (МГц)",
    frn_distance: "Дистанция (Км)",
    frn_zone1: "Первая зона: ",
    frn_zone80: "80% зона: ",
    frn_zone60: "60% зона: ",

    frn_frequency_tooltip: "TBD",
    frn_distance_tooltip: "TBD",
  },
}

function setLanguage(language) {
  localStorage.setItem("language", language)
  translatePage(language)
  updateLanguageSelector(language)
}

function getBrowserLanguage() {
  const language = navigator.language || navigator.userLanguage
  return language.startsWith("ru") ? "ru" : "en"
}

function translatePage(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    element.textContent = translations[language][key] || element.textContent
  })
  document.querySelectorAll("option[data-i18n]").forEach((option) => {
    const key = option.getAttribute("data-i18n")
    option.textContent = translations[language][key] || option.textContent
  })
}

function updateLanguageSelector(language) {
  document.getElementById("lang-en").classList.remove("active")
  document.getElementById("lang-ru").classList.remove("active")
  document.getElementById(`lang-${language}`).classList.add("active")
}

document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem("language")
  const language = storedLanguage || getBrowserLanguage()
  setLanguage(language)
})

function getTranslation(key) {
  const language = localStorage.getItem("language") || "en"
  return translations[language][key] || key
}
