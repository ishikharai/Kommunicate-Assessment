// 2. Complete the following javascript function that accepts the url and the parameter
// name and returns the value of that parameter.

let url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));

function getUrlParameterValue(url, parameter) {
  //Todo: complete this code
  let ParamString = url.split("?")[1];

  let query = new URLSearchParams(url);

  return query.get(parameter);
}