console.log("hi");



function answer() {
    var referrerParam = ""
    var result = '';
    var sessionStorageOrigin = "em-krsengage-schedule-mar2023-welcomeappt";

    if (referrerParam != "") {
        result = referrerParam.replaceAll("-","!!");
    } else {
        if(sessionStorageOrigin.includes("appt") || sessionStorageOrigin.includes("schedule")) {
            result = sessionStorageOrigin.replaceAll("-","@");
        }
    }
    return result;
}

console.log("Result is :",answer())