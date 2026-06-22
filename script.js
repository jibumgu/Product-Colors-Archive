const archiveData = [
  {
    id: "galaxy-s",
    name: "Galaxy S Series",
    items: [
      { year: 2010, model: "Galaxy S", colors: [{ name: "Black", hex: "#191919" }, { name: "White", hex: "#f3f0e9" }] },
      { year: 2011, model: "Galaxy S II", colors: [{ name: "Noble Black", hex: "#111111" }, { name: "Ceramic White", hex: "#f5f1e7" }] },
      { year: 2012, model: "Galaxy S III", colors: [{ name: "Pebble Blue", hex: "#65747d" }, { name: "Marble White", hex: "#f4f1ea" }] },
      { year: 2013, model: "Galaxy S4", colors: [{ name: "Black Mist", hex: "#1a1a1a" }, { name: "White Frost", hex: "#f6f4ef" }, { name: "Blue Arctic", hex: "#425d73" }] },
      { year: 2014, model: "Galaxy S5", colors: [{ name: "Charcoal Black", hex: "#202020" }, { name: "Copper Gold", hex: "#b88b58" }, { name: "Electric Blue", hex: "#2f5f9a" }] },
      { year: 2015, model: "Galaxy S6", colors: [{ name: "Black Sapphire", hex: "#18212d" }, { name: "Gold Platinum", hex: "#c7a86a" }, { name: "Blue Topaz", hex: "#6eb8c9" }] },
      { year: 2016, model: "Galaxy S7", colors: [{ name: "Black Onyx", hex: "#111114" }, { name: "Silver Titanium", hex: "#bfc2c0" }, { name: "Pink Gold", hex: "#d8a8a2" }] },
      { year: 2017, model: "Galaxy S8", colors: [{ name: "Midnight Black", hex: "#0f1114" }, { name: "Orchid Gray", hex: "#88818a" }, { name: "Maple Gold", hex: "#c19a5d" }] },
      { year: 2018, model: "Galaxy S9", colors: [{ name: "Lilac Purple", hex: "#a69bb6" }, { name: "Coral Blue", hex: "#516f93" }, { name: "Midnight Black", hex: "#101012" }] },
      { year: 2019, model: "Galaxy S10", colors: [{ name: "Prism White", hex: "#f1eee9" }, { name: "Prism Green", hex: "#7d9a89" }, { name: "Canary Yellow", hex: "#ecd35f" }] },
      { year: 2020, model: "Galaxy S20", colors: [{ name: "Cloud Blue", hex: "#a9c5d8" }, { name: "Cosmic Gray", hex: "#66666a" }, { name: "Cloud Pink", hex: "#e7b9bd" }] },
      { year: 2021, model: "Galaxy S21", colors: [{ name: "Phantom Violet", hex: "#9d91b7" }, { name: "Phantom Gray", hex: "#5a5c5e" }, { name: "Phantom Pink", hex: "#e5b4ba" }] },
      { year: 2022, model: "Galaxy S22", colors: [{ name: "Burgundy", hex: "#6f3038" }, { name: "Green", hex: "#596f63" }, { name: "Phantom Black", hex: "#131313" }] },
      { year: 2023, model: "Galaxy S23", colors: [{ name: "Lavender", hex: "#c7b7d8" }, { name: "Cream", hex: "#eee4d1" }, { name: "Green", hex: "#667567" }] },
      { year: 2024, model: "Galaxy S24", colors: [{ name: "Cobalt Violet", hex: "#595074" }, { name: "Amber Yellow", hex: "#dfc46b" }, { name: "Marble Gray", hex: "#b2b4ad" }] },
      { year: 2025, model: "Galaxy S25", colors: [{ name: "Icy Blue", hex: "#bdd2dc" }, { name: "Mint", hex: "#bad4c0" }, { name: "Navy", hex: "#273348" }] },
      { year: 2026, model: "Galaxy S26", colors: [{ name: "Placeholder Black", hex: "#141414" }, { name: "Placeholder Silver", hex: "#c8cac6" }, { name: "Placeholder Blue", hex: "#7996b8" }] }
    ]
  },
  {
    id: "iphone",
    name: "iPhone",
    items: [
      { year: 2007, model: "iPhone", colors: [{ name: "Aluminum", hex: "#b8b4ad" }, { name: "Black", hex: "#161616" }] },
      { year: 2008, model: "iPhone 3G", colors: [{ name: "Black", hex: "#101010" }, { name: "White", hex: "#f0eee8" }] },
      { year: 2010, model: "iPhone 4", colors: [{ name: "Black Glass", hex: "#111111" }, { name: "White Glass", hex: "#f6f3ed" }] },
      { year: 2013, model: "iPhone 5s / 5c", colors: [{ name: "Space Gray", hex: "#55565a" }, { name: "Gold", hex: "#d2b783" }, { name: "Blue", hex: "#55a9d6" }, { name: "Pink", hex: "#e9789f" }] },
      { year: 2016, model: "iPhone 7", colors: [{ name: "Jet Black", hex: "#050505" }, { name: "Rose Gold", hex: "#d7a6a0" }, { name: "Silver", hex: "#d7d9d6" }] },
      { year: 2018, model: "iPhone XR", colors: [{ name: "Coral", hex: "#ee7762" }, { name: "Yellow", hex: "#f1c75b" }, { name: "Blue", hex: "#77a9c9" }, { name: "Product Red", hex: "#b5122b" }] },
      { year: 2020, model: "iPhone 12", colors: [{ name: "Pacific Blue", hex: "#40576f" }, { name: "Mint Green", hex: "#b8d8c4" }, { name: "Purple", hex: "#b9a8d8" }] },
      { year: 2022, model: "iPhone 14", colors: [{ name: "Deep Purple", hex: "#594f63" }, { name: "Starlight", hex: "#eee7d9" }, { name: "Blue", hex: "#a9bfd0" }] },
      { year: 2024, model: "iPhone 16", colors: [{ name: "Ultramarine", hex: "#5a72c9" }, { name: "Teal", hex: "#8fc9bd" }, { name: "Pink", hex: "#f2a1b8" }] }
    ]
  },
  {
    id: "playstation",
    name: "PlayStation",
    items: [
      { year: 1994, model: "PlayStation", colors: [{ name: "Console Gray", hex: "#b8b8b1" }, { name: "Logo Red", hex: "#df2935" }, { name: "Logo Blue", hex: "#006ec7" }, { name: "Logo Yellow", hex: "#f9c80e" }] },
      { year: 2000, model: "PlayStation 2", colors: [{ name: "Matte Black", hex: "#0c0d13" }, { name: "Electric Blue", hex: "#304cbd" }] },
      { year: 2006, model: "PlayStation 3", colors: [{ name: "Piano Black", hex: "#050505" }, { name: "Chrome", hex: "#b5b8ba" }] },
      { year: 2013, model: "PlayStation 4", colors: [{ name: "Jet Black", hex: "#111217" }, { name: "DualShock Blue", hex: "#3267d6" }] },
      { year: 2020, model: "PlayStation 5", colors: [{ name: "White Shell", hex: "#f4f2ec" }, { name: "Core Black", hex: "#111216" }, { name: "Light Blue", hex: "#8ab8ff" }] }
    ]
  },
  {
    id: "galaxy-z-fold",
    name: "Galaxy Z Fold",
    items: [
      { year: 2019, model: "Galaxy Fold", colors: [{ name: "Cosmos Black", hex: "#111113" }, { name: "Space Silver", hex: "#b9b9b4" }, { name: "Martian Green", hex: "#9eb8a9" }, { name: "Astro Blue", hex: "#4f6e8f" }] },
      { year: 2020, model: "Galaxy Z Fold2", colors: [{ name: "Mystic Black", hex: "#161616" }, { name: "Mystic Bronze", hex: "#b98975" }] },
      { year: 2021, model: "Galaxy Z Fold3", colors: [{ name: "Phantom Black", hex: "#111111" }, { name: "Phantom Green", hex: "#3f4c43" }, { name: "Phantom Silver", hex: "#c8c6bf" }] },
      { year: 2022, model: "Galaxy Z Fold4", colors: [{ name: "Graygreen", hex: "#65706a" }, { name: "Phantom Black", hex: "#111111" }, { name: "Beige", hex: "#d7c7aa" }, { name: "Burgundy", hex: "#6d3036" }] },
      { year: 2023, model: "Galaxy Z Fold5", colors: [{ name: "Icy Blue", hex: "#b9cad4" }, { name: "Phantom Black", hex: "#111111" }, { name: "Cream", hex: "#eee4d1" }, { name: "Blue", hex: "#3d5269" }] },
      { year: 2024, model: "Galaxy Z Fold6", colors: [{ name: "Silver Shadow", hex: "#babbb6" }, { name: "Pink", hex: "#e6b7bd" }, { name: "Navy", hex: "#273348" }, { name: "Black", hex: "#111111" }, { name: "White", hex: "#f2eee4" }] },
      { year: 2025, model: "Galaxy Z Fold7", colors: [{ name: "Blue Shadow", hex: "#3d5066" }, { name: "Silver Shadow", hex: "#bbbdb9" }, { name: "Jetblack", hex: "#0d0d0d" }, { name: "Mint", hex: "#bfd9c9" }] }
    ]
  },
  {
    id: "galaxy-z-flip",
    name: "Galaxy Z Flip",
    items: [
      { year: 2020, model: "Galaxy Z Flip", colors: [{ name: "Mirror Purple", hex: "#b3a0c9" }, { name: "Mirror Black", hex: "#111111" }, { name: "Mirror Gold", hex: "#d1ad73" }] },
      { year: 2021, model: "Galaxy Z Flip3", colors: [{ name: "Cream", hex: "#eee5d4" }, { name: "Green", hex: "#53675a" }, { name: "Lavender", hex: "#c2b5d8" }, { name: "Phantom Black", hex: "#111111" }] },
      { year: 2022, model: "Galaxy Z Flip4", colors: [{ name: "Bora Purple", hex: "#9b86c7" }, { name: "Graphite", hex: "#55565a" }, { name: "Pink Gold", hex: "#d8a6a0" }, { name: "Blue", hex: "#9bb7cf" }] },
      { year: 2023, model: "Galaxy Z Flip5", colors: [{ name: "Mint", hex: "#b8d6c4" }, { name: "Graphite", hex: "#55565a" }, { name: "Cream", hex: "#eee4d1" }, { name: "Lavender", hex: "#c7b7d8" }] },
      { year: 2024, model: "Galaxy Z Flip6", colors: [{ name: "Blue", hex: "#a7bfd2" }, { name: "Mint", hex: "#b9d4bf" }, { name: "Silver Shadow", hex: "#b8bab6" }, { name: "Yellow", hex: "#ead36a" }] },
      { year: 2025, model: "Galaxy Z Flip7", colors: [{ name: "Blue Shadow", hex: "#3d5066" }, { name: "Jetblack", hex: "#0d0d0d" }, { name: "Coralred", hex: "#e46c5f" }, { name: "Mint", hex: "#bfd9c9" }] }
    ]
  },
  {
    id: "galaxy-tab-s",
    name: "Galaxy Tab S",
    items: [
      { year: 2014, model: "Galaxy Tab S", colors: [{ name: "Dazzling White", hex: "#f2eee7" }, { name: "Titanium Bronze", hex: "#6d6259" }] },
      { year: 2017, model: "Galaxy Tab S3", colors: [{ name: "Black", hex: "#111111" }, { name: "Silver", hex: "#c9cac7" }] },
      { year: 2019, model: "Galaxy Tab S6", colors: [{ name: "Mountain Gray", hex: "#6d7275" }, { name: "Cloud Blue", hex: "#9db7c9" }, { name: "Rose Blush", hex: "#d7a8a5" }] },
      { year: 2020, model: "Galaxy Tab S7", colors: [{ name: "Mystic Black", hex: "#151515" }, { name: "Mystic Silver", hex: "#c4c5c2" }, { name: "Mystic Bronze", hex: "#b98975" }] },
      { year: 2022, model: "Galaxy Tab S8", colors: [{ name: "Graphite", hex: "#4c4d50" }, { name: "Silver", hex: "#c7c8c5" }, { name: "Pink Gold", hex: "#d9aaa2" }] },
      { year: 2023, model: "Galaxy Tab S9", colors: [{ name: "Graphite", hex: "#55575a" }, { name: "Beige", hex: "#d8c9ad" }] },
      { year: 2025, model: "Galaxy Tab S10 FE", colors: [{ name: "Gray", hex: "#707173" }, { name: "Silver", hex: "#c8cac6" }, { name: "CoralRed", hex: "#d95f58" }] }
    ]
  },
  {
    id: "ipad",
    name: "iPad",
    items: [
      { year: 2010, model: "iPad", colors: [{ name: "Silver Aluminum", hex: "#c7c8c5" }, { name: "Black Bezel", hex: "#111111" }] },
      { year: 2013, model: "iPad Air", colors: [{ name: "Space Gray", hex: "#54565a" }, { name: "Silver", hex: "#d5d6d2" }] },
      { year: 2014, model: "iPad Air 2", colors: [{ name: "Space Gray", hex: "#54565a" }, { name: "Silver", hex: "#d5d6d2" }, { name: "Gold", hex: "#d6ba83" }] },
      { year: 2018, model: "iPad Pro", colors: [{ name: "Space Gray", hex: "#54565a" }, { name: "Silver", hex: "#d5d6d2" }] },
      { year: 2020, model: "iPad Air", colors: [{ name: "Space Gray", hex: "#54565a" }, { name: "Silver", hex: "#d5d6d2" }, { name: "Rose Gold", hex: "#d8aaa3" }, { name: "Green", hex: "#a7b8a6" }, { name: "Sky Blue", hex: "#9ab8d0" }] },
      { year: 2022, model: "iPad", colors: [{ name: "Blue", hex: "#77a9d5" }, { name: "Pink", hex: "#ec9ab1" }, { name: "Yellow", hex: "#f0cf5b" }, { name: "Silver", hex: "#d5d6d2" }] },
      { year: 2024, model: "iPad Pro", colors: [{ name: "Space Black", hex: "#2c2d30" }, { name: "Silver", hex: "#d5d6d2" }] },
      { year: 2025, model: "iPad Air", colors: [{ name: "Space Gray", hex: "#54565a" }, { name: "Blue", hex: "#9eb8d0" }, { name: "Purple", hex: "#b8acd2" }, { name: "Starlight", hex: "#eee7d9" }] }
    ]
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    items: [
      { year: 2015, model: "Apple Watch", colors: [{ name: "Stainless Steel", hex: "#c7c8c5" }, { name: "Space Black", hex: "#202124" }, { name: "Silver Aluminum", hex: "#d4d5d1" }, { name: "Space Gray", hex: "#55565a" }] },
      { year: 2018, model: "Apple Watch Series 4", colors: [{ name: "Silver", hex: "#d5d6d2" }, { name: "Space Gray", hex: "#54565a" }, { name: "Gold", hex: "#d6b17e" }] },
      { year: 2020, model: "Apple Watch Series 6", colors: [{ name: "Blue", hex: "#314f6f" }, { name: "Product Red", hex: "#b5122b" }, { name: "Gold", hex: "#d6b17e" }, { name: "Silver", hex: "#d5d6d2" }, { name: "Space Gray", hex: "#54565a" }] },
      { year: 2022, model: "Apple Watch Ultra", colors: [{ name: "Natural Titanium", hex: "#b8b4ab" }] },
      { year: 2024, model: "Apple Watch Series 10", colors: [{ name: "Jet Black", hex: "#050505" }, { name: "Rose Gold", hex: "#d8aaa3" }, { name: "Silver", hex: "#d5d6d2" }, { name: "Natural", hex: "#b8b4ab" }, { name: "Gold", hex: "#d6b17e" }, { name: "Slate", hex: "#565a5c" }] },
      { year: 2025, model: "Apple Watch Series 11", colors: [{ name: "Space Gray", hex: "#54565a" }, { name: "Silver", hex: "#d5d6d2" }, { name: "Rose Gold", hex: "#d8aaa3" }, { name: "Jet Black", hex: "#050505" }, { name: "Natural", hex: "#b8b4ab" }, { name: "Gold", hex: "#d6b17e" }, { name: "Slate", hex: "#565a5c" }] }
    ]
  },
  {
    id: "nintendo-switch",
    name: "Nintendo Switch",
    items: [
      { year: 2017, model: "Nintendo Switch", colors: [{ name: "Gray", hex: "#5c5d60" }, { name: "Neon Blue", hex: "#00a6d6" }, { name: "Neon Red", hex: "#ff3b30" }] },
      { year: 2019, model: "Nintendo Switch Lite", colors: [{ name: "Yellow", hex: "#f4d44d" }, { name: "Gray", hex: "#6d6e70" }, { name: "Turquoise", hex: "#36c0c7" }, { name: "Coral", hex: "#f28b82" }] },
      { year: 2021, model: "Nintendo Switch OLED", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Black Dock", hex: "#111111" }, { name: "Neon Blue", hex: "#00a6d6" }, { name: "Neon Red", hex: "#ff3b30" }] },
      { year: 2025, model: "Nintendo Switch 2", colors: [{ name: "Charcoal", hex: "#242629" }, { name: "Accent Blue", hex: "#4aa3ff" }, { name: "Accent Red", hex: "#f04b45" }] },
      { year: 2026, model: "Joy-Con 2 Color Set", colors: [{ name: "Blue", hex: "#2f83d0" }, { name: "Light Yellow", hex: "#f1d86b" }] }
    ]
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    items: [
      { year: 2001, model: "Murcielago", colors: [{ name: "Giallo Orion", hex: "#f6c600" }, { name: "Arancio Atlas", hex: "#e46f1f" }, { name: "Nero Aldebaran", hex: "#090909" }] },
      { year: 2003, model: "Gallardo", colors: [{ name: "Verde Ithaca", hex: "#75b843" }, { name: "Giallo Midas", hex: "#f4c20d" }, { name: "Balloon White", hex: "#f2eee6" }] },
      { year: 2011, model: "Aventador", colors: [{ name: "Arancio Argos", hex: "#d95f18" }, { name: "Bianco Canopus", hex: "#e8e4d8" }, { name: "Nero Nemesis", hex: "#0d0d0d" }] },
      { year: 2014, model: "Huracan", colors: [{ name: "Verde Mantis", hex: "#6fc24a" }, { name: "Arancio Borealis", hex: "#ef7d22" }, { name: "Giallo Inti", hex: "#f3c900" }] },
      { year: 2018, model: "Urus", colors: [{ name: "Blu Eleos", hex: "#1d456b" }, { name: "Grigio Lynx", hex: "#6b6e70" }, { name: "Rosso Anteros", hex: "#9d1f24" }] },
      { year: 2023, model: "Revuelto", colors: [{ name: "Bianco Monocerus", hex: "#f0eee6" }, { name: "Arancio Borealis", hex: "#ef7d22" }, { name: "Verde Selvans", hex: "#1f5b43" }, { name: "Blu Astraeus", hex: "#173d62" }, { name: "Viola Pasifae", hex: "#65458b" }] }
    ]
  },
  {
    id: "imac",
    name: "iMac",
    items: [
      { year: 1998, model: "iMac G3", colors: [{ name: "Bondi Blue", hex: "#5fb8c9" }] },
      { year: 1999, model: "iMac G3 Fruit Colors", colors: [{ name: "Blueberry", hex: "#4aa7d8" }, { name: "Grape", hex: "#6d4b8d" }, { name: "Tangerine", hex: "#f28a35" }, { name: "Lime", hex: "#8ccf54" }, { name: "Strawberry", hex: "#d95d74" }] },
      { year: 2002, model: "iMac G4", colors: [{ name: "White", hex: "#f2f0ea" }, { name: "Chrome", hex: "#bfc1bd" }] },
      { year: 2007, model: "Aluminum iMac", colors: [{ name: "Aluminum", hex: "#b8b9b5" }, { name: "Black Glass", hex: "#111111" }] },
      { year: 2021, model: "24-inch iMac", colors: [{ name: "Green", hex: "#7fb36f" }, { name: "Yellow", hex: "#efcf56" }, { name: "Orange", hex: "#ee8a3a" }, { name: "Pink", hex: "#e97991" }, { name: "Purple", hex: "#9e86c8" }, { name: "Blue", hex: "#6aa8d8" }, { name: "Silver", hex: "#d6d6d2" }] },
      { year: 2024, model: "iMac M4", colors: [{ name: "Green", hex: "#7fb36f" }, { name: "Yellow", hex: "#efcf56" }, { name: "Orange", hex: "#ee8a3a" }, { name: "Pink", hex: "#e97991" }, { name: "Purple", hex: "#9e86c8" }, { name: "Blue", hex: "#6aa8d8" }, { name: "Silver", hex: "#d6d6d2" }] }
    ]
  },
  {
    id: "xbox",
    name: "Xbox",
    items: [
      { year: 2001, model: "Xbox", colors: [{ name: "Black", hex: "#111111" }, { name: "Xbox Green", hex: "#3a8f2a" }] },
      { year: 2005, model: "Xbox 360", colors: [{ name: "White", hex: "#f0f0e9" }, { name: "Chrome", hex: "#c5c7c4" }] },
      { year: 2010, model: "Xbox 360 S", colors: [{ name: "Gloss Black", hex: "#070707" }, { name: "Chrome", hex: "#bfc2bf" }] },
      { year: 2013, model: "Xbox One", colors: [{ name: "Black", hex: "#111111" }, { name: "White Special Edition", hex: "#f2f0ea" }] },
      { year: 2016, model: "Xbox One S", colors: [{ name: "Robot White", hex: "#f2f0ea" }, { name: "Deep Blue", hex: "#1b3d75" }] },
      { year: 2020, model: "Xbox Series X|S", colors: [{ name: "Carbon Black", hex: "#111111" }, { name: "Robot White", hex: "#f2f0ea" }] },
      { year: 2024, model: "Xbox Series X Options", colors: [{ name: "Carbon Black", hex: "#111111" }, { name: "Robot White", hex: "#f2f0ea" }, { name: "Galaxy Black", hex: "#181820" }] },
      { year: 2025, model: "Xbox Series X X25", colors: [{ name: "Translucent Green", hex: "#1f7a45" }, { name: "Carbon Black", hex: "#111111" }] }
    ]
  },
  {
    id: "tesla-model-3",
    name: "Tesla Model 3",
    items: [
      { year: 2017, model: "Model 3 Launch", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Midnight Silver Metallic", hex: "#5e6266" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Red Multi-Coat", hex: "#a5161d" }] },
      { year: 2020, model: "Model 3", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Midnight Silver Metallic", hex: "#5e6266" }, { name: "Red Multi-Coat", hex: "#a5161d" }] },
      { year: 2024, model: "Model 3 Refresh", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Stealth Gray", hex: "#555a5d" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Ultra Red", hex: "#b31321" }, { name: "Quicksilver", hex: "#b9bdbe" }] },
      { year: 2026, model: "Model 3 Current Palette", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Stealth Gray", hex: "#555a5d" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Ultra Red", hex: "#b31321" }, { name: "Lunar Silver", hex: "#c7c4b8" }] }
    ]
  },
  {
    id: "dyson-supersonic",
    name: "Dyson Supersonic",
    items: [
      { year: 2016, model: "Supersonic", colors: [{ name: "Iron/Fuchsia", hex: "#66696d" }, { name: "Fuchsia", hex: "#c72778" }] },
      { year: 2019, model: "Supersonic", colors: [{ name: "Black/Nickel", hex: "#111111" }, { name: "Nickel", hex: "#b7b2aa" }] },
      { year: 2021, model: "Supersonic", colors: [{ name: "Prussian Blue", hex: "#273a54" }, { name: "Rich Copper", hex: "#b46b3d" }] },
      { year: 2023, model: "Supersonic", colors: [{ name: "Blue", hex: "#325a8c" }, { name: "Copper", hex: "#b46b3d" }, { name: "Nickel", hex: "#b7b2aa" }, { name: "Fuchsia", hex: "#c72778" }] },
      { year: 2024, model: "Supersonic Nural", colors: [{ name: "Ceramic Pink", hex: "#e8b9b3" }, { name: "Rose Gold", hex: "#c99b79" }] }
    ]
  },
  {
    id: "google-pixel",
    name: "Google Pixel",
    items: [
      { year: 2016, model: "Pixel", colors: [{ name: "Quite Black", hex: "#111111" }, { name: "Very Silver", hex: "#d7d8d4" }, { name: "Really Blue", hex: "#3574b8" }] },
      { year: 2017, model: "Pixel 2", colors: [{ name: "Just Black", hex: "#111111" }, { name: "Clearly White", hex: "#f3f0e9" }, { name: "Kinda Blue", hex: "#aabfd0" }] },
      { year: 2018, model: "Pixel 3", colors: [{ name: "Just Black", hex: "#111111" }, { name: "Clearly White", hex: "#f3f0e9" }, { name: "Not Pink", hex: "#ead1cb" }] },
      { year: 2019, model: "Pixel 4", colors: [{ name: "Just Black", hex: "#111111" }, { name: "Clearly White", hex: "#f3f0e9" }, { name: "Oh So Orange", hex: "#f07f45" }] },
      { year: 2021, model: "Pixel 6", colors: [{ name: "Stormy Black", hex: "#232425" }, { name: "Sorta Seafoam", hex: "#b9d7c8" }, { name: "Kinda Coral", hex: "#ef8e7c" }] },
      { year: 2022, model: "Pixel 7", colors: [{ name: "Obsidian", hex: "#101112" }, { name: "Snow", hex: "#f3f0e9" }, { name: "Lemongrass", hex: "#d5d58f" }] },
      { year: 2023, model: "Pixel 8", colors: [{ name: "Obsidian", hex: "#101112" }, { name: "Hazel", hex: "#788173" }, { name: "Rose", hex: "#e7b9b0" }] },
      { year: 2024, model: "Pixel 9", colors: [{ name: "Obsidian", hex: "#101112" }, { name: "Porcelain", hex: "#efe7d7" }, { name: "Wintergreen", hex: "#a7c7b2" }, { name: "Peony", hex: "#e892aa" }] },
      { year: 2026, model: "Pixel 10", colors: [{ name: "Indigo", hex: "#4657a8" }, { name: "Frost", hex: "#dce5e8" }, { name: "Lemongrass", hex: "#d9d66f" }, { name: "Obsidian", hex: "#101112" }] }
    ]
  },
  {
    id: "polaroid-now",
    name: "Polaroid Now",
    items: [
      { year: 2020, model: "Polaroid Now", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Black", hex: "#111111" }, { name: "Red", hex: "#e33c38" }, { name: "Orange", hex: "#ef8a2f" }, { name: "Yellow", hex: "#f2cf4b" }, { name: "Green", hex: "#4aa66a" }, { name: "Blue", hex: "#2f7fc4" }] },
      { year: 2021, model: "Polaroid Now+", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Black", hex: "#111111" }, { name: "Blue Gray", hex: "#7f98a4" }] },
      { year: 2023, model: "Polaroid Now Gen 2", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }, { name: "Red", hex: "#e33c38" }, { name: "Blue", hex: "#2f7fc4" }] },
      { year: 2025, model: "Polaroid Now Gen 3", colors: [{ name: "Teal", hex: "#2f9ca3" }, { name: "Pink", hex: "#e7a3b6" }, { name: "Coral", hex: "#ee7d69" }, { name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }] }
    ]
  },
  {
    id: "macbook-air",
    name: "MacBook Air",
    items: [
      { year: 2008, model: "MacBook Air", colors: [{ name: "Aluminum", hex: "#bfc0bc" }, { name: "Black Keyboard", hex: "#111111" }] },
      { year: 2018, model: "MacBook Air Retina", colors: [{ name: "Silver", hex: "#d4d5d2" }, { name: "Space Gray", hex: "#55565a" }, { name: "Gold", hex: "#d8b983" }] },
      { year: 2022, model: "MacBook Air M2", colors: [{ name: "Midnight", hex: "#273247" }, { name: "Starlight", hex: "#eee4d1" }, { name: "Space Gray", hex: "#55565a" }, { name: "Silver", hex: "#d4d5d2" }] },
      { year: 2025, model: "MacBook Air M4", colors: [{ name: "Sky Blue", hex: "#a9bfd0" }, { name: "Silver", hex: "#d4d5d2" }, { name: "Starlight", hex: "#eee4d1" }, { name: "Midnight", hex: "#273247" }] }
    ]
  },
  {
    id: "macbook-pro",
    name: "MacBook Pro",
    items: [
      { year: 2006, model: "MacBook Pro", colors: [{ name: "Aluminum", hex: "#bfc0bc" }, { name: "Black Keyboard", hex: "#111111" }] },
      { year: 2016, model: "MacBook Pro Touch Bar", colors: [{ name: "Silver", hex: "#d5d6d2" }, { name: "Space Gray", hex: "#55565a" }] },
      { year: 2021, model: "MacBook Pro 14/16", colors: [{ name: "Silver", hex: "#d5d6d2" }, { name: "Space Gray", hex: "#55565a" }] },
      { year: 2023, model: "MacBook Pro M3 Pro", colors: [{ name: "Silver", hex: "#d5d6d2" }, { name: "Space Black", hex: "#2d2e30" }] }
    ]
  },
  {
    id: "airpods-max",
    name: "AirPods Max",
    items: [
      { year: 2020, model: "AirPods Max", colors: [{ name: "Space Gray", hex: "#55565a" }, { name: "Silver", hex: "#d8d9d5" }, { name: "Sky Blue", hex: "#a8bfd6" }, { name: "Green", hex: "#a5b89a" }, { name: "Pink", hex: "#e7a6ad" }] },
      { year: 2024, model: "AirPods Max USB-C", colors: [{ name: "Midnight", hex: "#242c3d" }, { name: "Starlight", hex: "#eee4d1" }, { name: "Blue", hex: "#93abc9" }, { name: "Purple", hex: "#b7a7d3" }, { name: "Orange", hex: "#ee8d3a" }] }
    ]
  },
  {
    id: "airpods",
    name: "AirPods",
    items: [
      { year: 2016, model: "AirPods", colors: [{ name: "Gloss White", hex: "#f4f1ea" }] },
      { year: 2019, model: "AirPods Pro", colors: [{ name: "Gloss White", hex: "#f4f1ea" }, { name: "Black Acoustic Mesh", hex: "#111111" }] },
      { year: 2021, model: "AirPods 3", colors: [{ name: "Gloss White", hex: "#f4f1ea" }] },
      { year: 2024, model: "AirPods 4", colors: [{ name: "Gloss White", hex: "#f4f1ea" }, { name: "Silver Hinge", hex: "#c7c8c5" }] }
    ]
  },
  {
    id: "galaxy-buds",
    name: "Galaxy Buds",
    items: [
      { year: 2019, model: "Galaxy Buds", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }, { name: "Yellow", hex: "#f0d25b" }] },
      { year: 2020, model: "Galaxy Buds Live", colors: [{ name: "Mystic Bronze", hex: "#b98975" }, { name: "Mystic Black", hex: "#111111" }, { name: "Mystic White", hex: "#f4f1ea" }] },
      { year: 2022, model: "Galaxy Buds2 Pro", colors: [{ name: "Graphite", hex: "#4d4e50" }, { name: "White", hex: "#f4f1ea" }, { name: "Bora Purple", hex: "#9f87cf" }] },
      { year: 2026, model: "Galaxy Buds4", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Black", hex: "#111111" }] }
    ]
  },
  {
    id: "surface-pro",
    name: "Surface Pro",
    items: [
      { year: 2013, model: "Surface Pro", colors: [{ name: "Dark Titanium", hex: "#4c4d4f" }, { name: "Black Cover", hex: "#111111" }] },
      { year: 2017, model: "Surface Pro", colors: [{ name: "Platinum", hex: "#c8c7c0" }, { name: "Cobalt Blue", hex: "#38698e" }, { name: "Burgundy", hex: "#7a2635" }] },
      { year: 2019, model: "Surface Pro 7", colors: [{ name: "Platinum", hex: "#c8c7c0" }, { name: "Matte Black", hex: "#111111" }] },
      { year: 2024, model: "Surface Pro 11", colors: [{ name: "Black", hex: "#111111" }, { name: "Platinum", hex: "#c8c7c0" }, { name: "Sapphire", hex: "#5d779d" }, { name: "Dune", hex: "#c7a98a" }] }
    ]
  },
  {
    id: "surface-laptop",
    name: "Surface Laptop",
    items: [
      { year: 2017, model: "Surface Laptop", colors: [{ name: "Platinum", hex: "#c8c7c0" }, { name: "Burgundy", hex: "#7a2635" }, { name: "Cobalt Blue", hex: "#38698e" }, { name: "Graphite Gold", hex: "#c1a176" }] },
      { year: 2019, model: "Surface Laptop 3", colors: [{ name: "Platinum", hex: "#c8c7c0" }, { name: "Matte Black", hex: "#111111" }, { name: "Sandstone", hex: "#d2b18d" }, { name: "Cobalt Blue", hex: "#38698e" }] },
      { year: 2024, model: "Surface Laptop 7", colors: [{ name: "Platinum", hex: "#c8c7c0" }, { name: "Black", hex: "#111111" }, { name: "Sapphire", hex: "#5d779d" }, { name: "Dune", hex: "#c7a98a" }] },
      { year: 2026, model: "Surface Laptop", colors: [{ name: "Platinum", hex: "#c8c7c0" }, { name: "Black", hex: "#111111" }, { name: "Dune", hex: "#c7a98a" }, { name: "Jade", hex: "#89a997" }] }
    ]
  },
  {
    id: "nintendo-switch-lite",
    name: "Nintendo Switch Lite",
    items: [
      { year: 2019, model: "Switch Lite", colors: [{ name: "Yellow", hex: "#f0d24f" }, { name: "Gray", hex: "#66686b" }, { name: "Turquoise", hex: "#36b9c8" }] },
      { year: 2020, model: "Switch Lite Coral", colors: [{ name: "Coral", hex: "#ee8f8c" }] },
      { year: 2021, model: "Switch Lite Blue", colors: [{ name: "Blue", hex: "#6e86c5" }] },
      { year: 2023, model: "Switch Lite Animal Crossing", colors: [{ name: "Coral", hex: "#ee8f8c" }, { name: "Turquoise", hex: "#36b9c8" }, { name: "Leaf Green", hex: "#78b76a" }] }
    ]
  },
  {
    id: "tesla-model-y",
    name: "Tesla Model Y",
    items: [
      { year: 2020, model: "Model Y Launch", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Midnight Silver Metallic", hex: "#5e6266" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Red Multi-Coat", hex: "#a5161d" }] },
      { year: 2022, model: "Model Y", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Midnight Silver Metallic", hex: "#5e6266" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Red Multi-Coat", hex: "#a5161d" }] },
      { year: 2024, model: "Model Y", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Solid Black", hex: "#0d0d0d" }, { name: "Stealth Gray", hex: "#555a5d" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Ultra Red", hex: "#b31321" }, { name: "Quicksilver", hex: "#b9bdbe" }] },
      { year: 2025, model: "Model Y Juniper", colors: [{ name: "Pearl White Multi-Coat", hex: "#f4f2eb" }, { name: "Diamond Black", hex: "#0b0b0b" }, { name: "Stealth Gray", hex: "#555a5d" }, { name: "Deep Blue Metallic", hex: "#1b3f66" }, { name: "Ultra Red", hex: "#b31321" }, { name: "Quicksilver", hex: "#b9bdbe" }] }
    ]
  },
  {
    id: "porsche-911",
    name: "Porsche 911",
    items: [
      { year: 1964, model: "911", colors: [{ name: "Irish Green", hex: "#2f5c42" }, { name: "Polo Red", hex: "#a81d21" }, { name: "Light Ivory", hex: "#eee8d8" }] },
      { year: 1973, model: "911 Carrera RS", colors: [{ name: "Grand Prix White", hex: "#f4f1ea" }, { name: "Guards Red", hex: "#c81d25" }, { name: "Viper Green", hex: "#4ca64c" }] },
      { year: 1995, model: "993", colors: [{ name: "Speed Yellow", hex: "#f0c400" }, { name: "Arena Red", hex: "#6d1f2c" }, { name: "Polar Silver", hex: "#bfc3c5" }] },
      { year: 2025, model: "911 Carrera", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Black", hex: "#111111" }, { name: "Guards Red", hex: "#c81d25" }, { name: "GT Silver Metallic", hex: "#b6b8b8" }, { name: "Gentian Blue Metallic", hex: "#173d62" }, { name: "Cartagena Yellow Metallic", hex: "#e6bc36" }] }
    ]
  },
  {
    id: "dyson-airwrap",
    name: "Dyson Airwrap",
    items: [
      { year: 2018, model: "Airwrap", colors: [{ name: "Iron/Fuchsia", hex: "#66696d" }, { name: "Fuchsia", hex: "#c72778" }] },
      { year: 2021, model: "Airwrap", colors: [{ name: "Prussian Blue", hex: "#273a54" }, { name: "Rich Copper", hex: "#b46b3d" }] },
      { year: 2024, model: "Airwrap i.d.", colors: [{ name: "Ceramic Pink", hex: "#e8b9b3" }, { name: "Rose Gold", hex: "#c99b79" }] },
      { year: 2025, model: "Airwrap Co-anda2x", colors: [{ name: "Jasper Plum", hex: "#5f405f" }, { name: "Ceramic Pink", hex: "#e8b9b3" }, { name: "Rose Gold", hex: "#c99b79" }] },
      { year: 2026, model: "Airwrap Summer", colors: [{ name: "Ceramic Apricot", hex: "#efb28a" }, { name: "Topaz", hex: "#d69b46" }] }
    ]
  },
  {
    id: "beats-solo",
    name: "Beats Solo",
    items: [
      { year: 2014, model: "Beats Solo2", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }, { name: "Red", hex: "#b5122b" }, { name: "Blue", hex: "#245f9f" }] },
      { year: 2016, model: "Beats Solo3", colors: [{ name: "Gloss Black", hex: "#050505" }, { name: "Gloss White", hex: "#f4f1ea" }, { name: "Rose Gold", hex: "#d8aaa3" }, { name: "Gold", hex: "#d7b16e" }] },
      { year: 2024, model: "Beats Solo 4", colors: [{ name: "Matte Black", hex: "#111111" }, { name: "Slate Blue", hex: "#536b86" }, { name: "Cloud Pink", hex: "#e5b3bf" }] }
    ]
  },
  {
    id: "amazon-kindle",
    name: "Amazon Kindle",
    items: [
      { year: 2007, model: "Kindle", colors: [{ name: "White", hex: "#f2f0ea" }, { name: "Light Gray", hex: "#bfc0bc" }] },
      { year: 2014, model: "Kindle Voyage", colors: [{ name: "Black", hex: "#111111" }, { name: "Graphite", hex: "#4f5052" }] },
      { year: 2018, model: "Kindle Paperwhite", colors: [{ name: "Black", hex: "#111111" }, { name: "Twilight Blue", hex: "#3f6684" }, { name: "Plum", hex: "#6f5269" }, { name: "Sage", hex: "#7d8b75" }] },
      { year: 2024, model: "Kindle", colors: [{ name: "Black", hex: "#111111" }, { name: "Matcha", hex: "#b9c7a3" }] },
      { year: 2024, model: "Kindle Colorsoft", colors: [{ name: "Black", hex: "#111111" }, { name: "Paper-like Color", hex: "#d8bf71" }] }
    ]
  },
  {
    id: "gopro-hero",
    name: "GoPro HERO",
    items: [
      { year: 2012, model: "HERO3", colors: [{ name: "White Edition", hex: "#f4f1ea" }, { name: "Silver Edition", hex: "#bfc2c0" }, { name: "Black Edition", hex: "#111111" }] },
      { year: 2018, model: "HERO7", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Silver", hex: "#bfc2c0" }, { name: "Black", hex: "#111111" }] },
      { year: 2019, model: "HERO8 Black", colors: [{ name: "Black", hex: "#111111" }, { name: "Dark Gray", hex: "#4f5254" }] },
      { year: 2024, model: "HERO13 Black", colors: [{ name: "Black", hex: "#111111" }, { name: "Blue Accent", hex: "#2f6fae" }] },
      { year: 2025, model: "HERO13 Black Polar White", colors: [{ name: "Polar White", hex: "#f4f1ea" }, { name: "Black Lens", hex: "#111111" }] }
    ]
  },
  {
    id: "nothing-phone",
    name: "Nothing Phone",
    items: [
      { year: 2022, model: "Phone (1)", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Black", hex: "#111111" }] },
      { year: 2023, model: "Phone (2)", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Dark Gray", hex: "#4a4b4d" }] },
      { year: 2024, model: "Phone (2a)", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }, { name: "Milk", hex: "#eee9dc" }] },
      { year: 2025, model: "Phone (3a)", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }, { name: "Blue", hex: "#6f98c8" }] },
      { year: 2026, model: "Phone (4a)", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }, { name: "Pink", hex: "#e7a3b6" }, { name: "Blue", hex: "#5d8fd0" }] }
    ]
  },
  {
    id: "sony-wh-1000x",
    name: "Sony WH-1000X",
    items: [
      { year: 2016, model: "MDR-1000X", colors: [{ name: "Black", hex: "#111111" }, { name: "Champagne Gold", hex: "#c7aa74" }] },
      { year: 2018, model: "WH-1000XM3", colors: [{ name: "Black", hex: "#111111" }, { name: "Silver", hex: "#c8c6bf" }] },
      { year: 2022, model: "WH-1000XM5", colors: [{ name: "Black", hex: "#111111" }, { name: "Silver", hex: "#c8c6bf" }, { name: "Midnight Blue", hex: "#283a55" }] },
      { year: 2025, model: "WH-1000XM6", colors: [{ name: "Black", hex: "#111111" }, { name: "Platinum Silver", hex: "#c8c6bf" }, { name: "Midnight Blue", hex: "#283a55" }] }
    ]
  },
  {
    id: "canon-eos-r",
    name: "Canon EOS R",
    items: [
      { year: 2018, model: "EOS R", colors: [{ name: "Canon Black", hex: "#111111" }, { name: "Red Ring", hex: "#b5122b" }] },
      { year: 2020, model: "EOS R5 / R6", colors: [{ name: "Matte Black", hex: "#111111" }, { name: "Dark Graphite", hex: "#3c3d3e" }, { name: "Red Ring", hex: "#b5122b" }] },
      { year: 2022, model: "EOS R7 / R10", colors: [{ name: "Black", hex: "#111111" }, { name: "Silver Mount", hex: "#bfc2c0" }] },
      { year: 2023, model: "EOS R50", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }] },
      { year: 2024, model: "EOS R5 Mark II", colors: [{ name: "Black", hex: "#111111" }, { name: "Graphite", hex: "#3c3d3e" }, { name: "Red Ring", hex: "#b5122b" }] }
    ]
  },
  {
    id: "instax-mini",
    name: "Instax Mini",
    items: [
      { year: 2012, model: "Instax Mini 8", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Pink", hex: "#e8a9b9" }, { name: "Blue", hex: "#74a8d8" }, { name: "Yellow", hex: "#efcf56" }, { name: "Black", hex: "#111111" }] },
      { year: 2017, model: "Instax Mini 9", colors: [{ name: "Flamingo Pink", hex: "#ee8aac" }, { name: "Ice Blue", hex: "#9bc8df" }, { name: "Lime Green", hex: "#8ccf54" }, { name: "Cobalt Blue", hex: "#3267a8" }] },
      { year: 2020, model: "Instax Mini 11", colors: [{ name: "Blush Pink", hex: "#e8a9b9" }, { name: "Sky Blue", hex: "#9bc8df" }, { name: "Charcoal Gray", hex: "#55575a" }, { name: "Ice White", hex: "#f4f1ea" }, { name: "Lilac Purple", hex: "#b9a7d6" }] },
      { year: 2023, model: "Instax Mini 12", colors: [{ name: "Pastel Blue", hex: "#9bc8df" }, { name: "Mint Green", hex: "#b7d6c0" }, { name: "Blossom Pink", hex: "#e8a9b9" }, { name: "Lilac Purple", hex: "#b9a7d6" }, { name: "Clay White", hex: "#f4f1ea" }] }
    ]
  },
  {
    id: "ipod",
    name: "iPod",
    items: [
      { year: 2001, model: "iPod", colors: [{ name: "White", hex: "#f4f1ea" }, { name: "Chrome", hex: "#bfc2c0" }] },
      { year: 2004, model: "iPod mini", colors: [{ name: "Silver", hex: "#c8c9c5" }, { name: "Gold", hex: "#d7b16e" }, { name: "Pink", hex: "#e8a9b9" }, { name: "Blue", hex: "#75a9d5" }, { name: "Green", hex: "#a7c88a" }] },
      { year: 2005, model: "iPod nano", colors: [{ name: "Black", hex: "#111111" }, { name: "White", hex: "#f4f1ea" }] },
      { year: 2008, model: "iPod nano Chromatic", colors: [{ name: "Silver", hex: "#c8c9c5" }, { name: "Black", hex: "#111111" }, { name: "Purple", hex: "#8b70b8" }, { name: "Blue", hex: "#2f83c5" }, { name: "Green", hex: "#8ccf54" }, { name: "Yellow", hex: "#efcf56" }, { name: "Orange", hex: "#ef8a2f" }, { name: "Red", hex: "#b5122b" }, { name: "Pink", hex: "#e9789f" }] },
      { year: 2019, model: "iPod touch", colors: [{ name: "Space Gray", hex: "#55565a" }, { name: "Gold", hex: "#d6b17e" }, { name: "Silver", hex: "#d5d6d2" }, { name: "Pink", hex: "#e8a9b9" }, { name: "Blue", hex: "#75a9d5" }, { name: "Product Red", hex: "#b5122b" }] }
    ]
  },
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    items: [
      { year: 1997, model: "Prius", colors: [{ name: "Silver Metallic", hex: "#bfc2c0" }, { name: "Dark Blue", hex: "#1d3e63" }, { name: "White", hex: "#f4f1ea" }] },
      { year: 2003, model: "Prius", colors: [{ name: "Super White", hex: "#f4f1ea" }, { name: "Silver Pine Mica", hex: "#9ca98f" }, { name: "Seaside Pearl", hex: "#54799d" }, { name: "Barcelona Red", hex: "#9d1f24" }] },
      { year: 2009, model: "Prius", colors: [{ name: "Blizzard Pearl", hex: "#f4f1ea" }, { name: "Classic Silver", hex: "#bfc2c0" }, { name: "Blue Ribbon", hex: "#2b5d9a" }, { name: "Winter Gray", hex: "#5d6062" }] },
      { year: 2015, model: "Prius", colors: [{ name: "Hypersonic Red", hex: "#b31321" }, { name: "Blue Crush", hex: "#2463a0" }, { name: "Sea Glass Pearl", hex: "#9cb8ad" }, { name: "Midnight Black", hex: "#111111" }] },
      { year: 2023, model: "Prius", colors: [{ name: "Wind Chill Pearl", hex: "#f4f1ea" }, { name: "Guardian Gray", hex: "#666a6d" }, { name: "Supersonic Red", hex: "#b31321" }, { name: "Reservoir Blue", hex: "#2d516e" }, { name: "Cutting Edge", hex: "#bfc2c0" }] }
    ]
  }
];

const canvas = document.querySelector("#archiveCanvas");
const appShell = document.querySelector(".app-shell");
const ctx = canvas.getContext("2d");
const tooltip = document.querySelector("#tooltip");
const panelToggle = document.querySelector("#panelToggle");
const bandModeButton = document.querySelector("#bandMode");
const dotModeButton = document.querySelector("#dotMode");
const labelToggle = document.querySelector("#labelToggle");
const gridToggle = document.querySelector("#gridToggle");
const topicSearch = document.querySelector("#topicSearch");
const topicList = document.querySelector("#topicList");
const topicCount = document.querySelector("#topicCount");
const zoomReadout = document.querySelector("#zoomReadout");
const resetViewButton = document.querySelector("#resetView");
const themeToggle = document.querySelector("#themeToggle");

function initialHiddenTopics() {
  return new Set(archiveData.slice(15).map((topic) => topic.id));
}

const state = {
  scale: 0.72,
  offsetX: 70,
  offsetY: 120,
  mode: "band",
  dotSize: 8,
  dotGap: 14,
  rowHeight: 144,
  showLabels: labelToggle.checked,
  showGrid: gridToggle.checked,
  hiddenTopics: initialHiddenTopics(),
  pointer: { x: 0, y: 0 },
  hovered: null,
  isDragging: false,
  isReordering: false,
  reorderTopicId: null,
  handleHoverTopicId: null,
  topicFilter: "",
  activePointers: new Map(),
  pinchStart: null,
  dragStart: { x: 0, y: 0 },
  lastOffset: { x: 0, y: 0 },
  topicOrder: archiveData.map((topic) => topic.id),
  dpr: 1,
  darkMode: false,
  hasInitializedView: false
};

const initialView = {
  scale: state.scale,
  offsetX: state.offsetX,
  offsetY: state.offsetY
};

const layout = {
  left: 250,
  right: 180,
  top: 40,
  guideIntroHeight: 96,
  itemGap: 14,
  itemWidth: 156,
  handleX: 218
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function isCompactViewport() {
  return (canvas.clientWidth || window.innerWidth) <= 1024;
}

function setPanelCollapsed(collapsed) {
  appShell.classList.toggle("panel-collapsed", collapsed);
  panelToggle.textContent = collapsed ? "<" : ">";
  panelToggle.setAttribute("aria-label", collapsed ? "Show controls" : "Hide controls");
  panelToggle.setAttribute("aria-expanded", String(!collapsed));
}

function canvasTheme() {
  return state.darkMode
    ? {
        bg: "#11100e",
        grid: "rgba(255, 244, 224, 0.025)",
        guide: "rgba(244, 238, 226, 0.18)",
        frameMat: "rgba(26, 24, 21, 0.92)",
        handle: "rgba(232, 224, 210, 0.42)",
        topicInk: "rgba(244, 238, 226, 0.9)",
        topicMuted: "rgba(244, 238, 226, 0.52)",
        divider: "rgba(244, 238, 226, 0.14)",
        label: "rgba(244, 238, 226, 0.56)",
        introTitle: "rgba(244, 238, 226, 0.9)",
        introBody: "rgba(244, 238, 226, 0.58)"
      }
    : {
        bg: "#f6f4ef",
        grid: "rgba(27, 27, 24, 0.035)",
        guide: "rgba(27, 27, 24, 0.2)",
        frameMat: "rgba(255, 255, 252, 0.5)",
        handle: "rgba(27, 27, 24, 0.38)",
        topicInk: "rgba(27, 27, 24, 0.9)",
        topicMuted: "rgba(27, 27, 24, 0.48)",
        divider: "rgba(27, 27, 24, 0.16)",
        label: "rgba(27, 27, 24, 0.56)",
        introTitle: "rgba(27, 27, 24, 0.9)",
        introBody: "rgba(27, 27, 24, 0.58)"
      };
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  state.dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * state.dpr);
  canvas.height = Math.floor(rect.height * state.dpr);
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  if (state.hasInitializedView) {
    constrainViewToArchive();
  } else {
    resetViewForGuides();
    state.hasInitializedView = true;
  }
  draw();
}

function visibleTopics() {
  const topicById = new Map(archiveData.map((topic) => [topic.id, topic]));
  return state.topicOrder
    .map((id) => topicById.get(id))
    .filter((topic) => topic && !state.hiddenTopics.has(topic.id));
}

function worldFromScreen(x, y) {
  return {
    x: (x - state.offsetX) / state.scale,
    y: (y - state.offsetY) / state.scale
  };
}

function screenFromWorld(x, y) {
  return {
    x: x * state.scale + state.offsetX,
    y: y * state.scale + state.offsetY
  };
}

function sectionMetrics() {
  const left = state.showGrid ? layout.left : 70;
  const itemGap = state.showGrid ? layout.itemGap : 0;
  const itemWidth = state.showGrid ? layout.itemWidth : layout.itemWidth + layout.itemGap;
  const topicGap = state.showGrid ? 72 : compactTopicGap();
  const itemStep = itemWidth + itemGap;
  return { itemGap, itemStep, itemWidth, left, topicGap };
}

function compactTopicGap() {
  if (state.mode !== "dot") return 0;

  const start = state.dotGap * 0.6;
  const limit = state.rowHeight - state.dotGap * 0.25;
  const rows = Math.max(1, Math.floor((limit - start - Number.EPSILON) / state.dotGap) + 1);
  return rows * state.dotGap - state.rowHeight;
}

function itemXForIndex(itemIndex, metrics) {
  return metrics.left + itemIndex * metrics.itemStep;
}

function archiveTop() {
  return state.showGrid ? layout.top + layout.guideIntroHeight : layout.top;
}

function rowTopForIndex(topicIndex, metrics) {
  return archiveTop() + topicIndex * (state.rowHeight + metrics.topicGap);
}

function buildTopicList() {
  topicList.innerHTML = "";
  const query = state.topicFilter.trim().toLowerCase();
  const filteredTopics = archiveData.filter((topic) => {
    if (!query) return true;
    return [
      topic.name,
      topic.id,
      ...topic.items.flatMap((item) => [String(item.year), item.model, ...item.colors.map((color) => color.name)])
    ].some((value) => value.toLowerCase().includes(query));
  });

  topicCount.textContent = `${filteredTopics.length} / ${archiveData.length} topics`;

  filteredTopics.forEach((topic) => {
    const first = topic.items[0]?.year ?? "";
    const last = topic.items.at(-1)?.year ?? "";
    const item = document.createElement("div");
    item.className = "topic-item";
    item.innerHTML = `
      <label>
        <input type="checkbox" ${state.hiddenTopics.has(topic.id) ? "" : "checked"} data-topic="${topic.id}" />
        <span class="topic-name">${topic.name}</span>
      </label>
      <span class="topic-years">${first}-${last}</span>
    `;
    topicList.appendChild(item);
  });
}

topicList.addEventListener("change", (event) => {
  const input = event.target.closest("input[data-topic]");
  if (!input) return;
  if (input.checked) {
    state.hiddenTopics.delete(input.dataset.topic);
  } else {
    state.hiddenTopics.add(input.dataset.topic);
  }
  constrainViewToArchive();
  draw();
});

function drawBackground(width, height) {
  const theme = canvasTheme();

  ctx.save();
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = theme.grid;
  ctx.lineWidth = 1;
  for (let x = 0; x < width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawGridLine(x, y, height) {
  ctx.save();
  ctx.strokeStyle = canvasTheme().guide;
  ctx.lineWidth = 1 / state.scale;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + height);
  ctx.stroke();
  ctx.restore();
}

function drawDot(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function topicRowWidth(topic, metrics) {
  return topic.items.length * metrics.itemWidth + Math.max(0, topic.items.length - 1) * metrics.itemGap;
}

function archiveFrameBounds(topics, metrics) {
  if (state.showGrid || topics.length === 0) return null;

  const maxRowWidth = Math.max(...topics.map((topic) => topicRowWidth(topic, metrics)));
  const firstTop = rowTopForIndex(0, metrics);
  const lastTop = rowTopForIndex(topics.length - 1, metrics);
  const labelLeft = metrics.left;
  const contentRight = metrics.left + maxRowWidth;
  const framePadding = 24;

  return {
    x: labelLeft - framePadding,
    y: firstTop - framePadding,
    width: contentRight - labelLeft + framePadding * 2,
    height: lastTop + state.rowHeight - firstTop + framePadding * 2
  };
}

function archiveFrameOuterBounds(topics, metrics) {
  const frame = archiveFrameBounds(topics, metrics);
  if (!frame) return null;

  const rail = 34;
  return {
    x: frame.x - rail,
    y: frame.y - rail,
    width: frame.width + rail * 2,
    height: frame.height + rail * 2
  };
}

function archiveContentBounds(topics, metrics) {
  if (topics.length === 0) return null;

  if (!state.showGrid) {
    return archiveFrameOuterBounds(topics, metrics);
  }

  const maxRowWidth = Math.max(...topics.map((topic) => topicRowWidth(topic, metrics)));
  const firstTop = rowTopForIndex(0, metrics);
  const lastTop = rowTopForIndex(topics.length - 1, metrics);
  const x = -24;
  const y = state.showGrid ? layout.top - 16 : firstTop - 28;
  const right = metrics.left + maxRowWidth + layout.right;
  const bottom = lastTop + state.rowHeight + 70;

  return {
    x,
    y,
    width: right - x,
    height: bottom - y
  };
}

function constrainViewToArchive() {
  const topics = visibleTopics();
  const metrics = sectionMetrics();
  const bounds = archiveContentBounds(topics, metrics);
  const width = canvas.clientWidth || window.innerWidth;
  const height = canvas.clientHeight || window.innerHeight;

  if (!bounds || !width || !height) return;

  const margin = clamp(Math.min(width, height) * 0.45, 140, 560);
  const minX = width - margin - (bounds.x + bounds.width) * state.scale;
  const maxX = margin - bounds.x * state.scale;
  const minY = height - margin - (bounds.y + bounds.height) * state.scale;
  const maxY = margin - bounds.y * state.scale;

  state.offsetX = minX > maxX ? (minX + maxX) / 2 : clamp(state.offsetX, minX, maxX);
  state.offsetY = minY > maxY ? (minY + maxY) / 2 : clamp(state.offsetY, minY, maxY);
}

function artworkViewport() {
  const width = canvas.clientWidth || window.innerWidth;
  const height = canvas.clientHeight || window.innerHeight;
  const panelOpen = !appShell.classList.contains("panel-collapsed");
  const panelWidth = document.querySelector(".panel")?.getBoundingClientRect().width || 0;

  if (panelOpen && width > 820) {
    return { x: 0, y: 0, width: Math.max(1, width - panelWidth), height };
  }

  return { x: 0, y: 0, width, height };
}

function fitScaleForBounds(bounds, viewport) {
  const padding = clamp(Math.min(viewport.width, viewport.height) * 0.08, 28, 80);
  const availableWidth = Math.max(1, viewport.width - padding * 2);
  const availableHeight = Math.max(1, viewport.height - padding * 2);
  const scale = Math.min(availableWidth / bounds.width, availableHeight / bounds.height);

  return clamp(scale, 0.045, 0.72);
}

function resetInteractionState() {
  state.hovered = null;
  state.isDragging = false;
  state.isReordering = false;
  state.reorderTopicId = null;
  state.handleHoverTopicId = null;
  tooltip.hidden = true;
  canvas.classList.remove("is-dragging");
  canvas.style.cursor = "grab";
}

function applyGuidedView() {
  const width = canvas.clientWidth || window.innerWidth;
  const height = canvas.clientHeight || window.innerHeight;

  state.scale = width < 520 ? 0.62 : width < 1024 ? 0.68 : initialView.scale;
  state.offsetX = Math.min(initialView.offsetX, Math.max(22, width * 0.055));
  state.offsetY = Math.min(initialView.offsetY, Math.max(58, height * 0.12));
  constrainViewToArchive();
}

function applyFramedView() {
  const topics = visibleTopics();
  const metrics = sectionMetrics();
  const frame = archiveFrameOuterBounds(topics, metrics);
  const viewport = artworkViewport();

  if (!frame) {
    state.offsetX = initialView.offsetX;
    state.offsetY = initialView.offsetY;
    constrainViewToArchive();
    return;
  }

  state.scale = fitScaleForBounds(frame, viewport);
  state.offsetX = viewport.x + viewport.width / 2 - (frame.x + frame.width / 2) * state.scale;
  state.offsetY = viewport.y + viewport.height / 2 - (frame.y + frame.height / 2) * state.scale;
  constrainViewToArchive();
}

function resetViewForGuides() {
  if (state.showGrid) {
    applyGuidedView();
  } else {
    applyFramedView();
  }
}

function drawArchiveFrame(topics, metrics) {
  const frame = archiveFrameBounds(topics, metrics);
  if (!frame) return;

  const rail = 34;
  const outer = {
    x: frame.x - rail,
    y: frame.y - rail,
    width: frame.width + rail * 2,
    height: frame.height + rail * 2
  };
  const inner = frame;

  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.44)";
  ctx.shadowBlur = 28 / state.scale;
  ctx.shadowOffsetX = 10 / state.scale;
  ctx.shadowOffsetY = 14 / state.scale;
  ctx.fillStyle = "#4d2b16";
  ctx.fillRect(outer.x, outer.y, outer.width, outer.height);

  ctx.shadowColor = "transparent";

  const woodGradient = ctx.createLinearGradient(outer.x, outer.y, outer.x + outer.width, outer.y + outer.height);
  woodGradient.addColorStop(0, "#8a552d");
  woodGradient.addColorStop(0.28, "#5a321a");
  woodGradient.addColorStop(0.58, "#9a6335");
  woodGradient.addColorStop(1, "#3d2413");
  ctx.fillStyle = woodGradient;
  ctx.fillRect(outer.x, outer.y, outer.width, outer.height);

  ctx.fillStyle = canvasTheme().frameMat;
  ctx.fillRect(inner.x, inner.y, inner.width, inner.height);

  function bevel(points, fill) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  }

  bevel([
    { x: outer.x, y: outer.y },
    { x: outer.x + outer.width, y: outer.y },
    { x: inner.x + inner.width, y: inner.y },
    { x: inner.x, y: inner.y }
  ], "#9f6637");

  bevel([
    { x: outer.x + outer.width, y: outer.y },
    { x: outer.x + outer.width, y: outer.y + outer.height },
    { x: inner.x + inner.width, y: inner.y + inner.height },
    { x: inner.x + inner.width, y: inner.y }
  ], "#5b3219");

  bevel([
    { x: outer.x, y: outer.y + outer.height },
    { x: outer.x + outer.width, y: outer.y + outer.height },
    { x: inner.x + inner.width, y: inner.y + inner.height },
    { x: inner.x, y: inner.y + inner.height }
  ], "#3f2412");

  bevel([
    { x: outer.x, y: outer.y },
    { x: inner.x, y: inner.y },
    { x: inner.x, y: inner.y + inner.height },
    { x: outer.x, y: outer.y + outer.height }
  ], "#754421");

  ctx.strokeStyle = "rgba(35, 19, 9, 0.72)";
  ctx.lineWidth = 2 / state.scale;
  ctx.strokeRect(outer.x, outer.y, outer.width, outer.height);

  ctx.strokeStyle = "rgba(255, 230, 190, 0.32)";
  ctx.lineWidth = 1 / state.scale;
  ctx.strokeRect(outer.x + 7, outer.y + 7, outer.width - 14, outer.height - 14);

  ctx.strokeStyle = "rgba(30, 18, 10, 0.55)";
  ctx.lineWidth = 3 / state.scale;
  ctx.strokeRect(inner.x, inner.y, inner.width, inner.height);

  ctx.strokeStyle = "rgba(255, 255, 252, 0.42)";
  ctx.lineWidth = 1 / state.scale;
  ctx.strokeRect(inner.x + 7, inner.y + 7, inner.width - 14, inner.height - 14);
  ctx.restore();
}

function flattenedColors(topic) {
  return topic.items.flatMap((entry) => entry.colors);
}

function drawStretchedTopic(topic, rowTop, maxWidth, metrics) {
  const colors = flattenedColors(topic);
  const colorWidth = maxWidth / Math.max(1, colors.length);

  if (state.mode === "dot") {
    const radius = state.dotSize / 2;
    const gap = state.dotGap;

    for (let y = rowTop + gap * 0.6; y < rowTop + state.rowHeight - gap * 0.25; y += gap) {
      for (let x = metrics.left + gap * 0.55; x < metrics.left + maxWidth; x += gap) {
        const colorIndex = clamp(Math.floor((x - metrics.left) / colorWidth), 0, colors.length - 1);
        drawDot(x, y, radius, colors[colorIndex].hex);
      }
    }
    return;
  }

  colors.forEach((color, colorIndex) => {
    const colorX = metrics.left + colorIndex * colorWidth;

    ctx.fillStyle = color.hex;
    ctx.fillRect(colorX, rowTop, colorWidth + 0.5, state.rowHeight);
  });
}

function drawStretchedArchive(topics, metrics) {
  if (topics.length === 0) return;

  const maxWidth = Math.max(...topics.map((topic) => topicRowWidth(topic, metrics)));

  topics.forEach((topic, topicIndex) => {
    const rowTop = rowTopForIndex(topicIndex, metrics);
    drawStretchedTopic(topic, rowTop, maxWidth, metrics);
  });
}

function drawGuideIntro(metrics) {
  if (!state.showGrid) return;

  const theme = canvasTheme();
  const x = metrics.left;
  const y = layout.top;

  ctx.save();
  ctx.fillStyle = theme.introTitle;
  ctx.font = "700 22px Inter, Pretendard, sans-serif";
  ctx.fillText("Read the archive from left to right.", x, y + 8);

  ctx.fillStyle = theme.introBody;
  ctx.font = "14px Inter, Pretendard, sans-serif";
  ctx.fillText("Each row is a product line, and each block records the colors released in that moment.", x, y + 38);
  ctx.fillText("Reorder rows, turn Guides off, and switch Light/Dark mode to see the work change its mood.", x, y + 62);
  ctx.restore();
}

function drawReorderHandle(rowTop) {
  const centerY = rowTop + state.rowHeight / 2;
  const dotRadius = 2.4;
  const gapX = 8;
  const gapY = 8;

  ctx.save();
  ctx.fillStyle = canvasTheme().handle;
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 2; col += 1) {
      drawDot(layout.handleX + col * gapX, centerY - gapY + row * gapY, dotRadius, ctx.fillStyle);
    }
  }
  ctx.restore();
}

