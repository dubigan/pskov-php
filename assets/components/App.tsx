import React, { Component, Fragment, Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { AlertProvider } from './lib/alert/AlertContext';
// import OneSignal, { useOneSignalSetup } from 'react-onesignal';

const Owners = lazy(() => import('./List/Owners'));
const Cars = lazy(() => import('./List/Cars'));
const OwnerDetail = lazy(() => import('./Detail/OwnerDetail'));
const CarDetail = lazy(() => import('./Detail/CarDetail'));
const Dashboard = lazy(() => import('./Dashboard'));

const App = () => {
  // const oneSignal = (window as any).OneSignal || [];
  // console.log('App.OneSignal.oneSignal', oneSignal);
  // useEffect(() => {
  //   oneSignal.push(function () {
  //     oneSignal.init({
  //       appId: '4c631ec8-c487-486c-a57f-032561cf353e',
  //       notifyButton: {
  //         enable: true,
  //       },
  //       allowLocalhostAsSecureOrigin: true,
  //     });
  //   });
  //   oneSignal.push(() => {
  //     oneSignal.showNativePrompt();
  //   });
  //   oneSignal.push(() => {
  //     oneSignal.on('subscriptionChange', (isSubscribed: any) => {
  //       console.log('subscription state', isSubscribed);
  //       oneSignal.push(() => {
  //         oneSignal.getUserId((userId: any) => {
  //           console.log('userId', userId);
  //         });
  //       });
  //     });
  //   });
  // }, []);

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
