// Aplicación de envio de emails

export class EmailSesSender {
  emit() {
    console.log('Calling to aws to send a email');
  }
}

export class AdministratorEmailSender {
  send() {
    const ses = new EmailSesSender();
    ses.emit();
  }
}

export class UserEmailSender {
  send() {
    const ses = new EmailSesSender();
    ses.emit();
  }
}
