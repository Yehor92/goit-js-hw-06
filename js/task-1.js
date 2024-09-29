// const users = [
//   { name: 'Олександр', age: 25 },
//   { name: 'Марія', age: 17 },
//   { name: 'Іван', age: 20 },
//   { name: 'Олена', age: 15 },
// ];

// const adylts = [];

// for (const user of users) {
//   if (user.age >= 18) {
//     adylts.push(user);
//   }
// }

// console.log(adylts);

const users = [
  { name: 'Сергій', age: 30 },
  { name: 'Анна', age: 16 },
  { name: 'Дмитро', age: 19 },
];

// 1. Перебрати масив об,єктів циклом for of
// 2. додати об,єкту ключ зі значенням залежно від виконання виразу

// for (const user of users) {
//   user.isAdult = user.age >= 18 ? true : false;
// }

// console.log(users);

for (const user of users) {
  if (user.age >= 18) {
    user.isAdult = true;
  } else {
    user.isAdult = false;
  }
}
console.log(users);
