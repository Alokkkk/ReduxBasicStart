import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'

const TodoList = ({ todos,toggleTodo }) => {
    return (
        <View style={{
            padding: 20
        }}>
        {console.log("CHECK VELUE OF TODO : ",todos)}
         {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
        </View>
    )
}

export default TodoList;
