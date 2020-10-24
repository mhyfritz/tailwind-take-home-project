import Section from "./section";

export default function Specifications({ specifications }) {
  return (
    <Section title="Specifications">
      <table className="w-full text-sm text-gray-900 border-t border-b border-gray-200">
        <tbody className="divide-y divide-gray-200">
          {specifications.map(({ name, value }) => (
            <tr key={name}>
              <th scope="row" className="py-5 font-medium text-left">
                {name}
              </th>
              <td className="text-right">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