function drawTopicOverlay(topic, rowTop, rowWidth) {
  if (!state.showGrid) return;
  if (state.handleHoverTopicId !== topic.id && state.reorderTopicId !== topic.id) return;

  ctx.save();
  ctx.fillStyle = "rgba(218, 218, 214, 0.28)";
  ctx.fillRect(-12, rowTop - 12, metricsLeftWidth(rowWidth), state.rowHeight + 24);
  ctx.restore();
}

function metricsLeftWidth(rowWidth) {
  return layout.left + rowWidth + 18;
}

function drawTopic(topic, topicIndex) {
  const metrics = sectionMetrics();
  const rowTop = rowTopForIndex(topicIndex, metrics);
  const rowBottom = rowTop + state.rowHeight;
  const startX = metrics.left;
  const rowWidth = topicRowWidth(topic, metrics);

  if (state.showGrid) {
    ctx.save();
    drawReorderHandle(rowTop);

    ctx.fillStyle = canvasTheme().topicInk;
    ctx.font = "700 24px Inter, Pretendard, sans-serif";
    ctx.fillText(topic.name, 0, rowTop + 24);

    ctx.fillStyle = canvasTheme().topicMuted;
    ctx.font = "13px Inter, Pretendard, sans-serif";
    const yearText = `${topic.items[0].year} - ${topic.items.at(-1).year}`;
    ctx.fillText(yearText, 0, rowTop + 47);

    ctx.strokeStyle = canvasTheme().divider;
    ctx.lineWidth = 1 / state.scale;
    ctx.beginPath();
    ctx.moveTo(startX, rowBottom + 20);
    ctx.lineTo(startX + rowWidth, rowBottom + 20);
    ctx.stroke();
    ctx.restore();
  }

  topic.items.forEach((entry, itemIndex) => {
    const itemX = itemXForIndex(itemIndex, metrics);
    const colorWidth = metrics.itemWidth / entry.colors.length;

    if (state.showGrid && itemIndex > 0) {
      drawGridLine(itemX - metrics.itemGap / 2, rowTop - 8, state.rowHeight + 28);
    }

    entry.colors.forEach((color, colorIndex) => {
      const colorX = itemX + colorIndex * colorWidth;
      if (state.mode === "band") {
        ctx.fillStyle = color.hex;
        ctx.fillRect(colorX, rowTop, colorWidth + 0.5, state.rowHeight);
      } else {
        const radius = state.dotSize / 2;
        const gap = state.dotGap;
        const alternate = (colorIndex % 2) * gap * 0.5;

        for (let y = rowTop + gap * 0.6; y < rowBottom - gap * 0.25; y += gap) {
          for (let x = colorX + gap * 0.55 + alternate; x < colorX + colorWidth; x += gap) {
            drawDot(x, y, radius, color.hex);
          }
        }
      }
    });

    if (state.showGrid && state.showLabels) {
      ctx.save();
      ctx.fillStyle = canvasTheme().label;
      ctx.font = "12px Inter, Pretendard, sans-serif";
      ctx.fillText(String(entry.year), itemX + 4, rowBottom + 42);
      ctx.restore();
    }
  });

  drawTopicOverlay(topic, rowTop, rowWidth);
}

