export const strToNumArr = (strArr: string[]): number[] => {
  return strArr ? strArr.map(str => Number(str)) : [0]
}