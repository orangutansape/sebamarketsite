const CONTACT_EMAIL = "encinas.leonel@gmail.com";

const products = [
  {
    id: "nintendo-new-3ds-xl",
    name: "Nintendo New 3DS XL Standard — Negro metálico",
    category: "Gaming",
    price: 650000,
    image: "./assets/images/nintendo-new-3ds-xl.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-2080439513-nintendo-new-3ds-xl-standard-color-negro-metalico-negro-metalico-_JM",
    description: "Consola portátil New Nintendo 3DS XL en edición Standard y color negro metálico. Incorpora controles adicionales como C Stick y botones ZL/ZR, pantalla táctil inferior y compatibilidad con la biblioteca de Nintendo 3DS y Nintendo DS.",
    specs: [
      "Formato portátil con doble pantalla y pantalla táctil inferior.",
      "Controles C Stick y botones ZL/ZR para juegos compatibles.",
      "Compatible con tarjetas microSD/microSDHC y conectividad Wi‑Fi.",
      "La familia Nintendo 3DS ya no se fabrica; consultar estado y accesorios en la publicación."
    ]
  },
  {
    id: "zoom-g1u",
    name: "Zoom G1u — Pedalera multiefectos USB",
    category: "Música",
    price: 300000,
    image: "./assets/images/zoom-g1u.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-1972311641-zoom-g1u-pedalera-multiefectos-efectos-usb-negro-_JM",
    description: "Pedalera multiefectos para guitarra con interfaz de audio USB. Integra modelado de amplificadores y efectos, afinador, patrones rítmicos y función de looping para práctica, grabación y uso en vivo.",
    specs: [
      "Interfaz de audio por USB para conexión a computadora.",
      "Múltiples modelos de amplificación, distorsiones y efectos.",
      "Afinador cromático, ritmos integrados y función de loop.",
      "Puede funcionar con adaptador, pilas o alimentación USB según configuración."
    ]
  },
  {
    id: "korg-volca-sample",
    name: "Korg Volca Sample — Sampler portátil MIDI",
    category: "Música",
    price: 300000,
    image: "./assets/images/korg-volca-sample.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-3762434164-korg-volca-sample-sampler-portatil-midi-digital-blanco-_JM",
    description: "Sampler y secuenciador compacto de la serie Volca. Permite trabajar con muestras PCM, crear patrones de 10 partes y secuencias de 16 pasos, con efectos, sincronización y entrada MIDI.",
    specs: [
      "100 ubicaciones de samples reemplazables por el usuario.",
      "Secuenciador de 10 partes y 16 pasos.",
      "Polifonía máxima de 8 voces.",
      "MIDI IN, Sync In/Out y salida de auriculares de 3,5 mm."
    ]
  },
  {
    id: "huion-h640p",
    name: "Huion Inspiroy H640P — Tableta gráfica",
    category: "Tecnología",
    price: 85000,
    image: "./assets/images/huion-h640p.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-2092021175-tableta-grafica-huion-inspiroy-h640p-con-lapiz-y-cable-negro-_JM",
    description: "Tableta gráfica compacta con lápiz digital sin batería, seis teclas programables y conexión Micro USB. Pensada para dibujo, edición, ilustración y trabajo creativo en computadora o dispositivos compatibles.",
    specs: [
      "Área de trabajo de 160 × 100 mm.",
      "8192 niveles de sensibilidad a la presión.",
      "Lápiz PW100 con tecnología electromagnética sin batería.",
      "6 teclas programables y compatibilidad con Windows, macOS, Android y Linux."
    ]
  },
  {
    id: "novation-launchpad-mini",
    name: "Novation Launchpad Mini — Controlador MIDI USB",
    category: "Música",
    price: 135000,
    image: "./assets/images/novation-launchpad-mini.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-2080401741-controlador-pad-usb-novation-launchpad-mini-negro-_JM",
    description: "Controlador MIDI compacto Novation Launchpad Mini con matriz de 8 × 8 pads, pensado para disparar clips, escenas y controles de sesión. La unidad de las fotos incluye su cable USB naranja y está orientada especialmente al uso con Ableton Live.",
    specs: [
      "Matriz de 64 pads en formato 8 × 8.",
      "Conexión y alimentación por USB.",
      "Botones dedicados de navegación y control de sesión/mixer.",
      "Unidad fotografiada con cable USB; compatible con flujos MIDI y Ableton Live según versión/software."
    ]
  },
  {
    id: "ovnidrum-9-notas",
    name: "OVNI Drum plateado — 9 notas",
    category: "Música",
    price: 620000,
    image: "./assets/images/ovnidrum-9-notas.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-2110533193-ovnidrum-plateado-9-notas-steel-drum-plateado-_JM",
    description: "Steel tongue drum melódico de 9 notas en terminación plateada. Puede tocarse con las manos o con baquetas de goma y está pensado para interpretación intuitiva, relajación, improvisación y exploración armónica.",
    specs: [
      "Modelo clásico de 9 notas.",
      "Aproximadamente 32 cm de diámetro y 15 cm de alto.",
      "Se toca con manos o baquetas de goma.",
      "Instrumento acústico de lengüetas metálicas."
    ]
  },
  {
    id: "arturia-drumbrute-impact",
    name: "Arturia DrumBrute Impact — Caja de ritmos analógica",
    category: "Música",
    price: 500000,
    image: "./assets/images/arturia-drumbrute-impact.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-3762433002-caja-de-ritmos-analoga-drumbrute-impact-arturia-drumbrute-negro-_JM",
    description: "Caja de ritmos analógica orientada a secuenciación y performance. Ofrece 10 sonidos analógicos, patrones de hasta 64 pasos, polirritmia, swing, variación aleatoria y distorsión de salida.",
    specs: [
      "10 sonidos de percusión analógicos.",
      "64 patrones de hasta 64 pasos cada uno.",
      "Polirritmia, swing, randomización y Pattern Looper.",
      "USB MIDI, MIDI y opciones de sincronización por clock."
    ]
  },
  {
    id: "korg-microkorg-mk1",
    name: "Korg microKORG MK1 — Sintetizador + vocoder",
    category: "Música",
    price: 700000,
    image: "./assets/images/korg-microkorg-mk1.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-3762180898-korg-microkorg-mk1-sintetizador-modelado-analogico-vocoder-_JM",
    description: "Sintetizador de modelado analógico con vocoder, teclado compacto de 37 mini teclas y controles en tiempo real. Un formato portátil con programas de fábrica, arpegiador, efectos y conectividad MIDI.",
    specs: [
      "Síntesis de modelado analógico y vocoder de 8 canales.",
      "37 mini teclas con velocidad y polifonía de 4 voces.",
      "128 programas, efectos y arpegiador de 6 tipos.",
      "MIDI IN/OUT/THRU, entradas de audio y salidas L/R + auriculares."
    ]
  },
  {
    id: "lote-cassettes",
    name: "Lote de cassettes usados",
    category: "Coleccionables",
    price: 140000,
    image: "./assets/images/lote-cassettes.webp",
    ml: "https://articulo.mercadolibre.com.ar/MLA-3915366764-lote-de-cassettes-usados-azul-marino-_JM",
    description: "Lote de cassettes usados vendido en conjunto. Ideal para colección, archivo, escucha o proyectos con formato analógico. Consultá por el detalle de títulos, estado y contenido del lote.",
    specs: [
      "Venta en lote.",
      "Formato cassette de audio.",
      "Producto usado.",
      "Consultar por títulos individuales, estado y cualquier detalle no visible en la publicación."
    ]
  },
  {
    id: "roland-sp-404a",
    name: "Roland SP-404A — Sampler y procesador de efectos",
    category: "Música",
    price: 850000,
    image: "./assets/photos/roland-sp-404a-01.webp",
    description: "Sampler portátil Roland SP-404A, un clásico del beatmaking y el lo-fi. Grabá desde línea o el micrófono incorporado, disparalo desde 12 pads, armá patrones con el secuenciador y procesá todo con su amplia lista de efectos en tiempo real.",
    specs: [
      "12 pads + Sub Pad y Hold, con 10 bancos de samples (A–J).",
      "Secuenciador de patrones, resampleo y edición de samples (start/end, BPM).",
      "Efectos en tiempo real: filtro + drive, isolator, delay, voice trans, DJFX looper y más de 20 MFX.",
      "Micrófono incorporado, entrada de mic, Line In/Out RCA, MIDI IN y salida de auriculares.",
      "Almacenamiento en tarjeta SD/SDHC. Alimentación con adaptador Roland PSB-1U."
    ]
  },
  {
    id: "cort-kx100",
    name: "Cort KX100 — Guitarra eléctrica azul metalizado",
    category: "Música",
    price: 600000,
    image: "./assets/photos/cort-kx100-02.webp",
    description: "Guitarra eléctrica Cort KX100 de 6 cuerdas, en terminación azul metalizado. Doble humbucker y puente fijo para un sonido potente y una afinación estable; ideal para rock y metal, y para quien busca una buena primera eléctrica.",
    specs: [
      "Configuración HH: dos micrófonos humbucker.",
      "Puente fijo (hardtail) con cuerdas pasantes.",
      "Controles de volumen y tono con selector de 3 posiciones.",
      "Clavijero 3 + 3 y diapasón oscuro con marcadores de puntos."
    ]
  },
  {
    id: "roland-spd-sx",
    name: "Roland SPD-SX — Pad de percusión con sampler",
    category: "Música",
    price: 1800000,
    image: "./assets/photos/roland-spd-sx-01.webp",
    imageNote: "Foto ilustrativa del modelo. Consultá por fotos reales de la unidad.",
    description: "Pad de percusión electrónica y sampler Roland SPD-SX, el estándar en escenarios para disparar pistas, loops, clicks y sonidos propios con baquetas. Cargá tus samples por USB y tocalos desde 9 pads sensibles a la dinámica. Unidad en perfecto estado; el único detalle es una marca en la pantalla.",
    specs: [
      "Estado: impecable, salvo una marca en la pantalla.",
      "9 pads sensibles a la dinámica.",
      "Memoria interna para tus propios samples, importables por USB.",
      "Efectos master y por pad, con dos perillas de control en tiempo real.",
      "Entradas para pads y pedales externos.",
      "Salidas Master y Sub para mandar pistas y click por separado."
    ]
  },
  {
    id: "nikon-d80",
    name: "Nikon D80 — Réflex digital (solo cuerpo)",
    category: "Fotografía",
    price: 580000,
    image: "./assets/photos/nikon-d80-01.webp",
    description: "Cuerpo de la réflex digital Nikon D80, con correa original. Compatible con lentes Nikon F, ideal para empezar en la fotografía réflex o como segundo cuerpo.",
    specs: [
      "Sensor CCD DX de 10,2 MP.",
      "Pantalla LCD de 2,5\" y visor óptico pentaprisma.",
      "Almacenamiento en tarjeta SD.",
      "Se vende solo el cuerpo, sin lente.",
      "Usada: ver fotos para el estado."
    ]
  },
  {
    id: "canon-powershot-sx510-hs",
    name: "Canon PowerShot SX510 HS — Cámara digital zoom 30x",
    category: "Fotografía",
    price: 500000,
    image: "./assets/photos/canon-powershot-sx510-hs-01.webp",
    description: "Cámara digital Canon PowerShot SX510 HS con zoom óptico de 30x y Wi‑Fi. Formato tipo bridge, fácil de usar, ideal para viajes y fotos de lejos. Incluye cargador.",
    specs: [
      "Sensor CMOS de 12,1 MP.",
      "Zoom óptico 30x (24–720 mm equivalente) con estabilizador.",
      "Wi‑Fi para pasar fotos al celular.",
      "Video Full HD 1080p.",
      "Incluye cargador de batería. Usada: ver fotos para el estado."
    ]
  },
  {
    id: "gopro-hd-hero",
    name: "GoPro HD HERO — Cámara de acción con carcasa",
    category: "Fotografía",
    price: 250000,
    image: "./assets/photos/gopro-hd-hero-01.webp",
    description: "Cámara de acción GoPro HD HERO con carcasa estanca transparente y cables. Para grabar deportes, viajes y aventuras en alta definición.",
    specs: [
      "Video en alta definición hasta 1080p.",
      "Incluye carcasa sumergible transparente.",
      "Incluye cables (ver fotos).",
      "Usada: ver fotos para el estado."
    ]
  },
  {
    id: "yashica-24",
    name: "Yashica-24 — Cámara TLR de formato medio",
    category: "Fotografía",
    price: 745000,
    image: "./assets/photos/yashica-24-01.webp",
    description: "Clásica cámara Yashica-24 de doble objetivo (TLR) para película de formato medio, con imágenes cuadradas de 6×6. Un modelo de colección muy buscado para fotografía analógica.",
    specs: [
      "Cámara réflex de doble objetivo (TLR), formato 6×6.",
      "Lentes Yashinon de 80 mm y obturador Copal-SV.",
      "Visor de capilla plegable y avance con manivela.",
      "Pensada para película de formato medio (rollos 220).",
      "Usada, de colección: ver fotos para el estado."
    ]
  },
  {
    id: "minolta-repo",
    name: "Minolta Repo — Cámara analógica de medio cuadro",
    category: "Fotografía",
    price: 305000,
    image: "./assets/photos/minolta-repo-01.webp",
    description: "Compacta analógica Minolta Repo de medio cuadro: saca el doble de fotos por rollo de 35 mm. Pequeña, liviana y con estética clásica de los años 60.",
    specs: [
      "Formato medio cuadro sobre película de 35 mm (el doble de fotos por rollo).",
      "Cuerpo metálico compacto.",
      "Zapata para flash.",
      "Usada, de colección: ver fotos para el estado."
    ]
  },
  {
    id: "yashica-fx3-super",
    name: "Yashica FX-3 Super + lente 50 mm f/1.9 — Réflex analógica",
    category: "Fotografía",
    price: 245000,
    image: "./assets/photos/yashica-fx3-super-01.webp",
    description: "Réflex analógica Yashica FX-3 Super, totalmente mecánica, con lente Yashica ML 50 mm f/1.9. Una de las mejores cámaras para aprender fotografía en película de 35 mm.",
    specs: [
      "Réflex manual de 35 mm con obturador mecánico.",
      "Fotómetro con indicador LED en el visor.",
      "Lente Yashica ML 50 mm f/1.9.",
      "Usada: ver fotos para el estado."
    ]
  },
  {
    id: "canon-av-1",
    name: "Canon AV-1 + lente zoom — Réflex analógica",
    category: "Fotografía",
    price: 190000,
    image: "./assets/photos/canon-av-1-01.webp",
    description: "Réflex analógica Canon AV-1 de 35 mm con lente zoom. Exposición automática con prioridad de apertura: elegís el diafragma y la cámara calcula la velocidad.",
    specs: [
      "Réflex de 35 mm con montura Canon FD.",
      "Exposición automática con prioridad de apertura.",
      "Se vende con lente zoom (ver fotos).",
      "Usada: ver fotos para el estado."
    ]
  },
  {
    id: "sony-dsc-h5",
    name: "Sony Cyber-shot DSC-H5 — Cámara digital zoom 12x",
    category: "Fotografía",
    price: 145000,
    image: "./assets/photos/sony-dsc-h5-01.webp",
    description: "Cámara digital Sony Cyber-shot DSC-H5 con zoom óptico de 12x Carl Zeiss y estabilizador Super SteadyShot. Formato bridge con visor electrónico y pantalla grande.",
    specs: [
      "Sensor de 7,2 MP.",
      "Zoom óptico 12x Carl Zeiss Vario-Tessar.",
      "Estabilizador óptico Super SteadyShot.",
      "Pantalla LCD de 3\" y visor electrónico.",
      "Funciona con 2 pilas AA. Usada: ver fotos para el estado."
    ]
  },
  {
    id: "olympus-pen-ee2",
    name: "Olympus Pen EE-2 — Cámara analógica de medio cuadro",
    category: "Fotografía",
    price: 120000,
    image: "./assets/photos/olympus-pen-ee2-01.webp",
    description: "Clásica compacta Olympus Pen EE-2 de medio cuadro: el doble de fotos por rollo de 35 mm. Exposición automática y enfoque fijo; sólo apuntás y disparás.",
    specs: [
      "Formato medio cuadro sobre película de 35 mm (hasta 72 fotos por rollo de 36).",
      "Exposición automática con fotómetro de selenio, sin pilas.",
      "Lente D.Zuiko 28 mm f/3.5 de enfoque fijo.",
      "Usada, de colección: ver fotos para el estado."
    ]
  },
  {
    id: "nikon-d7100-80-200-combo",
    name: "Combo Nikon D7100 + 18-105 mm VR + AF 80-200 mm f/2.8D ED",
    category: "Fotografía",
    price: 2200000,
    image: "./assets/photos/nikon-d7100-80-200-combo-01.webp",
    description: "Equipo completo: réflex Nikon D7100 con su lente 18-105 mm VR, más el teleobjetivo profesional AF Nikkor 80-200 mm f/2.8D ED con su estuche rígido. Comprando el combo ahorrás frente a llevarlos por separado.",
    specs: [
      "Nikon D7100: sensor DX de 24,1 MP, 51 puntos de enfoque y video Full HD.",
      "Lente Nikkor AF-S DX 18-105 mm con estabilizador VR.",
      "Teleobjetivo AF Nikkor 80-200 mm f/2.8D ED con estuche rígido Nikon.",
      "El teleobjetivo 80-200 mm también se vende por separado.",
      "Usados: ver fotos para el estado."
    ]
  },
  {
    id: "nikon-af-80-200-f28d",
    name: "Nikon AF Nikkor 80-200 mm f/2.8D ED — Teleobjetivo",
    category: "Fotografía",
    price: 1420000,
    image: "./assets/photos/nikon-af-80-200-f28d-01.webp",
    description: "Teleobjetivo profesional Nikon AF Nikkor 80-200 mm f/2.8D ED, con apertura constante f/2.8 en todo el zoom. Ideal para retratos, deportes y eventos. Incluye estuche rígido original Nikon.",
    specs: [
      "Zoom 80-200 mm con apertura constante f/2.8.",
      "Cristal ED para menos aberraciones y mejor nitidez.",
      "Versión de doble anillo (zoom y enfoque separados), con collar para trípode.",
      "Montura Nikon F: funciona con autofoco en cámaras con motor en el cuerpo (D7100, D80 y similares).",
      "Incluye tapas y estuche rígido Nikon. Usado: ver fotos para el estado."
    ]
  },
  {
    id: "vivitar-grip-d7100",
    name: "Grip de batería Vivitar VIV-PG-D7100 para Nikon D7100",
    category: "Fotografía",
    price: 112000,
    image: "./assets/photos/vivitar-grip-d7100-01.webp",
    description: "Empuñadura de batería Vivitar para Nikon D7100: más autonomía y un disparador vertical para fotos en formato retrato.",
    specs: [
      "Compatible con Nikon D7100 (equivalente al MB-D15).",
      "Disparador y diales para uso vertical.",
      "Usa baterías EN-EL15.",
      "Usado: ver fotos para el estado."
    ]
  },
  {
    id: "grip-mb-d80",
    name: "Grip de batería MB-D80 para Nikon D80 / D90",
    category: "Fotografía",
    price: 60000,
    image: "./assets/photos/grip-mb-d80-01.webp",
    description: "Empuñadura de batería tipo MB-D80 para Nikon D80 y D90: más autonomía y disparo vertical cómodo.",
    specs: [
      "Compatible con Nikon D80 y D90.",
      "Disparador y diales para uso vertical.",
      "Usa baterías EN-EL3e.",
      "Usado: ver fotos para el estado."
    ]
  },
  {
    id: "cargador-nikon-mh-25",
    name: "Cargador Nikon MH-25 original para baterías EN-EL15",
    category: "Fotografía",
    price: 150000,
    image: "./assets/photos/cargador-nikon-mh-25-01.webp",
    description: "Cargador original Nikon MH-25 para baterías EN-EL15, con su cable. Sirve para D7100, D7000, D7200, D750, D800 y otras cámaras que usan EN-EL15.",
    specs: [
      "Cargador original Nikon modelo MH-25.",
      "Para baterías EN-EL15.",
      "Incluye cable de alimentación.",
      "Usado: ver fotos para el estado."
    ]
  },
  {
    id: "flash-yongnuo-yn460",
    name: "Flash Yongnuo Speedlite YN460",
    category: "Fotografía",
    price: 90000,
    image: "./assets/photos/flash-yongnuo-yn460-01.webp",
    description: "Flash de zapata Yongnuo YN460, simple y potente, con cabezal giratorio para rebotar la luz. Funciona en cámaras con zapata estándar.",
    specs: [
      "Flash manual con 7 niveles de potencia.",
      "Modos esclavo S1 y S2 para usarlo fuera de la cámara.",
      "Cabezal con inclinación y giro.",
      "Funciona con 4 pilas AA. Usado: ver fotos para el estado."
    ]
  },
  {
    id: "flash-osram-s18-servo",
    name: "Flash Osram S18 Servo",
    category: "Fotografía",
    price: 38000,
    image: "./assets/photos/flash-osram-s18-servo-01.webp",
    description: "Flash compacto Osram S18 Servo, un clásico para cámaras analógicas con zapata. Ideal para acompañar cualquiera de las cámaras de película del catálogo.",
    specs: [
      "Flash electrónico compacto de zapata.",
      "Función servo (esclavo) para dispararse con otro flash.",
      "Tabla de distancias en el cuerpo.",
      "Usado, vintage: ver fotos para el estado."
    ]
  },
  {
    id: "lote-filtros-parasoles",
    name: "Lote de filtros, parasoles y tapas para lentes",
    category: "Fotografía",
    price: 45000,
    image: "./assets/photos/lote-filtros-parasoles-01.webp",
    description: "Lote de accesorios para lentes: filtros, parasoles y tapas. Se vende todo junto.",
    specs: [
      "3 filtros (2 transparentes/UV y 1 amarillo para blanco y negro).",
      "Parasoles y aros.",
      "Tapas de lente.",
      "Consultá por los diámetros. Usados: ver fotos para el estado."
    ]
  },
  {
    id: "estuche-lente-sigma",
    name: "Estuche para lente Sigma",
    category: "Fotografía",
    price: 21000,
    image: "./assets/photos/estuche-lente-sigma-01.webp",
    description: "Estuche acolchado Sigma para lente, con cierre y tapa. Protege lentes medianos en el bolso o la mochila.",
    specs: [
      "Estuche original Sigma.",
      "Interior acolchado y tapa con cierre.",
      "Para lentes de tamaño mediano.",
      "Usado: ver fotos para el estado."
    ]
  }
];

