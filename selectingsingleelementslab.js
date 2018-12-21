//Enter querySelector Code 
var header = document.querySelector("#header").innerHTML
var linkText = document.querySelector("#left > p a:nth-child(1)").innerHTML
var linkHref = document.querySelector("#left > p a").getAttribute("href")


// NO NEED TO MODIFY BELOW HERE
console.log(`The header is: ${header}`)
console.log(`The first link text is: ${linkText}`)
console.log(`The first link href is: ${linkHref}`)
 
