import React, { Component } from 'react';
import { Alert as ReactAlert } from 'react-bootstrap';

export default class Alerts extends Component {
  state = {
    messages: [],
    showAlert: false,
    timeout: 5000,
  };

  componentDidUpdate(prevProps, prevState) {
    let showAlert = false;
    const { messages } = this.props;
    //const { messages: prevMessages } = prevProps;

    //console.log('Alerts', messages);

    if (
      messages &&
      messages.length > 0 &&
      JSON.stringify(this.state.messages) !== JSON.stringify(messages)
    ) {
      showAlert = true;
    }
    if (showAlert && !this.state.showAlert) {
      this.setState({
        messages: messages,
        showAlert,
      });
    }
  }

  getReactAlerts = array => {
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
          <ReactAlert variant={type} key={index}>
            {e.message}
          </ReactAlert>
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
      this.delay(
        this.props.timeout ? this.props.timeout : this.state.timeout
      ).then(() => {
        this.setState({
          messages: [],
          showAlert: false,
        });
        this.props.clearMessages();
      });
      return <>{this.getReactAlerts(this.state.messages)}</>;
    }
    return <div />;
  };

  render() {
    return <>{this.showAlert()}</>;
  }
}
