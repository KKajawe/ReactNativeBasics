import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };
  const addGoalInputHandler = () => {
    props.onaddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={false}>
      <View style={styles.header_container}>
        <TextInput
          placeholder="course goals"
          style={styles.header_txtInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.button_container}>
          <View style={styles.button_view}>
            <Button title="ADD" onPress={addGoalInputHandler} />
          </View>
          <View style={styles.button_view}>
            <Button
              title="Cancel"
              color="red"
              style={styles.cancel_button}
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  header_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_txtInput: {
    width: '75%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  button_container: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button_view: {
    width: '40%',
  },
});

export default GoalInput;
