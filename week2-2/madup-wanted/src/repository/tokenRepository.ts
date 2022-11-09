interface TokenRepositoryInterface {
  get(): void;
  save(token: string): void;
  remove(): void;
}

class TokenRepository implements TokenRepositoryInterface {
  private TOKEN_KEY = 'Bearer ACCESS_TOKEN';

  get() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  save(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  remove() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

export default TokenRepository;
