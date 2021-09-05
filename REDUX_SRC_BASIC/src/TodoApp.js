import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddToDo from './containers/AddToDo';
import VisibleTodos from './containers/VisibleTodos';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            visibilityFilter: "SHOW_ALL_TODOS",
        };
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text> ALOK CREATED TodoApp </Text>
                <AddToDo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});


export default TodoApp;
