import { ProductCard } from "./ProductCard";

export function Products() {
  const products = [
    {
      title: "Kanelbullar",
      description: "Klassiska svenska kanelbullar med kardemumma och pärlsocker. Nybakade varje morgon.",
      emoji: "🥐"
    },
    {
      title: "Prinsesstårta",
      description: "Vår specialitet med ljus sockerkaka, vaniljkräm och marsipan i Sveriges färger.",
      emoji: "🎂"
    },
    {
      title: "Surdegsbröd",
      description: "Traditionellt surdegsbröd gjort på vete och råg. Knaprig skorpa och mjuk medelskorpor.",
      emoji: "🍞"
    },
    {
      title: "Semla",
      description: "Säsongens favorit! Vetebulle med mandelmassa och grädde. Perfekt till fika.",
      emoji: "🥖"
    },
    {
      title: "Chokladbollar",
      description: "Hembakade chokladbollar med havregryn, kakao och kokos. En svensk klassiker.",
      emoji: "🍫"
    },
    {
      title: "Kardemummabullar",
      description: "Luftiga bullar med generös fyllning av smör och kardemumma.",
      emoji: "✨"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Våra Specialiteter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Varje dag bakar vi färskt med kärlek och de bästa råvarorna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
