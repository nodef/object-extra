import type {testFn} from './_types';

function every(x: object, fn: testFn, ths: object=null) {
  for(var k in x) {
    if(!x.hasOwnProperty(k)) continue;
    if(!fn.call(ths, x[k], k, x)) return false;
  }
  return true;
}
export default every;
