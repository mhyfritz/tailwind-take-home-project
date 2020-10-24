import Section from "./section";
import { format as formatCurrency } from "../utils/currency";

export default function Configuration({ configuration, onChange, selected }) {
  return configuration.modules.map((m) => (
    <Section title={m.name} key={m.name}>
      <div
        className={`grid gap-4 grid-cols-1 ${
          m.meta.layout === "row" ? "sm:grid-cols-2" : ""
        }`}
      >
        {m.options.map((o) => (
          <ConfigSelector
            option={o}
            isSelected={o === selected[m.name]}
            onChange={(option) => onChange(m.name, option)}
            key={`${m.name}:${o.name}`}
          />
        ))}
      </div>
    </Section>
  ));
}

function ConfigSelector({ option, isSelected, onChange }) {
  return (
    <button
      className={`px-6 py-5 space-y-2 overflow-hidden text-sm text-left rounded-lg shadow-sm focus:shadow-focus focus:outline-none ${
        isSelected
          ? "border-2 border-gray-700"
          : "border border-gray-300 hover:border-gray-400"
      }`}
      onClick={() => onChange(option)}
    >
      <div className="flex items-center space-x-2">
        <div className="flex-1 space-y-2">
          <div className="font-medium gray-900">{option.name}</div>
          {option.description ? (
            <div className="text-gray-500">{option.description}</div>
          ) : null}
        </div>
        {option.price ? (
          <div className="text-gray-900">+ {formatCurrency(option.price)}</div>
        ) : null}
      </div>
    </button>
  );
}
