export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
        <p className="text-muted-foreground">
          Placeholder for product <span className="font-mono">{id}</span>. Detailed view will be implemented later.
        </p>
      </div>
    </section>
  );
}

