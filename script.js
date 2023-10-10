// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const buySubmit = document.querySelector('.buy-submit');
const empty_message = document.getElementById('empty');

// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}



userInput.oninput = (e)=>{
  countLeters(e.target.value)
}

const buyNow = () => {
  if (userLeterPreview.textContent.replace(' ','').length === 0){
    alert ("Please enter your name");
  }
    
  else if (userLeterPreview.textContent === "Your Name"){
    alert("Enter a new text");
  }

  else {
    if (userLeterPreview.textContent.replace(' ', '').length > 15){
      alert("We have 15 letters left in stock, and you have exceeded the limit");
    }
  }

}

buySubmit.onclick = () =>{
  buyNow();
}
  