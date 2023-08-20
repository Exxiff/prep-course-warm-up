export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email: string) {
  let splitEmail = email.split(`@`);
  const username = splitEmail[0];
  const domain = splitEmail[1];
  let protectedEmail = "";
  if (username.length < 3) {
    protectedEmail = "...";
  } else {
    protectedEmail = username.substring(0, 3) + "...";
  } 
  
  return protectedEmail + "@" + domain;
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com

// Couldn't figure out how to exactly write code for expected result!