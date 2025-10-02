import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, description, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-warm">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground">{name}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>

          <Button className="bg-hero-gradient shadow-warm transition-all hover:scale-105">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
