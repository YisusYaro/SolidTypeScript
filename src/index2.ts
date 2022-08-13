// Aplicación que permite crear emails
// deben existir diferentes tipos
// email de reseteo de contraseña, email de bienvenida, email alerta de dispositivo

export class Email {
  private from: string;
  private to: string;
  private subject: string;
  private body = '';

  constructor(from: string, to: string, subject: string) {
    this.from = from;
    this.to = to;
    this.subject = subject;
  }

  getFrom() {
    return this.from;
  }

  getTo() {
    this.to;
  }

  getSubject() {
    return this.subject;
  }

  getBody() {
    return this.body;
  }

  createBody(type: string) {
    if (type === 'password') {
      this.body = 'Tu reseteo de contraseña es: ';
    }
    if (type === 'welcome') {
      this.body = 'Bienvenido: ';
    }
    if (type === 'alert') {
      this.body = 'Cuidado un nuevo dispositivo: ';
    }
  }
}

const email = new Email('jesus@email.com', 'fede@email.com', 'Email');

email.createBody('password');

console.log(email.getBody());
