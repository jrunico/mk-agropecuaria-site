import { Star } from "lucide-react";

export const Stars = ({ value = 5, size = 16 }) => {
  const full = Math.floor(value);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} de 5 estrelas`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          color="#C37353"
          fill={i < full ? "#C37353" : "transparent"}
        />
      ))}
    </div>
  );
};

export default Stars;
