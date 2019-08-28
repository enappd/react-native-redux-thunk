/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from './actions/pageList';

class App extends Component {

  incrementCount() {
    let { actions } = this.props;
    actions.getPageList();
  }
  render() {
    const { pageList } = this.props;
    console.log(pageList);
    return (
      <View styles={styles.container}>
        <Button
          title="Get Employee"
          onPress={() => this.incrementCount()}
        />
        {pageList.map((employee) => (
          <View style={styles.employeeWrapper} key={employee.id}>
            <Text style={styles.textCenter}>Employee_id : {employee.id}</Text>
            <Text style={styles.textCenter}>Employee Name : {employee.employee_name}</Text>
            <Text style={styles.textCenter}>Employee Salary : {employee.employee_salary}</Text>
            <Text style={styles.textCenter}>Employee Age : {employee.employee_age}</Text>
          </View>
        ))}


      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  employeeWrapper: {
    padding: 10,
    borderBottomWidth: 1

  }
});

const mapStateToProps = state => ({
  pageList: state.pageList.pageList,
});

const ActionCreators = Object.assign(
  {},
  pageActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
