import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import DatePicker from 'react-date-picker';
import { DetailOfItem } from './DetailOfItem';
import Alerts from './Alerts';
import './css/DatePicker.css';
import Card from './lib/Card';
import { Row } from './lib/Row';
import { Button } from './lib/Button';
import Form from './lib/Form';
import { TooltipContent } from './lib/Tooltip';
import { TCarItem } from './Cars';

const EMPTY_CAR = {
  id: -1,
  manufacturer: '',
  model: '',
  production: new Date().toLocaleDateString('ru'),
  color: '',
  power: 0,
  mileage: 0,
  comment: '',
};

//type TCarDetailProps = RouteComponentProps;

class CarDetail extends DetailOfItem<TCarItem> {
  url = '/api/car/';

  getNewItem() {
    const item: TCarItem = EMPTY_CAR;
    //console.log('getNewItem', item);

    return item;
  }

  changeDate = (date: Date | Date[]) => {
    //console.log("changeDate", date.toLocaleDateString("ru"));
    if (typeof date !== 'object') return;
    const item = {
      ...this.state.item,
      production: (date as Date).toLocaleDateString('ru'),
    };
    this.setState({ item });
  };

  getDate = () => {
    if (this.state.item?.production) {
      const [day, month, year] = this.state.item!.production.split('.');
      //console.log("getDate", [day, month, year]);
      return new Date(+year, +month - 1, +day);
    }
    return new Date();
  };

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} clearMessages={this.clearMessages} />
        <Card>
          <Card.Title>Автомобиль</Card.Title>
          <Card.Body>
            <Row>
              <div className="form">
                <Form.Group className="form__group form__group_car-input">
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_car-input">
                      Производитель
                    </Form.Label>
                    <Form.Control
                      className="form__control form__control_car-input"
                      name="manufacturer"
                      type="text"
                      value={this.state.item?.manufacturer}
                      onChange={this.changeItem}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_car-input">Модель</Form.Label>
                    <Form.Control
                      className="form__control form__control_car-input"
                      name="model"
                      type="text"
                      value={this.state.item?.model}
                      onChange={this.changeItem}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_car-input">
                      Дата выпуска
                    </Form.Label>
                    {/* <OverlayTrigger
                    key={1}
                    placement={this.tooltipPlace}
                    overlay={<Tooltip id={`tooltip-1`}>Дата выпуска в формате dd.mm.yyy</Tooltip>}
                  > */}
                    <DatePicker
                      className="form__control form__control_car-input"
                      calendarClassName="border"
                      format="dd.MM.yyyy"
                      locale="ru"
                      maxDate={new Date()}
                      minDate={new Date(1900, 0, 1)}
                      name="production"
                      // showYearDropdown={true}
                      onChange={this.changeDate}
                      value={this.getDate()}
                    />
                  </Form.Group>
                  {/* </OverlayTrigger> */}
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_car-input" name="color">
                      Цвет
                    </Form.Label>
                    <Form.Control
                      className="form__control form__control_car-input"
                      name="color"
                      type="text"
                      value={this.state.item?.color}
                      onChange={this.changeItem}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_car-input" name="age">
                      Мощность (л.с.)
                    </Form.Label>
                    <Form.Control
                      className="form__control form__control_car-input"
                      name="power"
                      type="text"
                      maxLength={3}
                      value={this.state.item?.power ? this.state.item!.power : ''}
                      onChange={this.changeItem}
                      onKeyPress={this.digitsOnly}
                    />
                  </Form.Group>
                  <Form.Group className="form__group form__group_horiz">
                    <Form.Label className="form__label form__label_car-input" name="age">
                      Пробег (км.)
                    </Form.Label>
                    <Form.Control
                      className="form__control form__control_car-input"
                      name="mileage"
                      type="text"
                      maxLength={10}
                      value={this.state.item?.mileage ? this.state.item!.mileage : ''}
                      onChange={this.changeItem}
                      onKeyPress={this.digitsOnly}
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="form__group form__group_car-comment">
                  <Form.Label className="form__label form__label_car-comment">
                    Комментарий
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    rows={8}
                    value={this.state.item?.comment}
                    name="comment"
                    onChange={this.changeItem}
                  />
                </Form.Group>
              </div>
            </Row>
            <hr />
            <Button className="btn-primary btn-primary_car-save tooltip" onClick={this.saveItem}>
              <TooltipContent>Сохранить информацию об автомобиле</TooltipContent>
              Сохранить
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(CarDetail);
