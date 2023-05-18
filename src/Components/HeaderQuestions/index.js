import { Button, CircularProgress, CircularProgressLabel, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function HeaderQuestions () {
    return(
      <Flex 
        justifyContent={'space-between'}
        alignItems={'center'}
        h={'162px'}
      >
        <Text
            pl={'80px'}
            fontSize={'42px'}
            as={'b'}
        >
            Company Ltda.
        </Text>

        <Flex 
          direction={'column'}
          alignItems={'center'}
        >
          <CircularProgress 
          color="brand.buttonBot" 
          value={100} 
          size={'90px'} 
          >
            <CircularProgressLabel
              fontSize={'19px'}
              as="b"
              textAlign={"center"}
            >
              10/83
            </CircularProgressLabel>
          </CircularProgress>
          <Text
            mt={'9px'}
            fontSize={'17px'}
            as={'b'}
          >
            Respondidas
          </Text>
        </Flex>
        <Flex
            direction={'column'}
            justifyItems={'space-between'}
            pr={'85px'}
        >
            <Button 
              color={'white'}
              mb={'7px'} w={'232px'}
              h={'35px'}
              bg="brand.buttonTop"
              _hover={{
                bg:'white', color:'brand.buttonTop', border:'1px solid #FF6700'
              }}
            >
              Voltar
            </Button>
            <Button 
              color={'white'} 
              w={'232px'} 
              h={'35px'} 
              bg="brand.buttonMid"
              _hover={{
                bg:'white', color:'brand.buttonMid', border:'1px solid #174BD6'
              }}
            >
              Salvar e Continuar depois
            </Button>
            <Button 
              color={'white'} 
              mt={'7px'} w={'232px'} 
              h={'35px'} 
              bg="brand.buttonBot"
              _hover={{
                bg:'white', color:'brand.buttonBot', border:'1px solid #40BF91'
              }}
              >
                Avançar
              </Button>
        </Flex>
      </Flex>
    );
}