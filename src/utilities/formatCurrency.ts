const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
export function formatCurrency(value: number): string {
  return CURRENCY_FORMATTER.format(value)
}
