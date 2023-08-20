function customMap<T, U>(array: T[], transformFunction: (value: T, index: number, array: T[]) => U): U[] {
    const result: U[] = [];
    
    for (let i = 0; i < array.length; i++) {
      const transformedValue = transformFunction(array[i], i, array);
      result.push(transformedValue);
    }
    
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = customMap(numbers, number => number * 2);
  
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  