/**
 * Turn enum into array
 * @param enumme
 * @returns
 */
export function toArray(enumme): string[] {
  return Object.keys(enumme)
    .filter((value) => isNaN(Number(value)) === false)
    .map((key) => enumme[key]);
}
/**------------------------------------------------------------------------------------------------ */