function drawHoverMarker() {
  if (!state.hovered) return;
  const { bounds } = state.hovered;
  ctx.save();
  ctx.strokeStyle = "rgba(218, 218, 214, 0.96)";
  ctx.lineWidth = 2 / state.scale;
  ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
  ctx.restore();
}

function draw() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height) return;

  drawBackground(width, height);
  ctx.save();
  ctx.setTransform(state.dpr * state.scale, 0, 0, state.dpr * state.scale, state.dpr * state.offsetX, state.dpr * state.offsetY);
  const topics = visibleTopics();
  const metrics = sectionMetrics();
  drawArchiveFrame(topics, metrics);

  if (!state.showGrid) {
    drawStretchedArchive(topics, metrics);
  } else {
    drawGuideIntro(metrics);
    topics.forEach(drawTopic);
  }

  drawHoverMarker();
  ctx.restore();

  zoomReadout.textContent = `${Math.round(state.scale * 100)}%`;
}

function hitTest(screenX, screenY) {
  if (!state.showGrid) return null;

  const point = worldFromScreen(screenX, screenY);
  const topics = visibleTopics();
  const metrics = sectionMetrics();

  for (let topicIndex = 0; topicIndex < topics.length; topicIndex += 1) {
    const topic = topics[topicIndex];
    const rowTop = rowTopForIndex(topicIndex, metrics);
    const rowBottom = rowTop + state.rowHeight;
    if (point.y < rowTop || point.y > rowBottom) continue;

    for (let itemIndex = 0; itemIndex < topic.items.length; itemIndex += 1) {
      const entry = topic.items[itemIndex];
      const itemX = itemXForIndex(itemIndex, metrics);
      if (point.x < itemX || point.x > itemX + metrics.itemWidth) continue;

      const colorWidth = metrics.itemWidth / entry.colors.length;
      const colorIndex = clamp(Math.floor((point.x - itemX) / colorWidth), 0, entry.colors.length - 1);
      const color = entry.colors[colorIndex];

      return {
        topic,
        entry,
        color,
        bounds: {
          x: itemX + colorIndex * colorWidth,
          y: rowTop,
          width: colorWidth,
          height: state.rowHeight
        }
      };
    }
  }

  return null;
}

