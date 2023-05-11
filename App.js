import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [ todos, setTodos ] = useState([
    { text: "buy coffee", key: '1' },
    { text: "create an app", key: '2' },
    { text: "play on the switch", key: '3' }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => (
      prevTodos.filter(todo => todo.key != key)
    ));
  }

  const submitHandler = text => {
    if(text.length <= 3) {
      return Alert.alert(
        "OOPS!",
        "Todos must be over 3 chars long",
        [
          {
            text: "Understood",
            onPress: () => console.log("Alert closed")
          }
        ]
      );
    }

    setTodos(prevTodos => [
      { text, key: Math.random().toString() },
      ...prevTodos
    ]);
  }

  return (
    <TouchableWithoutFeedback
      onPress={ () => {
        Keyboard.dismiss();
        console.log("Keyboard dismissed");
      } }
    >
      <View style={styles.container}>
        <Header />

        <View style={ styles.content }>
          <AddTodo
            submitHandler={ submitHandler }
          />

          <View style={ styles.list }>
            <FlatList
              data={ todos }
              renderItem={ ({ item }) => (
                <TodoItem
                  item={ item }
                  pressHandler={ pressHandler }
                />
              ) }
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
