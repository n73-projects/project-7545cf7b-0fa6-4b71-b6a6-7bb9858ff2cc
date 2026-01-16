import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(0.95_0.04_75_/_0.4)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_oklch(0.92_0.05_65_/_0.3)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Välkommen till
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary/80 bg-clip-text text-transparent">
                Söta Drömmar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Handgjorda bakverk med svenska traditioner sedan 1987
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:scale-105 transition-all duration-300"
            >
              Besök oss idag
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 border-2 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              Se menyn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
