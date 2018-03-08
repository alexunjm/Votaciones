export let GLOBAL = {
  url: {
    dataResource: 'assets/data/',
    api: 'http://http://port-3800.votaciones-iep-alexanderjaramillo4iep817149.codeanyapp.com/api/'
  }
  /* url: 'assets/data/vote.json' */
};

export function arrayMap(arrayToMap, fn, whoOwnArg) {
  return arrayToMap.reduce(function (arrayToReturn, item, index, arrEl) {
    arrayToReturn.push(fn.call(whoOwnArg, item, index, arrEl));
    return arrayToReturn;
  }, []);
}
