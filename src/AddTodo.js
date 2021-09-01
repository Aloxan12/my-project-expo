import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';


export const AddTodo =()=> {
    const onPressHandler =()=>{

    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input} />
            <Button title={'Добавить'} onPress={onPressHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        width: '70%',
        padding: 7,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#26a172',
}});
