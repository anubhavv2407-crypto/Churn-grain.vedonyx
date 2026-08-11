export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  price: string;
  size: string;
  image: string;
  gallery: string[];
  theme: string;
  accent: string;
  description: string;
  ingredients: string;
  highlights: string[];
  proof: string;
  badge: string;
};

export const products: Product[] = [
  {
    slug: "a2-desi-cow-ghee",
    name: "A2 Desi Cow Ghee",
    shortName: "A2 Ghee",
    category: "The Pure Pantry",
    price: "₹1,100",
    size: "500 ml / 1 L",
    image: "/images/product-ghee.png",
    gallery: ["/images/product-ghee.png", "/images/product-gallery/ghee-01.webp", "/images/product-gallery/ghee-02.webp", "/images/product-gallery/ghee-03.webp", "/images/product-gallery/ghee-04.webp", "/images/product-gallery/ghee-05.webp", "/images/product-gallery/ghee-06.webp", "/images/product-gallery/ghee-07.webp", "/images/product-gallery/ghee-08.webp"],
    theme: "#FFD84D",
    accent: "#FF8C73",
    description: "Rich, nutty and deeply aromatic, with the golden colour and grainy texture of traditionally churned, slow-cooked ghee.",
    ingredients: "Pure A2 Desi Cow Milk Fat. Single ingredient. Nothing added. Nothing removed.",
    highlights: ["Traditional Bilona method", "99.96% milk fat", "Zero preservatives", "Lab tested every batch"],
    proof: "Baudoin test: Negative",
    badge: "Bestseller",
  },
  {
    slug: "kashmir-mongra-kesar",
    name: "Kashmir Mongra Kesar",
    shortName: "Kashmir Kesar",
    category: "The Pure Pantry",
    price: "₹699",
    size: "1 g",
    image: "/images/product-saffron.png",
    gallery: ["/images/product-saffron.png", "/images/product-gallery/saffron-01.webp", "/images/product-gallery/saffron-02.webp", "/images/product-gallery/saffron-03.webp", "/images/product-gallery/saffron-04.webp", "/images/product-gallery/saffron-05.webp", "/images/product-gallery/saffron-06.webp", "/images/product-gallery/saffron-07.webp", "/images/product-gallery/saffron-08.webp"],
    theme: "#FF8C73",
    accent: "#FFD84D",
    description: "Grade A++ threads from Pampore, Kashmir, with an intensely floral aroma and colour that blooms slowly and beautifully.",
    ingredients: "100% Kashmir Saffron Threads (Crocus Sativus), hand-harvested and sun-dried.",
    highlights: ["Crocin 250+", "ISO 3632 Category I", "No added colour", "Hand harvested"],
    proof: "Zero extraneous matter",
    badge: "Grade A++",
  },
  {
    slug: "jamun-forest-honey",
    name: "Jamun Forest Honey",
    shortName: "Jamun Honey",
    category: "The Pure Pantry",
    price: "₹949",
    size: "500 g",
    image: "/images/product-honey.png",
    gallery: ["/images/product-honey.png", "/images/product-gallery/honey-01.webp", "/images/product-gallery/honey-02.webp", "/images/product-gallery/honey-03.webp", "/images/product-gallery/honey-04.webp", "/images/product-gallery/honey-05.webp", "/images/product-gallery/honey-06.webp", "/images/product-gallery/honey-07.webp", "/images/product-gallery/honey-08.webp"],
    theme: "#A873D9",
    accent: "#FF8C73",
    description: "Deep, dark and gently tart forest honey with the unmistakable character of seasonal Jamun blossom.",
    ingredients: "100% natural Jamun blossom honey. Natural crystallisation may occur.",
    highlights: ["Single-origin character", "No added sugar", "Raw flavour profile", "Batch verified"],
    proof: "Nothing blended in",
    badge: "Forest harvest",
  },
  {
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    shortName: "Olive Oil",
    category: "The Pure Pantry",
    price: "₹699",
    size: "250 ml",
    image: "/images/product-olive-oil.png",
    gallery: ["/images/product-olive-oil.png", "/images/product-gallery/olive-01.webp", "/images/product-gallery/olive-02.webp", "/images/product-gallery/olive-03.webp", "/images/product-gallery/olive-04.webp", "/images/product-gallery/olive-05.webp", "/images/product-gallery/olive-06.webp", "/images/product-gallery/olive-07.webp", "/images/product-gallery/olive-08.webp"],
    theme: "#B7D96A",
    accent: "#FFD84D",
    description: "Clean, peppery and fruit-forward extra virgin olive oil for finishing, dressing and everyday cooking.",
    ingredients: "Extra virgin olive oil. Solvent free, with no preservatives or additives.",
    highlights: ["Cold processed", "Solvent free", "Zero trans fat", "Single ingredient"],
    proof: "No argemone oil",
    badge: "Everyday essential",
  },
  {
    slug: "shilajit-gold-resin",
    name: "Shilajit Gold Resin",
    shortName: "Shilajit Gold",
    category: "Ayurvedic Wellness",
    price: "₹1,899",
    size: "20 g",
    image: "/images/wellness-ritual.png",
    gallery: ["/images/wellness-ritual.png", "/images/product-gallery/shilajit-01.webp", "/images/product-gallery/shilajit-02.webp", "/images/product-gallery/shilajit-03.webp", "/images/product-gallery/shilajit-04.webp", "/images/product-gallery/shilajit-05.webp", "/images/product-gallery/shilajit-06.webp", "/images/product-gallery/shilajit-07.webp", "/images/product-gallery/shilajit-08.webp"],
    theme: "#F4E8DA",
    accent: "#A873D9",
    description: "A concentrated Himalayan mineral resin prepared for a precise, considered daily wellness ritual.",
    ingredients: "Purified Shilajit resin with Safed Musli and Ashwagandha, as listed on pack.",
    highlights: ["Himalayan origin", "Fulvic mineral complex", "Measured serving", "Microbiology tested"],
    proof: "No heavy-metal shortcuts",
    badge: "Daily ritual",
  },
  {
    slug: "turmeric-latte",
    name: "Turmeric Latte",
    shortName: "Turmeric Latte",
    category: "Ayurvedic Wellness",
    price: "₹749",
    size: "150 g",
    image: "/images/product-turmeric-latte-pour-v5.png",
    gallery: ["/images/product-turmeric-latte-pour-v5.png", "/images/product-gallery/turmeric-01.webp", "/images/product-gallery/turmeric-02.webp", "/images/product-gallery/turmeric-03.webp", "/images/product-gallery/turmeric-04.webp", "/images/product-gallery/turmeric-05.webp", "/images/product-gallery/turmeric-06.webp", "/images/product-gallery/turmeric-07.webp", "/images/product-gallery/turmeric-08.webp"],
    theme: "#FFC65C",
    accent: "#B7D96A",
    description: "A warm golden blend of turmeric, almonds and aromatic spices designed for slow evenings and calmer mornings.",
    ingredients: "Turmeric, almonds, cinnamon, black pepper, ginger, clove and ashwagandha.",
    highlights: ["Himalayan turmeric", "No added sugar", "75 servings", "Warming spice blend"],
    proof: "380 kcal per 100 g",
    badge: "Evening ritual",
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
