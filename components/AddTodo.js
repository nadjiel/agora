import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function AddTodo({ submitHandler }) {
  const [ text, setText ] = useState('');

  const changeHandler = val => setText(val);

  return (
    <View>
      <TextInput
        style={ styles.input }
        placeholder="New todo..."
        onChangeText={ changeHandler }
      />
      <Button
        onPress={ () => submitHandler(text) }
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
})

export default AddTodo;