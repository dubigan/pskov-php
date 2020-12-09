import React, { Component, Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import { Header } from "./Header";

const Owners = lazy(() => import("./Owners"));
const Cars = lazy(() => import("./Cars"));
const OwnerDetail = lazy(() => import("./OwnerDetail"));
const CarDetail = lazy(() => import("./CarDetail"));
const Dashboard = lazy(() => import("./Dashboard"));

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
                  <Route path="/testforjob/owners" component={Owners} />
                  <Route path="/testforjob/owner" component={OwnerDetail} />
                  <Route path="/testforjob/cars" component={Cars} />
                  <Route path="/testforjob/car" component={CarDetail} />
                  <Route path="/testforjob/dashboard" component={Dashboard} />
                </Switch>
              </div>
            </Fragment>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}