function handleHitTest(screenX, screenY) {
  if (!state.showGrid) return null;

  const point = worldFromScreen(screenX, screenY);
  const topics = visibleTopics();
  const metrics = sectionMetrics();
  const handleLeft = layout.handleX - 8;
  const handleRight = layout.handleX + 18;

  if (point.x < handleLeft || point.x > handleRight) return null;

  for (let topicIndex = 0; topicIndex < topics.length; topicIndex += 1) {
    const rowTop = rowTopForIndex(topicIndex, metrics);
    const centerY = rowTop + state.rowHeight / 2;
    if (point.y >= centerY - 22 && point.y <= centerY + 22) {
      return { topic: topics[topicIndex], index: topicIndex };
    }
  }

  return null;
}

function moveTopicToVisibleIndex(topicId, targetIndex) {
  const currentVisibleIds = visibleTopics().map((topic) => topic.id);
  const currentIndex = currentVisibleIds.indexOf(topicId);
  if (currentIndex === -1 || currentIndex === targetIndex) return;

  const nextOrder = state.topicOrder.filter((id) => id !== topicId);
  const visibleAfterRemoval = nextOrder.filter((id) => !state.hiddenTopics.has(id));
  const beforeId = visibleAfterRemoval[targetIndex];

  if (beforeId) {
    nextOrder.splice(nextOrder.indexOf(beforeId), 0, topicId);
  } else {
    const lastVisibleId = visibleAfterRemoval.at(-1);
    const insertIndex = lastVisibleId ? nextOrder.indexOf(lastVisibleId) + 1 : nextOrder.length;
    nextOrder.splice(insertIndex, 0, topicId);
  }

  state.topicOrder = nextOrder;
}

