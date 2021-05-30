import React, { Component, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import { Row } from './lib/Row';
import { TooltipContent } from './lib/Tooltip';
import { Button } from './lib/Button';
import Alerts from './lib/alert/Alerts';
import { AlertContext, TError } from './lib/alert/AlertContext';
import Loader from './Loader';

export type TListOfItemsProps = RouteComponentProps & { owner?: number };
export type TSortedBy = {
  name: string;
  direction: 'asc' | 'desc';
};

export type TListOfItemsState<TItem> = {
  loading: boolean;
  //messages: Array<TError>;
  showDeleteDialog: boolean;
  itemDelete: TItem | undefined;
  items: Array<TItem>;
  sortedBy: TSortedBy;
};

export default class ListOfItems<TItem> extends Component<
  TListOfItemsProps,
  TListOfItemsState<TItem>
> {
  state = {
    loading: false,
    //messages: [],
    showDeleteDialog: false,
    itemDelete: undefined,
    items: [],
    sortedBy: this.getDefaultSortedBy(),
  };

  static contextType = AlertContext;

  url = '';
  //upArrow = '&#x0225C;';
  upArrow = '\u2191';
  //downArrow = '&#x0225C;';
  downArrow = '\u2193';
  nameOfItem = '';

  addButton = false;

  componentDidMount(): void {
    this.getItems();
  }

  getDefaultSortedBy(): TSortedBy {
    return {
      name: '',
      direction: 'asc',
    };
  }

  componentDidUpdate(prevProps: TListOfItemsProps, prevState: TListOfItemsState<TItem>) {
    if (
      prevState.sortedBy.name !== this.state.sortedBy.name ||
      prevState.sortedBy.direction !== this.state.sortedBy.direction
    ) {
      this.getItems();
    }
  }

  get arrow(): string {
    return this.state.sortedBy.direction === 'asc' ? this.upArrow : this.downArrow;
  }

  getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

  getErrors = (data: Object): TError[] => {
    return Object.keys(data).map((key: any) => {
      return { type: 'error', message: this.getKeyValue(data, key) };
    });
  };

  getItems = async () => {
    this.setState({ loading: true });
    //console.log('getItems owner', this.props.owner);
    try {
      const res = await axios.post(this.url, {
        sorted_by: this.state.sortedBy,
        owner: this.props.owner ? this.props.owner : -1,
      });
      const state = { items: res.data };
      //console.log("getItems state", state);

      this.setState(state);
    } catch (err) {
      this.context.setAlerts(this.getErrors(err.response.data));
    } finally {
      this.setState({ loading: false });
    }
  };

  getItem = (id: number) => {
    return this.state.items.filter((item: any) => +item.id === +id)[0];
  };

  btnSortClick = (e: MouseEvent<HTMLElement>) => {
    const sorted_name = (e.target as HTMLElement).id;
    //console.log('btnSortClick.sorted_name', sorted_name);

    if (!sorted_name) return;
    if (this.state.sortedBy.name !== sorted_name) {
      const sortedBy: TSortedBy = {
        name: sorted_name,
        direction: 'desc',
      };
      this.setState({
        sortedBy: sortedBy,
      });
    } else {
      const direction = this.state.sortedBy.direction === 'desc' ? 'asc' : 'desc';

      const sortedBy: TSortedBy = {
        ...this.state.sortedBy,
        direction: direction,
      };

      this.setState({ sortedBy: sortedBy });
    }
  };

  btnDelClick = (e: MouseEvent<HTMLButtonElement>) => {
    const item = this.getItem(Number((e.target as HTMLButtonElement).value));
    this.setState({
      showDeleteDialog: true,
      itemDelete: item,
    });
  };

  btnAddClick = (e: MouseEvent<HTMLElement>) => {
    axios
      .post(this.url, { btn_add: '' })
      .then(res => {
        if (res.data.redirect) {
          //window.location.href = res.data['redirect'];
          this.props.history.push(res.data.redirect);
        }
      })
      .catch(err => {
        this.context.setAlerts(this.getErrors(err.response.data));
      });
  };

  btnEditClick = (e: MouseEvent<HTMLButtonElement>) => {
    const item_pk = (e.target as HTMLButtonElement).value;
    //console.log('btnEditClick', item_pk);

    axios
      .post(this.url, {
        btn_edit: '',
        item_pk: item_pk,
        url: window.location.pathname,
      })
      .then(res => {
        if (res.data.redirect) {
          //console.log('btnEditClick.history', this.props);

          //window.location.href = res.data['redirect'];
          this.props.history.push(res.data.redirect);
        }
      })
      .catch(err => {
        //console.log('btnEditClick.catch', err);

        this.context.setAlerts(this.getErrors(err.response.data));
      });
  };

  getItemId = (item: any): number => {
    return item ? item.id : -1;
  };

  itemDelete = (confirm: string) => {
    this.setState({ showDeleteDialog: false });

    if (confirm === 'true') {
      this.setState({ loading: true });
      axios
        .post(this.url, {
          sorted_by: this.state.sortedBy,
          btn_del: '',
          item_pk: this.getItemId(this.state.itemDelete),
          owner: this.props.owner ? this.props.owner : -1,
        })
        .then(res => {
          this.setState({
            items: res.data,
          });
          this.context.setAlerts([
            {
              type: 'success',
              message: `${this.nameOfItem} успешно удален`,
            },
          ]);
        })
        .catch(err => {
          this.context.setAlerts(this.getErrors(err.response.data));
        })
        .finally(() => this.setState({ loading: false }));
    }
  };

  getThCell = (id: string, title: string, index: number) => {
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

  getButtons = (id: string) => {
    return (
      <Row>
        <Button
          value={id}
          variant="primary"
          className="btn-primary tooltip"
          onClick={this.btnEditClick}
        >
          <TooltipContent className="tooltip__content tooltip__content_left">
            Редактирование
          </TooltipContent>
          {'\u27f6'}
        </Button>
        <Button
          value={id}
          variant="danger"
          className="btn-danger btn-danger_del tooltip"
          onClick={this.btnDelClick}
        >
          <TooltipContent className="tooltip__content tooltip__content_left">
            Удаление
          </TooltipContent>
          x
        </Button>
      </Row>
    );
  };

  getAddButton = () => {
    if (this.addButton)
      return (
        <Button
          variant="primary"
          className="btn-primary btn-primary_add tooltip"
          onClick={this.btnAddClick}
        >
          <TooltipContent>Добавление&nbsp;нового&nbsp;автовладельца</TooltipContent>+
        </Button>
      );
    return <></>;
  };

  getDeleteDialog = () => {};

  deleteDialog = () => {
    //if (this.state.showDeleteDialog) return this.getDeleteDialog();
    return this.getDeleteDialog();
  };
  getTable = () => {};

  render() {
    return (
      <div>
        <Alerts />
        {this.deleteDialog()}
        {this.state.loading ? <Loader /> : this.getTable()}
        {this.getAddButton()}
      </div>
    );
  }
}

//export default withRouter(ListOfItems);
