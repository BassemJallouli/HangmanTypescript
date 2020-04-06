// 1.Start an array of words
const listWord :string[] = ["happy","smile", "motivate","awesome"];

// 2.Select random word
let randNumber: number = Math.floor(Math.random()*listWord.length);
// Math.random() function returns a floating-point in the range 0 to less than 1 
// Math.floor() function returns the largest integer less than or equal to a given number.
let ranWord: string = listWord[randNumber];
let goodWord: string[] = []; // good word array
let wrongWord: string[] = []; // wrong word array
console.log(ranWord);
let emptyArray: string[] = [];

// 3.Populate emptyArray
let createArray = () => {
    for(let n=0; n<ranWord.length; n++){
        
        emptyArray.push('_');
    }
    return emptyArray;
}
console.log(createArray());

// 4.Ask users for guess
document.addEventListener('keypress', (event) => {
    // document.addEventListener() method attaches an event handler to the document
    // addEventListener() works by adding a function or an object that implements
    // keypress() method triggers the keypress event
    let keycode = event.keyCode;
    // keyCode property returns the Unicode character code of the key
    let keyword = String.fromCharCode(keycode);
    // fromCharCode() is a string method that is used to create a string from a sequence of Unicode values
    console.log(keyword);

// 5.Test if guess is good
    if (ranWord.indexOf(keyword)> -1) {
    // indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// 6.If guess is good then push to good array
    goodWord.push(keyword);   
    // replace underscore in emptyAraay with good word
    emptyArray[ranWord.indexOf(keyword)] = keyword;
    // test if user word matches guesses
    if (emptyArray.join('') == ranWord) {
        alert('Awesome Winner')
    }
    
    
    else {
    wrongWord.push(keyword);
    console.log(goodWord);
    }
}
});



// 7.If guess is wrong then push to wrong array