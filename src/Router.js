import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import EmployeeList from './components/manager/EmployeeList';
import EmployeeCreate from './components/manager/EmployeeCreate';
import EmployeeEdit from './components/manager/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="LoginPage" component={LoginForm} title="Please Login" />
            </Scene>

            <Scene key="main">
                <Scene
                    initial
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create New Employee"
                />
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
