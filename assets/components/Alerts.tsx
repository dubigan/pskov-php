import React, { Component } from 'react';

type TError = {
  type: string;
  message: string;
};

type TAlertsProps = {
  messages: Array<TError>;
  clearMessages: Function;
  timeout?: number;
};

type TAlertsState = {
  messages: Array<TError>;
  showAlert: boolean;
  timeout: number;
};

export default class Alerts extends Component<TAlertsProps, TAlertsState> {
  state = {
    messages: [],
    showAlert: false,
    timeout: 7000,
  };

  componentDidUpdate(prevProps: TAlertsProps, prevState: TAlertsState) {
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

  getAlerts = (array: Array<TError>) => {
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

  delay = (wait: number) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(''), wait);
    });
  };

  clearMessages = () => {
    this.setState({
      messages: [],
      showAlert: false,
    });
    this.props.clearMessages();
  };

  showAlert = () => {
    if (this.state.showAlert) {
      this.delay(this.props.timeout ? this.props.timeout : this.state.timeout).then(
        () => this.clearMessages
      );
      return <>{this.getAlerts(this.state.messages)}</>;
    }
    return <div />;
  };

  render() {
    return <>{this.showAlert()}</>;
  }
}
