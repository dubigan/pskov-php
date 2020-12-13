import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Row,
  Form,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import DatePicker from "react-date-picker";
//import { registerLocale } from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import ru from "date-fns/locale/ru";
import { DetailOfItem } from "./DetailOfItem";
import Alerts from "./Alerts";

const NEW_CAR = {
  manufacturer: "",
  model: "",
  production: "",
  color: "",
  power: "",
  mileage: "",
  comment: "",
};
export default class CarDetail extends DetailOfItem {
  url = "/api/car/";
  //registerLocale("ru", ru);

  componentDidMount() {
    //registerLocale("ru", ru);
    super.componentDidMount();
  }

  getNewItem = () => NEW_CAR;

  changeDate = (date) => {
    //const dt = new Date(date).toLocaleDateString("ru");
    const item = {
      ...this.state.item,
      production: new Date(date).toLocaleDateString("ru"),
    };
    this.setState({ item });
  };

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} />
        <Card>
          <Card.Title>Автомобиль</Card.Title>
          <Card.Body>
            <Row>
              <div className="col-6">
                <Row>
                  <Form.Label className="col-5">Производитель</Form.Label>
                  <input
                    className="form-control col-6"
                    name="manufacturer"
                    type="text"
                    value={this.state.item.manufacturer}
                    onChange={this.changeItem}
                  />
                  <Form.Label className="col-5">Модель</Form.Label>
                  <input
                    className="form-control col-6"
                    name="model"
                    type="text"
                    value={this.state.item.model}
                    onChange={this.changeItem}
                  />

                  <Form.Label className="col-5">Дата выпуска</Form.Label>
                  {/* <OverlayTrigger
                    key={1}
                    placement={this.tooltipPlace}
                    overlay={<Tooltip id={`tooltip-1`}>Дата выпуска в формате dd.mm.yyy</Tooltip>}
                  > */}
                  <DatePicker
                    className="col-11"
                    //format="dd.MM.yyyy"
                    locale="ru"
                    name="production"
                    showYearDropdown={true}
                    onChange={this.changeDate}
                    value={this.state.item.production}
                  />
                  {/* </OverlayTrigger> */}
                  <Form.Label className="col-5" name="color">
                    Цвет
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="color"
                    type="text"
                    value={this.state.item.color}
                    onChange={this.changeItem}
                  />
                  <Form.Label className="col-5" name="age">
                    Мощность (л.с.)
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="power"
                    type="text"
                    maxLength="3"
                    value={this.state.item.power ? this.state.item.power : ""}
                    onChange={this.changeItem}
                    onKeyPress={this.digitsOnly}
                  />
                  <Form.Label className="col-5" name="age">
                    Пробег (км.)
                  </Form.Label>
                  <input
                    className="form-control col-6"
                    name="mileage"
                    type="text"
                    maxLength="10"
                    value={
                      this.state.item.mileage ? this.state.item.mileage : ""
                    }
                    onChange={this.changeItem}
                    onKeyPress={this.digitsOnly}
                  />
                </Row>
              </div>
              <div className="col-6">
                <Form.Label className="col-5">Комментарий</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="7"
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
                  key={2}
                  placement={this.tooltipPlace}
                  overlay={
                    <Tooltip id={`tooltip-2`}>
                      Сохранить информацию об автомобиле
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
      </div>
    );
  }
}
