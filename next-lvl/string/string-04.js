// We have a cost in the form "$120".
// That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would
// extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return console.log(+str.slice(1));
}

extractCurrencyValue("$1");
extractCurrencyValue("$111");
extractCurrencyValue("$1111");
extractCurrencyValue("$11111");
extractCurrencyValue("$111111");
