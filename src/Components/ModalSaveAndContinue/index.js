import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Text,
  Flex,
  Box,
  Image,
  useDisclosure,
} from '@chakra-ui/react';

import modalImage from '../../Assets/pana.png';
import ModalAlert from '../ModalAlert';

export default function ModalSaveAndContinue(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalAlert isOpen={isOpen} onClose={onClose} />
      <Modal
        size={'3xl'}
        isOpen={props.isOpen}
        onOpen={props.onOpen}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent bg={'transparent'}>
          <ModalBody p={'0'} bg={'white'} borderRadius={'20px'}>
            <Flex
              w={'766px'}
              mt={'113px'}
              alignItems={'center'}
              ml={'40px'}
              mr={'40px'}
            >
              <Box>
                <Text pt={''} fontSize={'20px'} color={'brand.buttonTop'}>
                  Atenção!
                </Text>
                <Text fontSize={'28px'} as={'b'}>
                  Tem certeza de que
                  <br /> deseja Salvar e <br />
                  Continuar depois?
                </Text>
              </Box>
              <Image pl={'130px'} src={modalImage} />
            </Flex>
            <Flex
              pt={'85px'}
              w={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button
                w={'384px'}
                h={'69px'}
                bg={'white'}
                color={'brand.customRed'}
                border={'1px solid #E60000'}
                onClick={props.onClose}
                _hover={'none'}
                borderRadius={'0'}
                borderBottomLeftRadius={'20px'}
              >
                Não
              </Button>
              <Button
                w={'384px'}
                h={'69px'}
                bg={'brand.customRed'}
                color={'white'}
                _hover={'none'}
                borderRadius={'0'}
                borderBottomRightRadius={'20px'}
                onClick={onOpen}
              >
                Sim
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
