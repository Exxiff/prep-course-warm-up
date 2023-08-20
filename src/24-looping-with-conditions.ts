export {};

function onlyTheAces(arr: string[]) {
  const acesArray: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ace") {
      // Puts it in the blank aces array
        acesArray.push(arr[i]);
    }
  }
  return acesArray;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
