import React, { Component } from 'react';
import { Alert as ReactAlert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Alerts extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    clearMessages: PropTypes.func.isRequired,
  };

  state = {
    messages: [],
    showAlert: false,
    timeout: 7000,
  };

  componentDidUpdate(prevProps, prevState) {
    let showAlert = false;
    const { messages } = this.props;
    //const { messages: prevMessages } = prevProps;

    //console.log('Alerts', messages);

    if (messages && messages.length > 0 && JSON.stringify(this.state.messages) !== JSON.stringify(messages)) {
      showAlert = true;
    }
    if (showAlert && !this.state.showAlert) {
      this.setState({
        messages: messages,
        showAlert,
      });
    }
  }

  getAlerts = array => {
    return array ? (
      array.map((e, index) => {
        let type = 'danger';
        switch (e.type) {
          case 'info':
            type = 'info';
            break;
          case 'success':
            type = 'success';
            break;
          case 'error':
            type = 'danger';
            break;
          default:
            type = 'danger';
        }
        return (
          <div className={'alert alert_' + type} key={index}>
            {e.message}
          </div>
        );
      })
    ) : (
      <></>
    );
  };

  delay = wait =>
    new Promise(resolve => {
      setTimeout(() => resolve(), wait);
    });

  showAlert = () => {
    if (this.state.showAlert) {
      this.delay(this.props.timeout ? this.props.timeout : this.state.timeout).then(() => {
        this.setState({
          messages: [],
          showAlert: false,
        });
        this.props.clearMessages();
      });
      return <>{this.getAlerts(this.state.messages)}</>;
    }
    return <div />;
  };

  render() {
    return <>{this.showAlert()}</>;
  }
}
