function checkSpam(str) {
  const strLower = str.toLowerCase();

  if (strLower.includes("xxx") || strLower.includes("viagra")) {
    return console.log(`${str} - Spam`);
  }
  return console.log(`${str} - Not Spam`);
}

checkSpam("buy ViAgRA now");
checkSpam("free xxXxx");
checkSpam("innocent rabbit");
