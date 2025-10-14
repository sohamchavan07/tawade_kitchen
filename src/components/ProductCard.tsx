import { Card } from "./ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  id?: string;
  /** Optional click handler when a product is activated (click or keyboard) */
  onClick?: () => void;
}

export const ProductCard = ({ name, price, image, onClick, id }: ProductCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Activate on Enter or Space
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <Card
      id={id}
      className="group overflow-hidden transition-all hover:shadow-warm cursor-pointer"
      tabIndex={0}
      role={onClick ? "button" : undefined}
      aria-label={`${name} — ${price}`}
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
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
