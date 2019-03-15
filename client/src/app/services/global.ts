export let GLOBAL = {
  url: {
    dataResource: 'assets/data/',
    api: 'http://http://votacionesiep.tk/api/'
  }
};

export function arrayMap(arrayToMap, fn, whoOwnArg) {
  return arrayToMap.reduce(function (arrayToReturn, item, index, arrEl) {
    arrayToReturn.push(fn.call(whoOwnArg, item, index, arrEl));
    return arrayToReturn;
  }, []);
}
