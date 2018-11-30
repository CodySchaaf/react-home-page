import { createSelector } from 'reselect';
import {EmailSubmittedStatus, initialState, State as EmailState} from "./reducer";

/**
 * Direct selector to the Login state domain
 */
const selectEmailSubmittingStatus = (state: {email?: EmailState}): EmailSubmittedStatus => {
  return (state.email &&  state.email.emailSubmittedStatus) || initialState().emailSubmittedStatus;
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const selectEmail = createSelector(selectEmailSubmittingStatus, (emailState: EmailSubmittedStatus) => emailState);

export default selectEmail;
export { selectEmailSubmittingStatus };