const galleryPhotos = {
  "nikon-d7100-80-200-combo": [
    "./assets/photos/nikon-d7100-80-200-combo-01.webp",
    "./assets/photos/nikon-d7100-80-200-combo-02.webp",
    "./assets/photos/nikon-d7100-80-200-combo-03.webp",
    "./assets/photos/nikon-d7100-80-200-combo-04.webp",
    "./assets/photos/nikon-d7100-80-200-combo-05.webp",
    "./assets/photos/nikon-d7100-80-200-combo-06.webp"
  ],
  "nikon-af-80-200-f28d": [
    "./assets/photos/nikon-af-80-200-f28d-01.webp",
    "./assets/photos/nikon-af-80-200-f28d-02.webp",
    "./assets/photos/nikon-af-80-200-f28d-03.webp",
    "./assets/photos/nikon-af-80-200-f28d-04.webp",
    "./assets/photos/nikon-af-80-200-f28d-05.webp",
    "./assets/photos/nikon-af-80-200-f28d-06.webp",
    "./assets/photos/nikon-af-80-200-f28d-07.webp",
    "./assets/photos/nikon-af-80-200-f28d-08.webp",
    "./assets/photos/nikon-af-80-200-f28d-09.webp",
    "./assets/photos/nikon-af-80-200-f28d-10.webp"
  ],
  "vivitar-grip-d7100": [
    "./assets/photos/vivitar-grip-d7100-01.webp",
    "./assets/photos/vivitar-grip-d7100-02.webp",
    "./assets/photos/vivitar-grip-d7100-03.webp",
    "./assets/photos/vivitar-grip-d7100-04.webp",
    "./assets/photos/vivitar-grip-d7100-05.webp",
    "./assets/photos/vivitar-grip-d7100-06.webp"
  ],
  "grip-mb-d80": [
    "./assets/photos/grip-mb-d80-01.webp",
    "./assets/photos/grip-mb-d80-02.webp",
    "./assets/photos/grip-mb-d80-03.webp",
    "./assets/photos/grip-mb-d80-04.webp"
  ],
  "cargador-nikon-mh-25": [
    "./assets/photos/cargador-nikon-mh-25-01.webp"
  ],
  "flash-yongnuo-yn460": [
    "./assets/photos/flash-yongnuo-yn460-01.webp",
    "./assets/photos/flash-yongnuo-yn460-02.webp"
  ],
  "flash-osram-s18-servo": [
    "./assets/photos/flash-osram-s18-servo-01.webp",
    "./assets/photos/flash-osram-s18-servo-02.webp",
    "./assets/photos/flash-osram-s18-servo-03.webp",
    "./assets/photos/flash-osram-s18-servo-04.webp"
  ],
  "lote-filtros-parasoles": [
    "./assets/photos/lote-filtros-parasoles-01.webp"
  ],
  "estuche-lente-sigma": [
    "./assets/photos/estuche-lente-sigma-01.webp",
    "./assets/photos/estuche-lente-sigma-02.webp",
    "./assets/photos/estuche-lente-sigma-03.webp"
  ],
  "nikon-d80": [
    "./assets/photos/nikon-d80-01.webp",
    "./assets/photos/nikon-d80-02.webp",
    "./assets/photos/nikon-d80-03.webp",
    "./assets/photos/nikon-d80-04.webp",
    "./assets/photos/nikon-d80-05.webp"
  ],
  "canon-powershot-sx510-hs": [
    "./assets/photos/canon-powershot-sx510-hs-01.webp",
    "./assets/photos/canon-powershot-sx510-hs-02.webp",
    "./assets/photos/canon-powershot-sx510-hs-03.webp"
  ],
  "gopro-hd-hero": [
    "./assets/photos/gopro-hd-hero-01.webp",
    "./assets/photos/gopro-hd-hero-02.webp"
  ],
  "yashica-24": [
    "./assets/photos/yashica-24-01.webp",
    "./assets/photos/yashica-24-02.webp",
    "./assets/photos/yashica-24-03.webp",
    "./assets/photos/yashica-24-04.webp",
    "./assets/photos/yashica-24-05.webp",
    "./assets/photos/yashica-24-06.webp",
    "./assets/photos/yashica-24-07.webp",
    "./assets/photos/yashica-24-08.webp"
  ],
  "minolta-repo": [
    "./assets/photos/minolta-repo-01.webp",
    "./assets/photos/minolta-repo-02.webp",
    "./assets/photos/minolta-repo-03.webp",
    "./assets/photos/minolta-repo-04.webp"
  ],
  "yashica-fx3-super": [
    "./assets/photos/yashica-fx3-super-01.webp",
    "./assets/photos/yashica-fx3-super-02.webp",
    "./assets/photos/yashica-fx3-super-03.webp",
    "./assets/photos/yashica-fx3-super-04.webp"
  ],
  "canon-av-1": [
    "./assets/photos/canon-av-1-01.webp",
    "./assets/photos/canon-av-1-02.webp",
    "./assets/photos/canon-av-1-03.webp",
    "./assets/photos/canon-av-1-04.webp",
    "./assets/photos/canon-av-1-05.webp"
  ],
  "sony-dsc-h5": [
    "./assets/photos/sony-dsc-h5-01.webp",
    "./assets/photos/sony-dsc-h5-02.webp",
    "./assets/photos/sony-dsc-h5-03.webp",
    "./assets/photos/sony-dsc-h5-04.webp",
    "./assets/photos/sony-dsc-h5-05.webp"
  ],
  "olympus-pen-ee2": [
    "./assets/photos/olympus-pen-ee2-01.webp",
    "./assets/photos/olympus-pen-ee2-02.webp",
    "./assets/photos/olympus-pen-ee2-03.webp"
  ],
  "roland-sp-404a": [
    "./assets/photos/roland-sp-404a-01.webp",
    "./assets/photos/roland-sp-404a-02.webp",
    "./assets/photos/roland-sp-404a-03.webp"
  ],
  "cort-kx100": [
    "./assets/photos/cort-kx100-02.webp",
    "./assets/photos/cort-kx100-01.webp",
    "./assets/photos/cort-kx100-03.webp",
    "./assets/photos/cort-kx100-04.webp"
  ],
  "nintendo-new-3ds-xl": [
    "./assets/photos/nintendo-new-3ds-xl-01.webp",
    "./assets/photos/nintendo-new-3ds-xl-02.webp",
    "./assets/photos/nintendo-new-3ds-xl-03.webp",
    "./assets/photos/nintendo-new-3ds-xl-04.webp",
    "./assets/photos/nintendo-new-3ds-xl-05.webp",
    "./assets/photos/nintendo-new-3ds-xl-06.webp",
    "./assets/photos/nintendo-new-3ds-xl-07.webp",
    "./assets/photos/nintendo-new-3ds-xl-08.webp",
    "./assets/photos/nintendo-new-3ds-xl-09.webp"
  ],
  "zoom-g1u": [
    "./assets/photos/zoom-g1u-01.webp",
    "./assets/photos/zoom-g1u-02.webp",
    "./assets/photos/zoom-g1u-03.webp",
    "./assets/photos/zoom-g1u-04.webp",
    "./assets/photos/zoom-g1u-05.webp"
  ],
  "korg-volca-sample": [
    "./assets/photos/korg-volca-sample-01.webp",
    "./assets/photos/korg-volca-sample-02.webp",
    "./assets/photos/korg-volca-sample-03.webp",
    "./assets/photos/korg-volca-sample-04.webp",
    "./assets/photos/korg-volca-sample-05.webp",
    "./assets/photos/korg-volca-sample-06.webp",
    "./assets/photos/korg-volca-sample-07.webp",
    "./assets/photos/korg-volca-sample-08.webp"
  ],
  "arturia-drumbrute-impact": [
    "./assets/photos/arturia-drumbrute-impact-01.webp",
    "./assets/photos/arturia-drumbrute-impact-02.webp",
    "./assets/photos/arturia-drumbrute-impact-03.webp",
    "./assets/photos/arturia-drumbrute-impact-04.webp",
    "./assets/photos/arturia-drumbrute-impact-05.webp",
    "./assets/photos/arturia-drumbrute-impact-06.webp",
    "./assets/photos/arturia-drumbrute-impact-07.webp"
  ],
  "korg-microkorg-mk1": [
    "./assets/photos/korg-microkorg-mk1-01.webp",
    "./assets/photos/korg-microkorg-mk1-02.webp",
    "./assets/photos/korg-microkorg-mk1-03.webp",
    "./assets/photos/korg-microkorg-mk1-04.webp",
    "./assets/photos/korg-microkorg-mk1-05.webp",
    "./assets/photos/korg-microkorg-mk1-06.webp"
  ],
  "ovnidrum-9-notas": [
    "./assets/photos/ovnidrum-9-notas-01.webp",
    "./assets/photos/ovnidrum-9-notas-02.webp",
    "./assets/photos/ovnidrum-9-notas-03.webp",
    "./assets/photos/ovnidrum-9-notas-04.webp",
    "./assets/photos/ovnidrum-9-notas-05.webp",
    "./assets/photos/ovnidrum-9-notas-06.webp",
    "./assets/photos/ovnidrum-9-notas-07.webp"
  ],
  "novation-launchpad-mini": [
    "./assets/photos/novation-launchpad-mini-01.webp",
    "./assets/photos/novation-launchpad-mini-02.webp",
    "./assets/photos/novation-launchpad-mini-03.webp",
    "./assets/photos/novation-launchpad-mini-04.webp"
  ],
  "huion-h640p": [
    "./assets/photos/huion-h640p-01.webp",
    "./assets/photos/huion-h640p-02.webp",
    "./assets/photos/huion-h640p-03.webp",
    "./assets/photos/huion-h640p-04.webp",
    "./assets/photos/huion-h640p-05.webp"
  ],
  "lote-cassettes": [
    "./assets/photos/lote-cassettes-01.webp",
    "./assets/photos/lote-cassettes-02.webp",
    "./assets/photos/lote-cassettes-03.webp",
    "./assets/photos/lote-cassettes-04.webp",
    "./assets/photos/lote-cassettes-05.webp"
  ]
};

