// 1)
const initialArray = [
  {
    name: "Temo",
    age: 25,
  },
  {
    name: "Lasha",
    age: 21,
  },
  {
    name: "Ana",
    age: 28,
  },
];

const youngestPerson = function (userArr) {
  const agesArr = userArr.map((user) => user.age);
  const lowestAge = Math.min(...agesArr);
  const [user] = userArr.filter((user) => user.age === lowestAge);
  return user.name;
};

youngestPerson(initialArray);

// 2)
const user = {
  id: 2,
  name: "Nika",
  age: 21,
};

const copyObject = function (userObj) {
  const copiedObj = { ...userObj };
  return copiedObj;
};

copyObject(user);

// 3)
const rollTheDice = function () {
  let a = 0;
  let b = 0;
  let countA = 0;
  let countB = 0;

  while (a !== 3) {
    a = Math.floor(Math.random() * 6) + 1;
    countA++;
  }

  while (b !== 3) {
    b = Math.floor(Math.random() * 6) + 1;
    countB++;
  }

  if (countA > countB) {
    return `winner is B`;
  } else if (countB > countA) {
    return `winner is A`;
  } else {
    return `tie`;
  }
};

rollTheDice();
