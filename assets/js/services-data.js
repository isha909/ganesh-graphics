const PAPER_FEATURES = [
  { icon: "fa-solid fa-gem", title: "Premium Quality", text: "High-grade materials and finishes" },
  { icon: "fa-solid fa-ruler-combined", title: "Custom Sizes", text: "Printed to your exact dimensions" },
  { icon: "fa-solid fa-truck-fast", title: "Quick Turnaround", text: "Fast, reliable delivery" },
  { icon: "fa-solid fa-palette", title: "Vibrant Printing", text: "Rich, accurate colors every time" }
];

const SIGNAGE_FEATURES = [
  { icon: "fa-solid fa-shield-halved", title: "Durable Materials", text: "Built to withstand daily use" },
  { icon: "fa-solid fa-cloud-rain", title: "Weather Resistant", text: "Indoor & outdoor ready" },
  { icon: "fa-solid fa-ruler-combined", title: "Custom Sizes", text: "Made to fit your exact space" },
  { icon: "fa-solid fa-screwdriver-wrench", title: "Expert Installation", text: "Professional, on-time fitting" }
];

const SERVICES = {

  /* ================= PAPER PRINTING (12) ================= */

  "business-card-printing": {
    category: "paper",
    eyebrow: "Business Card Printing",
    titleLine1: "Small Card.",
    titleLine2: "Big Impression.",
    heroText: "Premium business cards that represent your brand with quality and style.",
    aboutEyebrow: "About Our Business Cards",
    aboutTitle: "Premium Business Cards",
    aboutText: "Business cards are more than just contact details — they are a reflection of your brand. We print high-quality business cards that leave a lasting impression, with a wide range of papers, finishes and customization options.",
    checklist: [
      "Matte, Glossy, Textured & Premium Finishes",
      "Standard & Custom Sizes",
      "Single or Double-Sided Printing",
      "Design Support Available",
      "Suitable for Individuals, Startups & Corporates",
      "Affordable Pricing"
    ],
    samplesTitle: "Business Card Samples",
    options: [
      { name: "Matte Finish", desc: "Elegant and smooth look" },
      { name: "Glossy Finish", desc: "Vibrant and shiny appearance" },
      { name: "Textured Paper", desc: "Unique feel and premium touch" },
      { name: "Spot UV", desc: "Highlight key elements" },
      { name: "Foil Stamping", desc: "Add a luxurious finish" }
    ]
  },

  "bill-book-printing": {
    category: "paper",
    eyebrow: "Bill Book Printing",
    titleLine1: "Organized Billing.",
    titleLine2: "Every Time.",
    heroText: "Custom bill books and invoice books designed for accuracy and everyday business use.",
    aboutEyebrow: "About Our Bill Books",
    aboutTitle: "Reliable Bill Book Printing",
    aboutText: "We print bill books, invoice books and receipt books tailored to your business format — with sequential numbering, carbonless copies and your branding printed on every page.",
    checklist: [
      "Single, Duplicate & Triplicate Copies",
      "Carbonless (NCR) Paper Available",
      "Custom Numbering & Formatting",
      "Perforated or Stapled Binding",
      "Your Logo & Business Details Printed",
      "Bulk Order Pricing"
    ],
    samplesTitle: "Bill Book Samples",
    options: [
      { name: "Single Copy", desc: "Simple, economical option" },
      { name: "Duplicate Copy", desc: "Carbonless 2-part copies" },
      { name: "Triplicate Copy", desc: "Carbonless 3-part copies" },
      { name: "Perforated Pages", desc: "Easy tear-off sheets" },
      { name: "Custom Numbering", desc: "Sequential bill numbers" }
    ]
  },

  "poster-printing": {
    category: "paper",
    eyebrow: "Poster Printing",
    titleLine1: "Bold Posters.",
    titleLine2: "Big Statements.",
    heroText: "High-resolution poster printing in any size, perfect for promotions, events and décor.",
    aboutEyebrow: "About Our Posters",
    aboutTitle: "Eye-Catching Poster Printing",
    aboutText: "From promotional posters to event announcements, we deliver sharp, vibrant prints on quality paper stock that grabs attention wherever it's displayed.",
    checklist: [
      "Multiple Sizes Available",
      "High-Resolution Printing",
      "Matte or Glossy Paper Options",
      "Fast Turnaround for Events",
      "Bulk Printing Discounts",
      "Design Assistance Available"
    ],
    samplesTitle: "Poster Samples",
    options: [
      { name: "A3 Size", desc: "Compact promotional posters" },
      { name: "A2 Size", desc: "Standard event posters" },
      { name: "A1 Size", desc: "Large-format visibility" },
      { name: "Glossy Finish", desc: "Vivid, sharp colors" },
      { name: "Matte Finish", desc: "Soft, non-reflective look" }
    ]
  },

  "catalogue-printing": {
    category: "paper",
    eyebrow: "Catalogue Printing",
    titleLine1: "Showcase Your",
    titleLine2: "Products in Style.",
    heroText: "Professionally printed catalogues that present your products or services beautifully.",
    aboutEyebrow: "About Our Catalogues",
    aboutTitle: "Premium Catalogue Printing",
    aboutText: "We design and print multi-page catalogues with crisp images and clean layouts, helping you present your full product range professionally to clients and customers.",
    checklist: [
      "Multi-Page Booklet Printing",
      "Saddle-Stitch or Perfect Binding",
      "High-Quality Image Reproduction",
      "Custom Sizes & Page Counts",
      "Matte or Glossy Paper Options",
      "Design Layout Support"
    ],
    samplesTitle: "Catalogue Samples",
    options: [
      { name: "Saddle Stitch", desc: "Staple-bound, budget friendly" },
      { name: "Perfect Bound", desc: "Glued spine, premium look" },
      { name: "Glossy Pages", desc: "Vivid product photography" },
      { name: "Matte Pages", desc: "Elegant, non-reflective finish" },
      { name: "Custom Sizes", desc: "A4, A5 or bespoke formats" }
    ]
  },

  "brochure-printing": {
    category: "paper",
    eyebrow: "Brochure Printing",
    titleLine1: "Tell Your Story,",
    titleLine2: "Fold by Fold.",
    heroText: "Crisp, professional brochures that communicate your brand message effectively.",
    aboutEyebrow: "About Our Brochures",
    aboutTitle: "Impactful Brochure Printing",
    aboutText: "Bi-fold, tri-fold or custom formats — we print brochures with vibrant colors and clean layouts that make a strong first impression for your business.",
    checklist: [
      "Bi-Fold & Tri-Fold Options",
      "Custom Sizes Available",
      "Premium Paper Stock",
      "Vivid, Accurate Colors",
      "Fast Turnaround",
      "Design Support Available"
    ],
    samplesTitle: "Brochure Samples",
    options: [
      { name: "Bi-Fold", desc: "Simple two-panel layout" },
      { name: "Tri-Fold", desc: "Classic three-panel brochure" },
      { name: "Glossy Finish", desc: "Bright, polished look" },
      { name: "Matte Finish", desc: "Soft, premium texture" },
      { name: "Custom Fold", desc: "Unique fold styles on request" }
    ]
  },

  "letterhead-printing": {
    category: "paper",
    eyebrow: "Letterhead Printing",
    titleLine1: "Professional Paper.",
    titleLine2: "Lasting Impressions.",
    heroText: "Custom letterhead printing that adds a polished, professional touch to every document.",
    aboutEyebrow: "About Our Letterheads",
    aboutTitle: "Professional Letterhead Printing",
    aboutText: "We print letterheads featuring your logo, brand colors and contact details on premium paper stock — perfect for official correspondence and business documents.",
    checklist: [
      "Custom Logo & Branding",
      "Premium Paper Stock",
      "Single or Full-Color Printing",
      "Standard A4 or Custom Sizes",
      "Bulk Order Pricing",
      "Fast Turnaround"
    ],
    samplesTitle: "Letterhead Samples",
    options: [
      { name: "Single Color", desc: "Classic, economical option" },
      { name: "Full Color", desc: "Vibrant branded design" },
      { name: "Premium Paper", desc: "Heavier, textured stock" },
      { name: "Standard Paper", desc: "Everyday business use" },
      { name: "Custom Layout", desc: "Tailored to your brand" }
    ]
  },

  "id-cards-printing": {
    category: "paper",
    eyebrow: "ID Cards Printing",
    titleLine1: "Identity, Printed",
    titleLine2: "with Precision.",
    heroText: "Durable, professional ID cards for employees, students and members.",
    aboutEyebrow: "About Our ID Cards",
    aboutTitle: "Reliable ID Card Printing",
    aboutText: "We print PVC and laminated ID cards with photo, barcode or QR code support — durable enough for daily use and finished with a professional look.",
    checklist: [
      "PVC & Laminated Card Options",
      "Photo, Barcode & QR Code Support",
      "Single or Double-Sided Printing",
      "Lanyard & Holder Compatible",
      "Bulk Printing for Institutions",
      "Fast Turnaround"
    ],
    samplesTitle: "ID Card Samples",
    options: [
      { name: "PVC Cards", desc: "Durable plastic finish" },
      { name: "Laminated Cards", desc: "Budget-friendly protection" },
      { name: "Double-Sided", desc: "Print on both faces" },
      { name: "QR/Barcode", desc: "Scannable identification" },
      { name: "Custom Design", desc: "Branded layout and colors" }
    ]
  },

  "label-printing": {
    category: "paper",
    eyebrow: "Label Printing",
    titleLine1: "Labels That",
    titleLine2: "Stick with Your Brand.",
    heroText: "Custom product and packaging labels printed with precision and durability.",
    aboutEyebrow: "About Our Labels",
    aboutTitle: "Custom Label Printing",
    aboutText: "From product packaging to shipping labels, we print in a range of shapes, sizes and finishes — including waterproof and adhesive options for long-lasting use.",
    checklist: [
      "Custom Shapes & Sizes",
      "Waterproof & Adhesive Options",
      "Matte or Glossy Finish",
      "Roll or Sheet Formats",
      "Bulk Printing Available",
      "Fast Turnaround"
    ],
    samplesTitle: "Label Samples",
    options: [
      { name: "Glossy Labels", desc: "Bright, reflective finish" },
      { name: "Matte Labels", desc: "Clean, non-reflective look" },
      { name: "Waterproof", desc: "Durable for packaging" },
      { name: "Die-Cut Shapes", desc: "Custom label outlines" },
      { name: "Roll Format", desc: "Ideal for dispensers" }
    ]
  },

  "cut-out-stickers-printing": {
    category: "paper",
    eyebrow: "Cut Out Stickers Printing",
    titleLine1: "Custom Shapes.",
    titleLine2: "Sharp Cuts.",
    heroText: "Precision die-cut stickers in any shape, size or design for branding and promotions.",
    aboutEyebrow: "About Our Stickers",
    aboutTitle: "Custom Cut Out Stickers",
    aboutText: "We print and precision-cut stickers to any custom shape or outline, ideal for branding, packaging, promotions and personal use.",
    checklist: [
      "Any Custom Shape or Outline",
      "Vinyl or Paper Material Options",
      "Waterproof Vinyl Available",
      "Glossy or Matte Finish",
      "Bulk Order Discounts",
      "Fast Turnaround"
    ],
    samplesTitle: "Sticker Samples",
    options: [
      { name: "Die-Cut Vinyl", desc: "Precise custom shapes" },
      { name: "Glossy Finish", desc: "Bright, vibrant colors" },
      { name: "Matte Finish", desc: "Soft, subtle look" },
      { name: "Waterproof", desc: "Long-lasting outdoor use" },
      { name: "Kiss-Cut Sheets", desc: "Easy peel-off stickers" }
    ]
  },

  "t-shirt-printing": {
    category: "paper",
    eyebrow: "T-Shirt Printing",
    titleLine1: "Wear Your",
    titleLine2: "Brand Proudly.",
    heroText: "Custom t-shirt printing for events, teams, promotions and corporate merchandise.",
    aboutEyebrow: "About Our T-Shirt Printing",
    aboutTitle: "Custom T-Shirt Printing",
    aboutText: "We print custom t-shirts using screen printing, DTF and vinyl techniques — perfect for corporate merchandise, event giveaways and team uniforms.",
    checklist: [
      "Screen Printing & DTF Options",
      "Single or Multi-Color Designs",
      "Bulk Order Pricing",
      "All Sizes Available",
      "Custom Logo & Artwork Printing",
      "Fast Turnaround for Events"
    ],
    samplesTitle: "T-Shirt Samples",
    options: [
      { name: "Screen Printing", desc: "Durable, bold designs" },
      { name: "DTF Printing", desc: "Full-color detailed prints" },
      { name: "Vinyl Printing", desc: "Crisp text and logos" },
      { name: "Single Color", desc: "Simple, economical option" },
      { name: "Multi-Color", desc: "Vibrant full designs" }
    ]
  },

  "calendar-printing": {
    category: "paper",
    eyebrow: "Calendar Printing",
    titleLine1: "Branded Calendars,",
    titleLine2: "All Year Round.",
    heroText: "Custom calendars that keep your brand visible in front of clients every single day.",
    aboutEyebrow: "About Our Calendars",
    aboutTitle: "Custom Calendar Printing",
    aboutText: "We design and print wall, desk and table calendars with your branding, photos and dates — a practical gift that keeps your business top of mind all year.",
    checklist: [
      "Wall, Desk & Table Formats",
      "Custom Photos & Branding",
      "Spiral or Stapled Binding",
      "Premium Paper Stock",
      "Bulk Order Pricing",
      "Fast Turnaround for New Year"
    ],
    samplesTitle: "Calendar Samples",
    options: [
      { name: "Wall Calendar", desc: "Large monthly display" },
      { name: "Desk Calendar", desc: "Compact office standee" },
      { name: "Table Flip Calendar", desc: "Classic flip-page style" },
      { name: "Spiral Binding", desc: "Durable, easy to flip" },
      { name: "Custom Branding", desc: "Logo on every page" }
    ]
  },

  "stationary-printing": {
    category: "paper",
    eyebrow: "Stationary Printing",
    titleLine1: "Everyday Stationery,",
    titleLine2: "Branded Right.",
    heroText: "Custom-printed office stationery including envelopes, notepads, folders and more.",
    aboutEyebrow: "About Our Stationery",
    aboutTitle: "Custom Stationery Printing",
    aboutText: "From envelopes and notepads to folders and visiting cards, we print consistent, branded stationery that keeps your business looking professional across every touchpoint.",
    checklist: [
      "Envelopes, Notepads & Folders",
      "Consistent Brand Identity",
      "Premium Paper Options",
      "Custom Sizes & Layouts",
      "Bulk Order Pricing",
      "Fast Turnaround"
    ],
    samplesTitle: "Stationery Samples",
    options: [
      { name: "Envelopes", desc: "Branded business envelopes" },
      { name: "Notepads", desc: "Custom-printed note sheets" },
      { name: "Presentation Folders", desc: "Professional document folders" },
      { name: "Premium Paper", desc: "Heavier, textured stock" },
      { name: "Custom Branding", desc: "Logo and colors throughout" }
    ]
  },

  /* ================= SIGNAGE PRINTING (11) ================= */

  "flex-board-printing": {
    category: "signage",
    eyebrow: "Flex Board Printing",
    titleLine1: "High-Impact Flex.",
    titleLine2: "Built to Last.",
    heroText: "Vibrant, weather-resistant flex board printing for indoor and outdoor advertising.",
    aboutEyebrow: "About Flex Board Printing",
    aboutTitle: "Durable Flex Board Printing",
    aboutText: "We print high-resolution flex boards for storefronts, banners and hoardings — vibrant, weather-resistant and built to hold up in outdoor conditions.",
    checklist: [
      "Indoor & Outdoor Use",
      "High-Resolution Vibrant Printing",
      "Custom Sizes Available",
      "Weather & UV Resistant",
      "Eyelets & Frame Mounting Options",
      "Fast Turnaround"
    ],
    samplesTitle: "Flex Board Samples",
    options: [
      { name: "Frontlit Flex", desc: "Standard daytime visibility" },
      { name: "Backlit Flex", desc: "Illuminated for night display" },
      { name: "Standard Size", desc: "Common shopfront formats" },
      { name: "Custom Size", desc: "Made to your exact space" },
      { name: "Eyelet Finishing", desc: "Easy hanging installation" }
    ]
  },

  "venyle-printing": {
    category: "signage",
    eyebrow: "Vinyl Printing",
    titleLine1: "Precision Vinyl.",
    titleLine2: "Perfect Finish.",
    heroText: "High-quality vinyl printing for windows, vehicles, walls and promotional graphics.",
    aboutEyebrow: "About Vinyl Printing",
    aboutTitle: "Custom Vinyl Printing",
    aboutText: "We print and apply self-adhesive vinyl graphics for windows, vehicles, walls and storefronts — durable, precise and finished to a professional standard.",
    checklist: [
      "Self-Adhesive & Durable Vinyl",
      "Window, Wall & Vehicle Graphics",
      "Custom Cut Shapes & Text",
      "Weather Resistant",
      "Professional Application Service",
      "Fast Turnaround"
    ],
    samplesTitle: "Vinyl Samples",
    options: [
      { name: "Window Vinyl", desc: "Storefront branding" },
      { name: "Wall Vinyl", desc: "Interior decorative graphics" },
      { name: "Vehicle Vinyl", desc: "Mobile brand advertising" },
      { name: "Frosted Vinyl", desc: "Privacy with style" },
      { name: "Cut Vinyl Text", desc: "Clean lettering and logos" }
    ]
  },

  "uni-pole-banner-printing": {
    category: "signage",
    eyebrow: "Uni-Pole Banner Printing",
    titleLine1: "Reach Further.",
    titleLine2: "Stand Taller.",
    heroText: "Large-format uni-pole banners for maximum visibility on highways and main roads.",
    aboutEyebrow: "About Uni-Pole Banners",
    aboutTitle: "Large-Format Uni-Pole Banners",
    aboutText: "We design, print and install uni-pole banners that command attention from a distance — ideal for highway, roadside and large-scale outdoor advertising.",
    checklist: [
      "Large-Format Printing",
      "Weather & UV Resistant Material",
      "Custom Sizes for Any Pole Structure",
      "High-Visibility Color Accuracy",
      "Professional Installation",
      "Long-Lasting Outdoor Durability"
    ],
    samplesTitle: "Uni-Pole Banner Samples",
    options: [
      { name: "Single-Sided", desc: "Standard one-face banner" },
      { name: "Double-Sided", desc: "Visibility from both directions" },
      { name: "Standard Size", desc: "Common highway formats" },
      { name: "Custom Size", desc: "Built for your structure" },
      { name: "UV-Protected Print", desc: "Fade-resistant colors" }
    ]
  },

  "sunboard-printing": {
    category: "signage",
    eyebrow: "Sunboard Printing",
    titleLine1: "Lightweight.",
    titleLine2: "High Definition.",
    heroText: "Crisp, lightweight sunboard printing ideal for indoor displays and exhibitions.",
    aboutEyebrow: "About Sunboard Printing",
    aboutTitle: "High-Definition Sunboard Printing",
    aboutText: "Sunboard offers a smooth, lightweight surface perfect for sharp, high-definition prints — commonly used for indoor signage, exhibitions and retail displays.",
    checklist: [
      "Lightweight & Rigid Material",
      "High-Definition Printing",
      "Custom Thickness Options",
      "Ideal for Indoor Displays",
      "Easy Mounting & Handling",
      "Fast Turnaround"
    ],
    samplesTitle: "Sunboard Samples",
    options: [
      { name: "3mm Board", desc: "Lightweight standard option" },
      { name: "5mm Board", desc: "Extra rigidity and durability" },
      { name: "Cut-Out Shapes", desc: "Custom die-cut displays" },
      { name: "Standee Mount", desc: "Free-standing display format" },
      { name: "Glossy Print", desc: "Vibrant, sharp finish" }
    ]
  },

  "one-way-vision-printing": {
    category: "signage",
    eyebrow: "One Way Vision Printing",
    titleLine1: "See Out.",
    titleLine2: "Stand Out.",
    heroText: "Perforated one way vision film that displays branding outside while keeping visibility inside.",
    aboutEyebrow: "About One Way Vision",
    aboutTitle: "Smart One Way Vision Printing",
    aboutText: "One way vision film lets you display bold branding on the outside of glass surfaces while maintaining a clear view from the inside — ideal for storefronts and vehicles.",
    checklist: [
      "Perforated Vision Film",
      "Bold Exterior Branding",
      "Clear Interior Visibility",
      "Custom Sizes for Any Glass Surface",
      "Weather Resistant Material",
      "Professional Application"
    ],
    samplesTitle: "One Way Vision Samples",
    options: [
      { name: "Storefront Glass", desc: "Branded shopfront windows" },
      { name: "Vehicle Windows", desc: "Mobile branding solution" },
      { name: "Office Partitions", desc: "Privacy with design" },
      { name: "Custom Graphics", desc: "Full branded artwork" },
      { name: "Standard Perforation", desc: "Balanced view & visibility" }
    ]
  },

  "branding": {
    category: "signage",
    eyebrow: "Branding",
    titleLine1: "Complete Brand",
    titleLine2: "Identity, Delivered.",
    heroText: "End-to-end branding solutions that bring consistency across every visual touchpoint.",
    aboutEyebrow: "About Our Branding Services",
    aboutTitle: "Complete Branding Solutions",
    aboutText: "From storefront signage to interior branding and promotional materials, we help businesses build a consistent, professional brand identity across every space.",
    checklist: [
      "Storefront & Interior Branding",
      "Consistent Visual Identity",
      "Custom Signage & Displays",
      "Wall Branding & Wraps",
      "Promotional Material Design",
      "End-to-End Execution"
    ],
    samplesTitle: "Branding Samples",
    options: [
      { name: "Storefront Branding", desc: "Exterior brand presence" },
      { name: "Interior Branding", desc: "In-store visual identity" },
      { name: "Wall Wraps", desc: "Large-scale wall graphics" },
      { name: "Office Branding", desc: "Corporate space identity" },
      { name: "Event Branding", desc: "Temporary brand activations" }
    ]
  },

  "sunpack-printing": {
    category: "signage",
    eyebrow: "Sunpack Printing",
    titleLine1: "Strong. Sturdy.",
    titleLine2: "Print-Ready.",
    heroText: "Durable sunpack sheet printing for signage boards and outdoor display panels.",
    aboutEyebrow: "About Sunpack Printing",
    aboutTitle: "Durable Sunpack Board Printing",
    aboutText: "Sunpack sheets offer a strong, weather-resistant surface ideal for outdoor signage boards, panels and display structures that need to withstand daily wear.",
    checklist: [
      "Weather-Resistant Material",
      "High Durability for Outdoor Use",
      "Custom Thickness Options",
      "Vibrant, Long-Lasting Prints",
      "Ideal for Signage Boards",
      "Professional Installation"
    ],
    samplesTitle: "Sunpack Samples",
    options: [
      { name: "3mm Sunpack", desc: "Standard signage thickness" },
      { name: "5mm Sunpack", desc: "Heavy-duty durability" },
      { name: "Mounted Board", desc: "Frame or structure mounted" },
      { name: "Custom Cut-Out", desc: "Shaped signage panels" },
      { name: "Glossy Finish", desc: "Bright, vivid print quality" }
    ]
  },

  "glow-sign-board": {
    category: "signage",
    eyebrow: "Glow Sign Board",
    titleLine1: "Glow That",
    titleLine2: "Gets Noticed.",
    heroText: "Illuminated glow sign boards that keep your brand visible day and night.",
    aboutEyebrow: "About Glow Sign Boards",
    aboutTitle: "Illuminated Glow Sign Boards",
    aboutText: "Our glow sign boards use internal LED illumination for maximum visibility after dark — a reliable, energy-efficient way to keep your storefront noticed around the clock.",
    checklist: [
      "LED Internal Illumination",
      "Energy-Efficient Lighting",
      "Custom Shapes & Sizes",
      "Weatherproof Outdoor Build",
      "Long Operational Lifespan",
      "Professional Installation"
    ],
    samplesTitle: "Glow Sign Board Samples",
    options: [
      { name: "Acrylic Face", desc: "Smooth, even illumination" },
      { name: "Flex Face", desc: "Cost-effective glow option" },
      { name: "Custom Shape", desc: "Logo-shaped sign boards" },
      { name: "Standard Rectangle", desc: "Classic storefront format" },
      { name: "Two-Sided Glow", desc: "Visible from both directions" }
    ]
  },

  "led-sign-board": {
    category: "signage",
    eyebrow: "LED Sign Board",
    titleLine1: "Bright. Bold.",
    titleLine2: "Unmissable.",
    heroText: "High-brightness LED sign boards designed for maximum visibility, day or night.",
    aboutEyebrow: "About LED Sign Boards",
    aboutTitle: "High-Brightness LED Sign Boards",
    aboutText: "We design and install LED sign boards with bright, energy-efficient illumination — perfect for businesses that need to stand out clearly at any time of day.",
    checklist: [
      "High-Brightness LED Modules",
      "Energy-Efficient Operation",
      "Custom Sizes & Designs",
      "Durable Outdoor Construction",
      "Long-Lasting LED Lifespan",
      "Professional Installation"
    ],
    samplesTitle: "LED Sign Board Samples",
    options: [
      { name: "Channel Letters", desc: "3D illuminated lettering" },
      { name: "Box-Type LED", desc: "Classic illuminated box sign" },
      { name: "Custom Logo Sign", desc: "Shaped to your brand mark" },
      { name: "Single Color LED", desc: "Clean, focused lighting" },
      { name: "Multi-Color LED", desc: "Vibrant illuminated display" }
    ]
  },

  "standee-canopy": {
    category: "signage",
    eyebrow: "Standee / Canopy",
    titleLine1: "Portable Presence.",
    titleLine2: "Anywhere You Go.",
    heroText: "Custom standees and canopy tents for events, exhibitions and promotional activations.",
    aboutEyebrow: "About Standees & Canopies",
    aboutTitle: "Custom Standees & Canopy Tents",
    aboutText: "We print and set up roll-up standees and branded canopy tents — portable, professional display solutions perfect for events, exhibitions and outdoor promotions.",
    checklist: [
      "Roll-Up & X-Frame Standees",
      "Custom Branded Canopy Tents",
      "Lightweight & Portable Design",
      "Quick Setup & Takedown",
      "Weather-Resistant Materials",
      "Ideal for Events & Exhibitions"
    ],
    samplesTitle: "Standee & Canopy Samples",
    options: [
      { name: "Roll-Up Standee", desc: "Compact, portable display" },
      { name: "X-Frame Standee", desc: "Lightweight event signage" },
      { name: "3x3 Canopy Tent", desc: "Standard branded tent" },
      { name: "Custom Canopy Size", desc: "Built for your event space" },
      { name: "Branded Table Cover", desc: "Complete booth branding" }
    ]
  },

  "election-promotion": {
    category: "signage",
    eyebrow: "Election Promotion",
    titleLine1: "Campaign Materials,",
    titleLine2: "Delivered Fast.",
    heroText: "High-volume election promotion printing including banners, flex boards and campaign materials.",
    aboutEyebrow: "About Election Promotion Printing",
    aboutTitle: "Fast, Large-Scale Campaign Printing",
    aboutText: "We support election campaigns with quick-turnaround printing of banners, flex boards, posters and promotional materials — built for high-volume, time-sensitive rollouts.",
    checklist: [
      "Flex Boards, Banners & Posters",
      "High-Volume Bulk Printing",
      "Fast, Time-Sensitive Turnaround",
      "Custom Sizes for Any Location",
      "Vivid, High-Visibility Colors",
      "Competitive Bulk Pricing"
    ],
    samplesTitle: "Campaign Material Samples",
    options: [
      { name: "Flex Banners", desc: "Roadside campaign visibility" },
      { name: "Posters", desc: "Bulk-printed promotional posters" },
      { name: "Hand Flags", desc: "Rally and event materials" },
      { name: "Vehicle Graphics", desc: "Mobile campaign branding" },
      { name: "Standee Cutouts", desc: "Life-size promotional standees" }
    ]
  }

};
