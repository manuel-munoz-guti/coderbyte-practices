function longestWorld(str){
    let longest = "";
    let strSanitized = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
    console.log(strSanitized);
    const arrStrings = strSanitized.split(" ");
    arrStrings.forEach(element => {
        if(longest.length<element.length){
            longest = element;
        }
    });
    return longest ;
}

console.log(longestWorld("this is some sort of sentence"));