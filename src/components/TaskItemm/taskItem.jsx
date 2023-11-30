import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"
import Captura from './Captura.jpg';
import CapturaDelete from './CapturaDelete.jpg';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (

    <Box
    borderRadius={"20px"}
    alignItems={"center"}
    borderColor={"#E6E6E6"}
    width={{ base: 'sm', lg: 'lg' }}  
      maxW={{ base: 'full', lg: '450px' }} 
    margin={"20px auto 10px"} 
    bg={"white"}
    p={4}
>
<li style={{ 
      textDecoration: completed ? 'line-through' : 'none', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      
    }}>
    <button onClick={handleComplete} style={{display:'flex', fontSize:'20px'}}>
        <img src={Captura} alt="Completar" style={{width: '30px', marginRight: '5px'}}/>{task.name}  
    </button>
      
      
      <button onClick={handleDelete}>
      <img src={CapturaDelete} alt="Finalizar"style={{width: '30px'}} />
      </button>
    </li>
    </Box>
  );
};

export default TaskItem;