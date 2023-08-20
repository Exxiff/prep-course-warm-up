export {};

function tidyUpString(str: string) {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Tried with using .map twice in a row, got yelled at!
const mentors: string[] = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy: string[] = mentors.map((mentor) =>
  capitalise(tidyUpString(mentor))
); // You are allowed to edit this line
console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
// this task made me question life!!!
