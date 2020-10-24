const { formatWithValidation } = require("next/dist/next-server/lib/utils");

export function format(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
}
