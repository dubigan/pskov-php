import React from 'react';
import axios from 'axios';
import { DetailOfItem } from './DetailOfItem';
import Cars from './Cars';
import Alerts from './Alerts';
import Card from './lib/Card';
import { Row } from './lib/Row';
import { Button } from './lib/Button';
import Form from './lib/Form';
import GenderSelect from './parts/GenderSelect';
import { TooltipContent } from './lib/Tooltip';

const EMPTY_ITEM_ID = -10;
//const UNDEFINED_OWNER = -1;

const EMPTY_ITEM = {
  id: EMPTY_ITEM_ID, // indicate new owner, -1 means undefined owner
  cars: [],
  name: '',
  patronymic: '',
  last_name: '',
  gender: 'f',
  age: 0,
  comment: '',
};

export default class OwnerDetail extends DetailOfItem {
  url = '/api/owner/';

  getNewItem() {
    return EMPTY_ITEM;
  }
  getNewItemId() {
    return EMPTY_ITEM_ID;
  }

  btnNewCarClick = () => {
    axios
      .post(this.url, {
        btn_add: '',
        url: window.location.pathname,
        owner_pk: this.state.item.id,
      })
      .then(res => {
        this.redirect(res.data.redirect);
      })
      .catch(err => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  changeGender = e => {
    const item = { ...this.state.item, gender: e.target.value };
    //console.log('changeGender', item);

    this.setState({ item });
  };

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} clearMessages={this.clearMessages} />
        <Card>
          <Card.Title>Автовладелец</Card.Title>
          <Card.Body>
            <Row>
              <div className="form">
                <Form.Group className="form__group form__group_owner-input">
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_owner-input">Имя</Form.Label>
                    <Form.Control
                      className="form__control form__control_owner-input"
                      name="name"
                      type="text"
                      value={this.state.item.name ? this.state.item.name : ''}
                      placeholder="Имя"
                      onChange={this.changeItem}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_owner-input">
                      Отчество
                    </Form.Label>
                    <Form.Control
                      className="form__control form__control_owner-input"
                      name="patronymic"
                      type="text"
                      value={this.state.item.patronymic ? this.state.item.patronymic : ''}
                      placeholder="Отчество"
                      onChange={this.changeItem}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_owner-input">Фамилия</Form.Label>
                    <Form.Control
                      className="form__control form__control_owner-input"
                      name="last_name"
                      type="text"
                      placeholder="Фамилия"
                      value={this.state.item.last_name ? this.state.item.last_name : ''}
                      onChange={this.changeItem}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_owner-input" name="gender">
                      Пол
                    </Form.Label>
                    <GenderSelect
                      className="toggleButtonGroup toggleButtonGroup_owner-gender"
                      name="gender"
                      type="radio"
                      checkValue={this.state.item.gender}
                      onChange={this.changeGender}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_owner-input" name="age">
                      Возраст
                    </Form.Label>
                    <Form.Control
                      className="form__control form__control_owner-input"
                      name="age"
                      type="text"
                      maxLength="3"
                      placeholder="Возраст"
                      value={this.state.item.age ? this.state.item.age : ''}
                      onChange={this.changeItem}
                      onKeyPress={this.digitsOnly}
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="form__group form__group_owner-comment">
                  <Form.Label className="form__label form__label_owner-comment">
                    Комментарий
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    rows="7"
                    value={this.state.item.comment ? this.state.item.comment : ''}
                    name="comment"
                    placeholder="Комментарий"
                    onChange={this.changeItem}
                  />
                </Form.Group>
              </div>
            </Row>
            <hr />
            <Button
              className="btn-primary btn-primary_owner-save tooltip"
              variant="primary"
              onClick={this.saveItem}
            >
              <TooltipContent>Сохранить&nbsp;информацию&nbsp;об&nbsp;автовладельце</TooltipContent>
              Сохранить
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Автомобили</Card.Title>
          <Card.Header>
            <Row>
              <Button
                variant="primary"
                className="btn-primary btn-primary_owner-add-car tooltip"
                name="add_car"
                onClick={this.btnNewCarClick}
                disabled={this.state.item.id < 0 ? 'disabled' : ''}
              >
                <TooltipContent>Добавить&nbsp;автомобиль</TooltipContent>
                Добавить автомобиль
              </Button>
            </Row>
          </Card.Header>
          <Card.Body>
            <Cars owner={this.state.item.id} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