products.forEach(product => {
  const uploadedPhotos = galleryPhotos[product.id];
  product.images = uploadedPhotos?.length ? uploadedPhotos : [product.image];
  product.image = product.images[0];
  // "Marca Modelo — Tipo de producto" → título corto + subtítulo para que la tarjeta se lea de un vistazo.
  const [title, ...rest] = product.name.split(" — ");
  product.title = title;
  product.subtitle = rest.join(" — ");
});

const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0
});

const state = {
  query: "",
  category: "Todos",
  sort: "featured"
};

const productGrid = document.querySelector("#productGrid");
const resultsCount = document.querySelector("#resultsCount");
const filtersRoot = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const emptyState = document.querySelector("#emptyState");
const resetFilters = document.querySelector("#resetFilters");
const dialog = document.querySelector("#productDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");
const themeToggle = document.querySelector("#themeToggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const THEME_KEY = "sebamarket-theme";

function readSavedTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}

function saveTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); } catch {}
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeColorMeta) themeColorMeta.content = theme === "dark" ? "#0b1120" : "#ffffff";
  if (themeToggle) {
    const dark = theme === "dark";
    themeToggle.setAttribute("aria-label", dark ? "Activar modo claro" : "Activar modo oscuro");
    themeToggle.setAttribute("aria-pressed", String(dark));
  }
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = readSavedTheme();
applyTheme(savedTheme || (systemTheme.matches ? "dark" : "light"));

