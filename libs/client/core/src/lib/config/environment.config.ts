export abstract class Environment {
  abstract readonly production: boolean;
  abstract readonly apiUrl: string;
}
