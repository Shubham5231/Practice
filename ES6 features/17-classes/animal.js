export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound) {
    sound = 'Meow';
    console.log(sound);
  }
  get metaData() {
    return `type : ${this.type}, Legs: ${this.legs}`;
  }
  static retrun10() {
    return 10;
  }
}

export class Cat extends Animal {
  makeNoise(sound = 'Loud Noise') {
    console.log(sound);
  }
}
