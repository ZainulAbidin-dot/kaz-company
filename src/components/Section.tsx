interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section = ({ title, children }: SectionProps) => {
    return (
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          {children}
        </div>
      </section>
    );
  };
  
  export default Section;
  