/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

const quotesArray = [
  {quote:"Be yourself; everyone else is already taken.",   
  source:"Oscar Wilde"
},
{quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",   
  source:"Marylin Monroe"
},
{quote:"You only live once, but if you do it right, once is enough.",   
  source:"Mae West"

},
{quote:"The State is that organization in society which attempts to maintain a monopoly of the use of force and violence in a given territorial area; in particular, it is the only organization in society that obtains its revenue not by voluntary contribution or payment for services rendered but by coercion.",   
  source:"Murray Rothbard",
  citation:"Anatomy of the state",
  year:1974,
  color:"red",
  tag:"Economics"
},
{quote:"In a battle between force and idea, the later always prevails",
  source:"Ludwig Von Mises",
  citation:"Human Action",
  year:1949,
  color:"blue",
  tag:"phillosophy"
},

]



// This function generates a random number from 0 to 4 and uses it as the index to select an object from the Quotearray
function getRandomQuote(){
  randomNum = Math.floor(Math.random()*5)
   return quotesArray[randomNum]
}


//This function checks if the selected object has only 2 keys(quote and source ) .It then renders the contents of the objects into the page 
function printQuote(){
  var returnedObj = getRandomQuote()
  if(Object.keys(returnedObj).length===2){
     var store1 =`<p class="quote">${returnedObj.quote} </p>
                 <p class="source">${returnedObj.source}</p>`
         document.getElementById("quote-box").innerHTML= store1;
         
        
        
  }
  else{
    var store2 =`<p class="quote">${returnedObj.quote}</p>
                <p class="source">${returnedObj.source}
                  <span class="citation">${returnedObj.citation}</span>
                  <span class="year">${returnedObj.year} </span>
                  <span class="citation">${returnedObj.tag}</span>
                </p>`
                docBody.style.backgroundColor=returnedObj.color;
                document.getElementById("quote-box").innerHTML= store2;
                
  }      

}

// function for automatic quote generation every 7 seconds 
window.onload=function(){
  setInterval(printQuote,7000)
}
