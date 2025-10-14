import { ProductCard } from "./ProductCard";
import { products as productsData } from "@/data/products";

// For now we only use the name/price/image fields from the original data.
// If you later want images/prices centralized, move those into the shared file.
export const ProductShowcase = () => {
  const products = productsData;

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
            <ProductCard key={product.name} {...product} id={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
