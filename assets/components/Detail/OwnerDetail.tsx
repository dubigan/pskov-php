import React, { ChangeEvent, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useDetailOfItem } from './DetailOfItem';
import Cars from '../List/Cars';
import Alerts from '../lib/alert/Alerts';
import Card from '../lib/Card';
import { Row } from '../lib/Row';
import { Button } from '../lib/Button/Button';
import Form from '../lib/Form';
import GenderSelect from '../parts/GenderSelect';
import { TooltipContent } from '../lib/Tooltip';
import { TOwnerItem, TDetailOfItemsProps, TGender, GENDER, TCarItem } from './DetailTypes';
import { TItemFunctions } from '../List/ListTypes';
import { useDetailFunctions } from './useDetailFunctions';
import { getErrors, digitsOnly, redirect } from '../lib/utils/utils';
import { AlertContext } from '../lib/alert/AlertContext';
import { useListFunctions } from '../List/useListFunctions';

const OwnerDetail = () => {
  const functions = useDetailFunctions('owner');
  const carFunctions = useListFunctions('cars');
  const history = useHistory();
  const context = useContext(AlertContext);

  const detailUtils = useDetailOfItem<TOwnerItem>({ functions } as TDetailOfItemsProps<TOwnerItem>);

  const btnNewCarClick = () => {
    if (!detailUtils.item) return;
    axios
      .post(functions.url, {
        btn_add: '',
        url: window.location.pathname,
        owner_pk: detailUtils.item!.id,
      })
      .then(res => {
        redirect(history, res.data.redirect);
      })
      .catch(err => {
        context.setAlerts(getErrors(err.response.data));
      });
  };

  const stringToGender = (value: string): TGender => {
    if (value.startsWith(GENDER.FEMALE)) return GENDER.FEMALE;
    return GENDER.MALE;
  };

  const changeGender = (e: ChangeEvent<HTMLInputElement>) => {
    detailUtils.setItem({ ...detailUtils.item, gender: stringToGender(e.target.value) });
  };

  useEffect(() => detailUtils.getItem(), []);

  return (
    <div>
      <Alerts />
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
                    value={detailUtils.item?.name ?? ''}
                    placeholder="Имя"
                    onChange={detailUtils.changeItem}
                  />
                </Form.Group>
                <Form.Group className="form__group form__group_horiz">
                  <Form.Label className="form__label form__label_owner-input">Отчество</Form.Label>
                  <Form.Control
                    className="form__control form__control_owner-input"
                    name="patronymic"
                    type="text"
                    value={detailUtils.item?.patronymic ?? ''}
                    placeholder="Отчество"
                    onChange={detailUtils.changeItem}
                  />
                </Form.Group>
                <Form.Group className="form__group form__group_horiz">
                  <Form.Label className="form__label form__label_owner-input">Фамилия</Form.Label>
                  <Form.Control
                    className="form__control form__control_owner-input"
                    name="last_name"
                    type="text"
                    placeholder="Фамилия"
                    value={detailUtils.item?.last_name ?? ''}
                    onChange={detailUtils.changeItem}
                  />
                </Form.Group>
                <Form.Group className="form__group form__group_horiz">
                  <Form.Label className="form__label form__label_owner-input" name="gender">
                    Пол
                  </Form.Label>
                  <GenderSelect
                    className="toggleButtonGroup toggleButtonGroup_owner-gender"
                    name="gender"
                    checkValue={detailUtils.item!.gender}
                    onChange={changeGender}
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
                    maxLength={3}
                    placeholder="Возраст"
                    value={detailUtils.item?.age ?? ''}
                    onChange={detailUtils.changeItem}
                    onKeyPress={digitsOnly}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group className="form__group form__group_owner-comment">
                <Form.Label className="form__label form__label_owner-comment">
                  Комментарий
                </Form.Label>
                <Form.Control
                  type="textarea"
                  rows={7}
                  value={detailUtils.item?.comment ?? ''}
                  name="comment"
                  placeholder="Комментарий"
                  onChange={detailUtils.changeItem}
                />
              </Form.Group>
            </div>
          </Row>
          <hr />
          <Button
            className="btn-primary btn-primary_owner-save tooltip"
            variant="primary"
            onClick={detailUtils.saveItem}
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
              onClick={btnNewCarClick}
              disabled={detailUtils.item!.id < 0}
            >
              <TooltipContent>Добавить&nbsp;автомобиль</TooltipContent>
              Добавить автомобиль
            </Button>
          </Row>
        </Card.Header>
        <Card.Body>
          <Cars
            withAlerts={false}
            owner={detailUtils.item?.id}
            functions={carFunctions as TItemFunctions<TCarItem>}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default OwnerDetail;
