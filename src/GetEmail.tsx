import {createStructuredSelector} from "reselect";
import selectEmail from "./services/email/selectors";

import { compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from "react";
import {ChangeEvent, FormEvent} from "react";
import {State} from "./services/email/reducer";
import {saveEmailAction} from "./services/email/actions";


export interface Props {
  dispatch: Dispatch;
  email: State;
}

class GetEmail extends React.Component<Props> {
  // const {value, reset, onChange} = useInputState('');

  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event: FormEvent) => {
    this.props.dispatch(saveEmailAction(this.state.value))
    event.preventDefault();
  }

  state = {value: ""};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  email: selectEmail(),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GetEmail);
