export default function Header({ headings }) {
  return (
    <header className="space-y-3">
      <HeadingMain>{headings.main}</HeadingMain>
      <HeadingSub>{headings.sub}</HeadingSub>
    </header>
  );
}

function HeadingMain({ children }) {
  return (
    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
      {children}
    </h1>
  );
}

function HeadingSub({ children }) {
  return <p className="text-xl leading-snug text-gray-500">{children}</p>;
}
