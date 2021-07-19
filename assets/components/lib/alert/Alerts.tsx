import React, { useState, useEffect } from 'react';
import { useAlerts } from './AlertContext';
import { TAlertsProps } from './AlertTypes';
import * as Styled from './Alerts.elements';

const Alerts = ({ timeout, withAlerts = true }: TAlertsProps) => {
  const [visible, setVisible] = useState(false);
  const alerts = useAlerts();
  const defTimeout = 5000;

  useEffect(() => {
    setVisible(true);
    global.setTimeout(() => setVisible(false), timeout ? timeout : defTimeout);
  }, [alerts.messages]);

  return (
    <>
      {visible && withAlerts && (
        <Styled.Container>
          {alerts.messages.map((e, index) => {
            // const type = getType(e.type);
            return (
              <Styled.Alert shadow={true} type={e.type} key={index}>
                {e.message}
              </Styled.Alert>
            );
          })}
        </Styled.Container>
      )}
    </>
  );
};

export default Alerts;
