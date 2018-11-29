import { createSelector } from 'reselect';
import {initialState, State as EmailState } from "./reducer";

/**
 * Direct selector to the Login state domain
 */
const selectEmailDomain = (state: { [key: string]: any }): EmailState => {
  return state.emailState || initialState();
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const selectEmail = () => createSelector(selectEmailDomain, (emailState: EmailState) => emailState);

export default selectEmail;
export { selectEmailDomain };
