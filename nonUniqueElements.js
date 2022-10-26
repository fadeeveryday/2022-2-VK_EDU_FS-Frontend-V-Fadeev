/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */
function nonUniqueElements(data) { 
  //let arr = [1, 3, 3, 4, 5, 6, 4, 1];
  let emptyList = [];
  for (let i = 0; i < data.length; i++)
  {
      let number = data[i];
      if (emptyList[number] == undefined) {
        emptyList[number] = 0;
      }
      emptyList[number]++;
  }
  let nonunique = [];
  for (let i = 0; i < data.length; i++)
  {
      let number = data[i];
      if (emptyList[number] > 1)
      {
        nonunique.push(number);
      }
  }
  return nonunique;
}
  console.log(nonUniqueElements([1, 3, 3, 4, 5, 6, 4, 1]));
