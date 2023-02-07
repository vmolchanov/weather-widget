import type {IStorageService} from '@/types/storage';
import {StorageService} from '@/services/storage-service';

let instance = null;

export class WeatherStorageService {
  private storageService: IStorageService;

  private static storageKey = 'cities';

  constructor(storageService?: IStorageService) {
    if (instance !== null) {
      return instance;
    }

    this.storageService = storageService as IStorageService;

    instance = this;
  }

  addCity(city: string) {
    const cities: string | null = StorageService.getItem(WeatherStorageService.storageKey);

    if (cities === null) {
      StorageService.setItem(WeatherStorageService.storageKey, JSON.stringify([city]));
    } else {
      const parsedCities: string[] = JSON.parse(cities);
      const isCityExists = parsedCities
        .map(city => city.toLowerCase())
        .includes(city.toLowerCase());

      if (!isCityExists) {
        StorageService.setItem(WeatherStorageService.storageKey, JSON.stringify([
          ...JSON.parse(cities),
          city,
        ]));
      }
    }
  }

  getCities(): string[] {
    const cities: string | null = StorageService.getItem(WeatherStorageService.storageKey);
    return cities === null ? [] : JSON.parse(cities);
  }

  removeCity(city: string): void {
    const cities: string | null = StorageService.getItem(WeatherStorageService.storageKey);

    if (cities === null) {
      return;
    }

    const parsedCities: string[] = JSON.parse(cities);

    const index: number = parsedCities
      .map(city => city.toLowerCase())
      .indexOf(city.toLowerCase());

    if (index !== -1) {
      parsedCities.splice(index, 1);
    }

    StorageService.setItem(WeatherStorageService.storageKey, JSON.stringify(parsedCities));
  }

  clear(): void {
    StorageService.setItem(WeatherStorageService.storageKey, JSON.stringify([]));
  }
}
