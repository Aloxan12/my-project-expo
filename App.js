import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";


export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        const newTodo = {
            id: new Date().toString(),
            title: title
        }
        setTodos(prev => [...prev, newTodo])
    }
    const removeTodo =id=>{
        setTodos(prev => prev.filter(t => t.id !== id))
    }

    return (
        <View>
            <Navbar title={'Todos App'}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>

                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={todos}
                    renderItem={({item})=> <Todo todo={item} onRemove={removeTodo} />} />
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
