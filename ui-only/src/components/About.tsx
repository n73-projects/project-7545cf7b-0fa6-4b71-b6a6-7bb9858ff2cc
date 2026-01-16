export function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-soft)] border border-border/50">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Om Oss
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sedan 1987 har vi serverat Stockholm med de finaste bakverken.
                Vår passion är att bevara svenska baktoraditioner samtidigt som
                vi skapar nya favoriter.
              </p>
              <p>
                Varje morgon klockan 05:00 börjar våra bagare arbetet med att
                baka färskt bröd och bullar. Vi använder endast naturliga ingredienser
                och traditionella metoder.
              </p>
              <p className="text-primary font-semibold">
                Vi tror på enkelhet, kvalitet och den svenska fikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
