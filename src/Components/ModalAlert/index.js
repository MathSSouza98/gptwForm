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

import error from '../../Assets/Error.svg';
import { useNavigate } from 'react-router-dom';

export default function ModalAlert(props) {
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
            <Image src={error} mb={'35px'} mt={'49px'} />

            <Text
              textAlign={'center'}
              mx={'50px'}
              fontSize={'24px'}
              as={'b'}
              mb={'32px'}
            >
              Fique atento ao prazo para a conclusão de sua pesquisa.
            </Text>
            <Button
              w={'577px'}
              h={'69px'}
              bg={'brand.customRed'}
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
