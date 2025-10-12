import { ProductCard } from "./ProductCard";
import chakliImg from "@/assets/chakli.jpg";
import ladooImg from "@/assets/ladoo.jpg";
import puranpoliImg from "@/assets/puranpoli.jpg";
import sevImg from "@/assets/sev.jpg";
import ravaLadooImg from "@/assets/rava-ladoo.jpg";
import bundiLadooImg from "@/assets/bundi-ladoo.jpg";
import shankarpaliImg from "@/assets/shankarpali.jpg";
import chivdaImg from "@/assets/chivda.jpg";
import anarsaImg from "@/assets/anarsa.jpg";
import bakarvadiImg from "@/assets/bakarvadi.jpg";

export const ProductShowcase = () => {
  const products = [
    {
      name: "रवा लाडू (Rava Ladoo)",
      price: "₹ 560.00 per kg",
      image: ravaLadooImg,
    },
    {
      name: "बुंदी लाडू (Bundi Ladoo)",
      price: "₹ 400.00 per kg",
      image: bundiLadooImg,
    },
    {
      name: "चकली (Chakli)",
      price: "₹ 500.00 per kg",
      image: chakliImg,
    },
    {
      name: "शंकरपाळी (Shankarpali)",
      price: "₹ 380.00 per kg",
      image: shankarpaliImg,
    },
    {
      name: "चिवडा (Chivda)",
      price: "₹ 400.00 per kg",
      image: chivdaImg,
    },
    {
      name: "अनारसा (Anarsa)",
      price: "₹ 750.00 per kg",
      image: anarsaImg,
    },
    {
      name: "भाकरवडी (Bakarvadi)",
      price: "₹ 450.00 per kg",
      image: bakarvadiImg,
    },
    {
      name: "शेव (Sev)",
      price: "₹ 350.00 per kg",
      image: sevImg,
    },
  ];

  return (
    <section id="products" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            आमचे सर्वोत्तम विक्रेते (Our Best Sellers)
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            प्रेमाने आणि परंपरागत पाककृतींनी तयार केलेले स्वादिष्ट घरगुती पदार्थ 
            (Handcrafted with love and authentic recipes passed down through generations)
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
