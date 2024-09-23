function isFirstLetterUpperCase(string) {
  if (string.length === 0) {
      return false; 
  }
  
  return string[0] === string[0].toUpperCase();
}

let texto = "Exemplo de string";
console.log(isFirstLetterUpperCase(texto)); 
