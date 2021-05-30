import React, { ChangeEvent, ChangeEventHandler, Component, KeyboardEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { AlertContext } from './lib/alert/AlertContext';

export class DetailOfItem<TItem> extends Component<RouteComponentProps, any> {
  getNewItem(): TItem | undefined {
    return undefined;
  }
  getNewItemId(): number {
    return -1;
  }

  state = {
    //messages: [],
    item: this.getNewItem(),
  };

  static contextType = AlertContext;

  url = '/api/owner/';
  tooltipPlace = 'bottom';

  componentDidMount(): void {
    this.getItem();
  }

  digitsOnly = (e: KeyboardEvent<Element>) => {
    let charCode = e.charCode;
    //console.log(charCode);
    if (charCode < 48 || charCode > 57) {
      // digits only
      e.preventDefault();
    }
  };

  getErrors = (data: any) => {
    //console.log('getErrors', data);
    const type = 'error';
    if (typeof data == 'string') {
      return { type, message: data };
    }
    return Object.keys(data).map(key => {
      return { type, message: data[key] };
    });
  };

  getItemFromData(data: any) {
    //console.log('getItemFromData', data);
    return data.id ? data : this.getNewItem();
  }

  getItem = () => {
    axios
      .post(this.url, {})
      .then(res => {
        //console.log('getItem.history', this.props.history);
        this.redirect(res.data.redirect);
        //this.props.history.push(res.data.redirect);

        this.setState({ item: this.getItemFromData(res.data) });
      })
      .catch(err => {
        this.context.setAlerts(this.getErrors(err.response.data));
      });
  };

  redirect = (redirect: string, dir = '') => {
    if (redirect) {
      if (dir === 'back') {
        this.props.history.goBack();
        return;
      }
      this.props.history.push(redirect);
    }
  };

  saveItem = () => {
    //console.log('saveItem', this.state.item);

    axios
      .post(this.url, { item: this.state.item })
      .then(res => {
        //console.log("saveItem", res.data);

        this.redirect(res.data.redirect, 'back');

        this.context.setAlerts([{ type: 'success', message: 'Информация сохранена' }]);
        this.setState({
          item: this.getItemFromData(res.data),
        });
      })
      .catch(err => {
        //console.log('saveItem', err);

        let messages;
        if (typeof err.response.data == 'string') {
          console.log('saveItem', err.response.data);

          messages = [err.response.data];
        } else {
          messages = this.getErrors(err.response.data);
        }
        //console.log('saveItem.context', this.context);
        this.context.setAlerts(messages);
      });
  };

  getChangedItem(name: string, value: string) {
    const item = {
      ...this.state.item,
      [name]: value,
    };
    return item;
  }

  changeItem = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ item: this.getChangedItem(e.target.name, e.target.value) });
  };

  // clearMessages = () => {
  //   this.setState({ messages: [] });
  // };

  render() {
    return <></>;
  }
}
