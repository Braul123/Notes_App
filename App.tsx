/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// Funcion principal
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const colorText = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  const [task, setTask] = useState([
    {
      status: false,
      name: 'Primera tarea por completar',
      date: '2021-10-10'
    },
    {
      status: false,
      name: 'Segunda tarea por completar',
      date: '2021-10-10'
    },
    {
      status: false,
      name: 'Tercera tarea por completar',
      date: '2021-10-10'
    },
  ]);

  return (
    <SafeAreaView style={[backgroundStyle, styles.content]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[backgroundStyle, styles.viewInt]}>
            <Text style={[styles.title, colorText]}>Tus tareas</Text>
        </View>

        {/* Se crea una seccion para iterar las lateras que hay actualmente */}
        <View style={styles.listTask}>
          {/* La etiqueta fragment se utiliza para poder retornar mas de un elemento*/}
          <>
            {
              // Se introduce codigo typescript para iterar las tareas luego se retorna unasección
              task.map((item, index) => {
                return (
                 <FormatTask taskRecibe={item} />
                )
              })
            }
          </>

        </View>
      </ScrollView>
    </SafeAreaView>
  );


}

  interface Task {
    status: boolean,
    name: string,
    date: string
  }


  export function FormatTask( {taskRecibe} : {taskRecibe: Task}) {
      return (
        <View style={styles.listTask}>
          <Text>{taskRecibe.name}</Text>
        </View>
      )
  }

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  viewInt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTask: {
    marginTop: 20,
    paddingHorizontal: 14,
  },
  textGeneral: {
    fontSize: 15,
  }
});

export default App;
