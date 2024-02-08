// 1
function equalObj(obj1, obj2) {
  let values1 = Object.values(obj1);
  let values2 = Object.values(obj2);

  console.log(values1, values2);
  for (let i = 0; i < values1.length; i++) {
    if (values1[i] === values2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(equalObj({ a: "Hello" }, { a: 1 }));

// 2
function intersection(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let result = {};

  console.log(keys1, keys2);
  for (let i = 0; i < keys1.length; i++) {
    for (let j = 0; j < keys2.length; j++) {
      if (keys1[i] === keys2[j]) {
        result[keys1[i]] = obj1[keys1[i]];
      }
    }
  }

  return result;
}

console.log(intersection({ a: 1, b: 2 }, { b: 2, c: 3, a: 1 }));

// 3
function mergeArray(arr1, arr2) {
  let mergedArr = [...arr1, ...arr2];
  let uniqueObj = {};
  let result = [];

  for (let i in mergedArr) {
    objName = mergedArr[i]["name"];
    uniqueObj[objName] = mergedArr[i];
  }

  for (let data in uniqueObj) {
    result.push(uniqueObj[data]);
  }

  return result;
}

console.log(
  mergeArray(
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 2", email: "student2@mail.com" },
    ],
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 3", email: "student3@mail.com" },
    ]
  ),
  "<==="
);

// 4
function switchObj(arr) {
  let result = [];
  for (let data of arr) {
    let changed = {};
    for (let key in data) {
      changed[data[key]] = key;
    }
    result.push(changed);
  }
  return result;
}

console.log(
  switchObj([
    { name: "David", age: 20 },
    { name: "James", age: 11 },
  ])
);

// 5
function factorialRecursion(n) {
  if (n > 0) {
    return n * factorialRecursion(n - 1);
  } else {
    return 1;
  }
}

console.log(factorialRecursion(6));

// 6

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    let random = Math.floor(Math.random() * 4);
    let power = 0;
    let health = 0;
    if (random === 0) {
      health = 0;
      return ["health", health];
    } else if (random === 1) {
      health = 10;
      return ["health", health];
    } else if (random === 2) {
      power = 0;
      return ["power", power];
    } else {
      power = 10;
      return ["power", power];
    }
  }

  start() {
    console.log(this.player1.showStatus(), "<== before shooting");
    console.log(this.player2.showStatus(), "<== before shooting");

    this.player1.useItem(this.getRandomItem());
    this.player2.useItem(this.getRandomItem());

    this.player1.hit(this.player2.power);
    this.player2.hit(this.player1.power);

    console.log(this.player1.showStatus(), "<== after shooting");
    console.log(this.player2.showStatus(), "<== after shooting");

    if (this.player1.health <= 0) {
      console.log(`${this.player2.name} WIN!!!`);
      return `${this.player2.name} WIN!!!`;
    }
    if (this.player2.health <= 0) {
      console.log(`${this.player1.name} WIN!!!`);
      return `${this.player1.name} WIN!!!`;
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    if (item[0] === "health") {
      this.health += item[1];
    } else {
      this.power += item[1];
    }
  }

  showStatus() {
    return `Player ${this.name} (health => ${this.health}, power => ${this.power})`;
  }
}

const andi = new Player("Andi");
const budi = new Player("Budi");

const shooting1 = new ShootingGame(andi, budi);

shooting1.start();
shooting1.start();
shooting1.start();
shooting1.start();
shooting1.start();
shooting1.start();
shooting1.start();
shooting1.start();