if (!savedTheme) {
  systemTheme.addEventListener?.("change", event => applyTheme(event.matches ? "dark" : "light"));
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    saveTheme(nextTheme);
    applyTheme(nextTheme);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailHref(product) {
  const subject = encodeURIComponent(`Consulta por ${product.name}`);
  const link = product.ml ? `\n\nLink: ${product.ml}` : "";
  const body = encodeURIComponent(`Hola, quería consultar por el producto “${product.name}” publicado a ${currency.format(product.price)}.${link}\n\nGracias.`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

// Botones de compra: Mercado Libre si hay publicación; si no, la consulta por email pasa a ser la acción principal.
function buyButton(product) {
  return product.ml
    ? `<a class="button button-ml" href="${product.ml}" target="_blank" rel="noopener noreferrer">Comprar en Mercado Libre</a>`
    : `<a class="button button-primary" href="${emailHref(product)}">Consultar para comprar</a>`;
}

function productCard(product) {
  const hasGallery = product.images.length > 1;
  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-media" data-card-gallery data-product-id="${product.id}" data-card-index="0">
        <button class="media-open" type="button" data-open-product="${product.id}" aria-label="Ver fotos y detalles de ${escapeHtml(product.name)}">
          <img data-card-image src="${photoSrc(product.images[0], "medium")}" alt="${escapeHtml(product.name)} — foto 1 de ${product.images.length}" loading="lazy" width="720" height="540" />
        </button>
        <span class="product-category">${escapeHtml(product.category)}</span>
        ${hasGallery ? `
          <button class="card-gallery-nav card-gallery-prev" type="button" data-card-prev aria-label="Foto anterior de ${escapeHtml(product.name)}">‹</button>
          <button class="card-gallery-nav card-gallery-next" type="button" data-card-next aria-label="Foto siguiente de ${escapeHtml(product.name)}">›</button>
          <span class="photo-count" data-card-counter>1 / ${product.images.length}</span>
        ` : ""}
        ${product.imageNote ? `<span class="image-note">Foto ilustrativa</span>` : ""}
      </div>
      <div class="product-body">
        <h3 class="product-title">
          <button type="button" data-open-product="${product.id}">${escapeHtml(product.title)}</button>
        </h3>
        ${product.subtitle ? `<p class="product-subtitle">${escapeHtml(product.subtitle)}</p>` : ""}
        <div class="product-price">${currency.format(product.price)}</div>
        <p class="product-description">${escapeHtml(product.description)}</p>
        <div class="product-actions">
          ${buyButton(product)}
          <div class="product-actions-secondary ${product.ml ? "" : "is-single"}">
            <button class="button button-secondary" type="button" data-open-product="${product.id}">Fotos y detalles</button>
            ${product.ml ? `<a class="button button-secondary" href="${emailHref(product)}">Consultar</a>` : ""}
          </div>
        </div>
      </div>
    </article>
  `;
}

function setCardGalleryImage(media, nextIndex) {
  if (!media) return;
  const product = products.find(item => item.id === media.dataset.productId);
  if (!product || product.images.length < 2) return;

  const total = product.images.length;
  const index = (nextIndex + total) % total;
  media.dataset.cardIndex = String(index);

  const image = media.querySelector("[data-card-image]");
  const counter = media.querySelector("[data-card-counter]");
  if (image) {
    showProgressive(image, photoSrc(product.images[index], "medium"), [photoSrc(product.images[index], "thumb")]);
    image.alt = `${product.name} — foto ${index + 1} de ${total}`;
  }
  if (counter) counter.textContent = `${index + 1} / ${total}`;
  // Adelantar la foto siguiente para que el próximo toque sea instantáneo.
  preload(photoSrc(product.images[(index + 1) % total], "medium"));
  preload(photoSrc(product.images[(index - 1 + total) % total], "medium"));
}

function moveCardGallery(media, delta) {
  const current = Number(media?.dataset.cardIndex || 0);
  setCardGalleryImage(media, current + delta);
}

function renderFilters() {
  const categories = ["Todos", ...new Set(products.map(p => p.category))];
  const countFor = category => category === "Todos"
    ? products.length
    : products.filter(p => p.category === category).length;
  filtersRoot.innerHTML = categories.map(category => `
    <button
      class="filter-chip ${state.category === category ? "is-active" : ""}"
      type="button"
      data-category="${escapeHtml(category)}"
      aria-pressed="${state.category === category}"
    >${escapeHtml(category)} <span class="chip-count">${countFor(category)}</span></button>
  `).join("");
}

function normalized(text) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function filteredProducts() {
  const q = normalized(state.query.trim());
  let list = products.filter(product => {
    const matchesCategory = state.category === "Todos" || product.category === state.category;
    const haystack = normalized(`${product.name} ${product.category} ${product.description} ${product.specs.join(" ")}`);
    const matchesQuery = !q || haystack.includes(q);
    return matchesCategory && matchesQuery;
  });

  if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "es"));
  return list;
}

function renderProducts() {
  const list = filteredProducts();
  productGrid.innerHTML = list.map(productCard).join("");
  observeCards();
  resultsCount.textContent = `${list.length} ${list.length === 1 ? "producto" : "productos"}`;
  emptyState.hidden = list.length !== 0;
}

function renderAll() {
  renderFilters();
  renderProducts();
}

let activeGallery = null;

/* ---------- Carga progresiva de fotos ----------
   Cada foto existe en tres tamaños: thumbs/ (~10 KB), medium/ (~70 KB, tarjetas)
   y el original (galería ampliada). Al cambiar de foto se muestra al instante la
   versión más liviana ya disponible y se reemplaza cuando llega la de mejor calidad. */
const PHOTO_DIRS = { thumb: "/assets/photos/thumbs/", medium: "/assets/photos/medium/", full: "/assets/photos/" };
const loadedPhotos = new Set();
const pendingPhotos = new Map();

function photoSrc(src, size) {
  if (!src.includes("/assets/photos/")) return src;
  return src.replace("/assets/photos/", PHOTO_DIRS[size]);
}

function photoKey(src) {
  return new URL(src, location.href).href;
}

function preload(src) {
  const key = photoKey(src);
  if (loadedPhotos.has(key)) return Promise.resolve();
  if (pendingPhotos.has(key)) return pendingPhotos.get(key);
  const promise = new Promise(resolve => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => { loadedPhotos.add(key); pendingPhotos.delete(key); resolve(); };
    img.onerror = () => { pendingPhotos.delete(key); resolve(); };
    img.src = src;
  });
  pendingPhotos.set(key, promise);
  return promise;
}

function showProgressive(img, src, fallbacks = []) {
  img.dataset.wantSrc = src;
  if (loadedPhotos.has(photoKey(src))) {
    img.src = src;
    img.classList.remove("is-loading");
    return;
  }
  const quick = fallbacks.find(candidate => loadedPhotos.has(photoKey(candidate))) || fallbacks[0];
  if (quick) {
    img.src = quick;
    img.classList.add("is-loading");
  }
  preload(src).then(() => {
    if (img.dataset.wantSrc !== src) return;
    img.src = src;
    img.classList.remove("is-loading");
  });
}

// Registrar las fotos que el navegador ya cargó por su cuenta (img del HTML).
document.addEventListener("load", event => {
  if (event.target instanceof HTMLImageElement && !event.target.classList.contains("is-loading")) {
    loadedPhotos.add(photoKey(event.target.currentSrc || event.target.src));
  }
}, true);

// Cuando una tarjeta entra en pantalla, precargar miniaturas y la segunda foto.
const cardObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    cardObserver.unobserve(entry.target);
    const product = products.find(item => item.id === entry.target.dataset.productId);
    if (!product || product.images.length < 2) continue;
    product.images.forEach(src => preload(photoSrc(src, "thumb")));
    preload(photoSrc(product.images[1], "medium"));
  }
}, { rootMargin: "200px" }) : null;

function observeCards() {
  if (!cardObserver) return;
  productGrid.querySelectorAll("[data-card-gallery]").forEach(media => cardObserver.observe(media));
}


function setGalleryImage(index) {
  if (!activeGallery) return;
  const product = products.find(item => item.id === activeGallery.productId);
  if (!product) return;
  const total = product.images.length;
  activeGallery.index = (index + total) % total;

  const main = dialogContent.querySelector("[data-gallery-main]");
  const counter = dialogContent.querySelector("[data-gallery-counter]");
  if (main) {
    const src = product.images[activeGallery.index];
    showProgressive(main, photoSrc(src, "full"), [photoSrc(src, "medium"), photoSrc(src, "thumb")]);
    main.alt = `${product.name} — foto ${activeGallery.index + 1} de ${total}`;
  }
  if (counter) counter.textContent = `${activeGallery.index + 1} / ${total}`;
  dialogContent.querySelectorAll("[data-gallery-thumb]").forEach((button, i) => {
    button.classList.toggle("is-active", i === activeGallery.index);
    button.setAttribute("aria-current", i === activeGallery.index ? "true" : "false");
  });
  dialogContent.querySelector("[data-gallery-thumb].is-active")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  preload(photoSrc(product.images[(activeGallery.index + 1) % total], "full"));
}

function openProduct(id, { updateHash = true } = {}) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  activeGallery = { productId: id, index: 0 };
  const hasGallery = product.images.length > 1;

  dialogContent.innerHTML = `
    <article class="dialog-product">
      <div class="dialog-gallery" data-gallery-root>
        <div class="dialog-image-wrap">
          <img data-gallery-main src="${photoSrc(product.images[0], "medium")}" alt="${escapeHtml(product.name)} — foto 1 de ${product.images.length}" />
          ${hasGallery ? `
            <button class="gallery-nav gallery-prev" type="button" data-gallery-prev aria-label="Foto anterior">‹</button>
            <button class="gallery-nav gallery-next" type="button" data-gallery-next aria-label="Foto siguiente">›</button>
            <span class="gallery-counter" data-gallery-counter>1 / ${product.images.length}</span>
          ` : ""}
        </div>
        ${hasGallery ? `
          <div class="gallery-thumbs" aria-label="Fotos del producto">
            ${product.images.map((src, index) => `
              <button class="gallery-thumb ${index === 0 ? "is-active" : ""}" type="button" data-gallery-thumb="${index}" aria-label="Ver foto ${index + 1}" aria-current="${index === 0 ? "true" : "false"}">
                <img src="${photoSrc(src, "thumb")}" alt="" loading="lazy" />
              </button>
            `).join("")}
          </div>
        ` : ""}
      </div>
      <div class="dialog-details">
        <span class="product-category product-category-inline">${escapeHtml(product.category)}</span>
        <h2 id="dialogTitle">${escapeHtml(product.title)}</h2>
        ${product.subtitle ? `<p class="dialog-subtitle">${escapeHtml(product.subtitle)}</p>` : ""}
        <div class="dialog-price">${currency.format(product.price)}</div>
        ${product.imageNote ? `<p class="dialog-image-note">${escapeHtml(product.imageNote)}</p>` : ""}
        <div class="dialog-actions ${product.ml ? "" : "is-single"}">
          ${buyButton(product)}
          ${product.ml ? `<a class="button button-secondary" href="${emailHref(product)}">Consultar por email</a>` : ""}
        </div>
        <p class="dialog-description">${escapeHtml(product.description)}</p>
        <h3 class="spec-title">Características</h3>
        <ul class="spec-list">
          ${product.specs.map(spec => `<li>${escapeHtml(spec)}</li>`).join("")}
        </ul>
        <p class="dialog-note">${product.ml ? "El precio y la disponibilidad final se confirman en la publicación de Mercado Libre al momento de la compra." : "Este producto se vende por consulta directa: escribime y coordinamos el pago y la entrega."}</p>
      </div>
    </article>
  `;

  if (updateHash && location.hash !== `#${id}`) history.replaceState(null, "", `#${id}`);
  if (!dialog.open && typeof dialog.showModal === "function") dialog.showModal();
  setGalleryImage(0); // muestra la versión mediana (ya en caché) y sube a la original al cargar
  dialogContent.querySelector(".dialog-details").scrollTop = 0;
  dialog.scrollTop = 0;

  const galleryRoot = dialogContent.querySelector("[data-gallery-root]");
  if (galleryRoot && hasGallery) {
    let touchStartX = null;
    galleryRoot.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse") return;
      touchStartX = event.clientX;
    });
    galleryRoot.addEventListener("pointerup", event => {
      if (touchStartX === null) return;
      const delta = event.clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(delta) < 45) return;
      setGalleryImage(activeGallery.index + (delta < 0 ? 1 : -1));
    });
  }
}

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  renderProducts();
});

