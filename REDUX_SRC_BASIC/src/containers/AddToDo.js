import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';


export class AddToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"",
            visibilityFilter:"SHOW_ALL_TODOS",
        };
      };
      addTodo = (text) => {
          // Update a redux store
        this.props.dispatch(addTodo(text));
        this.setState({ text:"" });
      };
    
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
            }}>
                <TextInput
                    placeholder={"Eg. Create a new video"}
                    style={{
                        borderWidth: 1,
                        borderColor: "#f2f2e1",
                        backgroundColor: "#ff00ff00",
                        height: 50,
                        flex: 1,
                        padding: 5,
                    }}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={{
                        height: 50,
                        backgroundColor: "#ff00ff00",
                        borderRadius:25,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                        elevation:1,
                    }}>
                    <Text style={{
                        fontSize:20,
                        color:"black",
                    }}>{"+"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(AddToDo);
