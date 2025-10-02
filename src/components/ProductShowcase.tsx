import { ProductCard } from "./ProductCard";
import chakliImg from "@/assets/chakli.jpg";
import ladooImg from "@/assets/ladoo.jpg";
import puranpoliImg from "@/assets/puranpoli.jpg";
import sevImg from "@/assets/sev.jpg";

export const ProductShowcase = () => {
  const products = [
    {
      name: "Bhajni Chakli",
      description: "Crispy and delicious spiral snack made with 4 types of dals, rice and aromatic masalas. Perfect tea-time companion!",
      price: "₹ 189.00",
      image: chakliImg,
    },
    {
      name: "Besan Ladoo",
      description: "Traditional sweet made with roasted gram flour, ghee and sugar. Melt-in-mouth goodness that brings back childhood memories.",
      price: "₹ 249.00",
      image: ladooImg,
    },
    {
      name: "Puranpoli",
      description: "Sweet flatbread filled with lentil and jaggery mixture. Soft, flavorful and absolutely divine with a dollop of ghee.",
      price: "₹ 219.00",
      image: puranpoliImg,
    },
    {
      name: "Ratlami Sev",
      description: "Crispy, spicy vermicelli snack with the perfect blend of spices. Ideal for munching anytime or adding to chaats.",
      price: "₹ 159.00",
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
