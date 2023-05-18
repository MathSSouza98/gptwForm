import React, { useEffect, useState } from "react";
import { 
    Box,
    Button,
    Checkbox,
    Flex,
    Image, 
    Input, 
    InputGroup,
    InputLeftElement,
    Link
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ChevronRightIcon } from "@chakra-ui/icons";
import blobTop from '../../Assets/Ellipse 17.svg';
import lineTop from '../../Assets/Ellipse 18.svg';
import blobBot from '../../Assets/Ellipse 16.svg';
import lineBot from '../../Assets/Line 1.svg';
import gptw from '../../Assets/gptw 1.svg';
import email from '../../Assets/Icones-login-email.svg';
import pass from '../../Assets/Icones-login-pass.svg'

export default function SignIn () {
    const {register, watch, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    
    function isValidEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
      
        if (regexEmail.test(email)) {
          return true; // O email é válido
        } else {
          return false; // O email é inválido
        }
      }

      useEffect(() => {
        if(isValidEmail(watch("email")) && watch("password").length >= 8){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
      },[watch("email"), watch("password")])
    
    function onSubmit() {
        navigate('/questions')
    }

    return (
       
        <Flex w={'100%'} h={'100vh'} direction={"column"} justifyContent={'space-between'} background={'white'}>
            <Flex justifyContent={'flex-start'}>
                
                <Image w={'488'} h={'382px'} src={blobTop} position={'absolute'} zIndex={1}/>
                <Image w={'334px'} h={'435px'} mt={'41px'} pr={'20px'} src={lineTop} position={'relative'} zIndex={2}/>
            
            </Flex>
            <Box m={'10%'} direction={'column'} alignItems={'center'} position={'absolute'} alignSelf={'center'}>
                
            <Flex w={'497px'} h={'417px'} direction={'column'} color={'#292B30'} alignItems={'center'}>
            
            <Image w={'80px'} src={gptw} mb={'40px'}/>

            <Box w={'497px'} justifyContent={'flex-start'}>
                <p>E-mail</p>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <InputLeftElement pointerEvents={'none'}>
                        <Image mt={5} src={email}/>
                    </InputLeftElement>
                        
                        <Input {...register("email")} border={'1px solid #B8CAE8'} mt={'10px'} mb={'10px'} type="text" color={"black"} placeholder="ivan_campos@mbox.com"/>
                </InputGroup>

                <Box w={'497px'} justifyContent={'flex-start'}>
                    <p>Senha</p>
                </Box>

                <InputGroup>
                    <InputLeftElement pointerEvents={'none'}>
                        <Image mt={5} src={pass}/>
                    </InputLeftElement>
                        
                        <Input {...register("password")} border={'1px solid #B8CAE8'} mt={'10px'} mb={'10px'} type="password" />
                </InputGroup>
            
            
                <Flex w={'497px'} justifyContent={'space-between'}>
                    <Checkbox colorScheme="red" alignItems={'center'}>
                        Lembrar senha
                    </Checkbox>

                    <Link color={'#E60000'}>Esqueci minha senha<ChevronRightIcon/></Link>
                </Flex>
                
                <Button type="submit" mt={'20px'} w={'497px'} h={'56px'} bg={'brand.customRed'} _hover={'none'} color={"white"} isDisabled={disabled}>
                    Fazer login
                </Button>

            </form>

            </Flex>

            </Box>

            <Flex justifyContent={'flex-end'}>
                
                <Image w={'595px'} h={'436px'} src={blobBot} position={'absolute'} zIndex={1}/>
                <Image w={'303px'} h={'418px'} mt={'18px'} src={lineBot} zIndex={2}/>

            </Flex>
        </Flex>
        
    );
}
