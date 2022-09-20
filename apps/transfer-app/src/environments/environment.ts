import { Environment } from '@check/client/core';

class LocalEnvironment implements Environment {
  readonly production = false;
  readonly apiUrl = 'http://localhost:3333';
  readonly title = 'Mi Banco';
}

export const environment = new LocalEnvironment();
