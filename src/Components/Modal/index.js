import React from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    Button,
    Flex,
    Box,
    Text,
    
  } from '@chakra-ui/react';

export default function ModalComponent (props) {

    return(
        <Drawer 
            closeOnOverlayClick={false} 
            isOpen={props.isOpen} 
            placement="bottom"
            
        >
            <DrawerOverlay />
            <DrawerContent bg="transparent">
                <DrawerBody bg="transparent">
                    <Box h="768px" w="100%" bg="white">
                        <Flex alignItems={'center'} justifyContent={'space-between'} p="55px 73px 32px 75px">
                            <Box flexDirection={'column'} alignItems={'flex-start'}>
                                <Text color={'brand.customBlack'} fontSize={'24px'} fontWeight={'bold'}>Parabéns! Você foi selecionado.</Text>
                                <Text color={'brand.customBlack'} fontSize={'21px'}>Assista o vídeo abaixo com informações para <b>responder nossa Pesquisa de Clima</b>.</Text>
                            </Box>
                            <Button bg={'brand.customRed'} w={'265px'} h={'40px'} colorScheme="blue" onClick={props.onClose} isDisabled={props.isDisabled} _hover={{bg:'red.500'}} _disabled={{bg:'#292B3050'}} color={'white'}>Avançar</Button>
                        </Flex>
                        <Flex direction={'column'} alignItems={'center'} bg="#000">
                            <iframe width="920" height="514" src="https://www.youtube.com/embed/V71e1AuQhB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems={'center'}>
                            <Text pt={9} fontSize={'21px'} as={'b'} color={'brand.customBlack'}>Para maiores informações e-mail: <span style={{color:'#E60000'}}>atendimento@gptwbrasil.com.br</span> ou pelo chat no site: <a style={{color:'#E60000'}} href="https://gptw.com.br" target="_blank">www.gptw.com.br</a></Text>
                        </Flex>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
)}