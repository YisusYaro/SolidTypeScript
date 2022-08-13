// Aplicación que permite crear usuarios con un
// nombre, email y una contraseña, y esta contraseña
// Adicionalmente guardar en la base de datos

export class User {
  private name: string;
  private email: string;
  private password: string;
  private databaseConnection: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;

    this.databaseConnection = 'localhost:1972//';
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  save() {
    console.log(this.databaseConnection);
    console.log(
      `INSET INTO users (name, email, password) values (${this.name}, ${this.email}, ${this.password})`,
    );
  }
}

const user = new User('Jesús', 'jesus@jesusyaro.com', 'Password');

console.log(user.getEmail());
console.log(user.getName());
console.log(user.getPassword());
user.save();
