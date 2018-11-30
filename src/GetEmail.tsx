import {selectEmailSubmittingStatus} from "./domains/email/selectors";

import { compose } from 'redux';
import { connect } from 'react-redux';
import * as React from "react";
import {FormEventHandler, useState} from "react";
import {EmailSubmittedStatus} from "./domains/email/reducer";
import * as actions from "./domains/email/actions";
import {AppState} from "./reducers";


export interface OwnProps {}

export interface DispatchProps {
  saveEmailAction: typeof actions.saveEmailAction;
}

export interface StateProps {
  email: EmailSubmittedStatus;
}

type Props = DispatchProps & StateProps & OwnProps;

function GetEmail({saveEmailAction, email}: Props) {
  const [input, setInput] = useState("");
  const handleSubmit: FormEventHandler = event => {
    saveEmailAction(input);
    event.preventDefault();
  };

  console.log("email",email);

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  // }

}

const mapStateToProps = (state: AppState, _: OwnProps): StateProps => ({
  email: selectEmailSubmittingStatus(state),
});

const withConnect = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  actions,
);

export default compose(withConnect)(GetEmail);
