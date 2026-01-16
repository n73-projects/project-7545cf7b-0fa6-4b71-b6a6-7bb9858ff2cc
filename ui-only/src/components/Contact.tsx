export function Contact() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Besök Oss
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] border border-border/50 space-y-4">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-xl font-semibold text-foreground">Adress</h3>
              <p className="text-muted-foreground leading-relaxed">
                Drottninggatan 42<br />
                111 21 Stockholm<br />
                Sverige
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] border border-border/50 space-y-4">
              <div className="text-3xl mb-2">🕐</div>
              <h3 className="text-xl font-semibold text-foreground">Öppettider</h3>
              <p className="text-muted-foreground leading-relaxed">
                Måndag - Fredag: 07:00 - 18:00<br />
                Lördag: 08:00 - 17:00<br />
                Söndag: 09:00 - 16:00
              </p>
            </div>
          </div>

          <div className="bg-accent/20 rounded-xl p-6 border-2 border-accent/30">
            <p className="text-lg text-foreground">
              ☎️ <span className="font-semibold">08-123 45 67</span> •
              ✉️ <span className="font-semibold ml-2">info@sotadrommar.se</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
