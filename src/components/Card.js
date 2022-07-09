import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Card({ link }) {
    return (
        <Center py={6} mx={5}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        px={3}
                        color={'green.500'}
                        rounded={'full'}>
                        Cards
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>

                        <Text fontSize={'4xl'} fontWeight={800}>
                            MSG BOX
                        </Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <Link to={`${link}`}>
                        <Button
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Open Message Box
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Center>
    );
}