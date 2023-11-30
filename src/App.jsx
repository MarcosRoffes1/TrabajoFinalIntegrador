import * as React from 'react';
import { useState, useEffect } from 'react';

import { useToast, Box, Flex, Input, Button, InputRightElement, InputGroup, Text, Image, ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header/header';

import TaskForm from './components/TaskFormm/taskForm';
import TaskHistory from './components/TaskHistoryy/taskHistory';
import history from './history.jpg'
import lista from './lista.jpg'
import TaskList from './components/TaskListt/taskList';



function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksh, setTasksh] = useState(initialTasks);

  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setTasksh([...tasksh, newTask]);
    setIsCreatingTask(true);
    setShowHistory(false);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const startCreatingTask = () => {
    setIsCreatingTask(true);
    setShowHistory(false);
  };

  const showTaskHistory = () => {
    setShowHistory(true);
    setIsCreatingTask(false);
  };

  return (
    <ChakraProvider>
      <Header/>




      <Box hideBelow="md" pos={"absolute"} ml={"150px"} mt={"100px"}>
        <button onClick={startCreatingTask}>
          <Flex mb={"20px"} w="120px" borderLeft='5px solid transparent' _hover={{ borderLeft: "5px solid #00B499", cursor: "pointer" }}>
            <Image w="100%" h="40px" mt={"25px"} objectFit="contain" src={lista} alt='' />
            <Text mt="20px" ml="6px" style={{ fontSize: "30px" }}>Tasks</Text>
          </Flex>
        </button>

        <Box h="10px" />

        <button onClick={showTaskHistory} mb={"0px"}>
          <Flex w="120px" borderLeft='5px solid transparent'mb={"0px"}  _hover={{ borderLeft: "5px solid #00B499", cursor: "pointer" }}>
            <Image src={history} alt=''mb={"0px"} w="40px" h="90px" objectFit="contain" />
            <Text mt="20px"  ml="6px" mb={"0px"} style={{ fontSize: "30px" }}>History</Text>
          </Flex>
        </button>
      </Box>

      <Flex
        mt="5vh"
        mb="3vh"
        align="center"
        justify="center"
        direction={['column', 'row']}
      >
        <Box>
          {(isCreatingTask || showHistory) && <TaskForm addTask={addTask} />}
          <Box hideFrom="md" display="flex" mt="15px"  >

            <button onClick={startCreatingTask}>
              <Flex w="90px" borderBottom='4px solid transparent' _hover={{ borderBottom: "4px solid #00B499", cursor: "pointer" }}>

                <Image m="2px" src={lista} alt='' />
                <Text mt="4px" ml="6px">Tasks</Text>
              </Flex>

            </button>

            <button onClick={showTaskHistory}>
              <Flex ml="50px" w="100px" borderBottom='4px solid transparent' _hover={{ borderBottom: "4px solid #00B499", cursor: "pointer" }}>

                <img paddingLeft="10px" src={history} alt='' />
                <Text ml="8px" mt="2px" >History</Text>
              </Flex>

            </button>
          </Box>


        </Box>

      </Flex>



      {showHistory && <TaskHistory history={tasksh} onClose={() => setShowHistory(false)} />}


      {isCreatingTask && !showHistory && <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />}
    </ChakraProvider>
  );
}

export default App;