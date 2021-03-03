import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isADDMode, setisADDMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    if (goalTitle) {
      setCourseGoals((currentGoals) => [
        ...courseGoals,
        {id: Math.random().toString(), value: goalTitle},
      ]);
      setisADDMode(false);
    }
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelHandler = () => {
    setisADDMode(false);
  };
  return (
    <View style={styles.container}>
      <Button title="ADD new Goal" onPress={() => setisADDMode(true)} />
      <GoalInput
        visible={isADDMode}
        onaddGoal={addGoalHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
        style={styles.list_container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
