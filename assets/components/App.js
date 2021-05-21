import React, { Component, Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header';

const Owners = lazy(() => import('./Owners'));
const Cars = lazy(() => import('./Cars'));
const OwnerDetail = lazy(() => import('./OwnerDetail'));
const CarDetail = lazy(() => import('./CarDetail'));
const Dashboard = lazy(() => import('./Dashboard'));

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Fragment>
              <Header />
              <div className="container-fluid">
                <Switch>
                  <Route path="/owners" component={Owners} />
                  <Route path="/owner" component={OwnerDetail} />
                  <Route path="/cars" component={Cars} />
                  <Route path="/car" component={CarDetail} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </div>
            </Fragment>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}
