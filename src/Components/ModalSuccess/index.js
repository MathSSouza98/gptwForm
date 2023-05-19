import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react';

import success from '../../Assets/success.svg';
import { useNavigate } from 'react-router-dom';

export default function ModalSuccess(props) {
  const navigate = useNavigate();
  return (
    <Modal
      size={'xl'}
      isOpen={props.isOpen}
      onOpen={props.onOpen}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent bg={'transparent'}>
        <ModalBody p={'0'} bg={'white'} borderRadius={'20px'}>
          <Flex alignItems={'center'} direction={'column'}>
            <Image src={success} mb={'35px'} mt={'49px'} />

            <Text
              textAlign={'center'}
              mx={'50px'}
              fontSize={'24px'}
              as={'b'}
              mb={'32px'}
            >
              Parabéns! <br />
              Você finalizou sua pesquisa.
            </Text>
            <Button
              w={'577px'}
              h={'69px'}
              bg={'brand.buttonBot'}
              color={'white'}
              _hover={'none'}
              borderRadius={'0'}
              borderBottomRadius={'20px'}
              onClick={() => navigate('/')}
            >
              Fechar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