sortSelect.addEventListener("change", event => {
  state.sort = event.target.value;
  renderProducts();
});

filtersRoot.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderAll();
});

resetFilters.addEventListener("click", () => {
  state.query = "";
  state.category = "Todos";
  searchInput.value = "";
  renderAll();
});

let suppressNextClick = false;

productGrid.addEventListener("click", event => {
  const previous = event.target.closest("[data-card-prev]");
  const next = event.target.closest("[data-card-next]");
  if (previous || next) {
    const media = event.target.closest("[data-card-gallery]");
    moveCardGallery(media, previous ? -1 : 1);
    return;
  }

  const button = event.target.closest("[data-open-product]");
  if (!button) return;
  if (suppressNextClick) {
    suppressNextClick = false;
    return;
  }
  openProduct(button.dataset.openProduct);
});

let cardSwipe = null;
productGrid.addEventListener("pointerdown", event => {
  suppressNextClick = false;
  if (event.pointerType === "mouse") return;
  const media = event.target.closest("[data-card-gallery]");
  if (!media) return;
  cardSwipe = { media, x: event.clientX };
});
productGrid.addEventListener("pointerup", event => {
  if (!cardSwipe) return;
  const media = event.target.closest("[data-card-gallery]");
  if (!media || media !== cardSwipe.media) {
    cardSwipe = null;
    return;
  }
  const delta = event.clientX - cardSwipe.x;
  cardSwipe = null;
  if (Math.abs(delta) < 45) return;
  // Un deslizamiento cambia la foto; no debe además abrir el detalle.
  suppressNextClick = true;
  moveCardGallery(media, delta < 0 ? 1 : -1);
});

dialogContent.addEventListener("click", event => {
  const thumb = event.target.closest("[data-gallery-thumb]");
  if (thumb) {
    setGalleryImage(Number(thumb.dataset.galleryThumb));
    return;
  }
  if (event.target.closest("[data-gallery-prev]")) {
    setGalleryImage(activeGallery.index - 1);
    return;
  }
  if (event.target.closest("[data-gallery-next]")) {
    setGalleryImage(activeGallery.index + 1);
  }
});

dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  activeGallery = null;
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
});

document.addEventListener("keydown", event => {
  if (!dialog.open || !activeGallery) return;
  if (event.key === "ArrowLeft") setGalleryImage(activeGallery.index - 1);
  if (event.key === "ArrowRight") setGalleryImage(activeGallery.index + 1);
});

// Enlaces directos: sitio/#korg-volca-sample abre ese producto.
function openFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (products.some(product => product.id === id)) openProduct(id, { updateHash: false });
}
window.addEventListener("hashchange", openFromHash);

renderAll();
openFromHash();
