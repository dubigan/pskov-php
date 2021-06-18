import React, { Component, Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { AlertProvider } from './lib/alert/AlertContext';
import OneSignal, { useOneSignalSetup } from 'react-onesignal';

const Owners = lazy(() => import('./Owners'));
const Cars = lazy(() => import('./Cars'));
const OwnerDetail = lazy(() => import('./OwnerDetail'));
const CarDetail = lazy(() => import('./CarDetail'));
const Dashboard = lazy(() => import('./Dashboard'));

const App = () => {
  OneSignal.initialize('4c631ec8-c487-486c-a57f-032561cf353e', {});
  console.log('OneSignal try init');
  useOneSignalSetup(() => {
    console.log('OneSignal initialized');
    // OneSignal.setEmail(user.Email);
    // OneSignal.setExternalUserId(user.id);
  });
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Fragment>
            <Header />
            <div className="container-fluid">
              <AlertProvider>
                <Switch>
                  <Route path="/owners" component={Owners} />
                  <Route path="/owner" component={OwnerDetail} />
                  <Route path="/cars" component={Cars} />
                  <Route path="/car" component={CarDetail} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </AlertProvider>
            </div>
          </Fragment>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
