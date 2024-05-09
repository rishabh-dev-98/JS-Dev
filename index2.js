function printMCID() {
    var cookieArray = ['amp_70bd13=nGJN9ieBZFxGQuevSZaLNq.MmE3NDVhMDItN2Iw…NTYtNmM2YTlkOGIxYjJj..1gu7imra5.1gu7inii1.2j.v.3i', 
    ' _ga=GA1.1.1000519726.1682073518', ' xGFajjParSn=A1LCRWqHAQAAxPjNi-vLxSX8nd74rfXa99QMb…AAAA|1|1|956f651d6705e7edaa3bfa5d60e12a769a701c5a',
     ' _ga_MCXS85DBJN=GS1.1.1685360209.27.0.1685360209.0.0.0', ' incap_ses_1418_2062984=uO5eBhCd9nkmEXq2EcCtE8ukdWQAAAAAfYWKoSCuDOWU7qO4fh7qbg==', 
     ' incap_ses_1418_1596053=V+N4RBWSPUeoEXq2EcCtE9KkdWQAAAAA0X7yzfWnAAE4kfpo5sHvlA==', ' shEnv=int', ' AMCVS_8E391C8B533058250A490D4D%40AdobeOrg=1',
     ' AMCV_8E391C8B533058250A490D4D%40AdobeOrg=1176715910%7CMCIDTS%7C19507%7CMCMID%7C05953755166338307954971855357213209949%7CMCAAMLH-1686036322%7C9%7CMCAAMB-1686036322%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1685438722s%7CNONE%7CvVersion%7C5.4.0', ' s_cc=true', ' xGFajjParSn_dc=%7B%22error%22%3A%20%22Customer%20rallyhealth%20not%20found%20in%20config%22%7D', ' _dd_s=rum=1&id=82c4a6aa-8070-4170-b57c-12ebbcf2aca7&created=1685431514449&expire=1685433134463'];
    var mcid = '';
    for (let i = 0; i < cookieArray.length; i++) {
        if(cookieArray[i].includes("AMCV_") && !cookieArray[i].includes("AMCVS_")) {
            var cookiePairValue = cookieArray[i].split("=")[1];
            var updatedCookieValue = decodeURIComponent(cookiePairValue);
            var finalArray = updatedCookieValue.split("|");
            mcid = finalArray[finalArray.indexOf("MCMID") + 1];
        }
    }
    return mcid || undefined;
}

console.log("MCID is : ", printMCID());