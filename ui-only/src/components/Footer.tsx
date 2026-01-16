export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-6 mt-12">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-lg font-medium mb-2">
          Söta Drömmar Bageri
        </p>
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Alla rättigheter förbehållna. Gjort med kärlek i Stockholm.
        </p>
      </div>
    </footer>
  );
}
