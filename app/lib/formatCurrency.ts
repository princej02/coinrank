export const formatCurrency = (val: string): string => {
  const numVal = parseFloat(val)
  if (isNaN(numVal)) return val
  else {
    return numVal.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
  }
} 