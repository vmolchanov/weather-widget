export class StorageService {
  public static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
