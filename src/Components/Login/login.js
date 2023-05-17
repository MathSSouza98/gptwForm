import React from "react";
import { 
    Box,
    Button,
    Checkbox,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
} from "@chakra-ui/react";

import {
    ChevronRightIcon,
} from "@chakra-ui/icons"


import gptw from '../../Assets/gptw 1.svg';
import email from '../../Assets/Icones-login-email.svg';
import pass from '../../Assets/Icones-login-pass.svg';

function Login () {
    return (
        <Flex w={'497px'} h={'417px'} direction={'column'} color={'#292B30'} alignItems={'center'}>
            
            <Image w={'80px'} src={gptw} mb={'40px'}/>

            <Box w={'497px'} justifyContent={'flex-start'}>
                <p>E-mail</p>
            </Box>
           
            <InputGroup>
                <InputLeftElement pointerEvents={'none'}>
                    <Image mt={5} src={email}/>
                </InputLeftElement>
                    
                    <Input border={'1px solid #B8CAE8'} mt={'10px'} mb={'10px'} type="text" placeholder="ivan_campos@mbox.com"/>
            </InputGroup>

            <Box w={'497px'} justifyContent={'flex-start'}>
                <p>Senha</p>
            </Box>

            <InputGroup>
                <InputLeftElement pointerEvents={'none'}>
                    <Image mt={5} src={pass}/>
                </InputLeftElement>
                    
                    <Input border={'1px solid #B8CAE8'} mt={'10px'} mb={'10px'} type="password"/>
            </InputGroup>
            
            <Flex w={'497px'} justifyContent={'space-between'}>
                <Checkbox colorScheme="red">
                    Lembrar senha
                </Checkbox>

                <Link color={'#E60000'}>Esqueci minha senha<ChevronRightIcon/></Link>
            </Flex>
            
            <Button mt={'20px'} w={'497px'} h={'56px'} colorScheme="red" color={"white"}>
                Fazer login
            </Button>

       </Flex>
    );
}

export default Login;