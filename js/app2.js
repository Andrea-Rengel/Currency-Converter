function Convertion(fromList, toList, result, amount) {
    
    const eur = 0.86;
    const gbp = 0.74;
    const aud = 1.38;
    const cad = 1.26;
    const brl = 5.37;
    const clp = 803.26;
     
    /*USD to EURO*/
    if(fromList.value === 'usd' && toList.value === 'eur') {
        result.innerHTML = parseFloat(amount * eur).toFixed(2);
    } /*USD to GBP*/
      else if (fromList.value === 'usd' && toList.value === 'gbp'){
        result.innerHTML = parseFloat(amount * gbp).toFixed(2);
    } /*USD to AUD*/
      else if (fromList.value === 'usd' && toList.value === 'aud'){
        result.innerHTML = parseFloat(amount * aud).toFixed(2);
    } /*USD to CAD*/
      else if (fromList.value === 'usd' && toList.value === 'cad'){
        result.innerHTML = parseFloat(amount * cad).toFixed(2);
    } /*USD to BRL*/
      else if (fromList.value === 'usd' && toList.value === 'brl'){
        result.innerHTML = parseFloat(amount * brl).toFixed(2);
    } /*USD to CLP*/
      else if (fromList.value === 'usd' && toList.value === 'clp'){
        result.innerHTML = parseFloat(amount * clp).toFixed(2);
    } /*EUR to USD*/ 
      else if (fromList.value === 'eur' && toList.value === 'usd'){
        result.innerHTML = parseFloat(amount / eur).toFixed(2);
    } /*EUR to GBP*/ 
     else if (fromList.value === 'eur' && toList.value === 'gbp'){
        result.innerHTML = parseFloat(amount * (gbp / eur )).toFixed(2);
    } /*EUR to AUD*/
     else if (fromList.value === 'eur' && toList.value === 'aud'){
        result.innerHTML = parseFloat(amount * (aud / eur )).toFixed(2);
    } /*EUR to CAD*/
     else if (fromList.value === 'eur' && toList.value === 'cad'){
        result.innerHTML = parseFloat(amount * (cad / eur )).toFixed(2);
    } /*EUR to BRL*/
     else if (fromList.value === 'eur' && toList.value === 'brl'){
        result.innerHTML = parseFloat(amount * (brl / eur )).toFixed(2);
    } /*EUR to CLP*/
     else if (fromList.value === 'eur' && toList.value === 'clp'){
        result.innerHTML = parseFloat(amount * (clp / eur )).toFixed(2);
    } /*GBP to USD*/
     else if(fromList.value === 'gbp' && toList.value === 'usd') {
        result.innerHTML = parseFloat(amount / gbp).toFixed(2);
    } /*GBP to EUR*/
     else if (fromList.value === 'gbp' && toList.value === 'eur'){
        result.innerHTML = parseFloat(amount * (eur / gbp)).toFixed(2);
    } /*GBP to AUD*/
     else if (fromList.value === 'gbp' && toList.value === 'aud'){
        result.innerHTML = parseFloat(amount * (aud / gbp)).toFixed(2);
    } /*GBP to CAD*/
     else if (fromList.value === 'gbp' && toList.value === 'cad'){
        result.innerHTML = parseFloat(amount * (cad / gbp)).toFixed(2);
    } /*GBP to BRL*/
     else if (fromList.value === 'gbp' && toList.value === 'brl'){
        result.innerHTML = parseFloat(amount * (brl / gbp)).toFixed(2);
    } /*GBP to CLP*/
     else if (fromList.value === 'gbp' && toList.value === 'clp'){
        result.innerHTML = parseFloat(amount * (clp / gbp)).toFixed(2);
    } /*AUD to USD*/
     else if(fromList.value === 'aud' && toList.value === 'usd') {
        result.innerHTML = parseFloat(amount / aud).toFixed(2);
    } /*AUD to EUR*/
     else if (fromList.value === 'aud' && toList.value === 'eur'){
        result.innerHTML = parseFloat(amount * (eur / aud)).toFixed(2);
    } /*AUD to GBP*/
     else if (fromList.value === 'aud' && toList.value === 'gbp'){
        result.innerHTML = parseFloat(amount * (gbp / aud)).toFixed(2);
    } /*AUD to CAD*/
     else if (fromList.value === 'aud' && toList.value === 'cad'){
        result.innerHTML = parseFloat(amount * (cad / aud)).toFixed(2);
    } /*AUD to BRL*/
     else if (fromList.value === 'aud' && toList.value === 'brl'){
        result.innerHTML = parseFloat(amount * (brl / aud)).toFixed(2);
    } /*AUD to CLP*/
     else if (fromList.value === 'aud' && toList.value === 'clp'){
        result.innerHTML = parseFloat(amount * (clp / aud)).toFixed(2);
    } /*CAD to USD*/
     else if(fromList.value === 'cad' && toList.value === 'usd') {
        result.innerHTML = parseFloat(amount / cad).toFixed(2);
    } /*CAD to EUR*/
     else if (fromList.value === 'cad' && toList.value === 'eur'){
        result.innerHTML = parseFloat(amount * (eur / cad)).toFixed(2);
    } /*CAD to GBP*/
     else if (fromList.value === 'cad' && toList.value === 'gbp'){
        result.innerHTML = parseFloat(amount * (gbp / cad)).toFixed(2);
    } /*CAD to AUD*/
     else if (fromList.value === 'cad' && toList.value === 'aud'){
        result.innerHTML = parseFloat(amount * (aud / cad)).toFixed(2);
    } /*CAD to BRL*/
     else if (fromList.value === 'cad' && toList.value === 'brl'){
        result.innerHTML = parseFloat(amount * (brl / cad)).toFixed(2);
    } /*CAD to CLP*/
     else if (fromList.value === 'cad' && toList.value === 'clp'){
        result.innerHTML = parseFloat(amount * (clp / cad)).toFixed(2);
    } /*BRL to USD*/
     else if(fromList.value === 'brl' && toList.value === 'usd') {
        result.innerHTML = parseFloat(amount / brl).toFixed(2);
    } /*BRL to EUR*/
     else if (fromList.value === 'brl' && toList.value === 'eur'){
        result.innerHTML = parseFloat(amount * (eur / brl)).toFixed(2);
    } /*BRL to GBP*/
     else if (fromList.value === 'brl' && toList.value === 'gbp'){
        result.innerHTML = parseFloat(amount * (gbp / brl)).toFixed(2);
    } /*BRL to AUD*/
     else if (fromList.value === 'brl' && toList.value === 'aud'){
        result.innerHTML = parseFloat(amount * (aud / brl)).toFixed(2);
    } /*BRL to CAD*/
     else if (fromList.value === 'brl' && toList.value === 'cad'){
        result.innerHTML = parseFloat(amount * (cad / brl)).toFixed(2);
    } /*BRL to CLP*/
     else if (fromList.value === 'brl' && toList.value === 'clp'){
        result.innerHTML = parseFloat(amount * (clp / brl)).toFixed(2);
    } /*CLP to USD*/
     else if(fromList.value === 'clp' && toList.value === 'usd') {
        result.innerHTML = parseFloat(amount / clp).toFixed(2);
    } /*CLP to EUR*/
     else if (fromList.value === 'clp' && toList.value === 'eur'){
        result.innerHTML = parseFloat(amount * (eur / clp)).toFixed(2);
    } /*CLP to GBP*/
     else if (fromList.value === 'clp' && toList.value === 'gbp'){
        result.innerHTML = parseFloat(amount * (gbp / clp)).toFixed(2);
    } /*CLP to AUD*/
     else if (fromList.value === 'clp' && toList.value === 'aud'){
        result.innerHTML = parseFloat(amount * (aud / clp)).toFixed(2);
    } /*CLP to CAD*/
     else if (fromList.value === 'clp' && toList.value === 'cad'){
        result.innerHTML = parseFloat(amount * (cad / clp)).toFixed(2);
    } /*CLP to BRL*/
     else if (fromList.value === 'clp' && toList.value === 'brl'){
        result.innerHTML = parseFloat(amount * (brl / clp)).toFixed(2);
    } else {
        result.innerHTML = parseFloat(amount).toFixed(2);
    }   
 }