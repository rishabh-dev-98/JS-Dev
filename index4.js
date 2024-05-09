var siteSectionL2FromDataLayer = ""
console.log(siteSectionL2FromDataLayer.length)
var result = "";
  if(siteSectionL2FromDataLayer.length > 0) {
    result =  siteSectionL2FromDataLayer;
  } else {
    var url = "https://accounts.int.werally.in/authenticate/renew/generic?q=123";
    var concatenatedString = url.split("/")[5];
    if(concatenatedString.includes("?") == true ) {
      result =  concatenatedString.split("?")[0];
    } else {
      result = concatenatedString;
    }
  }
  console.log("Result is : ", result)