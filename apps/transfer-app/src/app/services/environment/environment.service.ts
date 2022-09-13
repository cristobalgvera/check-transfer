import { Injectable } from '@angular/core';
import { Environment, environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  getEnvironment(): Environment {
    return structuredClone(environment);
  }
}
