import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';


export const AddTodo =({onSubmit})=> {
    const [value, setValue] = useState('')

    const onPressHandler =()=>{
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }else {
            Alert.alert('Название делла не может быть пустым')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Введите название дела...'
            />
            <Button title={'Добавить'} onPress={()=>onPressHandler(value)} />
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
