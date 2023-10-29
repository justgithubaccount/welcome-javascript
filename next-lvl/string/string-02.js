function checkSpam(str) {
  let strLower = str.toLowerCase();

  if (strLower.includes("xxx") || strLower.includes("viagra")) {
    return console.log(`${str} - Spam`);
  } else {
    return console.log(`${str} - Not Spam`);
  }
}

checkSpam("buy ViAgRA now");
checkSpam("free xxXxx");
checkSpam("innocent rabbit");