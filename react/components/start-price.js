import { format as formatCurrency } from "../utils/currency";

export default function StartPrice({ price }) {
  return (
    <div>
      <div className="text-sm font-medium text-gray-500">Starting at</div>
      <div className="text-5xl font-extrabold leading-tight text-gray-900">
        {formatCurrency(price)}
      </div>
    </div>
  );
}
