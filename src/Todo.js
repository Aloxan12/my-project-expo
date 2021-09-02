import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export const Todo = ({todo, onRemove}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>{console.log('Id', todo.id)}}
            onLongPress={onRemove.bind(null, todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
});
