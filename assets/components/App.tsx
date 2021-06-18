import React, { Component, Fragment, Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { AlertProvider } from './lib/alert/AlertContext';
// import OneSignal, { useOneSignalSetup } from 'react-onesignal';

const Owners = lazy(() => import('./Owners'));
const Cars = lazy(() => import('./Cars'));
const OwnerDetail = lazy(() => import('./OwnerDetail'));
const CarDetail = lazy(() => import('./CarDetail'));
const Dashboard = lazy(() => import('./Dashboard'));

const App = () => {
  const [userId, setUserId] = useState('');
  const oneSignal = (window as any).OneSignal || [];
  console.log('App.OneSignal.oneSignal', oneSignal);
  console.log('OneSignal try init');
  useEffect(() => {
    const id = oneSignal.getUserId();
    console.log('App.OneSignal.userId', id);
  });
  // useOneSignalSetup(() => {
  //   console.log('OneSignal initialized');
  //   // const userId = await OneSignal.getUserId();
  //   console.log('App.OneSignal.userId', userId);
  //   // OneSignal.setEmail(user.Email);
  //   // OneSignal.setExternalUserId(user.id);
  // });
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
