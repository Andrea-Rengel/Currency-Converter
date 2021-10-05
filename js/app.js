const form = document.getElementById('form');
const fromList = document.getElementById('from-list');
const toList = document.getElementById('to-list');
const amountInput = document.getElementById('amount');

form.addEventListener('submit', convert);
fromList.addEventListener('change', convert);
toList.addEventListener('change', convert);
amountInput.addEventListener('keyup', convert);

function convert(e) {
   e.preventDefault(); 
   
   let amount = parseFloat(amountInput.value).toFixed(2);
   const result = document.getElementById('result');
   const amountTotal = document.getElementById('total-amount');
   amountTotal.innerHTML = amount;  
   
   const conver =  new Convertion(fromList, toList, result, amount);
}
