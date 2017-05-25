import _ from 'lodash';
import React, { Component } from 'react';
import {
    ListView,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { employeesFetch } from '../../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ directory }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(directory);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const directory = _.map(state.directory, (val, uid) => {
        return { ...val, uid }; // { shift: 'Monday', name: 'S', id: '12313'}
    });
    return { directory };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
