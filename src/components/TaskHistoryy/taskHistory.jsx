import histori from './histori.jpg';
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const TaskHistory = ({ history}) => {
    return (
        <Flex align={"center"} justify="center" direction={['column', 'row']}>
            <Box bg="#E6E6E6" width={{ base: 'sm', lg: 'lg' }}
                maxW={{ base: 'full', lg: 'container.lg' }} borderRadius={"15px"}>

                <ul style={{ listStyleType: 'none', padding: '20px' }}>
                    {history.map((task, index) => (
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

                                display: 'flex',
                                
                                alignItems: 'center',
                                fontSize: '20px'

                            }} key={index}>
                                <button style={{ display: 'flex', fontSize: '20px' }}>
                                    <img src={histori} alt="Completar" style={{ width: '30px', marginRight: '5px' }} />
                                </button>{task.name}</li>
                        </Box>

                    ))}
                </ul>
            </Box>
        </Flex>
    );
};

export default TaskHistory;
