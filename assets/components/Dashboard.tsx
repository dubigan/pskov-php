import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Form from './lib/Form';
import { Button } from './lib/Button';
import Card from './lib/Card';
import Alerts from './lib/alert/Alerts';
import { AlertContext } from './lib/alert/AlertContext';

type TWebsocket = {
  ws: WebSocket | null;
  status: string;
};

type TDashboardState = {
  //messages: Array<any>;
  uploadFile: File | null;
  clearDB: boolean;
  websocket: TWebsocket;
  downloadFormat: string;
};

class Dashboard extends Component<RouteComponentProps, TDashboardState> {
  state = {
    //messages: [],
    uploadFile: null,
    clearDB: false,
    websocket: {
      ws: null,
      status: 'disconnected',
    },
    downloadFormat: 'json',
  };

  static contextType = AlertContext;

  downloadUrl = '/';
  uploadUrl = '/';

  timeout: number = 250;

  getDownloadUrl = () => {
    return `/api/download/`;
  };

  setWebsocketStatus = (status: string) => {
    const websocket: TWebsocket = { ...this.state.websocket, status: status };
    this.setState({ websocket });
  };

  getWsUrl = () => {
    //console.log("getWsUrl protocol: ", window.location.protocol);

    const ws_scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
    if (window.location.hostname.toLowerCase().indexOf('localhost') >= 0) {
      return `ws://` + window.location.hostname + ':3000/';
    }
    // heroku deploy
    const hostname = window.location.hostname.split('.');
    console.log('getWsUrl heroku: ', hostname);
    if (hostname[1] && hostname[1].toLowerCase().indexOf('heroku') >= 0) {
      hostname[0] = 'pskov-ws';
      return `${ws_scheme}://` + hostname.join('.');
    }
    return 'localhost';
  };

  checkWebsocket = () => {
    const ws: WebSocket | null = this.state.websocket.ws;
    if (!ws || ws!.readyState === WebSocket.CLOSED) this.connectWebsocket(); //check if websocket instance is closed, if so call `connect` function.
  };

  connectWebsocket = () => {
    const self = this; // cache the this
    let connectInterval: NodeJS.Timeout;
    //const ws_scheme = window.location.protocol === "https:" ? "wss" : "ws";
    //const url = `ws://${this.getHostName()}:8080/`;
    const url = this.getWsUrl();
    console.log('connectWebsocket url: ', url);

    const ws = new WebSocket(url);
    ws.onopen = () => {
      self.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval);
      //console.log(`connected to ${url}`);
      this.setWebsocketStatus(`connected to ${url}`);
    };

    ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const data: any = JSON.parse(evt.data);
      const messages: Array<any> = [];
      if (data) {
        //console.log('onmessage', data);

        messages.push(data);
        this.context.setAlerts(messages);
      }
    };

    ws.onclose = () => {
      //console.log('disconnected');
      this.setWebsocketStatus('disconnected');
      // automatically try to reconnect on connection loss
      self.timeout = self.timeout + self.timeout; //increment retry interval
      connectInterval = global.setTimeout(this.checkWebsocket, Math.min(10000, self.timeout)); //call check function after timeout
    };

    ws.onerror = e => {
      console.log('websocket error', e);
      this.setWebsocketStatus(`websocket error: ${e}`);
    };
    const websocket = { ...this.state.websocket, ws: ws };
    this.setState({ websocket });
  };

  componentDidMount() {
    this.connectWebsocket();
  }

  selectFormat = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ downloadFormat: e.target.value });
  };

  selectFileToUpload = (e: MouseEvent<HTMLButtonElement>) => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = (e: any): any => {
      const file: File = e.target!.files[0];
      this.setState({ uploadFile: file });
    };

    input.click();
  };

  sendFile = (e: MouseEvent<HTMLButtonElement>) => {
    const reader = new FileReader();
    reader.readAsText(this.state.uploadFile!, 'UTF-8');

    // here we tell the reader what to do when it's done reading...
    reader.onload = readerEvent => {
      const content = readerEvent.target!.result; // this is the content!
      const ws: any = this.state.websocket.ws;
      if (ws !== null) {
        ws.send(
          JSON.stringify({
            type: 'utf8',
            cleardb: this.state.clearDB,
            content: content,
          })
        );
      }
    };
  };

  clearDB = () => {
    this.setState({ clearDB: !this.state.clearDB });
  };

  render() {
    return (
      <div>
        <Alerts />
        <Card>
          <Card.Header>
            <Form.Label>Загрузка в DB</Form.Label>
            <div className="col-12 text-left">Websocket status: {this.state.websocket.status}</div>
          </Card.Header>
          <Card.Body>
            <Form.Group auxClassName="form__group_horiz">
              <Form.Label auxClassName="form__label_upload">Очистить DB</Form.Label>
              <Form.Control
                type="check"
                name="clearBD"
                value={this.state.clearDB}
                onChange={this.clearDB}
                disabled={this.state.websocket.status === 'disconnected'}
              />
            </Form.Group>
            <Form.Group auxClassName="form__group_horiz">
              <Form.Label auxClassName="form__label_upload">Файл загрузки в DB</Form.Label>
              <Form.Control
                auxClassName="form__text form__text_upload"
                name="uploadFileName"
                id="uploadFileName"
                type="text"
                value={(this.state.uploadFile as any)?.name}
                readOnly
              />
              <Button
                //variant="primary"
                className="btn-primary"
                onClick={this.selectFileToUpload}
                disabled={this.state.websocket.status === 'disconnected'}
              >
                ...
              </Button>
              <Button
                //variant="primary"
                className="btn-primary"
                onClick={this.sendFile}
                disabled={this.state.uploadFile === null}
              >
                Старт
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>
        <hr />
        <Card>
          <Card.Header>
            <Form.Label>Выгрузка DB</Form.Label>
          </Card.Header>
          <Card.Body>
            <Form.Group auxClassName="form__group_horiz">
              <Form.Label auxClassName="form__label_download">
                Выберите формат сохраняемого файла
              </Form.Label>
              <Form.Select auxClassName="form__select_download" onChange={this.selectFormat}>
                <option value="json">json</option>
                {/* <option value="csv">csv</option> */}
                {/* <option value="text">text/plain</option> */}
              </Form.Select>
              <form action={this.getDownloadUrl()} method="post">
                <input type="hidden" name="format" value={this.state.downloadFormat} />
                <Button type="submit" className="btn-primary">
                  Старт
                </Button>
              </form>
            </Form.Group>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Dashboard);
