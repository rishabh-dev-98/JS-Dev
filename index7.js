try{
    var elementImp = "";
    var eventImpressionsValue = event && event.message && event.message.data["UI Element Impressions"];
    var adobeImpressionValue = adobeDataLayer.getState().data['UI Element Impressions']
    if(eventImpressionsValue != undefined) {
      for( i = 0; i < eventImpressionsValue.length; i++) {
        // Add individual product info to the product string
        elementImp += "e:"+eventImpressionsValue[i];
        // If there are more elemnents , add delimitter ","
        if(i != elementImp.length - 1) {
          elementImp += "|";
        }
      }
    } else {
      if (adobeImpressionValue != undefined) {
        for( i = 0; i < adobeImpressionValue.length; i++) {
          // Add individual product info to the product string
          elementImp += "e:"+adobeImpressionValue[i];
          // If there are more elemnents , add delimitter ","
          if(i != elementImp.length - 1) {
            elementImp += "|";
          }
        }
      }
    }
    return elementImp; 
  }catch(e){}