function updateTooltip(event) {
  if (!state.hovered || state.isDragging) {
    tooltip.hidden = true;
    return;
  }

  const { topic, entry, color } = state.hovered;
  tooltip.innerHTML = `
    <strong>${topic.name}</strong>
    <span>${entry.year} &middot; ${entry.model}</span>
    <span>${color.name} &middot; ${color.hex}</span>
  `;
  tooltip.style.left = `${event.clientX - canvas.getBoundingClientRect().left}px`;
  tooltip.style.top = `${event.clientY - canvas.getBoundingClientRect().top}px`;
  tooltip.hidden = false;
}

function pointerCenter(pointers) {
  return {
    x: (pointers[0].x + pointers[1].x) / 2,
    y: (pointers[0].y + pointers[1].y) / 2
  };
}

function pointerDistance(pointers) {
  return Math.hypot(pointers[0].x - pointers[1].x, pointers[0].y - pointers[1].y);
}

function startPinch() {
  const pointers = Array.from(state.activePointers.values());
  if (pointers.length < 2) return;

  state.isDragging = false;
  state.isReordering = false;
  state.reorderTopicId = null;
  state.handleHoverTopicId = null;
  state.hovered = null;
  tooltip.hidden = true;

  const center = pointerCenter(pointers);
  state.pinchStart = {
    distance: Math.max(1, pointerDistance(pointers)),
    scale: state.scale,
    center,
    worldCenter: worldFromScreen(center.x, center.y)
  };
}

