import React from 'react';
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import ModalSaveAndContinue from '../ModalSaveAndContinue';
import ModalSuccess from '../ModalSuccess';

export default function HeaderQuestions() {
  const {
    isOpen: isOpenSave,
    onOpen: onOpenSave,
    onClose: onCloseSave,
  } = useDisclosure();
  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess,
  } = useDisclosure();

  return (
    <Flex
      w={'100%'}
      h={'162px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      position={'sticky'}
      top={'0'}
      left={'0'}
      bg={'white'}
      paddingX={'80px'}
      zIndex={99}
    >
      <ModalSaveAndContinue isOpen={isOpenSave} onClose={onCloseSave} />
      <ModalSuccess isOpen={isOpenSuccess} onClose={onCloseSuccess} />

      <Text fontSize={'42px'} as={'b'}>
        Company Ltda.
      </Text>

      <Flex direction={'column'} alignItems={'center'}>
        <CircularProgress
          mr={'140px'}
          color="brand.buttonBot"
          value={10}
          size={'90px'}
        >
          <CircularProgressLabel fontSize={'19px'} as="b" textAlign={'center'}>
            10/83
          </CircularProgressLabel>
        </CircularProgress>
        <Text mr={'140px'} mt={'9px'} fontSize={'17px'} as={'b'}>
          Respondidas
        </Text>
      </Flex>
      <Flex direction={'column'} justifyItems={'space-between'}>
        <Button
          color={'white'}
          mb={'7px'}
          w={'232px'}
          h={'35px'}
          bg="brand.buttonTop"
          borderRadius={'9px'}
          _hover={{
            bg: 'white',
            color: 'brand.buttonTop',
            border: '1px solid #FF6700',
          }}
        >
          Voltar
        </Button>
        <Button
          color={'white'}
          w={'232px'}
          h={'35px'}
          bg="brand.buttonMid"
          borderRadius={'9px'}
          _hover={{
            bg: 'white',
            color: 'brand.buttonMid',
            border: '1px solid #174BD6',
          }}
          onClick={onOpenSave}
        >
          Salvar e Continuar depois
        </Button>
        <Button
          color={'white'}
          mt={'7px'}
          w={'232px'}
          h={'35px'}
          bg="brand.buttonBot"
          borderRadius={'9px'}
          _hover={{
            bg: 'white',
            color: 'brand.buttonBot',
            border: '1px solid #40BF91',
          }}
          onClick={onOpenSuccess}
        >
          Avançar
        </Button>
      </Flex>
    </Flex>
  );
}
