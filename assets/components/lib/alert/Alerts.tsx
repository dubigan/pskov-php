import React, { useState, useEffect } from 'react';
import { useAlerts, TError } from './AlertContext';

type TAlertsProps = {
  timeout?: number;
  withAlerts?: boolean;
};

const Alerts = ({ timeout, withAlerts = true }: TAlertsProps) => {
  const [visible, setVisible] = useState(false);
  const alerts = useAlerts();
  const defTimeout = 5000;

  const showAlerts = () => {
    let view = false;
    const { messages } = alerts;
    //const { messages: prevMessages } = prevProps;

    //console.log('Alerts', messages);

    if (messages && messages.length > 0) {
      view = true;
    }
    setVisible(view);
  };

  if (!withAlerts) return <></>;

  useEffect(showAlerts, [alerts.messages]);

  const getType = (type: string): string => {
    let t;
    switch (type) {
      case 'info':
        t = 'info';
        break;
      case 'success':
        t = 'success';
        break;
      case 'error':
        t = 'danger';
        break;
      default:
        t = 'danger';
    }
    return t;
  };
  const getAlerts = (array: Array<TError>) => {
    return array ? (
      array.map((e, index) => {
        const type = getType(e.type);
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

  const delay = (wait: number) => {
    return new Promise(resolve => global.setTimeout(() => resolve(''), wait));
  };

  const show = () => {
    if (visible) {
      delay(timeout ? timeout : defTimeout).then(() => setVisible(false));
      return <>{getAlerts(alerts.messages)}</>;
    }
    return <></>;
  };

  return <>{show()}</>;
};

export default Alerts;
