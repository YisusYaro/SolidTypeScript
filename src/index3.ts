// Aplicación que permite crear autos
// deben existir diferentes clases de autos
// todos deben tener la manera de poder ser arrancados

export class Car {
  protected fuel = 100;
}

export class Honda extends Car {
  start() {
    console.log('Starting');
    this.fuel--;
  }
}

export class Nissan extends Car {
  run() {
    console.log('Running');
    this.fuel--;
  }
}

export class Toyota extends Car {
  start() {
    console.log('Starting');
    this.fuel--;
  }
}

const honda = new Honda();

const nissan = new Nissan();

const toyota = new Toyota();

honda.start();
nissan.run();
toyota.start();
