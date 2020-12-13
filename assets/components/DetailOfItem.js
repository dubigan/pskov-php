import React, { Component } from "react";
import axios from "axios";

export class DetailOfItem extends Component {
  getNewItem = () => {};
  getNewItemId = () => -1;

  state = {
    messages: [],
    item: {},
  };

  url = "/api/owner/";
  tooltipPlace = "bottom";

  componentDidMount() {
    this.getItem();
  }

  digitsOnly = (e) => {
    let charCode = e.charCode;
    //console.log(charCode);
    if (charCode < 48 || charCode > 57) {
      // digits only
      e.preventDefault();
    }
  };

  getErrors = (data) => {
    console.log("getErrors", data);

    return Object.keys(data).map((key) => {
      return { type: "error", message: data[key] };
    });
  };

  getItemFromData = (data) => data;

  getItem = () => {
    axios
      .post(this.url, {})
      .then((res) => {
        this.setState({ item: this.getItemFromData(res.data) });
      })
      .catch((err) => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  redirect = (redirect) => {
    if (redirect) {
      window.location.href = redirect;
    }
  };

  saveItem = () => {
    console.log("saveItem", this.state.item);

    axios
      .post(this.url, { item: this.state.item })
      .then((res) => {
        this.redirect(res.data.redirect);

        this.setState({
          item: res.data,
          messages: [{ type: "success", message: "Информация сохранена" }],
        });
      })
      .catch((err) => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  getChangedItem = (e) => {
    const item = {
      ...this.state.item,
      [e.target.name]: e.target.value,
    };
    return item;
  };

  changeItem = (e) => {
    this.setState({ item: this.getChangedItem(e) });
  };

  render() {
    return <></>;
  }
}
