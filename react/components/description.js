export default function Description({ description }) {
  return (
    <section className="space-y-4">
      <DescriptionKicker>{description.kicker}</DescriptionKicker>
      {description.paragraphs.map((paragraph, index) => (
        <DescriptionParagraph key={index}>{paragraph}</DescriptionParagraph>
      ))}
    </section>
  );
}

function DescriptionKicker({ children }) {
  return <p className="text-lg leading-snug text-gray-900">{children}</p>;
}

function DescriptionParagraph({ children }) {
  return <p className="text-gray-500">{children}</p>;
}
