import { VariadicSaga } from './VariadicSaga';

export interface SagaMap {
  [key: string]: VariadicSaga;
}
