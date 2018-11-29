/**
 * The types provided by redux-saga include Saga types for specific arity
 * eg Saga0 Saga1 Saga4 etc... these are preferable when arity is known,
 * but for where arity is not yet determined, this should suffice
 */

import { SagaIterator } from 'redux-saga';

export type VariadicSaga = (...args: any[]) => SagaIterator;
