// #### Exercise 32
// Create an array with 5 numbers.
//     Ask the user for the length of the array you want to print.
//     Alert the user of the array from 0 to their input.

var nums = [1, 2, 3, 4, 5];

var index = parseInt(prompt("What length of the array do  you want to print?"));
for(var n = 0; n <= index; n++){
    alert(nums[n]);
}
