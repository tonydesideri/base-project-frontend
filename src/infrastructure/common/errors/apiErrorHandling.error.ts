export class ApiError extends Error {
  constructor(messages: string[]) {
    const erros = messages.length > 0 ? messages.join('\n\n') : '';
    super(erros);
    this.name = 'ApiError';
  }
}
