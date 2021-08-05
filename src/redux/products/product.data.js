// este es el bueno
const PRODUCT_DATA = {
  shopcategory: {
    id: 1,
    title: "Shop by Category",
    linkUrl: "shopcategory",
    items: [
      {
        amazonChoice: false,
        bestSeller: true,
        id: 1,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41R16MX-aWL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_SL1500_.jpg",
        price: 7.98,
        rating: 5,
        brand: "Ailun",
        descriptionTitle:
          "Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass",
        fullDescription: [
          `WORKS FOR iPhone 11/iPhone XR (2019/2018 release) 6.1 Inch display ,0.33mm tempered glass screen protector. Featuring maximum protection from scratches, scrapes, and bumps.`,
          `Specialty: Due to the rounded design of the iPhone 11/XR and to enhance compatibility with most cases, the Tempered glass does not cover the entire screen. HD ultra-clear 99.99% touch-screen accurate.`,
          `hydrophobic and oleophobic screen coating protects against sweat and oil residue from fingerprints.`,
          `It is 100% brand new,Precise laser cut tempered glass, exquisitely polished,2.5D rounded edges.`,
          `Online video installation instruction can be found at the last image slot: Easiest Installation - removing dust and aligning it properly before actual installation,no worrying about bubbles,enjoy your screen as if it wasn't there.`,
        ],
        linkUrl: "/1",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 2,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41yn8u3qJPL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71aXzv34N+L._SL1500_.jpg",
        price: 41.99,
        rating: 5,
        brand: "REVLON",
        descriptionTitle:
          "REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary",
        fullDescription: [
          `Style, Dry & Volumize Your Hair in One Step, Max Drying Power with 30% Less Frizz and helps reduce hair damage`,
          `Unique Non-Detachable Oval Brush Design for Smoothing the Hair, while the round edges create volume. Designed with Nylon Pin & Tufted Bristles for detangling, improved volume, and control`,
          `3 Heat/Speed Settings with Cool option for styling flexibility`,
          `Safety First: The Revlon One Step Hair Dryer and Volumizer meets U.S. safety requirements and features the ETL Certification, unit is designed for 120 Volt USA outlets only. DO NOT use a voltage converter or adapter as it will damage the unit`,
          `1100 Watts of Power - Note that wattage of this appliance may vary depending on the location of use`,
          `Volumizer Care: Clean air inlet regularly, remove hair from the brush after every use and do not wrap cord around the unit. To keep bristles in best condition let unit cool before storing`,
        ],
        linkUrl: "/2",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 3,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41ffko0T3kL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg",
        price: 26.79,
        rating: 5,
        brand: "NETGEAR",
        descriptionTitle:
          "NETGEAR Wi-Fi Range Extender EX3700 - Coverage Up to 1000 Sq Ft and 15 Devices with AC750 Dual Band Wireless Signal Booster & Repeater (Up to 750Mbps Speed), and Compact Wall Plug Design",
        fullDescription: [
          `EXTENDED WIRELESS COVERAGE: Adds Wi-Fi range coverage up to 1000 sq ft, and connects up to 15 devices such as laptops, smartphones, speakers, IP cameras, tablets, IoT devices, and more.`,
          `AC750 WI-FI SPEED: Provides up to 750Mbps performance using dual-band and patented FastLane(TM) technology.`,
          `UNIVERSAL COMPATIBILITY: Works with any wireless router, gateway, or cable modem with Wi-Fi.`,
          `WIRED ETHERNET PORT: Simply plug in game consoles, streaming players, or other nearby wired devices using the one 10/100M port for maximum speed.`,
          `SAFE & SECURE: Supports WEP and WPA/WPA2 wireless security protocols.`,
          `SIMPLE TO SETUP: Press the WPS button to connect to your router. Use the NETGEAR WiFi Analyzer app for optimal location.`,
        ],
        linkUrl: "/3",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 4,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41PZtgxSarL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg",
        price: 131.25,
        rating: 5,
        brand: "Elgato",
        descriptionTitle:
          "Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or Late (10GAA9901)",
        fullDescription: [
          `15 LCD keys: Tap to switch scenes, launch media, adjust audio and more`,
          `Fully customizable: Personalize keys with custom icons or choose from hundreds`,
          `Direct integration: Control game capture, OBS, XSplit, TipeeeStream, Twitch, YouTube, Mixer, and more`,
          `Easy setup: Simply drag and drop actions onto keys in the app`,
          `Unlimited control: Nest folders within folders to store as many actions as you want`,
        ],
        linkUrl: "/4",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 5,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg",
        price: 10.99,
        rating: 5,
        brand: "Amazon Basics",
        descriptionTitle:
          "Amazon Basics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack",
        fullDescription: [
          `AAA 1.5-volt performance alkaline batteries; ideal for a variety of devices, including game controllers, toys, flashlights, digital cameras, and clocks`,
          `10-year leak-free shelf life; air- and liquid-tight seal locks in the power until it’s needed thanks to the improved design, which includes dual crimps, a new zinc composition, and anti-corrosion components`,
          `Delivers the amount of power needed for a specific device; ideal for game controllers, toys, flashlights, digital cameras, clocks, and more`,
          `Backed by an Amazon Basics 1-year limited warranty`,
          `Note: these batteries are NOT rechargeable. For reusable options, check out Amazon Basics rechargeable batteries`,
        ],
        linkUrl: "/5",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 6,
        imageUrl:
          "https://m.media-amazon.com/images/I/51YpArlasKL._AC_UY327_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/51YpArlasKL._AC_SL1000_.jpg",
        price: 299.99,
        rating: 5,
        brand: "ViewSonic",
        descriptionTitle:
          "ViewSonic 3800 Lumens SVGA High Brightness Projector for Home and Office with HDMI Vertical Keystone (PA503S) White/gray",
        fullDescription: [
          `Versatile projector: Advanced visual features ideal for use in education and small business environments`,
          `Big screen projection: Projects 120 inches from 15-feet 8-inches in 3800 lumens`,
          `Easy setup: Simple setup and control; just plug & play your presentations, videos, and pictures`,
          `Long lamp life: Super Eco mode allows the lamp to shine bright for up to 15, 000 hours`,
          `Industry-leading : 3-year limited parts and labor coverage, 1-year of lamp coverage, and access to our US-based customer service team`,
          `Flexible connectivity: Supports most media players, PCs, Macs, and mobile devices with input options such as HDMI, VGA, and more`,
          `Included in the box: PA503S SVGA Projector, Power Cable, VGA Cable, and Remote Control`,
          `Compatible devices: DVD players; Blu-ray players; Amazon FireTV; AppleTV; Google Chromecast; Mac Computers; Windows Computers`,
        ],
        linkUrl: "/6",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 7,
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        zoomImage:
          "https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SL1500_.jpg",
        price: 18,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Logitech G Pro Wireless Gaming Mouse with Esports Grade Performance",
        fullDescription: [
          `Made with and for Pro Gamers: G Pro Wireless Gaming Mouse is the result of two years of work with professional esports gamers, combing advanced technologies in an ultra-lightweight design`,
          `Light-speed Wireless: Pro grade performance overcomes the traditional limitations of wireless latency, connectivity and power to deliver a rock solid, super-fast 1 millisecond report rate connection`,
          `Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Logitech's most accurate sensor yet with up to 25,600 DPI and 10X the power efficiency of previous generation for the ultimate in wireless gaming speed, accuracy and responsiveness. Microprocessor: 32-bit ARM`,
          `Ultra-lightweight: Innovative endoskeleton design creates a super-thin yet incredibly strong outer shell, enabling the body to weigh in at a remarkably light and maneuverable 80 grams.`,
          `Ergonomic ambidextrous design: Tournament ready mouse developed with Esports pros for maximum comfort, control and 50 million click durability. Four removable side buttons for supreme customization. Cable length: 1.80 meters`,
          `Note: Kindly refer user guide before use`,
          `1 year hardware limited warranty`,
        ],
        linkUrl: "/7",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 8,
        imageUrl:
          "https://m.media-amazon.com/images/I/71nMzhO05jL._AC_UY327_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71nMzhO05jL._AC_SL1500_.jpg",
        price: 13.29,
        rating: 5,
        brand: "Kasa Smart",
        descriptionTitle:
          "Kasa Smart Light Switch HS200, Single Pole, Needs Neutral Wire, 2.4GHz Wi-Fi Light Switch Works with Alexa and Google Home, UL Certified, No Hub Required , White",
        fullDescription: [
          `Easy guided install: Neutral wire is required, standard wall plate size. No need to understand complex switch wiring or master vs auxiliary switch configurations; The Kasa app guides you through easy step by step installation. Need 2.4GHz Wi-Fi connection`,
          `Control from anywhere: Monitor your light status. Turn electronics on and off from anywhere with your smartphone using the Kasa app, whether you are at home, in the office or on vacation`,
          `Voice control: Enjoy the hands-free convenience of controlling the lights in your home with your voice via Amazon Alexa or Google Assistant; perfect for times when your hands are full or entering a dark room`,
          `Scheduling: Use timer or countdown schedules to set your smart switch to automatically turn on and off while you're home or away. Enable ‘away mode’ to randomly switch on and off to trick potential intruders`,
          `Trusted and reliable: Designed and developed in silicon valley, Kasa is trusted by over 4 million users. UL certified for safety use.`,
        ],
        linkUrl: "/8",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 9,
        imageUrl:
          "https://m.media-amazon.com/images/I/51kxIEmO+ZL._AC_UY327_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/51kxIEmO+ZL._AC_SL1286_.jpg",
        price: 16,
        rating: 5,
        brand: "HyperX",
        descriptionTitle:
          "HyperX Cloud Stinger – Gaming Headset, Lightweight, Comfortable Memory Foam, Swivel to Mute Noise-Cancellation Microphone, Works on PC, PS4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch and Mobile",
        fullDescription: [
          `Lightweight headset (275 gram) with 90-degree rotating ear cups provide a snug fit that conforms to your head`,
          `50 millimeter directional drivers for audio precision — enjoy the full audioscape of your favorite games`,
          `HyperX signature memory foam provides maximum comfort during extended use`,
          `Adjustable steel slider for a solid and long lasting sturdy feel`,
          `Intuitive volume control on headset ear cup`,
          `Swivel-to-mute noise-cancellation microphone so you’ll always know when you’re muted`,
          `Multi-platform compatibility: PC, PS4, Xbox One, Nintendo Switch and more`,
          `Refer user guide on technical specification before use`,
        ],
        linkUrl: "/9",
      },
    ],
  },
  computers: {
    id: 2,
    title: "Computers & Accessories",
    linkUrl: "computers",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 10,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/91K9SyGiyzL._AC_SL1500_.jpg",
        price: 220,
        rating: 5,
        brand: "Acer ",
        descriptionTitle:
          "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black",
        fullDescription: [
          `23.8" Full HD IPS widescreen with 1920 x 1080 resolution`,
          `Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million`,
          `The zero frame design provides maximum visibility of the screen from edge to edge`,
          `Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4`,
          `No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
        ],
        linkUrl: "/10",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 11,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg",
        price: 280,
        rating: 5,
        brand: "Seagate",
        descriptionTitle:
          "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)",
        fullDescription: [
          `Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive`,
          `Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and drop`,
          `To get set up, connect the portable hard drive to a computer for automatic recognition no software required`,
          `This USB drive provides plug and play simplicity with the included 18 inch USB 3.0 cable`,
          `Enjoy long-term peace of mind with the included one-year limited warranty and 1 year rescue data recovery services`,
        ],
        linkUrl: "/11",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 12,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg",
        price: 110,
        rating: 5,
        brand: "Roku",
        descriptionTitle:
          "Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls",
        fullDescription: [
          `Wireless that goes the distance: Basement rec room? Backyard movie night? Bring ‘em on. The long-range wireless receiver gives you extended range and a stronger signal for smooth streaming even in rooms farther from your router`,
          `Brilliant picture quality: Experience your favorite shows with stunning detail and clarity—whether you’re streaming in HD, 4K, or HDR, you’ll enjoy picture quality that’s optimized for your TV with sharp resolution and vivid color`,
          `Tons of power, tons of fun: Snappy and responsive, you’ll stream your favorites with ease—from movies and series on Apple TV, Prime Video, and Netflix, to cable alternatives like Sling, enjoy the most talked-about TV across thousands of channels`,
          `No more juggling remotes: Power up your TV, adjust the volume, mute, and control your streaming all with one remote—use your voice to quickly search across channels, turn captions on, and more in a touch`,
          `Setup is a cinch: Plug it in, connect to the internet, and start streaming—it’s that simple`,
          `Private listening on mobile: Use the free Roku mobile app to pump up the volume on your shows without disturbing the house`,
          `Endless entertainment: Stream what you love, including free TV, live news, sports, and more. It’s easy to stream what you love and cut back on cable bills with access to 500,000+ movies and TV episodes across thousands of free and paid channels`,
        ],
        linkUrl: "/12",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 13,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/518DGurM6TS.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71FMdUhizpS._AC_SL1500_.jpg",
        price: 160,
        rating: 5,
        brand: "HP",
        descriptionTitle:
          "HP 63XL | Ink Cartridge | Works with HP Deskjet 1112, 2100 Series, 3600 Series, HP ENVY 4500 Series, HP OfficeJet 3800 Series, 4600 Series, 5200 Series | Black | F6U64AN",
        fullDescription: [
          `Make sure this fits by entering your model number.`,
          `HP 63 ink cartridges work with: HP Deskjet 1112, 2130, 2132, 3630, 3631, 3632, 3633, 3634, 3636, 3637, 3639`,
          `HP ENVY 4511, 4512, 4513, 4520, 4522, 4523, 4524. HP Officejet 3830, 3831, 3833, 4650, 4652, 4654, 4655, 5220, 5222, 5230, 5232, 5252, 5255, 5258, 5264`,
          `Get up to 2x the pages with Original HP XL ink cartridges compared to standard cartridges`,
          `Cartridge yield (approx.): 480 pages`,
          `Original HP ink cartridges: genuine ink for your HP printer`,
          `What's in the box: 1 New Original HP 63XL ink cartridge (F6U64AN)`,
          `Color: Black`,
          `CHOOSE AN INK REPLENISHMENT SERVICE - Let your printer track usage and have ink delivered before you run out. Either reorder HP Genuine ink cartridges only when you need them through Amazon Dash Replenishment, or save up to 50 percent by paying for pages printed through HP Instant Ink`,
        ],
        linkUrl: "/13",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 14,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41B54aFFMOL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61v+taI5jvL._AC_SL1500_.jpg",
        price: 160,
        rating: 5,
        brand: "Logitech",
        descriptionTitle:
          "Logitech MK270 Wireless Keyboard and Mouse Combo - Keyboard and Mouse Included, Long Battery Life",
        fullDescription: [
          `The USB receiver is conveniently located in the box, top flap`,
          `Work for longer with long battery life: Basic AA and AAA batteries are included with the keyboard and mouse`,
          `Keyboard and mouse combo: The Logitech MK270 Wireless keyboard and mouse combo includes a full size keyboard and a precision mouse so you can work comfortably away from your computer`,
          `Easy storage: The MK270 includes a plug and forget receiver that cleverly stores inside your mouse for safekeeping.`,
          `Programmable hotkeys to boost productivity: Automatically access frequently used applications by programming them to the 8 available hotkeys`,
          `3-year limited hardware warranty.`,
        ],
        linkUrl: "/14",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 15,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/417N4M2ulHL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81axmUuRHrL._AC_SL1500_.jpg",
        price: 160,
        rating: 5,
        brand: "SAMSUNG",
        descriptionTitle:
          "SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME128HA)",
        fullDescription: [
          `IDEAL FOR RECORDING 4K UHD VIDEO: Samsung microSD EVO Select is perfect for high res photos, gaming, music, tablets, laptops, action cameras, DSLR's, drones, smartphones (Galaxy S20 5G, S20 5G, S20 Ultra 5G, S10, S10 , S10e, S9, S9 , Note9, S8, S8 , Note8, S7, S7 Edge, etc. ), Android devices and more`,
          `ULTRA FAST READ WRITE SPEEDS: Up to 100MB S Read and 60MB S Write Speeds; UHS Speed Class U3 and Speed Class 10 (Performance May Vary Based on Host Device, Interface, Usage Conditions, and Other Factors)`,
          `BUILT TO LAST RELIABILITY: Memory Card Is Also Water Proof, Temperature Proof, X Ray Proof and Magnetic Proof`,
          `EXTENDED COMPATIBILITY: Includes Full Size Adapter for Use in Cameras, Laptops and Desktop Computers. Operating Voltage-2.7~3.6V`,
          `10 YEAR LIMITED WARRANTY: 10 Year Limited Does Not Extend to Dashcam , CCTV, Surveillance Camera and Other Write Intensive Uses`,
        ],
        linkUrl: "/15",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 16,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41O4rjSlneL.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/815cRpgAN3L._AC_SL1500_.jpg",
        price: 190,
        rating: 5,
        Brand: "SanDisk",
        descriptionTitle:
          "SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - Up to 160MB/s, C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA",
        fullDescription: [
          `Up to 160MB/s read speeds to save time transferring high res images and 4K UHD videos (2); Requires compatible devices capable of reaching such speeds`,
          `Up to 90MB/s write speeds for fast shooting; Requires compatible devices capable of reaching such speeds`,
          `4K UHD and Full HD Ready with UHS speed class 3 (U3) and video speed class 30 (V30)`,
          `Rated A2 for faster loading and in app performance`,
          `Built for and tested in harsh conditions: Temperature Proof, Water Proof, shock Proof and x ray Proof`,
          `Get the SanDisk memory zone app for easy file management (available on Google Play)`,
          `Order with your Alexa enabled device; Just ask 'Alexa, order SanDisk microSD`,
        ],
        linkUrl: "/16",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 17,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51n0kOAPLZS.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71npy7XGYhS._AC_SL1500_.jpg",
        price: 200,
        rating: 5,
        brand: "HP",
        descriptionTitle:
          "HP 65 | Ink Cartridge | Black | Works with HP DeskJet 2600 Series, 3700 Series, HP ENVY 5000 Series, HP AMP 100, 120, 125, 130 | N9K02AN",
        fullDescription: [
          `Make sure this fits by entering your model number.`,
          `Color: Black`,
          `HP 65 ink cartridges work with: HP DeskJet 2622, 2624, 2636, 2652, 2655, 3722, 3752, 3755, 3758.`,
          `HP ENVY 5010, 5012, 5020, 5030, 5032, 5034, 5055. HP AMP 100, 120, 125, 130.`,
          `Up to 2x more prints with Original HP ink vs refill cartridges.`,
          `HP 65 ink cartridge yield (approx.): 120 pages`,
          `Original HP ink cartridges: genuine ink for your HP printer.`,
          `What's in the box: 1 New Original HP 65 ink cartridge (N9K02AN)`,
          `CHOOSE AN INK REPLENISHMENT SERVICE - Let your printer track usage and have ink delivered before you run out. Either reorder HP Genuine ink cartridges only when you need them through Amazon Dash Replenishment, or save up to 50% by paying for pages printed through HP Instant Ink.`,
        ],
        linkUrl: "/17",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 18,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41jiFUPkV1L.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/51B4dMOp49L._AC_SL1001_.jpg",
        price: 200,
        rating: 5,
        brand: "MBYY",
        descriptionTitle:
          "iPhone Charger,5 Pack (6 FT) MBYY [Apple MFi Certified] Charger Lightning to USB Cable Compatible iPhone 12/11 Pro/11/XS MAX/XR/8/7/6s/6/plus,iPad Pro/Air/Mini,iPod Touch Original Certified-White",
        fullDescription: [
          `【Perftect Performance】 MFi Certified manufacturer brings you new experience-fast charging 2.4A and stable data transfer up to 480 mb/s,UNEN Charger Cable use authorization chip to ensure 100% compatibility with newest iOS syetem.`,
          `【Superior Durability】lighting Cable use Superior Material,which ensure your cable 10x more durable than others,but also flexible and tangle-free.Compact aluminum connector shell head adds to extend service life getting away from the risk of crack or other kind of damage.It is durable Cable Pack who support 10000+ bending times and 10000+ repeated unplugging.`,
          `【Fast Charging】 High-quality four-core copper wires enhance charging & data transfer speed of the iphone charging cables. Built-In MFi Certified Chipset ensures a faster charging time while keeping your device completely safe.`,
          `【Super Compatibility】iPhone charger compatible with iPhone12/11Pro Max/11Pro/11/XS/iPhone Max/iPhone XR/iPhone X/iPhone 8 Plus/iPhone 8/iPhone 7 Plus/iPhone 7/iPhone 6s Plus/iPhone 6s/iPhone 6 Plus/iPhone 6/iPhone 5s/iPhone 5c/iPhone 5/iPad Pro/iPad Air/Air 2/iPad mini/mini 2/mini 4/iPad 4th gen/iPod Touch 5th gen/ iPod.Each lightning cable was updated to match the iphone system.`,
          `【What You Get】5 pack Mfi Certified iPhone charging cables in assorted lengths (6/6/6/6/6 FT).Replace your iPhone accessories cables or add another iPhone cord for home,work or travel.`,
        ],
        linkUrl: "/18",
      },
    ],
  },
  amazonbasics: {
    id: 3,
    title: "AmazonBasics",
    linkUrl: "amazonbasics",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 19,
        descriptionTitle:
          "Amazon Basics Quick-Dry Bath Towels - 100% Cotton, 2-Pack, White",
        imageUrl:
          "https://m.media-amazon.com/images/I/81opUHsjLyL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81opUHsjLyL._AC_SL1500_.jpg",
        price: 21.79,
        rating: 5,
        brand: "",
        fullDescription: [
          `100% Cotton`,
          `Imported`,
          `Bath towel measures 54 by 30 inches`,
          `Made of 100% cotton for softness and tear-resistant strength`,
          `Lightweight; quickly absorbs moisture for a cozy feel; attractive solid color`,
          `Simple band and border detailing adds visual interest whether folded or hanging`,
          `Made in OEKO-TEX Standard 100 factory, an independent certification system that ensures textiles meet high safety and environmental standards.`,
        ],
        linkUrl: "/19",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 20,
        descriptionTitle:
          "Amazon Basics Collapsible Fabric Storage Cubes Organizer with Handles, Gray - Pack of 6",
        imageUrl:
          "https://m.media-amazon.com/images/I/81URbonAYvS._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81URbonAYvS._AC_SL1500_.jpg",
        price: 16.51,
        rating: 5,
        brand: "",
        fullDescription: [
          `Set of 6 cloth storage cubes for organizing and reducing home or office clutter`,
          `Made of stylish, sturdy, breathable fabric with sewn-in, easy-to-grab handles`,
          `Function as open-top bins or as drawers when used with a storage-cube organizer (not included)`,
          `Lightweight and easy to carry; collapsible for compact storage; Grey color`,
          `Backed by an Amazon Basics one-year limited warranty`,
          `Measures: 10.5 x 10.5 x 11 inches (LWH)`,
        ],
        linkUrl: "/20",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 21,
        imageUrl:
          "https://m.media-amazon.com/images/I/91RzwcoSi1S._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/91RzwcoSi1S._AC_SL1500_.jpg",
        price: 39.0,
        rating: 5,
        brand: "",
        descriptionTitle: `Cabana Beach Towel by Laguna Beach Textile Co, Oversized Yellow & Sea Glass Summer Sunbathing and Pool Side Lounge Comfort, Plush Cotton Softness with Colorful Stripes, Large 70” x 35”`,
        fullDescription: [
          `Beautiful Beach and Summer Colors – Each of our cabana towels oversized sizes feature rich, vibrant colored stripes to better match your individual style and come in coral and sea glass, yellow and sea grass, sunset blue orange, and much more.`,
          `Longer Sunbathing Length – At 70” x 35” our towels are longer and wider than your everyday beach towels which makes them easier to relax in your favorite lounge chair, enjoy a nice spot by the pool, or dry off from head to toe more easily.`,
          `Perfect for Every Outing – Our oversized cabana beach towels are designed for people who love the outdoors, which is why they’re easy to keep with you in a large beach tote, in your car for the park, or in your bathrooms.`,
          `Stronger, Reinforced Edges – We added a thicker, more durable border to our large beach towels to help enhance their resilience after multiple day trips and heavy machine washes, so you never have to worry about fraying or loose threads.`,
          `Price and GSM Matter to Quality - Our 630 GSM means 25-50% thicker, plusher, more absorbent and more luxurious than our online competitors. When shopping for towels, price equates to thickness, quality, softness and style. This combined with our satisfaction guarantee, you will not be disappointed.`,
        ],
        linkUrl: "/21",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 22,
        imageUrl:
          "https://m.media-amazon.com/images/I/71AXs1I-HdL._AC_UL480_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71AXs1I-HdL._AC_SL1500_.jpg",
        price: 12.09,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Amazon Basics Legal Pads, Pink, Orchid & Blue Color Paper, 6-Pack",
        fullDescription: [
          `Legal pad with 50 perforated sheets per pad (6-pack, 300 sheets total)`,
          `Each letter-size sheet measures 8.5 by 11 inches (note: this is not legal-size paper)`,
          `Assortment of colors for easy organizing; includes 2 pink, 2 orchid, and 2 blue legal pads`,
          `Wide-ruled lines offer visual guidance when writing; vertical line down the left side creates a designated margin`,
          `Extra-thick backer offers added support during use, plus helps protect the paper when transporting the pad in a backpack or bag`,
        ],
        linkUrl: "/22",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 23,
        imageUrl:
          "https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL480_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_SL1500_.jpg",
        price: 12.99,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000 Bend Lifespan - Dark Gray, 6-",
        fullDescription: [
          `Universal Compatibility: Compatible with the iPhone SE (2nd Gen) / 11 / XS / XS Max / XR / X / 8 Plus / 8 / 7 Plus / 7 / 6s Plus / 6s / 6 Plus / 6 / 5s / 5c / 5 / iPad Pro / iPad Air / Air 2 / iPad mini / mini 2 / mini 4 / iPad 4th gen / iPod Touch 5th gen / iPod nano 7th gen and Beats Pill+`,
          `New & MFi-certified Chipset: This iPhone charging cable uses Apple's original C89 smart chip to recognize and connect to your Apple devices immediately. MFi-certified cables provide a safe and stable charging solution for your devices.`,
          `Incredible Charging Speed: Wide-diameter wires and reduced cord resistance maximize charging speed (supports up to 2.4 amps charging current).`,
          `Added Protection: An additional layer of protection has been added to the Lightning and USB ends to improve durability and reduce fraying; cables have been tested to bend 90-degrees 4,000 times.`,
          `Secure Fit: Sturdy unibody connectors resist damage while ensuring a secure fit with every insertion.`,
          `What You Get: Amazon Basics Nylon Braided Lightning to USB Cable, worry-free Lifetime Warranty and dedicated Amazon customer service.`,
        ],
        linkUrl: "/23",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 24,
        imageUrl:
          "https://m.media-amazon.com/images/I/71+hp0Df5KL._AC_UL480_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81vVhNmk8JL._AC_SL1500_.jpg",
        price: 111.98,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Amazon Basics Wall Mount Computer Monitor and TV Stand - Lift Engine Arm Mount, Aluminum - Black",
        fullDescription: [
          `Single monitor arm adjusts effortlessly for easy use; Works with almost any LCD monitor measuring 32 inches or smaller`,
          `Arm extends and retracts, tilt to change reading angles, and rotate from landscape-to-portrait mode; tilt range 70° back and 5° forward`,
          `Increases desktop space (desk clamp fits desks between 0.4” up to 2.4”); ergonomic positioning for reduced strain`,
          `Easy to set up; built to hold monitor from 5lbs to 25lbs (2.3~11.3kg)`,
          `VESA compatible (100 x 100mm and 75 x 75mm)`,
          `Backed by an Amazon Basics Limited 1-Year Warranty; please read the user manual carefully before using this arm`,
        ],
        linkUrl: "/24",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 25,
        imageUrl:
          "https://m.media-amazon.com/images/I/61ZQpn-nBrL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61ZQpn-nBrL._AC_SL1500_.jpg",
        price: 33.99,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Amazon Basics 3-Shelf Adjustable, Heavy Duty Storage Shelving Unit (250 lbs loading capacity per shelf), Steel Organizer Wire Rack, Black",
        fullDescription: [
          `THE FUNCTION IS MORE THAN PASTA - 22 Ounce capacity is suitable for pasta, soup, dessert, ice cream, rice, beans and so on. Sweese shallow bowls could replace a dinner plate, especially good when eating a salad as you rarely end up with part of your salad on the table!`,
          `GOOD SHAPE FOR PEOPLE AND PETS - The bowls are wide and shallow (7.7*1.7 inch), so the food doesn't get stuck, easy to spoon out everything with this shape. The shallow shape also easy for you to hold the bowl firmly, safe for kid use. And the shape is also great for pets as they are relatively shallow and easy for your cats/dogs to get their faces into.`,
          `STACKABLE & EASY TO CLEAN - These pasta bowls are stackable and DON'T take up a lot of space in your cupboard. Easy to clean, you can wash them with soap and hot water or place them into your dishwasher.`,
          `PRO-GRADE PORCELAIN & SAFE FOR DISHWASHER, MICROWAVE, OVEN AND FREEZER - These Sweese bowls are made of durable porcelain, a type of premium LEAD-FREE ceramic, chip-resistant and more sturdy than stoneware.`,
        ],
        linkUrl: "/25",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 26,
        imageUrl:
          "https://m.media-amazon.com/images/I/A1tDG7SHPJL._AC_UL480_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/A1tDG7SHPJL._AC_SL1500_.jpg",
        price: 13.49,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Amazon Basics 11.6-Inch Laptop and iPad Tablet Shoulder Bag Carrying Case, Black, 1-Pack",
        fullDescription: [
          `Slim, compact case is perfect for carrying laptops up to 11.6-inches without the unnecessary bulk`,
          `Accessory storage pockets for portable mouse, iPod, cell phone and pens`,
          `Includes padded shoulder strap`,
          `Internal Dimensions: 11.8" x 0.8" x 8.7" (LxWxH)`,
          `External Dimensions: 12.6" x 1.9" x 9.6" (LxWxH)`,
        ],
        linkUrl: "/26",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 27,
        imageUrl:
          "https://m.media-amazon.com/images/I/91G5CPWSLZL._AC_UL480_FMwebp_QL65_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/91G5CPWSLZL._AC_SL1500_.jpg",
        price: 7.27,
        rating: 5,
        brand: "",
        descriptionTitle: "Master Lock 8143D Bike Lock Cable with Combination",
        fullDescription: [
          `Gaming mouse pad—ideal for gamers, graphic designers, or anyone who uses a mouse for long sessions`,
          ` High-quality cloth surface promotes smooth mouse gliding and enhanced precision`,
          `Steady, thick, rubberized base keeps mouse pad in place`,
          `Hand wash only`,
          `Measures 12.4 x 10.6 x 0.08 inches (314.96 x 269.24 x 2.032 mm)`,
          `Note: Mouse pad is transported rolled up so we recommend that it be laid flat under a heavy object for 24 hours to remain flat`,
        ],
        linkUrl: "/27",
      },
    ],
  },
  oculus: {
    id: 4,
    title: "Oculus",
    linkUrl: "oculus",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 28,
        imageUrl:
          "https://m.media-amazon.com/images/I/71URNvzoWqL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._SL1500_.jpg",
        price: 516.88,
        rating: 5,
        brand: "Oculus",
        descriptionTitle: "Oculus Rift S PC-Powered VR Gaming Headset ",
        fullDescription: [
          `Top VR gaming library: Blast, slash and soar your way through the top library in VR gaming. Oculus Rift S lets you play hundreds of games and exclusives already available in the Oculus store, with so much more to come.`,
          `Improved optics: Stare down the competition with next-generation lenses and a sharper display. Improved optics deliver bright, vivid colors and reduced “screen-door” effect.`,
          `Ergonomic design: Keep your head in the game thanks to a Halo headband redesigned with speed in mind. Rift S stays securely and comfortably in place with a quick twist of the fit wheel, so it can take-or double take-your fastest reactions.`,
          `Oculus touch controllers: Arm yourself with our updated Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic precision, transporting your hands and gestures right into the game.`,
          `Oculus insight tracking: take a step forward with Oculus insight. It translates your movements into VR No matter which way you're facing and provides room-scale tracking without external sensors.`,
          `Oculus Rift S requires your Facebook account to log in, making it easy to meet up with friends in VR and discover communities around the world.`,
        ],
        linkUrl: "/28",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 29,
        imageUrl:
          "https://m.media-amazon.com/images/I/81V6rKa+P1L._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81V6rKa%2BP1L._AC_SL1500_.jpg",
        price: 21.95,
        rating: 5,
        brand: "Oculus",
        descriptionTitle:
          "Kaizen Spirit VR Headphones | Compatible with Oculus Quest | Designed as Oculus Quest Headphones, Oculus Quest Earbuds | Oculus Quest Accessories ",
        fullDescription: [
          `✔️High Quality Headphones for Fully Immersive VR Experience`,
          `✔️Top Performing Oculus Headphones for Video Games, Movies, and Other Media`,
          `✔️Oculus Earphones for the Quest Oculus VR-Designed Specifically for the Oculus Quest VR I & II experience.`,
          `✔️100% Money Back Guarantee, the Most Immersive VR Sound Experience`,
          `✔️Kaizen Spirit VR Oculus VR Accessories for the Oculus Headset `,
        ],
        linkUrl: "/29",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 30,
        imageUrl:
          "https://m.media-amazon.com/images/I/61jBGbu2rkL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61jBGbu2rkL._AC_SL1500_.jpg",
        price: 429.99,
        rating: 5,
        brand: "Oculus",
        descriptionTitle:
          "Flagship Oculus Quest 2 All-in-One Virtual Reality 64GB Gaming Headset w/ Fit Pack Bundle, High Resolution, PC VR Compatible, W/GM Controller Protection Controller Grip Accessories",
        fullDescription: [
          `👍🏻【Advanced Processing Power】 The Next-Level Hard, New Blazing-Fast Proceseeor-Qualcomm Snapdragon XR2 Platform with 6GB RAM ensure a smooth perfomance`,
          `👍🏻【50% More Pixles For Seamless Graphics】Enjoy the incredible resolution of 1832x1920px per eye. With enhanced clarity you can stay focused whether you’re on the move or standing still (Compared to Oculus Quest)`,
          `👍🏻【Redesigned Controllers】Take VR into your own hands with the redesigned Oculus Touch controllers, complete with state-of-the-art hand tracking, Transpors your movements directly in to VR with intuitive controls`,
          `👍🏻【Unlock Your PC Power】Play the best of both worlds with Oculus Link, a high-speed fiber optic cable that connects your compatible gaming PC to our all-in-one Oculus Quest headset`,
          `👍🏻【Power By FaceBook】Quest 2 requires your Facebook account to login, making it easy to meet up with friends in VR and discover communities around the world. You can explore as yourself or pick a new name by creating a unique VR profile. 👍🏻 Bundles with Ghost Manta controller grips cover 1 pair and 1 pair of kunckle strps `,
        ],
        linkUrl: "/30",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 31,
        imageUrl:
          "https://m.media-amazon.com/images/I/61m9MARocBL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61m9MARocBL._AC_SL1500_.jpg",
        price: 479.0,
        rating: 5,
        brand: "Oculus",
        descriptionTitle:
          "Oculus Quest 2 — 64GB Video — White Advanced All-In-One Virtual Reality Headset — 3D Cinematic Sound — Family Christmas Holiday Bundle for VR Gaming — BROAGE Silicone Mask Pad + 15.3FT USB",
        fullDescription: [
          `Quest 2 Requires Facebook Account Log In; VR Gaming without Cables or a PC; 1832 x 1920 Resolution Per Eye`,
          `Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display; All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library; Immersive Entertainment - Get the best seat in the house to live concerts, groundbreaking films, exclusive events and more`,
          `Quest 2 requires your Facebook account to log in, making it easy to meet up with friends in VR and discover communities around the world; Easy Setup - Just open the box, set up with the smartphone app and jump into VR. No PC or console needed. Requires wireless internet access and the Oculus app (free download) to set up device; Premium Display - Catch every detail with a stunning display that features 50% more pixels than the original Quest`,
          `64GB Storage Capacity`,
          `▌Authorized BROAGE Bundle ▌Bundled with BROAGE 2 x VR Silicone Mask Pad & Face Cover for Oculus Quest 2 (Black x1, White x1) + USB C Link Cable 15.3FT. Link Cable Compatible for Quest 1/2 to a Gaming PC, USB 3.2 Gen1 5Gbps/3A transfers data at speeds of up to 5 Gbps, 10 times faster than USB 2.0 cables, compatible with 2.0 (480Mbps). `,
        ],
        linkUrl: "/31",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 32,
        imageUrl:
          "https://m.media-amazon.com/images/I/71tcYBLS-iL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71tcYBLS-iL._SL1500_.jpg",
        price: 189.9,
        rating: 5,
        brand: "Oculus",
        descriptionTitle: "Oculus Sensor (Includes 16Ft. Repeater Cable)",
        fullDescription: [
          `When used as a third sensor, requires an additional USB 2.0 or higher port`,
          `Oculus Sensor tracks constellations of IR LED's to translate your movements in VR`,
          `Ideal for most setups and its standard 1/4 20 mount works with most tripods.`,
          `360 degree and room scale tracking are only supported for 3 sensor configurations.`,
          `This is an Oculus Rift Accessory - Oculus Rift headset sold separately
    `,
        ],
        linkUrl: "/32",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 33,
        imageUrl:
          "https://m.media-amazon.com/images/I/519XvHWeb9S._AC_UY218_.jpg",
        price: 135,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB",
        fullDescription: "",
        linkUrl: "/33",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 34,
        imageUrl:
          "https://m.media-amazon.com/images/I/61ZWuegQUOL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61ZWuegQUOL._AC_SL1500_.jpg",
        price: 949.99,
        rating: 5,
        brand: "Topcovos",
        descriptionTitle:
          "Topcovos Newest VR Silicone Interfacial Cover for Oculus Quest 2 Face Protect Skin Sweatproof Lightproof Anti-Leakage ",
        fullDescription: [
          `※Compatibility: Silicone Interfacial Protective Cover For Oculus Quest 2 VR Gaming Headset Anti-sweat Anti-Makeup Prevent Light-Leakage Washable`,
          `※Enhance view: good facial silicone cover replacement enable you to enjoy a good field of view, enjoy your vr from the most comfortable and with a better field of view,Use high-tech design to prevent light loss and feel great on the skin.`,
          `※Comfortable and durable: Made of high quality silicone for a comfortable face felling and thin thickness with light weight,you could enjoy the game without load`,
          `※Quick cleaning: environmentally friendly silicone, sweat proof, preventing light leakage, washable`,
          `※Premium Material: Made of high-grade environmentally friendly silicone, so it is safe and sanitary, and no irritation to the skin`,
        ],
        linkUrl: "/34",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 35,
        imageUrl:
          "https://m.media-amazon.com/images/I/71zGJZO72lL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71zGJZO72lL._AC_SL1500_.jpg",
        price: 129.98,
        rating: 5,
        brand: "Oculus",
        descriptionTitle:
          "Oculus Quest 2 Case JSVER Carrying Case for Quest 2 VR Headset, Controllers, Battery and Elite Strap, Hard travel case for quest 2, includes Shoulder Strap, Silicone VR Face Mask, Lens Dustproof Cover ",
        fullDescription: [
          `Specially designed Case for Oculus Quest 2 (device NOT included). Fits Quest 2, Quest 2 with official elite strap, Quest 2 with official elite strap and battery, and Oculus Quest. Dimensions: 12.2*8.66*4.72 inches/31*22*12cm`,
          `Its hard outer shell, made of top-quality EVA, provides full protection against scratches, impacts, shocks, sunlight and dust`,
          `The custom cut EVA foam inside snuggly holds your Oculus Quest 2 headset and accessories including touch controllers, power adapter, AA batteries and glasses spacer firmly in place`,
          `The inner mesh pocket acts as storage for small accessories such as power cords. The pre-cut slot and fixing band help to keep your Oculus Quest 2 and touch controllers safe, especially when on the move`,
          `Double zipper design provides easy access to your headset and accessories. Comes with a lens dustproof cover and a silicone VR face mask (For Quest 2 only)
      `,
        ],
        linkUrl: "/35",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 36,
        imageUrl:
          "https://m.media-amazon.com/images/I/81rRq7ltslL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61vwOEh4zkL._AC_SL1500_.jpg",
        price: 129.98,
        rating: 5,
        brand: "",
        descriptionTitle: `3D VR Virtual Reality Headset, VR Glasses Goggles w/ Bluetooth Headphone [Newest] for iPhone 12 11 Pro Max Mini X R S 8 7 Samsung Galaxy S10 S9 S8 S7 Edge Note/A 10 9 8 + etc 4.7-6.2" Cellphone, White `,
        fullDescription: [
          `UNIQUE RECHARGEABLE & FOLDABLE BLUETOOTH HEADPHONES: This VR goggles includes a pair of bluetooth headphones on the sides of the VR Glasses which is also foldable. It is compatible with both IOS & Android &PC system`,
          `PRIVATE IMAX THEATER: with soft and comfortable over-the-ears fold-able HIFI headphones, you can easily turn your smartphone into a private 3D IMAX movie theater/game screen, immerse yourself in the virtual reality anytime you want(the movie need to be 3D videos (left-right format) to enjoy the shocking 3D effect. just search keyword "VR", you will find there are more than 300 virtual reality apps on Apple App Store and Google Play Store for you to download and enjoy)`,
          `COMPATIBILITY: newest 3D VR headset/VR glasses box for both IOS/Android/PC 4.7-6.2” smartphones like iPhone 12/12 pro/12 mini/11 Pro Max/11 Pro/11/XS/XR/X/10/8/8+/7/7+/6S+/6+/6S/6, Samsung Galaxy S10/S10e/S10+/S9+/S9/S8/S7 Edge+/S7 Edge/S7/S6e +/S6e/S6(Active/Prime), Note 10+/10/9/8/5/4/3/2, A10e/A10/A20/A50/A51/A3/A5/A7/A9/J2/J6+/J7, BLU Advance 5.2/A4/R2 Plus/Vivo Go/Dash XL X8, LG G8 thinq K51 G5/6/7/8, V20/V30/G Stylo/Stylo 2/3/5, Google Pixel 5/4/3/ 2 XL 4A 3A, Moto, Sony, HTC ETC`,
          `EASY INSTALLATION: got 3D video(left-right format)/app downloaded in your cellphone and play, put your smartphone into the VR easily(the built-in fasten clips would keep your smartphone firmly on the VR headset box), adjust headband, PD & OD, headphones according to your own need, then you have start your great journey to the wonderful 3D virtual reality world. Ideal company to travel/relax/entertainment, save your time & money from going to movie`,
          `GREAT DECENT GIFT FOR EVERYONE - BOTH KIDS & ADULTS: fashion and comfortable to wear design, easily adjusted head band, object & pupil distance, foldable headphones to meet all peoples' need. Also, it can be wore on without eyeglasses for 400 degree myopia to 200 degree hyperopia. Normal size eyeglasses are also compatible `,
        ],
        linkUrl: "/36",
      },
    ],
  },
  getfit: {
    id: 5,
    title: "Get fit at home",
    linkUrl: "getfit",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 37,
        imageUrl:
          "https://m.media-amazon.com/images/I/617dNotKKWS._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/617dNotKKWS._AC_SL1500_.jpg",
        price: 219.99,
        rating: 5,
        brand: "RELIFE REBUILD YOUR LIFE",
        descriptionTitle:
          "RELIFE REBUILD YOUR LIFE Exercise Bike Indoor Cycling Bike Stationary Bicycle with Resistance Workout Home Gym Cardio Fitness Machine Upright Bike ",
        fullDescription: [
          `💪【 DURABLE STRUCTURE】 Fitness bike made of heavy duty steel and thicken foam keep the stability and durability, Weight Capability: 440 LBS.`,
          `💪【ADJUSTABLE DESIGN】Stationary bike has multiple places can be adjusted like seat cushion, handlebars and resistance, ergonomically designed for optimum comfort.Emergency braking system can stop the bike immediately.`,
          `💪【COMFORTABLE CONSTRUCTION】 Exercise Bike has thicken foam, stable structure, adjustable design and comfortable angles, follow the ergonomic design concept. Indoor cycling bike gives the experience of realistic road-riding feeling.`,
          `💪【LCD MONITOR】 Tracks your time, speed, distance, calories burned and odometer. Monitor your exercise progress index for your body workout provides data reference. Put you phone on the holder to watch videos.`,
          `💪【100% LIFETIME GUARANTEE】We take great pride in the quality and durability of our home fitness bike equipment. We stand behind our quality guarantee with our 1 year warranty on the frame and Lifetime Warranty on all other materials. If you have any question, Please feel free to contact us through E-mail.`,
        ],
        linkUrl: "/37",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 38,
        imageUrl:
          "https://m.media-amazon.com/images/I/51YYXSJ4T3L._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/51YYXSJ4T3L._AC_SL1001_.jpg",
        price: 9.99,
        rating: 5,
        descriptionTitle:
          "DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6” Memory Foam Handles Ideal for Aerobic Exercise Like Speed Training, Extreme Jumping, Endurance Training and Fitness Gym ",
        fullDescription: [
          ` Smooth and Fast: the ball bearing system avoids the twisting, winding or bending like other fitness ropes, it ensures stable and relaxed rotation, as our skipping rope can bear heavy load, which brings your a perfect exercise of skipping rope, also provides the best fluency for elite fitness professionals.`,
          `Sports Fitness: our exercise skipping rope can shape your cardio endurance, stamina and speed, while improving the muscle tension of your whole body. A great choice for boxing, MMA and cross training.`,
          `PVC Embedded Wire Rope: the braided steel wire rope is coated with PVC, which features durable and smooth, ensures the maximum service life and avoids cracking or breaking.`,
          `Maximum Comfort: the gym skipping rope constructed with light weight ergonomic handles coated with 6 inch soft EVA memory foam grips for extra comfortable and strong grip, so that you can You can take full advantage for doing exercise.`,
          `Adjustable Length: design with 9 feet long of the rope, it can be adjusted quickly according to your height. Suitable for adults and children. `,
        ],
        linkUrl: "/38",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 39,
        imageUrl:
          "https://m.media-amazon.com/images/I/81ARh719W9L._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81ARh719W9L._AC_SL1500_.jpg",
        price: 12.95,
        rating: 5,
        descriptionTitle:
          "Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5",
        fullDescription: [
          ` High end exercise bands. Our 12″ by 2″ heavy duty loop resistance bands come in 5 varying resistance levels. This makes them perfect whether you are just starting to workout or a seasoned workout warrior. Our extra light and light bands are great for beginners, while our medium, heavy and extra heavy exercise bands are targeted for more intermediate and advanced strength training.`,
          `Great with any workout. This resistance band set can be integrated seamlessly with various popular workout program. Or use them for general exercise, stretching, strength training, power weight programs. The included carry bag makes it easy to take your bands with you and do any workout away from home or your home gym.`,
          `Multiple uses. While these resistance bands are often used for sports and fitness, physical therapists love these physical therapy bands (rehab bands) to help them rehabilitate their patients. Our stretch bands work for people suffering from leg, knee and back injuries. They are also perfect for use by women after pregnancy and birth to keep their bodies in shape.`,
          `Superior quality. All of our exercise resistance bands are thoroughly tested before we ship them out to you. This ensures your bands are easy on skin and will provide you with a worry free experience. The instruction booklet includes dozens of different illustrated exercises that demonstrate how to use our resistance bands for legs, arms, back, shoulders, ankles, hips and stomach.`,
          `What you get: Five exercise bands with color-coded resistance levels, portable travel carry bag and instruction guide. `,
        ],
        linkUrl: "/39",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 40,
        imageUrl:
          "https://m.media-amazon.com/images/I/A158gCiIWDS._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/A158gCiIWDS._AC_SL1500_.jpg",
        price: 17.97,
        rating: 5,
        brand: "Vergali",
        descriptionTitle:
          "Vergali Fabric Booty Bands for Women Butt and Legs. Set of 4 Non Slip Cloth Resistance Working Out Band for Glute, Thigh, Squat with...",
        fullDescription: [
          `Latex`,
          `Perfect booty workout; get ready to strengthen your hip, thighs, and butt; these booty bands will give you the ultimate lower body workout that you have been looking for; just after a few sets of squats, lunges, and fire hydrants, you will be feeling the burn in no time; soon you will be turning your living room into a quarantine gym`,
          `Better comfort, better grip; stop using those latex rubber bands that pinch your skin; our bands are made with high quality fabric which makes your workouts way more comfortable; with non-slip elastic grips on the inside, you can now workout with bands that stay in place; no more worrying about your bands slipping, sliding, or rolling down your legs; wear them with tights or bare skin and avoid the hassle of having to readjust in the middle of a set`,
          `Exclusive training guide and workout videos included; access our training guide and working out videos online so you can get the proper technique for each leg and booty exercise; our training guide is easy to follow for any beginner and will enhance your workouts throughout the week so you will see immediate results`,
          `Four resistance strengths; we offer four exercise bands, each with different resistance levels and tensile strengths; build up your strength one band at a time starting with our light and medium bands, and work your way up to our more advanced heavy and heroic bands; each band is the same size and thickness so you can continue the same exercises as you progress through each strength`,
          `Lifetime manufacturer’s warrant; we are so confident that you will love our booty bands that we are offering all customers a lifetime manufacturer’s warranty. Our customer support team is here to help `,
        ],
        linkUrl: "/40",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 41,
        imageUrl:
          "https://m.media-amazon.com/images/I/61AH9ee81YL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61AH9ee81YL._AC_UL320_.jpg",
        price: 13.88,
        rating: 5,
        brand: "IPOW",
        descriptionTitle:
          "IPOW 2 Pack Knee Pain Relief & Patella Stabilizer Knee Strap Brace Support for Hiking, Soccer, Basketball, Running, Jumpers Knee, Tennis, Tendonitis, Volleyball & Squats",
        fullDescription: [
          `Shock-Absorbing & Knee Pain Relief - Segmented fix design can make adjustment according personal knees’ curves to supply better protection of patella, and do make a difference for your knee.`,
          `Full Adjustable & One Size Fits All - Double Knot Design, fully adjustable strap offered flexibility to make adjustment for tightness, fits for sizing of 10-18 inches in circumference.`,
          `Comfortable & Stay in Place - Adapted high quality raw materials and standardized production techniques, soft and ventilative fabric with smooth edges and fine stitches make you wear without any discomfort, stay in place after a long period of exercise.`,
          `Applicable Scene - Suitable for a variety of sports scenes, such as basketball, running, fitness, training, especially for intense sports that require frequent jumping and landing, which can improve sports performance.`,
          `Hassle Free After Sale Service - Our knee straps are tested in real-life situations by user’s demanding. If you got any issue, feel free to contact us via e-mail, our efficient customer service will absolutely offer you a satisfied solution. `,
        ],
        linkUrl: "/41",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 42,
        imageUrl:
          "https://m.media-amazon.com/images/I/71EDKropYbL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71EDKropYbL._AC_SL1500_.jpg",
        price: 11.97,
        rating: 5,
        brand: "TRUWEO",
        descriptionTitle:
          "Posture Corrector For Men And Women - Adjustable Upper Back Brace For Clavicle To Support Neck, Back and Shoulder (Universal Fit, U.S. Design Patent) ",
        fullDescription: [
          `Let our posture corrector be part of your healthier life: Our posture corrector helps you regain proper posture which can help to prevent the onset of back, neck and shoulder pain. Our posture corrector helps provide alignment while sitting, standing, lying down or during your other daily activities. Proper posture is important for all ages and is essential for living a productive life.`,
          `Regain your confidence with good posture: Our posture corrector can help with even long-standing poor posture. Wearing our posture corrector promotes self-awareness of your posture that over time will help you develop muscle memory to keep your back straight.`,
          `Comfortable, adjustable and easy to use: While other posture correctors dig into your armpits hurting your skin or are uncomfortable after only a short period of time, our posture corrector is designed for comfort. Our brace is unisex and fits chest sizes ranging from 30 to 43 inches. Begin using your posture corrector for 20-30 minutes a day and gradually increase to 1-2 hours daily.`,
          `Premium quality soft and breathable fabric: Featuring strong but lightweight breathable washable materials means you will stay cool while improving your posture.`,
          `Undetectable under clothes: No need to feel self-conscious about wearing a posture brace. The latex-free adjustable design is discreet enough to wear under your shirt or blouse. You can wear our premium posture corrector while at work, home or out for a night on the town.`,
        ],
        linkUrl: "/42",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 43,
        imageUrl:
          "https://m.media-amazon.com/images/I/71osK-o+xuL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71osK-o+xuL._AC_UL320_.jpg",
        price: 8.68,
        rating: 5,
        brand: "",
        descriptionTitle:
          "VIFUUR Water Sports Shoes Barefoot Quick-Dry Aqua Yoga Socks Slip-on for Men Women",
        fullDescription: [
          `100% Synthetic`,
          `Rubber sole`,
          `Recommended 1: CONVENIENCE - Smooth neck design prevents chafing when wearing our water shoes. It is convenient to wear and take off.`,
          `Recommended 2: COMFORTABLE FIT -- Breathable and smooth fabrics with fine stretch on uppers. Like socks, flexible and comfortable.`,
          `Recommended 3: RUBBER OUTSOLE & FOOT SAFETY -- Wearable and top-quality rubber sole, which protects your feet from being hurt by sharp objects.`,
          `Recommended 4: OCCASION - Yoga Training, beach, swimming, pool, weight training, wake-boarding, sailing, boating, kayaking, windsurfing, cycling, jogging, walking, fishing, beach volleyball, gardening, lawn, car-washing and driving. Family outings!`,
          `Tips：VARIOUS SIZE AVAILABLE -- fit different feet,little kids, big kids,men,women are available.`,
        ],
        linkUrl: "/43",
      },
      {
        amazonChoice: false,
        bestSeller: true,
        id: 44,
        imageUrl:
          "https://m.media-amazon.com/images/I/91VvLvJikgL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/91VvLvJikgL._AC_UL320_.jpg",
        price: 13.87,
        rating: 5,
        descriptionTitle:
          "Saucony Men's Multi-Pack Mesh Ventilating Comfort Fit Performance No-Show Socks",
        fullDescription: [
          `98% Polyester, 2% Spandex`,
          `Imported`,
          `No Closure closure`,
          `Machine Wash`,
          `Run Dry Moisture Management Provides Superior Moisture Transport with our Ultra Wicking Fibers. So, Whether you're in the Gym or on the Road, your Feet Stay Fresh.`,
          `Airmesh Venting. Mesh Ventilation Construction Creates Maximum Airflow to Keep Your Feet Cool and Dry in any Running Conditions.`,
          `Targeted Arch Compression Engineered with Just the Right Amount of Compression to Keep your Arch Stabile and Secure. Our Arch Support System also Prevents Bunching and Helps Keep Your Sock From Slipping.`,
          `Cushioned Sole. Light Cushioning Provides Impact Protection without taking up too much Space inside your Shoes.`,
        ],
        linkUrl: "/44",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 45,
        imageUrl:
          "https://m.media-amazon.com/images/I/61B0M2L+wrL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61B0M2L%2BwrL._AC_SL1500_.jpg",
        price: 25.89,
        brand: "Iron Gym",
        rating: 5,
        descriptionTitle: "Iron Gym Total Upper Body Workout Bar",
        fullDescription: [
          `PULL UP BAR FOR DOORWAY: Plan your home workout regime with Iron Gym Pull up bars, turn any doorway into a personal gym and get the strong, lean body you always wanted, right at home. It instantly attaches to or removes from your door frame and the heavy-duty steel construction supports up to 300 pounds`,
          `IDEAL FOR UPPER BODY WORKOUT: Iron Gym Pull Up Bars is an ideal upper body exercise equipment with three grip positions, narrow, wide, and neutral. It offers wide grip push- ups, pull-ups, chin-ups, sit-ups, dips, arm and shoulder exercises – every exercise you need to build a powerful upper body`,
          `HEAVY-DUTY: Constructed with heavy-duty steel, the metal chin-up bar ensures sturdiness and reliability, while the bar handgrip has professional-grade comfort foam for comfortable ergonomic gripping. The indoor gym bar is finished with shiny platinum to give your interiors an exotic match`,
          `FITS MOST DOORWAYS: Comes in a unit packaging dimensions of 20x3.25x8 inches, it fits up to 35.4-inch-wide door frames. It can be used for an indoor workout, please keep in mind that the doorway should be 24 – 32 inches wide to accommodate the bar`,
          `EASY INSTALLATION: Our doorframe pullup bar comes with come with safety brackets, a safety manual and assembly tools, making it easy to install and remove in seconds. It uses leverage to hold against the doorway so there are no screws and no damage to the door `,
        ],
        linkUrl: "/45",
      },
    ],
  },
  gaming: {
    id: 6,
    title: "Gaming accessories",
    linkUrl: "gaming",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 46,
        imageUrl:
          "https://m.media-amazon.com/images/I/71hzJi-KQdL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71hzJi-KQdL._AC_SL1500_.jpg",
        price: 155.99,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Luckracer Gaming Chair with Footrest Office Desk Chair Ergonomic Gaming Chair Pu Leather High Back Adjustable Swivel Lumbar Support Racing Style Esports Gamer Chairs Gray ",
        fullDescription: [
          ` **Usually ship in 2 working days, arrives within 7 days! Perfect for Gaming: We're dedicated to making the best game chairs for pro gamers. Choose Luckracer and improve your gaming experience! Sitting Area Dimensions: 20.86 In(L) x 14.57 In(W); Maximum Weight Capacity: 350 pounds`,
          `Ergonomic Design: Ergonomic game chair design with free lumbar support, headrest pillow wider and thicker adjustable armrests with an ergonomic shape, larger size seat cushion, sturdy retractable footrest.`,
          `Linkage Armrests: Gaming chair covered with thick Pu leathter make your elbow and arm more comfortable，will release your faigue caused by playing gaming for long time.`,
          `High Quality Gaming Chair with Footrest: Solid integrated metal frame, international standard gas lift, skin friendly Pu leather with high density thick sponge inside, 5 point steel base with heavy duty, smooth rolling casters, retractable footrest for rest.`,
          `Wide Application: This gaming chair with footrest can be used as office chair, computer chair, racing chair. It's a perfect choice for you to play computer games, watch Tv, work and relax. `,
        ],
        linkUrl: "/46",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 47,
        imageUrl:
          "https://m.media-amazon.com/images/I/71Z2V+3v6wL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/717h3f0JQhL._AC_SL1500_.jpg",
        price: 124.63,
        rating: 5,
        brand: "",
        descriptionTitle:
          "OFM ESS Collection Racing Style Bonded Leather Gaming Chair, in Gray (ESS-3085-GRY) ",
        fullDescription: [
          `COMPUTER GAMING CHAIR: A race car style chair that provides luxury and comfort whether used during intense gaming sessions or long workdays`,
          `ERGONOMIC SWIVEL CHAIR: With contoured segmented padding, integrated padded headrest, and padded arms, this video game chair provides quality support and comfort for hours of play`,
          `ADJUSTABLE RACING CHAIR: Features height adjustment, center-tilt control, flip-up arms and 360 degrees of swivel`,
          `PREMIUM LEATHER CHAIR: Upholstered in SofThread Leather and contrasting colored upholstery for an aggressive style and cool feel`,
          `DURABLE OFFICE FURNITURE: This heavy duty chair has a 275 lb weight capacity for long-lasting use
    `,
        ],
        linkUrl: "/47",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 48,
        imageUrl:
          "https://m.media-amazon.com/images/I/71cO9gqpcwL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71cO9gqpcwL._AC_SL1500_.jpg",
        price: 98.88,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Hosote Ergonomic Gaming Chair for Adults, High Back Racing Computer Gaming Chair, E-Sports Gamer Chair, Big and Tall Video Gaming Chair, PU Leather Desk Chair Task Chair Office Chair(Red,Black)",
        fullDescription: [
          `Adjustable Gaming Chair】You can find your comfortable position by adjusting the seat height and reclining the backrest between 90° and 160°. And the soft armrest can be swiveled and raised, so your hands will be fighting at their best when working or playing computer games. Dimension: Backrest Size: 21.7" x 33" (W x H); Seat Size: 21.3" x 20.5" (W x D); Seat adjustable height:18.9" - 23".`,
          `【Multi-Function】90°~160° Reclining; Tilt locking mechanism; 360° swivel; Multi-direction smooth-rolling casters; Adjustable height of Armrest(2.8") and Seat(4"); Removable headrest pillow and lumbar cushion; Heavy duty 5-point base; 300lbs maximum weight capacity.`,
          `【Ergonomic Design】Hosote high back gaming chair features an ergonomically thickened backrest that fits the natural shape of the human back, thus providing protection and support for your spine. The removable memory foam headrest and lumbar pillows ensure you maintain good posture while playing games and provide great comfort for your neck and back.`,
          ` 【Material For Security】This video game chairs is made of high-quality racing skeleton modules, durable PU leather, high density memory foam cushions, heavy duty metal base with 5 smooth-rolling nylon castors for great stability and mobility. It will serve well you for many years.`,
          `【Wide Applications】Hosote video gaming chair is an ideal seat of choice for your working, studying and gaming. Our game chair also makes a perfect birthday, Valentine's Day, Thanksgiving or Christmas gift. It has a racing style and looks very stylish. Give it to your loved one, child or friend and prepare to receive their compliments. `,
        ],
        linkUrl: "/48",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 49,
        imageUrl:
          "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
        price: 25,
        rating: 5,
        brand: "Logitech G",
        descriptionTitle:
          "Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac",
        fullDescription: [
          `Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Our most advanced, with 1:1 tracking, 400+ ips, and 100 - 25,600 max dpi sensitivity plus zero smoothing, filtering, or acceleration`,
          `11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the mouse`,
          `Adjustable weight system: Arrange up to five removable 3.6 grams weights inside the mouse for personalized weight and balance tuning`,
          `Programmable RGB Lighting and Lightsync technology: Customize lighting from nearly 16.8 million colors to match your team's colors, sport your own or sync colors with other Logitech G gear`,
          `Mechanical switch button tensioning: Metal spring tensioning system and pivot hinges are built into left and right gaming mouse buttons for a crisp, clean click feel with rapid click feedback`,
          `1 year hardware limited warranty `,
        ],
        linkUrl: "/49",
      },
      {
        amazonChoice: false,
        bestSeller: true,
        id: 50,
        imageUrl:
          "https://m.media-amazon.com/images/I/61gxUsLtlyL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg",
        price: 13.99,
        rating: 5,
        brand: "PICTEK",
        descriptionTitle:
          "PICTEK Gaming Mouse Wired [7200 DPI] [Programmable] [Breathing Light] Ergonomic Game USB Computer Mice RGB Gamer Desktop Laptop PC Gaming Mouse, 7 Buttons for Windows 7/8/10/XP Vista Linux, Black ",
        fullDescription: [
          ` [Excellent gaming performance with 7200 dpi and 4 polling rate]pictek t7 programmable gaming mice, default five dpi levels available from 1200/2400/3500/5500/7200 dpi. With two dpi button, you can adjust the dpi easily to get high accuracy and consistent responsiveness at any speed. 4 polling rate is adjustable: 125hz/250hz/500hz/1000hz, polling rate ensures smooth and high-speed movement, up to 1000hz makes it faster and more accurate than ordinary mouse.`,
          ` [All mouse buttons are programmable] support macro editing, 7 mouse buttons can be programmed by pictek easy-to-program gaming software which makes the mouse more intelligent and meets more demands for different games. Great value and control fps gaming mouse, also excellent for moba/ rts games (driver disk included or download the software from brand website, see instructions for details). Compatible with windows 10, windows 8, windows 7, windows xp, vista, linux etc. ( Note: no programming function for mac system).`,
          ` [16 million color fancy cool led backlit] 16 million color options for the backlight setting to match your style. Easily shut on and off the backlight with the convenient switch on the bottom. Plus, adopts high-definition optical gaming sensor, ensure quickly switch for different games. Mode selection: steady on/breathing/flicker+light effect/steady on+light effect. Color: red blue green purple yellow.`,
          `[Ergonomic design] pictek t7 with symmetrical & streamlined provides a comfortable claw-grip design, long-term use without fatigue. Top choice for computer game players to keep your grip firmly during game play. Excellent cool wired pc gaming mouse for casual gamers. Comes with 5 foot, 3mm strong high-speed fiber cable.`,
          `[Reliable quality & service] pictek t7 pc gaming mouse, 30 million clicks lifespan , intricate polish manufacturing processes and meticulous assembly provide the functional reliability of the mouse for years. Pictek will spare no effort to provide the satisfied service to every customer, keep in touch with us when you meet any problem, we will reply you within 12 hours to help you. `,
        ],
        linkUrl: "/50",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 51,
        imageUrl:
          "https://m.media-amazon.com/images/I/81xeyiadbaL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81xeyiadbaL._AC_SL1500_.jpg",
        price: 25,
        rating: 5,
        brand: "Razer",
        descriptionTitle:
          "Razer Naga Trinity Gaming Mouse: 16,000 DPI Optical Sensor - Chroma RGB Lighting - Interchangeable Side Plate w/ 2, 7, 12 Button Configurations - Mechanical Switches ",
        fullDescription: [
          ` High-Precision 16,000 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming`,
          `Full Modular Customizability: 3 interchangeable side plates with 2, 7 and 12-button configurations`,
          `Up to 19 Programmable Buttons: Allows for button remapping and assignment of complex macro functions through Razer Synapse`,
          `Customizable Chroma RGB Color Profiles: Supports 16.8 million color combinations w/ included preset profiles`,
          `Ridged, Rubberized Scroll Wheel for Maximum Accuracy: Small, tactile bumps increases grip and allows for more controlled scrolling in high-stakes gaming situations`,
          `Durable Mechanical Switches: Supports up to 50 million clicks, backed by a 2 year warranty `,
        ],
        linkUrl: "/51",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 52,
        imageUrl:
          "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
        price: 29.99,
        rating: 5,
        brand: "Redragon",
        descriptionTitle:
          "Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black) ",
        fullDescription: [
          `PC GAMING KEYBOARD AND GAMING MOUSE COMBO: Includes Redragon RGB Backlit Computer Gaming Keyboard and RGB Backlit Gaming Mouse. ALL-IN-ONE PC GAMER VALUE KIT, Fantastic for Gamers (New Improved Version)`,
          `RGB BACKLIT GAMING KEYBOARD; 7 different RGB Lighting modes & effects, 4 backlight brightness levels, adjustable breathing speed. The keycaps offering clear uniform backlighting WIN key can be disabled for gaming. The PC Gaming Keyboard has been ergonomically designed to be a superb typing tool for office work as well. The gaming Keyboard is built to withstand the average liquid spill. The integrated wrist rest gives you the comfort you need for marathon gaming sessions`,
          `MULTI MEDIA & ANTI GHOSTING; The Gaming Keyboard has 25 conflict free (n-Key Rollover) 10 Dedicated Multimedia keys plus 12 additional FN+ Multimedia keys (Total 114 keys). Keys are quiet, designed for longevity, durability delivering precise tactile feedback. Comes with Full numeric keypad and a gold-plated corrosion free USB connector for a reliable connection and ultimate Gaming performance`,
          `WIRED GAMING MOUSE; Ergonomic Redragon RED Backlit Gaming Mouse up to 3200 DPI (user adjustable 800/1600/2400/3200 DPI), 30G acceleration and Weight Tuning set. Total 6 Buttons of which 5 are programmable. The High-Precision Sensor delivers Pinpoint Accuracy while the Gaming Grade Micro Switches ensure longevity, greater durability and extreme responsiveness, giving you an even greater edge over your competition`,
          `PC GAMING KEYBOARD AND GAMING MOUSE COMPATIBILITY: Windows 10, Windows 8, Windows 7, Windows Vista, or Windows XP, Limited Mac OS keyboard support. Works well with all major Computers Brands and Gaming PCs. `,
        ],
        linkUrl: "/52",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 53,
        imageUrl:
          "https://m.media-amazon.com/images/I/71y87QFHegL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71y87QFHegL._AC_SL1500_.jpg",
        price: 29.99,
        rating: 5,
        brand: "MageGee",
        descriptionTitle:
          "Gaming Keyboard and Mouse Combo, K1 LED Rainbow Backlit Keyboard with 104 Key Computer PC Gaming Keyboard for PC/Laptop(White) ",
        fullDescription: [
          `【Full Size Keyboard,Plug and play with it】104 Keys Full Size Keyboard. Featuring standard keyboard layout with F-keys(function keys ) and number pad. Adjustable stands offers your hands to type in a more comfortable typing position, which help reduce hand fatigue. The wired keyboard brings you efficient typing while at work or gaming.Plug and play with it,no other driver or software needed.`,
          `【Practical & Ergonomic Design】The K1 keyboard is designed with ergonomics,thus you can play with it without fatigue .A great design for your modern office use or playing games.`,
          `【Colorful LED Backlight】The keyboard has a colorful LED backlight. Even if you use the keyboard in the dark, you can clearly see the keycap’s alphabet clearly(also can be turned off).`,
          `【Finer-resolution Mouse】: 4 adjustable DPI (800, 1200, 2400, 3200).High speed transmission technology makes it move faster and more accurate.4 preset levels of DPI meet the needs of different scenarios.For example,when you are playing games,you can play it with High DPI to move faster in your screen and do some rapid response,the mouse can move exactly whatever and wherever you want.`,
          `【Reliable Performance & Wide Compability】Waterproof USB2.0 cable, gold-plated interface and anti-interference magnet ring can ensure stable data transmitting. The use of ABS engineering plastics for anti-abrasion of the keyboard. Works perfectly with Windows XP/Vista/Win7/Win8/Win10, MAC, Linux or other operating system `,
        ],
        linkUrl: "/53",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 54,
        imageUrl:
          "https://m.media-amazon.com/images/I/81L8fk7SGQL._AC_UY218_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81L8fk7SGQL._AC_SL1500_.jpg",
        price: 39.99,
        rating: 5,
        brand: "SteelSeries",
        descriptionTitle:
          "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch) ",
        fullDescription: [
          ` Ip32 water resistant – Prevents accidental damage from liquid spills`,
          `10-zone RGB illumination – Gorgeous color schemes and reactive effects`,
          `Whisper quiet gaming switches – Nearly silent use for 20 million low friction keypresses`,
          `Premium magnetic wrist rest – Provides full palm support and comfort`,
          `Dedicated multimedia controls – Adjust volume and settings on the fly `,
        ],
        linkUrl: "/54",
      },
    ],
  },
  tv: {
    id: 7,
    title: "Find your ideal TV",
    linkUrl: "tv",
    items: [
      {
        amazonChoice: true,
        bestSeller: false,
        id: 55,
        imageUrl:
          "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg",
        price: 325,
        rating: 5,
        brand: "SAMSUNG",
        descriptionTitle:
          "SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model) ",
        fullDescription: [
          `DYNAMIC CRYSTAL COLOR - A fine crystal layer reveals millions of true-to-life colors.`,
          `CRYSTAL PROCESSOR 4K – Intelligent, ultra-fast optimization of 4K content.`,
          `SMART TV WITH MULTIPLE VOICE ASSISTANTS – Access apps and streaming services right on your TV with your voice.`,
          `3 HDMI PORTS – Connect up to 3 devices with HDMI.`,
          `HDR – Unveils shades of color that go beyond HDTV.
      `,
        ],
        linkUrl: "/55",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 56,
        imageUrl:
          "https://m.media-amazon.com/images/I/91CXxVtVkAL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/91CXxVtVkAL._AC_SL1500_.jpg",
        price: 499,
        rating: 5,
        brand: "TLC",
        descriptionTitle:
          "TCL 65-inch 6-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65R635, 2021 Model ",
        fullDescription: [
          `
          Superior 4K Ultra HD: Picture clarity combined with the contrast, color, and detail of Dolby Vision HDR (High Dynamic Range) for the most lifelike picture`,
          `Mini-LED Technology: Uncompromised contrast, brightness, and uniformity for incredible viewing in any environment`,
          `Product Size (WxHxD) with Stand: 56.9" x 35.7" x 13.7"; Product Size (WxHxD) without stand: 56.9" x 32.9" x 2.8"`,
          `QLED: Quantum dot technology delivers better brightness and wider color volume`,
          `Contrast Control Zones: Contrast is individually optimized across up to 240 localized zones for striking contrast between bright and dark areas of the image`,
          `Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app or voice enabled remote control`,
          `THX Certified Game Mode: Gain a competitive edge with the most optimal viewing experience for big screen gaming; never miss the action due to image smear, response time, or input lag, and enjoy the game as it was intended by the creators`,
          `4 HDMI inputs (1 eARC): Connect all your favorite devices through the four HDMI inputs that includes 1 eARC to easily sync audio and video sources and deliver better quality sound`,
        ],
        linkUrl: "/56",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 57,
        imageUrl:
          "https://m.media-amazon.com/images/I/91RfzivKmwL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg",
        price: 549,
        rating: 5,
        brand: "Sony",
        descriptionTitle:
          "Sony X80J 65 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility KD65X80J- 2021 Model ",
        fullDescription: [
          `4K HDR PROCESSOR X1 – Powerful TV processing that delivers a picture that is smooth and clear, full of rich colors and detailed contrast.`,
          `TRILUMINOS PRO – Reproduces more colors than a conventional TV resulting in picture quality that is natural and precise, and closer than ever to real life.`,
          `GOOGLE TV – Seamlessly browse 700,000 plus movies and TV episodes from across your favorite streaming services, all in one place. Watch content from Netflix, Amazon Prime Video, Disney+, YouTube, the Apple TV app, and many more.`,
          `MOTIONFLOW XR – On-screen motion stays smooth and clear, allowing fast moving sequences in sports, action movies, and games to be seen with lifelike clarity.`,
          `4K X-REALITY PRO – Our unique 4K database upscales all the HD content you love to near-4K resolution bringing back real-world detail and texture.`,
          `WORKS WITH ALEXA – Through an Alexa enabled device, just ask Alexa to play music, launch video apps, turn up the volume, stream your smart camera, and more.`,
          `HIGH DYNAMIC RANGE (HDR) & DOLBY Vision – Enjoy immersive and engaging cinematic content as the creator intended with HDR and Dolby Vision.`,
        ],
        linkUrl: "/57",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 58,
        imageUrl:
          "https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg",
        price: 497.99,
        rating: 5,
        brand: "SAMSUNG",
        descriptionTitle: `SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV (2019 model) `,
        fullDescription: [
          `4K UHD Processor: a powerful processor optimizes your tv’ s performance with 4K picture quality`,
          `Inputs & Outputs: 3 HDMI ports, 1 Ethernet port, 2 USB Ports (v 2.0), 1 Digital Audio Output (Optical), 1 Composite Input (AV),`,
          `Dimensions with Stand (WxHxD): 28.5" x 18.8" x 6.1" | with Stand Weight: 11.9 lb. | without Stand Dimensions (WxHxD): 28.5" x 16.6" x 1.2" | without Stand Weight: 11.7 lb.`,
          `4K UHD: see what you’ve been missing on a crisp, clear picture that’s 4x the resolution of Full HD`,
          `Smart TV with Universal Guide: our simple on-screen Guide is an easy way to find streaming content and live TV shows`,
          `HD: see shades of color that reveal more detail than HDTV can deliver`,
          `100% Color Volume with Quantum Dot*: Over a billion shades of brilliant color—powered by Quantum Dots—deliver our most realistic picture`,
          `Sound Output (RMS): 20W
      `,
        ],
        linkUrl: "/58",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 59,
        imageUrl:
          "https://m.media-amazon.com/images/I/71mTUwgs9hL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71mTUwgs9hL._AC_SL1500_.jpg",
        price: 189.99,
        rating: 5,
        brand: "TLC",
        descriptionTitle:
          "TCL 32-inch Class 3-Series HD LED Smart Android TV - 32S334, 2021 Model ",
        fullDescription: [
          `High Definition (720p) Resolution: Full high definition (720p) resolution for excellent detail, color, and contrast.`,
          `Google Assistant Built-in: Search for movies and shows across thousands of available apps, get entertainment recommendations, access media playback controls, change the temperature, dim the lights, and so much more. Ask questions and see the answers on your TV, including Google Photos, your calendar, sports scores, and more. Even automate and control your smart devices. The Google Assistant is always on, ready to help, and makes life in your living room that much more relaxing.`,
          `Chromecast Built-in: Easily cast movies, shows, and photos from your Android or iOS device to your TCL Android TV.`,
          `Speedy, simplified home screen: Simplified home screen allows you to enjoy all your entertainment in one place. Get quick access to the apps you love, cue the latest episode, or pick up where you left off in no time.`,
          `Thousands of streaming apps: Stream 700,000+ shows and movies, live sports and news, or your favorite music from Google Play, YouTube and your favorite apps.
      `,
        ],
        linkUrl: "/59",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 60,
        imageUrl:
          "https://m.media-amazon.com/images/I/A1zA6slZ2-L._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/A1zA6slZ2-L._AC_SL1500_.jpg",
        price: 399,
        rating: 5,
        brand: "LG",
        descriptionTitle: `LG 55UP8000PUA Alexa Built-in 55" 4K Smart UHD TV (2021) `,
        fullDescription: [
          `REAL 4K DISPLAY: The rich 4K displays of LG UHD TVs deliver quality you can see in every scene. Enjoy bright colors, high contrast, and impeccable detail.`,
          `QUAD CORE PROCESSOR 4K: Our Quad Core Processor 4K gives you a smooth, crisp viewing experience with enhanced contrast, color and blacks.`,
          `WEBOS + LG THINQ AI W/ MAGIC REMOTE: Control your smart home theater with ease. ThinQ AI and the Magic Remote enable simple navigation and intuitive voice commands, while the webOS platform supports a huge library of content with many of the most popular streaming apps.`,
          `TRUMOTION 120 (Native 60Hz): TruMotion 120 technology reduces blur to sharpen details with up to 120 frames per second, giving fast-moving action sequences and lightning-quick sports a smooth, clean look.`,
          `WORKS WITH HEY GOOGLE / ALEXA: Customize and control your smart home with ease. LG UHD TVs work with "Hey Google," Amazon Alexa, Apple Play2, and Apple Homekit – making it a cinch to cast your favorite content, find the latest weather forecast, and much more.`,
        ],
        linkUrl: "/60",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 61,
        imageUrl:
          "https://m.media-amazon.com/images/I/71RshxhlEiL._AC_UL320_.jpg",
        zoomImage:
          "Hisense 65-Inch Class R6 Series Dolby Vision HDR 4K UHD Roku Smart TV with Alexa Compatibility (65R6G, 2021 Model)699",
        price: 699,
        rating: 5,
        brand: "Hisense",
        descriptionTitle:
          "Hisense 65-Inch Class R6 Series Dolby Vision HDR 4K UHD Roku Smart TV with Alexa Compatibility (65R6G, 2021 Model) ",
        fullDescription: [
          `4K UltraHD delivers more than four times the resolution of a regular 1080p highdefinition screen. Along with over 8.3 million pixels, inside you'll find a powerful full array LED backlight at work creating a sharper, more colorful picture.`,
          `Kick back and enjoy streaming movies and TV episodes, plus live-streaming news, TV, sports and more, across thousands of free and paid channels with the Roku TV Operating System.`,
          `Quickly access entertainment and control your TV with a Google Assistant or Alexa device (sold separately). With the touch of your remote or Roku mobile app, or a simple voice command, you can take control of your smart home, turn on and off the TV, change channels, and much more.`,
          `Dolby Vision HDR and HDR10 transforms your TV into an entertainment powerhouse. The image technology from cinemas, now brought together in the home, provide amazing realism that you'll see, hear, and feel like never before.`,
          `Motion Rate 120 image processing technology allows you to enjoy fast-paced sports, movies, and 4K gaming without the lag.`,
          `Dimensions (with the stand): 57.2 by 35.3 by 11.5 inches, 36.8 pounds.`,
          `Ports: 3 HDMI, HDMI CED/HDMI ARC, Ethernet, 1 USB 2.0, 1 RF Antenna, 1 RCA Composite Video Input, 1 L/R Audio Input for Composite, 1 Optical Digital Audio Output, 1 Earphone/Audio Output.
      `,
        ],
        linkUrl: "/61",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 62,
        imageUrl:
          "https://m.media-amazon.com/images/I/71G6eW8H8hL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71G6eW8H8hL._AC_SL1500_.jpg",
        price: 599,
        rating: 5,
        brand: "SAMSUNG",
        descriptionTitle:
          "SAMSUNG 60-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN60Q60AAFXZA, 2021 Model) ",
        fullDescription: [
          `100% COLOR VOLUME WITH QUANTUM DOT: A billion stay-true shades of breathtaking color.* *QLED televisions can produce 100% Color Volume in the DCI-P3 color space, the format for most cinema screens and HDR movies for television.`,
          `DUAL LED Backlight*: Dedicated warm and cool LED backlights provide enhanced contrast.* * 32" Dual LED not available.`,
          `QUANTUM HDR: Go beyond HDTV with an expanded range of color.`,
          `AIR SLIM DESIGN: Sleek and slim design.`,
          `QUANTUM PROCESSOR 4K LITE: Transform what you're watching to stunning 4K.`,
          `ALEXA BUILT-IN: Ask more from your TV. Just ask Alexa to open apps, change the channel, search for movies and shows, play music, control your smart home devices and more. To talk to Alexa, press and hold the mic button on your remote. If you have hands-free enabled just say, "Alexa" and ask a question.`,
        ],
        linkUrl: "/62",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 63,
        imageUrl:
          "https://m.media-amazon.com/images/I/A1Ik70D2wfL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/A1Ik70D2wfL._AC_SL1500_.jpg",
        price: 345,
        rating: 5,
        brand: "LG",
        descriptionTitle:
          "LG OLED65CXPUA Alexa Built-in CX 65-inch 4K Smart OLED TV (2020 Model) ",
        fullDescription: [
          `
        Connectivity Technology: Wireless`,
          `Surround Sound Channel Configuration: 2.2`,
          `Included Components: Power Cable, Remote Control, Stand
    `,
        ],
        linkUrl: "/63",
      },
    ],
  },
  womanclothes: {
    id: 8,
    title: "Woman clohtes",
    linkUrl: "womanclohtes",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 64,
        imageUrl:
          "https://m.media-amazon.com/images/I/61I12bGnm+S._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61I12bGnm+S._AC_UL320_.jpg",
        price: 9.0,
        rating: 5,
        brand: "",
        descriptionTitle: "Gildan G185 Heavy Blend Adult Hooded Sweatshirt ",
        fullDescription: [
          `100% Cotton`,
          `Imported`,
          `Drawstring closure`,
          `Standard`,
          `50% cotton, 50% polyester preshrunk fleece knit`,
          `Imported`,
          `Pull On closure`,
          `Machine Washable`,
        ],
        linkUrl: "/64",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 65,
        imageUrl:
          "https://m.media-amazon.com/images/I/71kxW8M2gTL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71kxW8M2gTL._AC_UL320_.jpg",
        price: 34.13,
        rating: 5,
        brand: "Nike",
        descriptionTitle: "Nike Womens Pullover Fleece Hoodie ",
        fullDescription: [
          `Knit fabric feels soft and comfortable.`,
          `Premium brushed-back fleece interior feels soft and warm.`,
          `Elastic cuffs and hem for a snug fit.`,
        ],
        linkUrl: "/65",
      },
      {
        amazonChoice: false,
        bestSeller: true,
        id: 66,
        imageUrl:
          "https://m.media-amazon.com/images/I/91JTWDmaK3L._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/91JTWDmaK3L._AC_UL320_.jpg",
        price: 7.99,
        rating: 5,
        brand: "",
        descriptionTitle: "Hanes Women's EcoSmart Crewneck Sweatshirt ",
        fullDescription: [
          `50% Cotton, 50% Polyester`,
          `Imported`,
          `No Closure closure`,
          `Machine Wash`,
          `Midweight, 50% Cotton/50% Polyester fleece, with up to 5% made from recycled plastic bottles`,
          `Soft, 7.5-Oz cotton blend provides comfort in any climate`,
          `Sweatshirt sits just below your natural waistline. Ribbed hem and cuffs keep their shape`,
        ],
        linkUrl: "/66",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 67,
        imageUrl:
          "https://m.media-amazon.com/images/I/51S8KGJy0lL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/51S8KGJy0lL._AC_UL320_.jpg",
        price: 13.75,
        rating: 5,
        brand: "",
        descriptionTitle:
          "Fila Womens French Terry Long Sleeve Crewneck Sweatshirt",
        fullDescription: [
          `Machine Wash`,
          `Clear silicon F-box logo on left chest`,
          `Rib collar and cuffs`,
          `Hidden side seam pockets`,
          `Light french terry fabric`,
          `Jacquard tab on bottom left seam`,
        ],
        linkUrl: "/67",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 68,
        imageUrl:
          "https://m.media-amazon.com/images/I/81K9z-xiP2L._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81K9z-xiP2L._AC_UL320_.jpg",
        price: 33.65,
        rating: 5,
        brand: "",
        descriptionTitle: "adidas Women's Essentials Brand Love Sweatshirt ",
        fullDescription: [
          `53% Cotton, 36% Polyester, 11% Viscose`,
          `Imported`,
          `Women's sweatshirt for living the Three Stripes Life`,
          `Relaxed fit drapes on the body for casual comfort`,
          `Ribbed crewneck keeps its shape`,
          `This product is made with recycled content as part of our ambition to end plastic waste`,
        ],
        linkUrl: "/68",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 69,
        imageUrl:
          "https://m.media-amazon.com/images/I/61qCgIhckfL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/61qCgIhckfL._AC_UL320_.jpg",
        price: 28.0,
        rating: 5,
        brand: "",
        descriptionTitle: "adidas Women's Essentials Logo Sweatshirt",
        fullDescription: [
          `53% Cotton, 36% Polyester, 11% Viscose`,
          `Imported`,
          `Women's crew sweatshirt for timeless good looks`,
          `Regular fit is not tight and not loose, the perfect in-between fit`,
          `Ribbed crewneck keeps its shape`,
          `Banded cuffs and hem for a snug feel`,
          `This product is made with recycled content as part of our ambition to end plastic waste`,
        ],
        linkUrl: "/69",
      },
      {
        amazonChoice: false,
        bestSeller: true,
        id: 70,
        imageUrl:
          "https://m.media-amazon.com/images/I/81+5CAE2YyL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/81+5CAE2YyL._AC_UL320_.jpg",
        price: 12.0,
        rating: 5,
        brand: "",
        descriptionTitle: "Hanes Women's EcoSmart Full-Zip Hoodie Sweatshirt ",
        fullDescription: [
          `50% Cotton, 50% Polyester`,
          `Imported`,
          `Zipper closure`,
          `Machine Wash`,
          `Soft and cozy cotton-blend fleece keeps you warm and comfortable`,
          `Ribbed hem and cuffs`,
          `Full-zip hood for easy on and off`,
        ],
        linkUrl: "/70",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 71,
        imageUrl:
          "https://m.media-amazon.com/images/I/719xLcNKTIL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/719xLcNKTIL._AC_UL320_.jpg",
        price: 32.99,
        rating: 5,
        brand: "Disney",
        descriptionTitle:
          "Ladies Lilo and Stitch Sweatshirt - Ladies Classic Lilo and Stitch Hoodie with Foil ",
        fullDescription: [
          `Machine Wash`,
          `✔ Favorite Character: Get your fashion on with a sweatshirt featuring Lilo and Stitch. Each sweatshirt has a colorful print with your favorite Lilo and Stitch pose.`,
          `✔ Lilo & Stitch: A tale of a young girl's close encounter with the galaxy's most wanted extraterrestrial. Lilo is a lonely Hawaiian girl who adopts a small ugly "dog," whom she names Stitch. Stitch would be the perfect pet if he weren't in reality a genetic experiment who has escaped from an alien planet and crash-landed on Earth.`,
          `✔ Officially Licensed Disney Apparel: Officially licensed apparel and high-quality prints on this Disney Lilo and Stitch sweatshirt make it the perfect gift for women everywhere. Whether it be for and achievement, Halloween, Christmas or a birthday.`,
          `✔ Sweatshirt: A classic crew cut neck make these comfortable graphic sweatshirt ones women will want to wear.`,
          `✔ Juniors Sizes: Choose from juniors sizes X-Small, Small, Medium, Large, X-Large, XX-Large and 3X-Large in these shirts!`,
        ],
        linkUrl: "/71",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 72,
        imageUrl:
          "https://m.media-amazon.com/images/I/71r2sik24AL._AC_UL320_.jpg",
        zoomImage:
          "https://m.media-amazon.com/images/I/71r2sik24AL._AC_UL320_.jpg",
        price: 13.99,
        rating: 5,
        brand: "",
        descriptionTitle:
          "SweatyRocks Women's Casual Heart Print Long Sleeve Pullover Hoodie Sweatshirt Tops ",
        fullDescription: [
          `Pull On closure`,
          `95% Polyester, 5% Spandex, fabric has some stretch`,
          `Kangaroo pocket, drawstring hoodie, drop shoulder, tie dye print, long sleeve pullover sweatshirt`,
          `Occasion: suitable for spring and fall for work,sports and daily`,
          `Graphic sweatshirts with a pocket front, pairing it with jeans and sneakers`,
          `Please refer to the size measurement in image before ordering`,
        ],
        linkUrl: "/72",
      },
    ],
  },
  laptops: {
    id: 9,
    title: "Shop Laptops & Tablets",
    linkUrl: "laptops",
    items: [
      {
        amazonChoice: true,
        bestSeller: false,
        id: 73,
        imageUrl:
          "https://m.media-amazon.com/images/I/71AmKW4yuMS._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71AmKW4yuMS._AC_SL1500_.jpg",
        price: 364.76,
        rating: 5,
        brand: "Acer",
        descriptionTitle: `Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6" Full HD IPS | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | Amazon Alexa | Windows 10 Home (S mode) `,
        fullDescription: [
          `Powerful Productivity: AMD Ryzen 3 3350U delivers desktop-class performance and amazing battery life in a slim notebook. With Precision Boost, get up to 3.5GHz for your high-demand applications`,
          `Maximized Visuals: See even more on the stunning 15.6" Full HD display with 82.58% screen-to-body, 16:9 aspect ratio and narrow bezels`,
          `Backlit Keyboard and Fingerprint Reader: Biometric fingerprint reader and Windows Hello sign-in options help keep your Acer PC secure`,
          `Internal Specifications: 4GB DDR4 on-board memory (1 slot available); 128GB NVMe solid-state drive storage (1 hard drive bay available) to store your files and media`,
          `Acer's Purified.Voice technology, features enhanced digital signal processing to cancel out background noise, improve speech accuracy and far-field pickup, which not only makes calls clearer, but makes talking to Alexa easier than before.`,
          `Using Alexa on your PC is as easy as asking a question. Just ask and Alexa can check your calendar, create lists, play music, answer questions, read the news and more.`,
          `Secure Operating System: Windows 10 Home (S mode) comes with advanced security features built right in, like protections against phishing and malicious software so you don't have to think twice when navigating to a new webpage or downloading an app `,
        ],
        linkUrl: "/73",
      },
      {
        amazonChoice: false,
        bestSeller: true,
        id: 74,
        imageUrl:
          "https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg",
        price: 598.0,
        rating: 5,
        brand: "Lenovo",
        descriptionTitle: `Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey `,
        fullDescription: [
          `Thin, light, and stylish – This 2-in-1 laptop weighs just 3.64 pounds and is only 0.82" thick. It's soft and comfortable to the touch, with a durable paint that creates a better user experience. Digital pen included`,
          `The 10-point, 14-inch FHD (1920 x 1080) IPS touchscreen allows the Lenovo Flex 5 14" 2-in-1 laptop to be comfortable, fun, and easy to use. It's also great to look at, with 4-side narrow bezels`,
          `The 360⁰ hinge lets you use your 2-in-1 touchscreen laptop in whatever mode works best for you; Use it in 'Laptop' mode for everyday computing, 'Tent' mode for sharing things, 'Stand' mode for binge-watching, or 'Tablet' mode for more intuitive interaction`,
          `Enjoy up to 10 hours of battery life, plus quick charge to 80% in just 1 hour`,
          `Powered by the AMD Ryzen 5 4500U mobile processor with Radeon graphics, you have the performance to do more, from anywhere. With more cores, you'll experience responsiveness that leaps into action for productivity, gaming, and content creation `,
        ],
        linkUrl: "/74",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 75,
        imageUrl:
          "https://m.media-amazon.com/images/I/81b6IIclRfS._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81b6IIclRfS._AC_SL1500_.jpg",
        price: 269.0,
        rating: 5,
        brand: "HP",
        descriptionTitle:
          "HP Chromebook 14 Laptop, Intel Celeron N4000 Processor, 4 GB RAM, 32 GB eMMC, 14” HD Display, Chrome, Lightweight Computer with Webcam and Dual Mics, Home, School, Music, Movies (14a-na0021nr, 2021) ",
        fullDescription: [
          `REMOTE WORK READY - Work efficiently from the comfort of your own home office using the HP 14" Chromebook.`,
          `CLEAR IMAGING - Images appear crisp with the 14" HD (1366 x 768), micro-edge, anti-glare (1) display.`,
          `LIGHTNING FAST PROCESSING - Games, music, and binge watching are taken to new heights with Intel Celeron N4000 (2) processing power and Intel UHD Graphics 600 (3).`,
          `SECURELY SAVE YOUR WORK - With 32 GB eMMC storage (4), saving important documents is made simple. Plus, quickly access your documents with 4 GB of RAM.`,
          `LONG-LASTING BATTERY LIFE - Enjoy up to 13 hours and 30 minutes of wireless streaming (5) depending usage.`,
          `MODERNIZE YOUR WORLD - Navigate seamlessly through tabs and programs with the Chrome operating system. Also, rest easy knowing your investment is protected with HP’s 1-Year Limited Hardware Warranty.`,
          `BE SEEN & HEARD - HP’s Wide Vision HD camera (6) with integrated dual array digital microphones lets you video chat with vibrant clarity. `,
        ],
        linkUrl: "/75",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 76,
        imageUrl:
          "https://m.media-amazon.com/images/I/81f-JgUXsoS._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81f-JgUXsoS._AC_SL1500_.jpg",
        price: 949.99,
        rating: 5,
        brand: "ASUS",
        descriptionTitle:
          "ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop, 15.6” 144Hz FHD, GeForce RTX 3050 Ti, Intel Core i7-11370H, 8GB DDR4, 512GB PCIe NVMe SSD, Wi-Fi 6, Windows 10, Eclipse Grey Color, TUF516PE-AB73 ",
        fullDescription: [
          `NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 up to 1585MHz at 60W (75W with Dynamic Boost 2.0)`,
          `Intel Core i7-11370H processor (12M Cache, up to 4.8GHz)`,
          `15.6” 144Hz IPS-Type Full HD (1920x1080) display with adaptive sync`,
          `8GB DDR4 RAM | 512GB PCIe NVMe M.2 SSD | Backlit Precision Gaming Keyboard | Windows 10 Home`,
          `0.8” thin, 4.4 lbs ultraportable form-factor `,
        ],
        linkUrl: "/76",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 77,
        imageUrl:
          "https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg",
        price: 399.99,
        rating: 5,
        brand: "ASUS",
        descriptionTitle:
          "ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34",
        fullDescription: [
          `15.6 inch Full HD (1920x1080) 4-way NanoEdge bezel display with a stunning 88% screen-to-body ratio`,
          `Compatible with Google Classroom; run Google Classroom on Microsoft Edge or Internet Explorer 11`,
          `Latest 10th Gen Intel Core i3-1005G1 CPU (4M Cache, up to 3.4 GHz)`,
          `8 GB DDR4 RAM and 128 GB PCIe NVMe M.2 SSD`,
          `Ergonomic backlit keyboard with fingerprint sensor activated via Windows Hello`,
          `Exclusive Ergolift design for an improved typing position`,
          `Comprehensive connections including USB 3.2 Type-C, USB 3.2 Type-A, USB 2.0, and HDMI; Gigabit Wi-Fi 5 (802.11ac) (USB Transfer speed may vary. Learn more at ASUS website)`,
          `Windows 10 in S mode exclusively runs apps from the Microsoft Store. To install an app that isn't available in the Microsoft Store, simply switch out of S mode in three easy steps. There's no charge to switch out of S mode `,
        ],
        linkUrl: "/77",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 78,
        imageUrl:
          "https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg",
        price: 835.9,
        rating: 5,
        brand: "Acer",
        descriptionTitle: "",
        fullDescription: [
          ` 9th Generation Intel Core i5-9300H Processor (Up to 4.1 GHz)`,
          `15.6 inches Full HD Widescreen IPS LED-backlit display; NVIDIA GeForce GTX 1650 Graphics with 4 GB of dedicated GDDR5 VRAM`,
          `8GB DDR4 2666MHz Memory; 256GB PCIe NVMe SSD (2 x PCIe M.2 slots - 1 slot open for easy upgrades) & 1 - Available hard drive bay`,
          `LAN: 10/100/1000 Gigabit Ethernet LAN (RJ-45 port); Wireless: Intel Wireless Wi-Fi 6 AX200 802.11ax`,
          `Backlit keyboard; Acer Cool Boost technology with twin fans and dual exhaust ports `,
        ],
        linkUrl: "/78",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 79,
        imageUrl:
          "https://m.media-amazon.com/images/I/71MvL2kCFCL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71MvL2kCFCL._AC_SL1500_.jpg",
        price: 197.88,
        rating: 5,
        brand: "SAMSUNG",
        descriptionTitle:
          "Samsung Galaxy Tab A7 10.4 Wi-Fi 32GB Silver (SM-T500NZSAXAR) ",
        fullDescription: [
          `SLIM, STYLISH DESIGN: Stream and browse on a 10.4-inch ultra-widescreen display designed to bring your content to life without weighing you down. The front-facing, landscape-oriented camera allows you to transition between entertainment and video calls seamlessly.`,
          `DOLBY ATMOS SURROUND SOUND: With an enhanced quad speaker system that plays everything in Dolby Atmos surround sound, you’ll always feel like you’re listening from the front row.`,
          `PREMIUM ENTERTAINMENT, ON US: With purchase of Galaxy Tab A7, get two months of free YouTube Premium and six months of free Spotify Premium. Battery Type and Size-7,040mAh`,
          `DO MORE OF WHAT YOU LOVE: Powerful processing speeds and upgraded memory means you can do more, and keep more, of the things you love: apps, videos, playlists and beyond.`,
          `BINGE-WORTHY BATTERY: Galaxy Tab A7’s enhanced battery is designed for busy days and includes a fast-charging USB-C port that quickly gets you back to 100 percent.`,
          `CONNECT TO YOUR GALAXY: Samsung devices work together to elevate your downtime. Connecting your tablet with your Galaxy Watch3, for example, is as easy as logging into your Samsung account.`,
          `YOUR MOMENTS, SHARED IN A MOMENT: Sharing content can be fast and simple. Galaxy Tab A7 has the option to connect to family members’ devices so you can easily exchange photos, reminders, notes and calendar events.`,
          `Measured diagonally as a full rectangle without accounting for the rounded corners. Actual viewable area is less due to the rounded corners and camera hole. Free with eligible purchase. New users only (no past trial of YouTube Premium, YouTube Music Premium, YouTube Red or Google Play Music). Redeem in the YouTube application on eligible devices between February 14, 2020 and April 5, 2021 at 11:59pm PST. Credit or debit card required as form of payment. After trial, $11.99/month will be billed on a recurring monthly basis. Cancel anytime. No refunds for partial billing periods. The Spotify Premium and Samsung New, 6 Month Free Trial Offer subject to additional terms. After 6- month trial period, Spotify Premium will renew at $9.99/mo. unless you cancel. Offer not available to users who already tried Premium. As compared to Galaxy Tab A 10.1. A data connection is required for sharing. The Reminder app does not come pre-installed and must be downloaded from Galaxy Store. Must always be linked to a Samsung Account. `,
        ],
        linkUrl: "/79",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 80,
        imageUrl:
          "https://m.media-amazon.com/images/I/81skV7BufjL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81skV7BufjL._AC_SL1500_.jpg",
        price: 693.99,
        rating: 5,
        brand: "HP",
        descriptionTitle:
          "HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS Display, Windows 10 Home, HP Fast Charge, Lightweight Design (15-dy2021nr, 2020) ",
        fullDescription: [
          `TAKE IT ANYWHERE – With its thin and light design, 6.5 millimeter micro-edge bezel display, and 82% screen to body ratio, you can take this PC anywhere and see more of what you love (1).`,
          `REVOLUTIONARY ENTERTAINMENT – Enjoy ultra-wide viewing angles and seamlessly perform multi-monitor set-ups with a 15.6-inch, Full HD, IPS, micro-edge, and anti-glare display (2).`,
          `IMPRESSIVE GRAPHICS – The Intel Iris Xe Graphics gives you a new level of performance with crisp, stunning visuals, plus the convenience of a thin and light laptop (3).`,
          `UNSTOPPABLE PERFORMANCE – Get things done fast with the 11th Generation Intel Core i5-1135G7 processor, which delivers instant responsiveness and best-in-class connectivity (4).`,
          `MEMORY AND STORAGE – Get up to 15x faster performance than a traditional hard drive with 256 GB PCIe NVMe M.2 SSD storage and experience improved multitasking with higher bandwidth thanks to 8 GB of RAM (5).`,
          `WORK ON THE GO – Get work done on the go with a long battery life of up to 7 hours and 15 minutes (6), while HP Fast Charge lets you go from 0 to 50% charge in approximately 45 minutes (7).`,
          `OS AND WARRANTY – Do more with greater peace of mind thanks to the familiar feel of the Windows 10 Home operating system and the HP 1-year limited hardware warranty (8). `,
        ],
        linkUrl: "/80",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 81,
        imageUrl:
          "https://m.media-amazon.com/images/I/810naSDT+2L._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/810naSDT%2B2L._AC_SL1500_.jpg",
        price: 3199.0,
        rating: 5,
        brand: "",
        descriptionTitle:
          "OMEN 30L Gaming Desktop PC, NVIDIA GeForce RTX 3080 Graphics Card, 10th Generation Intel Core i9-10850K Processor, 32 GB RAM, 1 TB SSD and 2 TB Hard Drive, Windows 10 Home (GT13-0092, 2020) ",
        fullDescription: [
          `READY TO PLAY – Sure, skills are important, but with the OMEN 30L Desktop PC’s powerful processor, stunning graphics, and a large front fan you really can’t make any more excuses for losing`,
          `ULTIMATE GAMING – The GeForce RTX 3080 delivers the ultra-performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture; with 10 GB GDDR6X dedicated memory, your 4k gaming experience will never look smoother`,
          `MAKE IT YOURS – Let your desktop reflect your style with easy to upgrade hardware and OMEN Command Center’s growing list of customization and optimization features`,
          `POWERFUL PROCESSOR – Game, stream, create, and edit multimedia content faster than ever with 10th Generation Intel Core i9-10850K processor with liquid cooling`,
          `DUAL STORAGE OPTIONS – By including both 1 TB PCIe NVMe M.2 Solid State Drive for the operating system and 2 TB 7200RPM SATA hard drive, you get the benefits of both worlds—fast boot-up times, snappy responsiveness, and larger storage capacity`,
          `HYPERX DDR4 MEMORY – With 32 GB of RAM, everything from browsing multiple web pages to playing games gets a boost`,
          `VR READY – Enjoy optimal VR performance as your desktop is VR ready right out of the box `,
        ],
        linkUrl: "/81",
      },
    ],
  },
  homebed: {
    id: 10,
    title: "Explore home bedding",
    linkUrl: "homebed",
    items: [
      {
        amazonChoice: true,
        bestSeller: false,
        id: 82,
        imageUrl:
          "https://m.media-amazon.com/images/I/61MN+nFRb-S._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61MN%2BnFRb-S._AC_SL1500_.jpg",
        price: 56.99,
        rating: 5,
        brand: "Bare Home",
        descriptionTitle:
          "Bare Home Bedding Set 7 Piece Comforter & Sheet Set - Queen - Goose Down Alternative - Ultra-Soft 1800 Premium Bed Set (Queen, Grey/Light Grey) ",
        fullDescription: [
          `Luxurious 1800 Ultra Soft Double Brushed 100% Microfiber`,
          `EXTREMELY SOFT AND COZY: Bare Home 7 Piece, Premium Bedding Set for Queen is everything you need for a dreamy night’s sleep with a luxurious siliconized fiber filling, it is truly all season. Enjoy feeling warm and snug on a chilly evening while still feeling just right the rest of the year.`,
          `PACKAGE INCLUDES: 1x Grey Queen Comforter (88" x 90"), 1x Light Grey Fitted Sheet (60" x 80" x 15"), 1x Light Grey Flat Sheet (90" x 102"), 2x Grey Pillow Shams (Standard Size, 20" x 26") and 2x Light Grey Pillowcases (Standard Size, 20" x 30")`,
          `MASTERFUL CONSTRUCTION: Bare Home comforters feature a solid box stitch to contain the fill and prevent shifting or bunching. Piped edges provide a clean and elegant look. Our Luxury 1800 premium ultra-soft microfiber fabric is woven with the finest craftsmanship. Exquisitely designed with a perfect combination of durability and softness.`,
          `REST ASSURED: Your first 30 nights are on us. Literally. If you don’t love our bedding set, send them back. `,
        ],
        linkUrl: "/82",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 83,
        imageUrl:
          "https://m.media-amazon.com/images/I/81DykcnDS2S._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81DykcnDS2S._AC_SL1500_.jpg",
        price: 30.99,
        rating: 5,
        brand: "Dreamcountry",
        descriptionTitle:
          "Dreamcountry 100% Cotton Duvet Cover Set 3 Pieces Soft and Breathable Duvet Covers with Zipper and 8 Closures Home Bedding Sets for All-Season Luxury Comforter Cover (1 Duvet Cover + 2 Pillowcases ) ",
        fullDescription: [
          `100% PURE COTTON: This duvet cover set tested by Oeko-TEX Certified and made from 100% natural cotton which provide exceptional softness and comfort to make you sleep soundly all night, even sleeping naked can feel warm and comfortable. 100% cotton material makes our comforter cover set suitable for all seasons.`,
          `METAL ZIPPER AND CORNER TIES: In order to save your time in changing your duvet and comforter, we have adopted a more convenient 51" long metal zipper closure seals off your comfy quilt zipper design; at the same time, are you still worried about the comforter getting curled up at night? There are 8 corner ties in the duvet cover, to hold the comforter in place, without fear of slipping and gathering into a ball. our duvet covers have which can better keep your duvet or comforter from slipping.`,
          `BEAUTIFUL LIFESTYLE: Professionally produced with comfort in mind, give the color a dull room needs, our beautifully and well-designed geometric patterns and floral patterned duvet covers add brightness and style to your home. infuse your space more vibrantly.`,
          `WHAT SIZES YOU CAN CHOOSE: Available in twin duvet cover: 1duvet cover set (68"x 90") & 1 pillowcase (20"x 26") ; Available in duvet cover full/queen: 1 duvet cover set (90"x 90") & 2 pillowcases (20"x 26"); Available in duvet cover king: 1 duvet cover set (104"x 90") & 2 pillowcases (20"x 36").`,
          `EASY CARE : Our duvet cover fit for machine wash in cold, tumble dry with low heat, you could wash them before first use. Do not bleach or dry clean. We have absolute confidence and credit for you to trust! `,
        ],
        linkUrl: "/83",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 84,
        imageUrl:
          "https://m.media-amazon.com/images/I/81LA0+qmI1S._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/81LA0%2BqmI1S._AC_SL1500_.jpg",
        price: 68.95,
        rating: 5,
        brand: "Chic Home",
        descriptionTitle:
          "Chic Home Ayelet 10 Piece Comforter Set Color Block Ruffled Bag Bedding, Queen, Navy ",
        fullDescription: [
          ` 100% Polyester`,
          `LUXURIOUS SUPER SOFT PLUSH MICROFIBER - The comforter is made with premium quality cotton-feel brushed microfiber for an amazing night’s sleep`,
          `DOWN ALTERNATIVE HYPOALLERGENIC FILLING - This Chic Home comforter is stuffed with hypoallergenic synthetic filling, ideal for those with allergies`,
          `STYLE AND COMFORT - Our fashion forward comforter sets blend style and function to give you the best looking and most comfortable bedding`,
          `SOPHISTICATED DESIGN - Elegant color block theme with ruffled details - Color and design coordinated shams and decorative pillows included`,
          `MADE WITH YOU IN MIND - Every set is made with strict quality control and comes with a queen size comforter, sheet set, deco pillows and shams`,
        ],
        linkUrl: "/84",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 85,
        imageUrl:
          "https://m.media-amazon.com/images/I/A1QtojIszDL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/A1QtojIszDL._AC_SL1500_.jpg",
        price: 117.71,
        rating: 5,
        brand: "VCNY Home",
        descriptionTitle:
          "VCNY Home | Westland Collection | Soft and Plush Quilted Faux Mink Fur Bedspread, Premium 3 Piece Bedding Set, Elegant and Charming Design for Home Décor, King, Ivory ",
        fullDescription: [
          ` Microfiber`,
          `INCLUDES: (1) King Size Bedspread, (2) King Size Shams`,
          `FABRIC DETAILS: Super-soft and plush, 100% microfiber`,
          `DIMENSIONS: Bedspread (120 inches x 118 inches), Shams (20 inches x 36 inches)`,
          `CARE INSTRUCTIONS: Machine wash cold, gently and separately. Tumble dry low. Do not bleach or iron. `,
        ],
        linkUrl: "/85",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 86,
        imageUrl:
          "https://m.media-amazon.com/images/I/915BWTjx-LL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/915BWTjx-LL._AC_SL1500_.jpg",
        price: 87.7,
        rating: 5,
        brand: "Laura Ashley Home",
        descriptionTitle:
          "Laura Ashley Home | Paisley Patchwork Collection | Quilt Set - 100% Cotton, Reversible, Lightweight & Breathable Bedding, Pre-Washed for Added Softness, Queen, Blue ",
        fullDescription: [
          ` 100% Cotton`,
          `QUALITY FABRIC: Made from 100% cotton, a natural fiber that is breathable`,
          `SOFT & DURABLE: Lightweight yet warm, ideal for year-round use and layering; Pre-washed for extra softness`,
          `COTTON RICH FILL: Filled with a blend of 80% Cotton 20% Polyester for warmth and durability`,
          `PIECES INCLUDED: 3-PIECE SET- Full Queen Quilt (1-Piece Included): 90"W X 90"L, Standard Sham (2-Pieces Included): 21"L X 27"W`,
          `SHAMS: Included shams have a back envelope closure `,
        ],
        linkUrl: "/86",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 87,
        imageUrl:
          "https://m.media-amazon.com/images/I/618GuDGZk0L._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/618GuDGZk0L._AC_SL1499_.jpg",
        price: 21.32,
        rating: 5,
        brand: "Sweet Home Collection",
        descriptionTitle:
          "Sweet Home Collection 1800 Thread Count Soft Egyptian Quality Brushed Microfiber Luxury Bedding Set with Flat, Fitted Sheet, 2 Pillow Cases, Full, Mint ",
        fullDescription: [
          `100% Microfiber`,
          `Imported`,
          `LIE IN LUXURY – No more sleepless nights on uncomfortably itchy sheets! Sleep soundly on the softest 1800 thread count microfiber sheets. They become softer with each wash and stay cool through the night. Be warned, though: You may never be an early bird again!`,
          `SUPERB SHEET SET – Treat yourself to a matching sheet set for any and all of your bedrooms! Each luxurious sheet set contains 1 fitted sheet, 1 flat sheet, and 2 standard pillowcases. Plus, you won’t lose any shuteye from fitted sheets that fall off. Deep pockets and thick elastic make your new soft sheets stay in place!`,
          `STAY CLEANER, LONGER – Who has time to wash their sheets every few nights? Your new sheets are hypoallergenic, antibacterial, and dust mite resistant! Plus, the 100% polyester luxury bedding is resistant to odors and bacteria. And when it’s time for a wash, machine wash cold, and tumble dry low.`,
          `PERFECT FIT FOR ANY BED – Sleep soundly for years to come! Your deep pocket sheets are fade, shrink, and wrinkle resistant. No matter if you need toddler bedding sets for boys, full size sheets for your teen, or queen and king size sheets for yourself, we’ve got you (and your bed) covered.`,
          `SLEEP TIGHT SATISFACTION GUARANTEE – Get a good night’s sleep knowing your affordable bedroom decor also comes with access to top-notch customer service! Contact our team if you have questions, comments, or concerns, and we’ll do what it takes to make things right. `,
        ],
        linkUrl: "/87",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 88,
        imageUrl:
          "https://m.media-amazon.com/images/I/71y5emCyuJL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71y5emCyuJL._AC_SL1000_.jpg",
        price: 32.99,
        rating: 5,
        brand: "ARL HOME",
        descriptionTitle:
          "ARL HOME Tropical Bedding Rainforest Duvet Cover Twin Size Green Plant Palm Leaves Quilt Cover 2PC Forest Botanical Leaf Duvet Cover+ 1 Pillow Cases ",
        fullDescription: [
          `✔[2 PIECES]: Tropical Rainforest Green Botanical Leaves Duvet Cover Set > = Twin size, including 1 * duvet: 68" x86", 1 * pillowcase: 20" x 26" (excluding comforter and insert)`,
          `✔[MICROFIBER FABRIC]: 100% polyester, high quality microfiber surprisingly soft and breathable for sensitive skin. Comfortable, durable, breathable, wrinkle-free, easy to clean, bright colors will not fade after repeated washing`,
          `✔[EASY TO ASSEMBLE CARE]: The concealed zip closure makes it easy to place and remove the duvet, making it easy to insert the duvet into place. Machine wash in cold water, wear-resistant, anti-wrinkle, gentle circulation, low temperature drying`,
          `✔[SURPRISE GIFT]: Rainforest Green plant theme Duvet cover comfortable bed and Cool room decor, beautiful personality quilt cover and pillowcase, suitable for girls or little princesses, children, boys, girls, Adolescents, children, women, men's surprise gifts`,
          `✔[IMPORTANT NOTE]: ARL HOME sincerely provides you with satisfactory customer service and is committed to providing a good shopping experience. If you are not satisfied with our duvet, please contact us and we will be happy to answer your questions in a short time. `,
        ],
        linkUrl: "/88",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 89,
        imageUrl:
          "https://m.media-amazon.com/images/I/91lMtRv54hL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/91lMtRv54hL._AC_SL1500_.jpg",
        price: 59.99,
        rating: 5,
        brand: "Cozy Line Home Fashions",
        descriptionTitle:
          "Cozy Line Home Fashions Floral Paisley Reversible Quilt Bedding Set, Bedspread, Coverlet, 1 Quilt and 2 Pillow Shams (Flourish, King - 3 Piece) ",
        fullDescription: [
          `Microfiber`,
          `King - 3 Piece Set includes 1 Quilt (106 in wide x 92 in long), 2 King Shams (20 in wide x 36 in long)`,
          `VERSATILE & LIGHTWEIGHT: Provide ultimate lightweight and fabulous sleeping comfort with reversible user-friendly quilt design - Versatile usages as bedspread or coverlet to provide warmth and softness with plum blossom printed floral quilt - Perfect as a home decor accessory or wedding gifts; NO.1 Choice for your families or friends on birthdays.`,
          `PERFECT HOME DECORATION: Quilt Set measured by 106" x 92" is a perfect choice for homeowners with sophisticated tastes in home decoration - Abundant plum floral pattern reveals the beauty of traditional grace for coverlet to embellish your room - Classic design of artistic bedspread ensures delight night’s rest to improve your sleep. `,
        ],
        linkUrl: "/89",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 90,
        imageUrl:
          "https://m.media-amazon.com/images/I/71pXbXCpojL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71ioU%2B44wbL._AC_SL1500_.jpg",
        price: 83.99,
        rating: 5,
        brand: "MERRY HOME",
        descriptionTitle: `MERRY HOME Comforter Set Queen, 10 Piece Comforter Bedding Set with Sheet Set Fit 14" Deep Pocket - Plush Luxury Solid Color Quilted Pattern for All Season, Black `,
        fullDescription: [
          `SOFT DURABLE & ELEGANT DESIGN - Bedding Comforter Set are crafted with premium quality durable microfiber fabric which provides better gentle texture and wrinkle resistance, you will feel ultra soft and comfortable, and enhance your sleeping experience.The fabric express plain pattern effects, add a chic feeling for your bedroom.`,
          `QUEEN COMFORTER SET BED IN BAG 10 PIECE - 1x Comforter 90"x90", 1x Flat Sheet 90"x 102", 1x Fitted Sheet 60"x80"+14", 2x Pillowcase: 20"x26", 1x Bedskirt 60"x80"+14", 2x Shams 20"x26"+2", 1x Rectangle Decorative Pillow 12"x18", 1x Square Decorative Pillow 17"x 17"`,
          `STAY WARM AND COOL UNDER COVER - All year round with the simple morden design comforter with quilted embroidered details with lightweight synthetic alternative down filling the comforter will keep you warm in the winter and comfortable in the summer`,
          `EASY CARE - Machine wash cold, gentle cycle, and separately. Do not bleach. Tumble dry low, remove promptly, do not iron`,
          `KINDLY NOTE: This is a Korean style comforter. All sizes are designed by standard Asia size, which is smaller than the US standard size. If you want to enjoy an oversize style comforter, please check our dimensions carefully or select a bigger size than your actual bed size. Thank you. `,
        ],
        linkUrl: "/90",
      },
    ],
  },
  gamingmerchandise: {
    id: 11,
    title: "Gaming merchandise",
    linkUrl: "gamingmerchandise",
    items: [
      {
        amazonChoice: false,
        bestSeller: false,
        id: 91,
        imageUrl:
          "https://m.media-amazon.com/images/I/71paLqMonlL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71paLqMonlL._AC_SL1500_.jpg",
        price: 31.9,
        rating: 5,
        brand: "Marvel Classic",
        descriptionTitle:
          "Hasbro Marvel Legends Series Venom 6-inch Collectible Action Figure Toy Carnage, Premium Design and 1 Accessory ",
        fullDescription: [
          `6-INCH-SCALE COLLECTIBLE CARNAGE FIGURE: Fans, collectors, and kids alike can enjoy this 6-inch-scale figure, inspired by the character from the Marvel comics.`,
          `MARVEL COMIC-INSPIRED DESIGN: Carnage figure features premium design, detail, and articulation for posing and display in a Marvel collection.`,
          `PREMIUM ARTICULATION AND DETAILING: This quality 6-inch Hasbro Marvel Legends Series Venom Carnage figure features multiple points of articulation and is a great addition to any action figure collection.`,
          `MARVEL UNIVERSE IN 6-INCH SCALE: Look for other Hasbro Marvel Legends Series Venom figures (each sold separately) with comic- and movie-inspired characters, including Venom, Morbius, and Miles Morales. (Additional figures each sold separately. Subject to availability.) `,
        ],
        linkUrl: "/91",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 92,
        imageUrl:
          "https://m.media-amazon.com/images/I/714j2r9ms0L._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/714j2r9ms0L._AC_SL1500_.jpg",
        price: 12.0,
        rating: 5,
        brand: "",
        descriptionTitle: "McFarlane - DC Gaming 7 Figures Wave 3 - Flash ",
        fullDescription: [
          `Incredibly detailed 7" scale figures based off the DC Multiverse`,
          `Designed with Ultra Articulation with up to 22 moving parts for full range of posing and play`,
          `The Flash is featured in his Speedster Armor Set and the Scarlet Speedster Shader`,
          `Includes collectable art card with The Flash artwork on front and character biography on the back`,
          `Showcased in DC themed window box packaging `,
        ],
        linkUrl: "/92",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 93,
        imageUrl:
          "https://m.media-amazon.com/images/I/71QDDwb5AdL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71QDDwb5AdL._AC_SL1500_.jpg",
        price: 85.99,
        rating: 5,
        brand: "McFarlane Toys",
        descriptionTitle: "McFarlane Toys Call of Duty Ghost 2 Action Figure ",
        fullDescription: [
          `Incredibly detailed sculpt of Simon “Ghost” Riley modeled from in-game assets`,
          `Features Ghost’s ALL-New iconic in-game outfit worn in Season 2 of the the hit video game, Call of Duty: Modern Warfare`,
          `Includes a code for downloadable in-game content`,
          `Features Ultra Articulation with 22 Moving Parts`,
          `Comes with assault rifle, ammunition pack and removable poncho`,
          `Showcased in call of Duty themed window box packaging `,
        ],
        linkUrl: "/93",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 94,
        imageUrl:
          "https://m.media-amazon.com/images/I/51KSEnOHbbL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/51KSEnOHbbL._AC_SL1026_.jpg",
        price: 74.95,
        rating: 5,
        brand: " 	Hasbro",
        descriptionTitle:
          "Hasbro Star Wars The Black Series Gaming Greats 6 Inch Action Figure Exclusive - Jango Fett (Shelf Wear Packaging) ",
        fullDescription: [
          `Star Wars The Black Series Gaming Greats 6 Inch Action Figure Exclusive - Jango Fett (Shelf Wear Packaging)`,
          `Star Wars`,
          `Hasbro`,
          `6 Inch`,
        ],
        linkUrl: "/94",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 95,
        imageUrl:
          "https://m.media-amazon.com/images/I/71wzNWx-JvS._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71wzNWx-JvS._AC_SL1500_.jpg",
        price: 39.73,
        rating: 5,
        brand: "Hasbro",
        descriptionTitle:
          "Star Wars The Black Series Gaming Greats 6 Inch Action Figure Box Art Exclusive - Imperial Rocket Trooper ",
        fullDescription: [
          `Star Wars The Black Series Gaming Greats 6 Inch Action Figure Box Art Exclusive - Imperial Rocket Trooper`,
          `Star Wars`,
          `Hasbro`,
          `6 Inch `,
        ],
        linkUrl: "/95",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 96,
        imageUrl:
          "https://m.media-amazon.com/images/I/61vd2W+YAnL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61vd2W%2BYAnL._AC_SL1500_.jpg",
        price: 27.62,
        rating: 5,
        brand: "Hasbro",
        descriptionTitle:
          "Star Wars The Vintage Collection Gaming Greats Heavy Battle Droid 3 3/4-Inch Action Figure ",
        fullDescription: [
          `Fully articulated with poseable head, arms, and legs, this Heavy Battle Droid figure featuring realistic detail can be displayed in action figure and vehicle collections. Armed with heavier firepower than ever, this Trade Federation surplus robot is now ready to take on every force in the galaxy! `,
        ],
        linkUrl: "/96",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 97,
        imageUrl:
          "https://m.media-amazon.com/images/I/61i6C4-aDnL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61i6C4-aDnL._AC_SL1500_.jpg",
        price: 14.0,
        rating: 5,
        brand: "Dragon Ball Super",
        descriptionTitle: `Dragon Ball Super Limit Breaker 12" Action Figure - Goku, Model Number: 36737 `,
        fullDescription: [
          `BANDAI’S DRAGON BALL SUPER LIMIT BREAKER 12-INCH FIGURE: Fans and collectors of all ages will be thrilled by Bandai’s Dragon Ball Super Limit Breaker figures. Bring the exciting world of Dragon Ball Super into your home`,
          `DESIGN INSPIRED BY THE POPULAR ANIME TV SERIES: The 12-inch Bandai’s Dragon Ball Super Limit Breaker has an authentic look so you can recreate your favorite scenes from the TV show. It is both playable and durable and will survive any battles you put it through`,
          `COOL ANIME INSPIRED PACKAGING: Figure comes packaged with impressive Japanese inspired graphics that makes it look cool and feel authentic`,
          `AUTHENTIC ARTICULATION AND REALISTIC DETAILS: High quality, well-made 12-inch figure has 5 points of articulation for you to perfectly pose, play and display your love of the character and the world of Dragon Ball Super`,
          `A WHOLE WORLD OF DRAGON BALL IN 12 INCH SCALE: Fans can easily find a full range of your favorite characters and collect them all to build their own world of Dragon Ball exclusively from Bandai. Each figure sold separately `,
        ],
        linkUrl: "/97",
      },
      {
        amazonChoice: false,
        bestSeller: false,
        id: 98,
        imageUrl:
          "https://m.media-amazon.com/images/I/71RejvcJ9OL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/71RejvcJ9OL._AC_SL1500_.jpg",
        price: 19.99,
        rating: 5,
        brand: "McFarlane Toys",
        descriptionTitle: `McFarlane Toys Disney Mirrorverse Buzz Lightyear 7" Action Figure with Accessories`,
        fullDescription: [
          `Incredibly detailed 7” scale figure based on the upcoming Disney Mirrorverse mobile game`,
          `Designed with Ultra Articulation with up to 22 moving parts for full range of posing and play`,
          `Comes with removable wings, and a base`,
          `Includes collectable art card with Disney Mirrorverse artwork on the front, and character biography on the back`,
          `Showcased in Disney Mirrorverse window box packaging`,
          `Collect all Disney Mirrorverse 5" & 7" Action Figures from McFarlane Toys `,
        ],
        linkUrl: "/98",
      },
      {
        amazonChoice: true,
        bestSeller: false,
        id: 99,
        imageUrl:
          "https://m.media-amazon.com/images/I/61-jTU7h4fL._AC_UL320_.jpg",
        zoomImage:
          "https://images-na.ssl-images-amazon.com/images/I/61-jTU7h4fL._AC_SL1500_.jpg",
        price: 19.99,
        rating: 5,
        brand: "McFarlane Toys",
        descriptionTitle: `McFarlane Toys DC Multiverse Batman: Arkham Asylum The Joker 7" Action Figure `,
        fullDescription: [
          `Incredibly detailed 7” scale figures based off the DC Multiverse`,
          `Designed with Ultra Articulation with up to 22 moving parts for full range of posing and play`,
          `The Joker figure based on the video game Batman Arkham Asylum`,
          `The Joker accessories include blaster two chattering teeth and base`,
          `Included collectible art card with The Joker from Batman Arkham Asylum artwork on the front and character biography on the back`,
          `Collect all Batman Arkham Asylum Figures! Batman as well as other McFarlane Toys DC Multiverse figures Figures sold separately `,
        ],
        linkUrl: "/99",
      },
    ],
  },
};

export default PRODUCT_DATA;
