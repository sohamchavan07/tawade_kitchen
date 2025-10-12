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
      name: "Rava Ladoo",
      price: "₹ 560.00",
      image: ravaLadooImg,
    },
    {
      name: "Bundi Ladoo",
      price: "₹ 400.00",
      image: bundiLadooImg,
    },
    {
      name: "Chakli",
      price: "₹ 500.00",
      image: chakliImg,
    },
    {
      name: "Shankarpali",
      price: "₹ 380.00",
      image: shankarpaliImg,
    },
    {
      name: "Chivda",
      price: "₹ 400.00",
      image: chivdaImg,
    },
    {
      name: "Anarsa",
      price: "₹ 750.00",
      image: anarsaImg,
    },
    {
      name: "Bakarvadi",
      price: "₹ 450.00",
      image: bakarvadiImg,
    },
    {
      name: "Sev",
      price: "₹ 350.00",
      image: sevImg,
    },
  ];

  return (
    <section id="products" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Best Sellers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Handcrafted with love and authentic recipes passed down through generations
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
