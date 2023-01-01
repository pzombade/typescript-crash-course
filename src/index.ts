let nx = 20
nx = 201

console.log(`Hello World! : `, nx)

function getArray<T>(arr: T[], el: T): T[] {
  arr.push(el)
  console.log(arr)
  return arr
  //   return new Array().concat(arr)
}

getArray<number>([1, 2, 3, 4], 10)

getArray<string>(["1", "2", "3", "4"], "10")

interface PersonInterface {
  greet(n: string): void
}

class Human implements PersonInterface {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  set name(n: string) {
    this._name = n
  }

  greet(greeting: string): void {
    console.log(`${greeting} ${this._name}!`)
  }
}

const human = new Human("P")
human.greet("Hello")
human.name = "Z"
human.greet("Namaste")
