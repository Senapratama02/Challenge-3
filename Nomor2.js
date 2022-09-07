class Animals {
  constructor (name, age, status, legs, species,) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = legs;
    this.species = species;
}
  introduce(){
     return `Nama ${this.name}, Umur ${this.age}, Status ${this.status}, Kaki ${this.legs}, Spesies ${this.species}\n`
  }
}

class Shark extends Animals {

  constructor (name, age, status ){
    super(name, age, status)
    this.legs = 0
    this.species = 'Shark'
  }
  
}

const hiu = new Shark ('cupang', 10, 'Berenang')
console.log(hiu.introduce())


class Cat extends Animals {

  constructor (name, age, status ){
    super(name, age, status)
    this.legs = 4
    this.species = 'Cat'
  }
}

const kucing = new Cat ('meong', 6, 'Berjalan')
console.log(kucing.introduce())

class Dog extends Animals {

  constructor (name, age, status, master ){
    super(name, age, status)
    this.legs = 4
    this.species = 'Dog'
    this.master = master
  }

  GreetMaster(){
    return `Hello, ${this.master}`
  }

}

const anjing = new Dog ('Dog-Dog',4, 'Berjalan','Pratama')
console.log(anjing.introduce())
console.log(anjing.GreetMaster())