function updatePinch() {
  if (!state.pinchStart || state.activePointers.size < 2) return false;

  const pointers = Array.from(state.activePointers.values());
  const center = pointerCenter(pointers);
  const ratio = pointerDistance(pointers) / state.pinchStart.distance;

  state.scale = clamp(state.pinchStart.scale * ratio, 0.045, 8);
  state.offsetX = center.x - state.pinchStart.worldCenter.x * state.scale;
  state.offsetY = center.y - state.pinchStart.worldCenter.y * state.scale;
  constrainViewToArchive();
  draw();
  return true;
}

canvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const before = worldFromScreen(mouseX, mouseY);
  const zoom = event.deltaY < 0 ? 1.12 : 0.88;
  state.scale = clamp(state.scale * zoom, 0.045, 8);
  state.offsetX = mouseX - before.x * state.scale;
  state.offsetY = mouseY - before.y * state.scale;
  constrainViewToArchive();
  draw();
  updateTooltip(event);
}, { passive: false });

canvas.addEventListener("pointerdown", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  state.activePointers.set(event.pointerId, { x, y });
  canvas.setPointerCapture(event.pointerId);

  if (state.activePointers.size >= 2) {
    canvas.classList.add("is-dragging");
    canvas.style.cursor = "grabbing";
    startPinch();
    draw();
    return;
  }

  const handle = handleHitTest(x, y);

  if (handle) {
    state.isReordering = true;
    state.reorderTopicId = handle.topic.id;
    state.handleHoverTopicId = handle.topic.id;
    state.hovered = null;
    tooltip.hidden = true;
    canvas.style.cursor = "grabbing";
    draw();
  } else {
    state.isDragging = true;
    state.dragStart = { x: event.clientX, y: event.clientY };
    state.lastOffset = { x: state.offsetX, y: state.offsetY };
  }

  canvas.classList.add("is-dragging");
});

