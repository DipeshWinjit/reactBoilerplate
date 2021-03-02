import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../components/admin/dashboard/dashboard';


class Admin extends Component {
    render() {
        return (
            <div id="sidebar-toggle">
               {/* Parent component will come here */}
                <div className="routing-content-wrap pd-b30">
                    <div className="routing-container">
                        {/* Children routes will come here */}
                        <Switch>
                            <Route path="/admin/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>

        )
    }
}

export default Admin;