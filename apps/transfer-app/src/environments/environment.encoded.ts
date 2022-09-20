import { Environment } from '@check/client/core';

class ProductionEnvironment implements Environment {
  readonly production = true;
  readonly apiUrl = 'API_URL';
  readonly title = 'Mi Banco';
}

export const environment = new ProductionEnvironment();