canvas.addEventListener("pointermove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  state.pointer = { x, y };

  if (state.activePointers.has(event.pointerId)) {
    state.activePointers.set(event.pointerId, { x, y });
  }

  if (updatePinch()) {
    canvas.style.cursor = "grabbing";
    tooltip.hidden = true;
    return;
  }

  if (state.isReordering) {
    canvas.style.cursor = "grabbing";
    const point = worldFromScreen(x, y);
    const topics = visibleTopics();
    const metrics = sectionMetrics();
    const rowStep = state.rowHeight + metrics.topicGap;
    const targetIndex = clamp(Math.floor((point.y - archiveTop() + rowStep / 2) / rowStep), 0, topics.length - 1);

    moveTopicToVisibleIndex(state.reorderTopicId, targetIndex);
    state.handleHoverTopicId = state.reorderTopicId;
    draw();
    tooltip.hidden = true;
    return;
  }

  if (state.isDragging) {
    canvas.style.cursor = "grabbing";
    state.offsetX = state.lastOffset.x + event.clientX - state.dragStart.x;
    state.offsetY = state.lastOffset.y + event.clientY - state.dragStart.y;
    constrainViewToArchive();
    draw();
    tooltip.hidden = true;
    return;
  }

  const handle = handleHitTest(x, y);
  canvas.style.cursor = handle ? "grab" : "grab";
  const nextHandleHoverTopicId = handle?.topic.id ?? null;
  const handleHoverChanged = state.handleHoverTopicId !== nextHandleHoverTopicId;
  state.handleHoverTopicId = nextHandleHoverTopicId;

  const nextHover = handle ? null : hitTest(x, y);
  const changed =
    handleHoverChanged ||
    !state.hovered ||
    !nextHover ||
    state.hovered.topic.id !== nextHover.topic.id ||
    state.hovered.entry.model !== nextHover.entry.model ||
    state.hovered.color.hex !== nextHover.color.hex;

  state.hovered = nextHover;
  if (changed) draw();
  updateTooltip(event);
});

