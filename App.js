import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Dashboard from './components/dManager/pages/Dashboard';
import ManageDelivery from './components/dManager/pages/ManageDelivery';
import ManageDelivers from './components/dManager/pages/ManageDelivers';
import ManageReturnItems from './components/dManager/pages/ManageReturnItems';
import AssignDelivers from './components/dManager/pages/AssignDelivers';
import AddDelivers from './components/dManager/pages/AddDelivers';
import ManageCashOnDelivery from './components/dManager/pages/ManageCashOnDelivery';
import ManageSchedule from './components/dManager/pages/ManageSchedule';
import ManagePrioritize from './components/dManager/pages/ManagePrioritize';
import DeliverInfoRoute from './components/dManager/pages/DeliverInfoRoute';
import DeliverInfo from './components/dManager/pages/DeliverInfo';
import DeliveryInfoRoute from './components/dManager/pages/DeliveryInfoRoute';
import DeliveryInfo from './components/dManager/pages/DeliveryInfo';
import CashOnDeliveryInfoRoute from './components/dManager/pages/CashOnDeliveryInfoRoute';
import CashOnDeliveryInfo from './components/dManager/pages/CashOnDeliveryInfo';
//import ManageReports from './components/dManager/pages/ManageReports';

import Login from './components/Login';

import DpDashboard from './components/dPerson/pages/DpDashboard';
import AddReturnedItem from './components/dPerson/pages/AddReturnedItem';
import ViewAvailableDelivery from './components/dPerson/pages/ViewAvailableDelivery';
import ConfirmCashPay from './components/dPerson/pages/ConfirmCashPay';
import ConfirmDelivery from './components/dPerson/pages/ConfirmDelivery';
import AddForm from './components/dPerson/pages/AddForm';
import Maps from './components/dPerson/pages/Maps';
import EditReturn from './components/dPerson/pages/EditReturn';

function App() {
  return (
    <>
    <Router>
      <Switch>
      
          <Route path='/' exact component={Login}/>
          
          <Route path='/dManager/pages/Dashboard'  component={Dashboard}/>
          <Route path='/dManager/pages/ManageDelivery' component={ManageDelivery}/>
          <Route path='/dManager/pages/ManageDelivers' component={ManageDelivers}/>
          <Route path='/dManager/pages/AddDelivers' component={AddDelivers}/>
          <Route path='/dManager/pages/ManageReturnItems' component={ManageReturnItems}/>
          <Route path='/dManager/pages/AssignDelivers' component={AssignDelivers}/>
          <Route path='/dManager/pages/ManageCashOnDelivery' component={ManageCashOnDelivery}/>
          <Route path='/dManager/pages/ManageSchedule' component={ManageSchedule}/>
          <Route path='/dManager/pages/ManagePrioritize' component={ManagePrioritize}/>
          <Route path='/dManager/pages/DeliverInfo' component={DeliverInfo}/>
          <Route path='/DeliverInfoRoute' component={DeliverInfoRoute}/>
          <Route path='/dManager/pages/DeliveryInfo' component={DeliveryInfo}/>
          <Route path='/DeliveryInfoRoute' component={DeliveryInfoRoute}/>
          <Route path='/dManager/pages/CashOnDeliveryInfo' component={CashOnDeliveryInfo}/>
          <Route path='/CashOnDeliveryInfoRoute' component={CashOnDeliveryInfoRoute}/>

          {/*<Route path='/dManager/pages/ManageReports' component={ManageReports}/>*/}

          <Route path='/dPerson/pages/DpDashboard' component={DpDashboard}/>
          <Route path='/dPerson/pages/ViewAvailableDelivery' component={ViewAvailableDelivery}/>  
          <Route path='/dPerson/pages/AddReturnedItem' component={AddReturnedItem}/>
          <Route path='/dPerson/pages/ConfirmCashPay' component={ConfirmCashPay}/>
          <Route path='/dPerson/pages/ConfirmDelivery' component={ConfirmDelivery}/>
          <Route path='/dPerson/pages/AddForm' component={AddForm}/>
          <Route path='/dPerson/pages/EditReturn' component={EditReturn}/>
          <Route path='/dPerson/pages/Maps' component={Maps}/>



      </Switch>
    </Router>
    </>
  );
}

export default App;


