import type {testFn} from './_types';

/**
 * Discards entries which pass a test.
 * @param x an object
 * @param fn test function (v, k, x)
 * @param ths this argument
 */
function reject(x: object, fn: testFn, ths: object=null): object {
  var a = {};
  for(var k in x) {
    if(!x.hasOwnProperty(k)) continue;
    if(!fn.call(ths, x[k], k, x)) a[k] = x[k];
  }
  return a;
}
export default reject;
