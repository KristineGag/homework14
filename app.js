console.log("Hello, this is my second js file");

let task1 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.table(task1);

let task1Sum =
  task1[0] +
  task1[1] +
  task1[2] +
  task1[3] +
  task1[4] +
  task1[5] +
  task1[6] +
  task1[7] +
  task1[8] +
  task1[9];

console.log("sum of task 1 elements is: " + task1Sum);

let task1Length = task1.length;

console.log("Number of elements in task 1 is: " + task1Length);

let AverageOfTask1 = task1Sum / task1Length;

console.log("average for task 1 elements is: " + AverageOfTask1);
