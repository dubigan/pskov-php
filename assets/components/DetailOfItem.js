import React, { Component } from 'react';
import axios from 'axios';

export class DetailOfItem extends Component {
  getNewItem() {}
  getNewItemId() {
    return -1;
  }

  state = {
    messages: [],
    item: this.getNewItem(),
  };

  url = '/api/owner/';
  tooltipPlace = 'bottom';

  componentDidMount() {
    this.getItem();
  }

  digitsOnly = e => {
    let charCode = e.charCode;
    //console.log(charCode);
    if (charCode < 48 || charCode > 57) {
      // digits only
      e.preventDefault();
    }
  };

  getErrors = data => {
    //console.log('getErrors', data);

    return Object.keys(data).map(key => {
      return { type: 'error', message: data[key] };
    });
  };

  getItemFromData(data) {
    //onsole.log('getItemFromData', data);
    return data.id ? data : this.getNewItem();
  }

  getItem = () => {
    axios
      .post(this.url, {})
      .then(res => {
        //console.log("getItem", res.data);
        this.redirect(res.data.redirect);

        this.setState({ item: this.getItemFromData(res.data) });
      })
      .catch(err => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  redirect = redirect => {
    if (redirect) {
      window.location.href = redirect;
    }
  };

  saveItem = () => {
    //console.log('saveItem', this.state.item);

    axios
      .post(this.url, { item: this.state.item })
      .then(res => {
        //console.log("saveItem", res.data);

        this.redirect(res.data.redirect);

        this.setState({
          item: this.getItemFromData(res.data),
          messages: [{ type: 'success', message: 'Информация сохранена' }],
        });
      })
      .catch(err => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  getChangedItem(e) {
    const item = {
      ...this.state.item,
      [e.target.name]: e.target.value,
    };
    return item;
  }

  changeItem = e => {
    this.setState({ item: this.getChangedItem(e) });
  };

  clearMessages = () => {
    this.setState({ messages: [] });
  };

  render() {
    return <></>;
  }
}
