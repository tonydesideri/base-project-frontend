export enum SignUpErrors {
  NAME_REQUIRED = 'O nome é obrigatório',
  EMAIL_REQUIRED = 'O e-mail é obrigatório',
  EMAIL_INVALID = 'Formato de e-mail inválido',
  PASSWORD_REQUIRED = 'A senha é obrigatória',
  PASSWORD_MIN = 'A senha deve conter pelo menos 8 caracteres',
  PASSWORD_MIN_LOWERCASE = 'A senha deve conter pelo menos 1 letra minúscula',
  PASSWORD_MIN_UPPERCASE = 'A senha deve conter pelo menos 1 letra maiúscula',
  PASSWORD_MIN_NUMBER = 'A senha deve conter pelo meno 1 número',
  PASSWORD_MIN_SYMBOL = 'A senha deve conter pelo menos 1 caracteres especial',
  PASSWORD_NOT_SECURITY_CRITERIA = 'A senha não atende aos critérios de segurança'
}
