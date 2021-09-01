import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";


export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo=(title)=>{
        const newTodo = {
            id: new Date().toString(),
            title: title
        }
        setTodos(prev => [...prev, newTodo])
    }

    return (
        <View>
            <Navbar title={'Todos App'}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <View>
                    {todos.map(t => <Todo todo={t} key={t.id} />)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});
