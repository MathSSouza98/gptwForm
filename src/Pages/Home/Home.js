import React from "react";
import { 
    Box,
    Flex,
    Image 
} from "@chakra-ui/react";

import blobTop from '../../Assets/Ellipse 17.svg';
import lineTop from '../../Assets/Ellipse 18.svg';
import blobBot from '../../Assets/Ellipse 16.svg';
import lineBot from '../../Assets/Line 1.svg';

import Login from "../../Components/Login/login";



export default function Home () {
    return (
        <Flex w={'100%'} h={'100vh'} direction={"column"} justifyContent={'space-between'} background={'white'}>
            <Flex justifyContent={'flex-start'}>
                
                <Image w={'488'} h={'382px'} src={blobTop} position={'absolute'} zIndex={1}/>
                <Image w={'334px'} h={'435px'} mt={'41px'} pr={'20px'} src={lineTop} position={'relative'} zIndex={2}/>
            
            </Flex>
            <Box m={'10%'} direction={'column'} alignItems={'center'} position={'absolute'} alignSelf={'center'}>
                <Login/>
            </Box>
            <Flex justifyContent={'flex-end'}>
                
                <Image w={'595px'} h={'436px'} src={blobBot} position={'absolute'} zIndex={1}/>
                <Image w={'303px'} h={'419px'} mt={'16px'} src={lineBot} zIndex={2}/>

            </Flex>
        </Flex>
    );
}
