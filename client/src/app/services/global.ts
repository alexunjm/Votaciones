export let GLOBAL = {
  url: {
    dataResource: 'assets/data/',
    api: 'http://localhost:3800/api/'
  }
};

export function arrayMap(arrayToMap, fn, whoOwnArg) {
  return arrayToMap.reduce(function (arrayToReturn, item, index, arrEl) {
    arrayToReturn.push(fn.call(whoOwnArg, item, index, arrEl));
    return arrayToReturn;
  }, []);
}