canvas.addEventListener("pointerup", (event) => {
  state.activePointers.delete(event.pointerId);
  state.pinchStart = null;
  state.isDragging = false;
  state.isReordering = false;
  state.reorderTopicId = null;
  state.handleHoverTopicId = null;
  canvas.classList.remove("is-dragging");
  canvas.style.cursor = "grab";
  canvas.releasePointerCapture(event.pointerId);
  draw();
});

canvas.addEventListener("pointercancel", (event) => {
  state.activePointers.delete(event.pointerId);
  state.pinchStart = null;
  state.isDragging = false;
  state.isReordering = false;
  state.reorderTopicId = null;
  state.handleHoverTopicId = null;
  canvas.classList.remove("is-dragging");
  canvas.style.cursor = "grab";
  draw();
});

canvas.addEventListener("pointerleave", () => {
  state.activePointers.clear();
  state.pinchStart = null;
  state.hovered = null;
  tooltip.hidden = true;
  state.isReordering = false;
  state.reorderTopicId = null;
  state.handleHoverTopicId = null;
  canvas.style.cursor = "grab";
  if (!state.isDragging) draw();
});

function setMode(mode) {
  state.mode = mode;
  bandModeButton.classList.toggle("is-active", mode === "band");
  dotModeButton.classList.toggle("is-active", mode === "dot");
  bandModeButton.setAttribute("aria-pressed", String(mode === "band"));
  dotModeButton.setAttribute("aria-pressed", String(mode === "dot"));
  state.hovered = null;
  tooltip.hidden = true;
  if (!state.showGrid) {
    applyFramedView();
  } else {
    constrainViewToArchive();
  }
  draw();
}

bandModeButton.addEventListener("click", () => setMode("band"));
dotModeButton.addEventListener("click", () => setMode("dot"));

labelToggle.addEventListener("change", () => {
  state.showLabels = labelToggle.checked;
  draw();
});

gridToggle.addEventListener("change", () => {
  state.showGrid = gridToggle.checked;
  resetInteractionState();
  resetViewForGuides();
  draw();
});

topicSearch.addEventListener("input", () => {
  state.topicFilter = topicSearch.value;
  buildTopicList();
});

resetViewButton.addEventListener("click", () => {
  resetInteractionState();
  resetViewForGuides();
  draw();
});

themeToggle.addEventListener("click", () => {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle("dark-mode", state.darkMode);
  themeToggle.setAttribute("aria-pressed", String(state.darkMode));
  themeToggle.setAttribute("aria-label", state.darkMode ? "Turn off dark mode" : "Turn on dark mode");
  draw();
});

panelToggle.addEventListener("click", () => {
  const collapsed = !appShell.classList.contains("panel-collapsed");
  setPanelCollapsed(collapsed);
  if (state.showGrid) {
    constrainViewToArchive();
  } else {
    applyFramedView();
  }
  draw();
});

window.addEventListener("resize", resizeCanvas);
window.visualViewport?.addEventListener("resize", resizeCanvas);

buildTopicList();
setPanelCollapsed(isCompactViewport());
resizeCanvas();
