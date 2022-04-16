function CodelandUsernameValidation(str) { 
    if(str.length < 5 || str.length > 25) return "false";      
    if(!str.match(/^[a-zA-Z]/g)) return "false";
    if(!str.match(/\w/g)) return "false";
    if(str[str.length-1] === "_") return "false";
  
    return "true";     
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation("aasss3333A"));