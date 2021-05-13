import React, { Component } from 'react';
import axios from 'axios';
import { Row } from './lib/Row';
import { TooltipContent } from './lib/Tooltip';
import { Button } from './lib/Button';
import Alerts from './Alerts';
import Loader from './Loader';

export default class ListOfItems extends Component {
  state = {
    loading: false,
    messages: [],
    showDeleteDialog: false,
    itemDelete: '',
    items: [],
    sortedBy: this.getDefaultSortedBy(),
  };

  url = '';
  //upArrow = '&#x0225C;';
  upArrow = '\u2191';
  //downArrow = '&#x0225C;';
  downArrow = '\u2193';
  nameOfItem = '';

  addButton = false;

  componentDidMount() {
    this.getItems();
  }

  getDefaultSortedBy() {
    return {
      name: '',
      direction: 'asc',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortedBy.name !== this.state.sortedBy.name || prevState.sortedBy.direction !== this.state.sortedBy.direction) {
      this.getItems();
    }
  }

  get arrow() {
    return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
  }

  getErrors = data => {
    return Object.keys(data).map(key => {
      return { type: 'error', message: data[key] };
    });
  };

  getItems = () => {
    this.setState({ loading: true });
    //console.log('getItems owner', this.props.owner);

    axios
      .post(this.url, {
        sorted_by: this.state.sortedBy,
        owner: this.props.owner ? this.props.owner : -1,
      })
      .then(res => {
        //console.log('getItems', res.data);
        const state = { items: res.data };
        //console.log("getItems state", state);

        this.setState(state);
      })
      .catch(err => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  getItem = id => {
    return this.state.items.filter(item => +item.id === +id)[0];
  };

  btnSortClick = e => {
    const sorted_name = e.target.id;
    //console.log('btnSortClick.sorted_name', sorted_name);

    if (!sorted_name) return;
    if (this.state.sortedBy.name !== sorted_name) {
      const sortedBy = {
        name: sorted_name,
        direction: 'desc',
      };
      this.setState({
        sortedBy: sortedBy,
      });
    } else {
      const direction = this.state.sortedBy.direction === 'desc' ? 'asc' : 'desc';

      const sortedBy = {
        ...this.state.sortedBy,
        direction: direction,
      };

      this.setState({ sortedBy: sortedBy });
    }
  };

  btnDelClick = e => {
    const item = this.getItem(e.target.value);
    this.setState({
      showDeleteDialog: true,
      itemDelete: item,
    });
  };

  btnAddClick = e => {
    axios
      .post(this.url, { btn_add: '' })
      .then(res => {
        if (res.data.redirect) {
          //window.location.href = res.data['redirect'];
          this.props.history.push(res.data.redirect);
        }
      })
      .catch(err => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  btnEditClick = e => {
    const item_pk = e.target.value;
    //console.log("btnEditClick", item_pk);

    axios
      .post(this.url, {
        btn_edit: '',
        item_pk: item_pk,
        url: window.location.pathname,
      })
      .then(res => {
        if (res.data.redirect) {
          //console.log('btnEditClick.props', this.props);

          //window.location.href = res.data['redirect'];
          this.props.history.push(res.data.redirect);
        }
      })
      .catch(err => {
        this.setState({
          messages: this.getErrors(err.response.data),
        });
      });
  };

  itemDelete = confirm => {
    this.setState({ showDeleteDialog: false });

    if (confirm === 'true') {
      this.setState({ loading: true });
      axios
        .post(this.url, {
          sorted_by: this.state.sortedBy,
          btn_del: '',
          item_pk: this.state.itemDelete.id,
          owner: this.props.owner ? this.props.owner : -1,
        })
        .then(res => {
          this.setState({
            items: res.data,
            messages: [
              {
                type: 'success',
                message: `${this.nameOfItem} успешно удален`,
              },
            ],
          });
        })
        .catch(err => {
          this.setState({
            messages: this.getErrors(err.response.data),
          });
        })
        .finally(() => this.setState({ loading: false }));
    }
  };

  clearMessages = () => {
    this.setState({ messages: [] });
  };

  getThCell = (id, title, index) => {
    return (
      <th className="tooltip" id={id} onClick={this.btnSortClick} key={index}>
        <TooltipContent>Нажмите&nbsp;для&nbsp;сортировки</TooltipContent>
        <Row id={id} className="sorted-row">
          {this.state.sortedBy.name === id && <div id={id}>{this.arrow}</div>}{' '}
          <div id={id} className="sorted-row__text">
            {title}
          </div>
        </Row>
      </th>
    );
  };

  getButtons = id => {
    return (
      <Row>
        <Button value={id} variant="primary" className="btn-primary tooltip" onClick={this.btnEditClick}>
          <TooltipContent className="tooltip__content tooltip__content_left">Редактирование</TooltipContent>
          {'\u27f6'}
        </Button>
        <Button value={id} variant="danger" className="btn-danger btn-danger_del tooltip" onClick={this.btnDelClick}>
          <TooltipContent className="tooltip__content tooltip__content_left">Удаление</TooltipContent>x
        </Button>
      </Row>
    );
  };

  getAddButton = () => {
    if (this.addButton)
      return (
        <Button variant="primary" className="btn-primary btn-primary_add tooltip" onClick={this.btnAddClick}>
          <TooltipContent>Добавление&nbsp;нового&nbsp;автовладельца</TooltipContent>+
        </Button>
      );
    return <></>;
  };

  getDeleteDialog = () => {};

  deleteDialog = () => {
    if (this.state.showDeleteDialog) return this.getDeleteDialog();
    return <></>;
  };
  getTable = () => {};

  render() {
    return (
      <div>
        <Alerts messages={this.state.messages} clearMessages={this.clearMessages} />
        {this.deleteDialog()}
        {this.state.loading ? <Loader /> : this.getTable()}
        {this.getAddButton()}
      </div>
    );
  }
}
