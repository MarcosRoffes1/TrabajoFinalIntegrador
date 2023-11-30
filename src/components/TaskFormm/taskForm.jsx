import React, { useState } from 'react';
import { Box, Flex, Input, Button, InputRightElement, InputGroup, useToast } from '@chakra-ui/react';

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            addTask({ id: Date.now(), name: newTask, completed: false });
            setNewTask('');
        }
    };

    const toast = useToast()

    return (
        <form onSubmit={handleSubmit}>
            <Flex mt="5vh" mb="3vh" align="center" justify="center" direction={['column', 'row']}>
                <Box>
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder='Enter your Task'
                            borderRadius={"15px"}
                            borderColor={"#E6E6E6"}
                            width={{ base: 'sm', lg: 'lg' }}
                            maxW={{ base: 'full', lg: 'container.lg' }}
                            value={newTask}
                            onChange={handleChange}
                            p={7}
                        />
                        <InputRightElement width='4rem'>
                            <Button
                                p={"5px"}
                                type='submit'
                                h='1.50rem'
                                size='s'
                                bg={"-moz-initial"}
                                border={"2px"}
                                borderColor={"#E6E6E6"}
                                color={"#E6E6E6"}
                                _hover={{ bg: "#E6E6E6" }}
                                mt={'20px'}
                                onClick={() =>
                                    toast({
                                        title: 'Tarea Creada',
                                        description: "Has creado una tarea",
                                        status: 'success',
                                        duration: 1500,
                                        isClosable: true,
                                    })}

                            >
                                +
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Flex>

        </form>
    );
};

export default TaskForm;