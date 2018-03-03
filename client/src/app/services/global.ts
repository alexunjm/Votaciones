export let GLOBAL = {
  url: 'assets/data/vote.1.json'
  /* url: 'assets/data/vote.json' */
};

export function arrayMap(arrayToMap, fn, whoOwnArg) {
  return arrayToMap.reduce(function (arrayToReturn, item, index, arrEl) {
    arrayToReturn.push(fn.call(whoOwnArg, item, index, arrEl));
    return arrayToReturn;
  }, []);
}
