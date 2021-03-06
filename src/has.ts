/**
 * Checks if object has a key.
 * @param x an object
 * @param k key?
 */
function has(x: object, k: string): boolean {
  return x.hasOwnProperty(k);
}
export default has;
