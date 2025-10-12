import { Card } from "./ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-warm cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="mb-2 text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-xl font-bold text-primary">{price}</p>
      </div>
    </Card>
  );
};
