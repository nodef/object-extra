/**
 * Gets object with given keys.
 * @param x an object (updated)
 * @param ks keys
 * @returns x
 */
function filterAt$(x: object, ks: string[]): object {
  for(var k in x) {
    if(!x.hasOwnProperty(k)) continue;
    if(!ks.includes(k)) delete x[k];
  }
  return x;
}
export default filterAt$;
