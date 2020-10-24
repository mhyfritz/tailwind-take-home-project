export default function Section({ children, title }) {
  return (
    <section className="space-y-2">
      <SectionHeader>{title}</SectionHeader>
      {children}
    </section>
  );
}

function SectionHeader({ children }) {
  return <h2 className="text-lg font-medium text-gray-900">{children}</h2>;
}
