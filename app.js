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

const task2objects = [
  {
    name: "ana",
    age: 5,
  },
  {
    name: "nino",
    age: 7,
  },
  {
    name: "mari",
    age: 9,
  },
  {
    name: "keso",
    age: 11,
  },
  {
    name: "kato",
    age: 13,
  },
];

console.table(task2objects);

const task3Product = {
  productTitle: "iphone 11",
  productDescription: "new phone in black",
  productPrice: 800,
  shopAddresses: "London SW1",
  productMemoryInGb: 256,
  productResolution: "828p",
};

console.log(task3Product);
