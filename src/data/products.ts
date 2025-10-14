
import basanLadooImg from "@/assets/ladoo.jpg";
import ravaLadooNewImg from "@/assets/rava.jpeg";
import bundiLadooImg from "@/assets/bundi-ladoo.jpg";
import chakliImg from "@/assets/chakli.jpg";
import shankarpaliImg from "@/assets/shankarpali.jpg";
import chivdaImg from "@/assets/chivda.jpg";
import anarsaImg from "@/assets/anarsa.jpg";
import bakarvadiImg from "@/assets/bakarvadi.jpg";
import sevImg from "@/assets/sev.jpg";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "");

export const products = [
  {
    name: "बेसन लाडू (Basan Ladoo)",
    price: "₹ 580.00 per kg",
    image: basanLadooImg,
    keywords: ["basan", "basan ladoo", "बेसन", "ladoos"],
    id: slugify("basan-ladoo"),
  },
  {
    name: "रवा लाडू (Rava Ladoo)",
    price: "₹ 580.00 per kg",
    image: ravaLadooNewImg,
    keywords: ["rava", "rava ladoo", "रवा"],
    id: slugify("rava-ladoo"),
  },
  {
    name: "बुंदी लाडू (Bundi Ladoo)",
    price: "₹ 400.00 per kg",
    image: bundiLadooImg,
    keywords: ["bundi", "bundi ladoo", "बुंदी"],
    id: slugify("bundi-ladoo"),
  },
  {
    name: "चकली (Chakli)",
    price: "₹ 500.00 per kg",
    image: chakliImg,
    keywords: ["chakli", "चकली"],
    id: slugify("chakli"),
  },
  {
    name: "शंकरपाळी (Shankarpali)",
    price: "₹ 380.00 per kg",
    image: shankarpaliImg,
    keywords: ["shankarpali", "शंकरपाळी"],
    id: slugify("shankarpali"),
  },
  {
    name: "चिवडा (Chivda)",
    price: "₹ 400.00 per kg",
    image: chivdaImg,
    keywords: ["chivda", "चिवडा"],
    id: slugify("chivda"),
  },
  {
    name: "अनारसा (Anarsa)",
    price: "₹ 750.00 per kg",
    image: anarsaImg,
    keywords: ["anarsa", "अनारसा"],
    id: slugify("anarsa"),
  },
  {
    name: "भाकरवडी (Bakarvadi)",
    price: "₹ 450.00 per kg",
    image: bakarvadiImg,
    keywords: ["bakarvadi", "भाकरवडी"],
    id: slugify("bakarvadi"),
  },
  {
    name: "शेव (Sev)",
    price: "₹ 350.00 per kg",
    image: sevImg,
    keywords: ["sev", "शेव"],
    id: slugify("sev"),
  },
];

export const productNames = products.map((p) => p.name);

// Flatten keywords and names into a unique list suitable for a datalist
export const productKeywords = Array.from(
  new Set(products.flatMap((p) => [p.name, ...(p.keywords || [])])),
);
