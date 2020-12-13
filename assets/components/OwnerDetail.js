import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Row,
  Form,
  Button,
  Col,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { DetailOfItem } from "./DetailOfItem";
import Cars from "./Cars";
import Alerts from "./Alerts";

const NEW_ITEM_ID = -10;
const UNDEFINED_OWNER = -1;

const NEW_ITEM = {
  id: NEW_ITEM_ID, // indicate new owner, -1 is not acceptable
  cars: [],
  name: "",
  patronymic: "",
  last_name: "",
  gender: "",
  age: "",
  comment: "",
};

export default class OwnerDetail extends DetailOfItem {
  url = "/api/owner/";

  getNewItem = () => NEW_ITEM;
  getNewItemId = () => NEW_ITEM_ID;
  getChangedItem = (e) => {
    let item;
    switch (e.target.name) {
      case "gender-f":
        owner = {
          ...this.state.item,
          gender: "f",
        };
        break;
      case "gender-m":
        owner = {
          ...this.state.item,
          gender: "m",
        };
        break;
      default:
        item = super.getChangedItem(e);
      // item = {
      //   ...this.state.item,
      //   [e.target.name]: e.target.value,
      // };
    }
    return item;
  };

  getItemFromData = (data) => {
    const item = {
      ...(data ? data : this.getNewItem()),
      id: data["id"] ? data["id"] : this.getNewItemId(),
    };
    //console.log("getItem", item);
    return item;
  };

  btnNewCarClick = () => {
    axios
      .post(this.url, {
        btn_add: "",
        url: window.location.pathname,
        owner_pk: this.state.item.id,
      })
      .then((res) => {
        this.redirect(res.data.redirect);
      })
      .catch((err) => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  // getItem = () => {
  //   axios
  //     .post(this.url, {})
  //     .then((res) => {
  //       const item = {
  //         ...(res.data ? res.data : this.getNewItem()),
  //         id: res.data["id"] ? res.data["id"] : this.getNewItemId(),
  //       };
  //       console.log("getItem", item);

  //       this.setState({ item });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         messages: this.getErrors(err.response.data),
  //       });
  //     });
  // };

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} />
        <Card>
          <Card.Title>Автовладелец</Card.Title>
          <Card.Body>
            <Row>
              <div className="col-5">
                <Row>
                  <Form.Label className="col-4">Имя</Form.Label>
                  <input
                    className="form-control col-6"
                    name="name"
                    type="text"
                    value={this.state.item.name ? this.state.item.name : ""}
                    onChange={this.changeItem}
                  />
                  <Form.Label className="col-4">Отчество</Form.Label>
                  <input
                    className="form-control col-6"
                    name="patronymic"
                    type="text"
                    value={
                      this.state.item.patronymic
                        ? this.state.item.patronymic
                        : ""
                    }
                    onChange={this.changItem}
                  />
                  <Form.Label className="col-4">Фамилия</Form.Label>
                  <input
                    className="form-control col-6"
                    name="last_name"
                    type="text"
                    value={
                      this.state.item.last_name ? this.state.item.last_name : ""
                    }
                    onChange={this.changeItem}
                  />
                  <Form.Label className="col-4" name="gender">
                    Пол
                  </Form.Label>
                  <Row className="col-6">
                    <Form.Label className="col-1" name="gender-m">
                      <small>М</small>
                    </Form.Label>
                    <input
                      className="form-control col-1 border-0"
                      name="gender-m"
                      type="radio"
                      checked={this.state.item.gender === "m" ? 1 : 0}
                      onChange={this.changeItem}
                    />
                    <Form.Label className="col-1" name="gender-f">
                      <small>Ж</small>
                    </Form.Label>
                    <input
                      className="form-control col-1 border-0"
                      name="gender-f"
                      type="radio"
                      checked={this.state.item.gender === "f" ? 1 : 0}
                      onChange={this.changeItem}
                    />
                  </Row>
                  <Form.Label className="col-4" name="age">
                    Возраст
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="age"
                    type="text"
                    maxLength="3"
                    value={this.state.item.age ? this.state.item.age : ""}
                    onChange={this.changeItem}
                    onKeyPress={this.digitsOnly}
                  />
                </Row>
              </div>
              <div className="col-7">
                <Form.Label className="col-4">Комментарий</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="6"
                  value={this.state.item.comment}
                  name="comment"
                  onChange={this.changeItem}
                />
              </div>
            </Row>
            <hr />
            <div className="row spacer">
              <div className="col-12">
                <OverlayTrigger
                  key={1}
                  placement={this.tooltipPlace}
                  overlay={
                    <Tooltip id={`tooltip-1`}>
                      Сохранить информацию об автовладельце
                    </Tooltip>
                  }
                >
                  <Button
                    variant="primary"
                    className="col"
                    onClick={this.saveItem}
                  >
                    Сохранить
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Автомобили</Card.Title>
          <Card.Header>
            <Row className="spacer">
              <Col xs={12}>
                <OverlayTrigger
                  key={2}
                  placement={this.tooltipPlace}
                  overlay={
                    <Tooltip id={`tooltip-2`}>Добавить автомобиль</Tooltip>
                  }
                >
                  <Button
                    variant="primary"
                    className="col"
                    name="add_car"
                    onClick={this.btnNewCarClick}
                    disabled={this.state.item.id < 0 ? "disabled" : ""}
                  >
                    Добавить автомобиль
                  </Button>
                </OverlayTrigger>
              </Col>
            </Row>
          </Card.Header>
          <div className="row spacer">
            <div className="col-12">
              <Cars
                owner={this.state.item.id}
                withButtons="true"
                withOwnerInfo="false"
                withSearch="false"
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
