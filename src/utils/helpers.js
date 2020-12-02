export const generateReversedArrayFromNumber = number => {
  return Array
    .from({ length: number }, (_, i) => i + 1)
    .reverse()
}
