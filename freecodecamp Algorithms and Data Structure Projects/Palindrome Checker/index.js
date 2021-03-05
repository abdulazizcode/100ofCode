const palindrome = (str) => {
  const string = str.toLowerCase().replace(/\W|_/g, '');
  const check = string.split('').reverse().join('')

  return string === check
}

console.log(palindrome("rada&r"));
// true
