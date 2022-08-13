// Aplicación que permite para crear juegos
// deben existir diferentes tipos de juegos
// principalmente dos tipos uno offline y otro online

interface Game {
  start(): void;
  finish(): void;
  pause(): void;
}

export class OfflineGame implements Game {
  start(): void {
    console.log('started');
  }

  finish(): void {
    console.log('finished');
  }

  pause(): void {
    console.log('paused');
  }
}

export class OnlineGame implements Game {
  start(): void {
    console.log('started');
  }

  finish(): void {
    console.log('finished');
  }

  pause(): void {
    console.log('imposible');
  }
}
