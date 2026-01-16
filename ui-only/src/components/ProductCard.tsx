interface ProductCardProps {
  title: string;
  description: string;
  emoji: string;
}

export function ProductCard({ title, description, emoji }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
