import React, { useEffect, useState } from 'react';
import {
  useDisclosure,
  Flex,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Divider,
} from '@chakra-ui/react';

import ModalComponent from '../../Components/Modal';
import HeaderQuestions from '../../Components/HeaderQuestions';

export function Questions() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    onOpen();
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  }, []);

  return (
    <>
      <ModalComponent isOpen={isOpen} onClose={onClose} isDisabled={disabled} />
      <HeaderQuestions />
      <Flex
        w={'1270px'}
        m={'65px 109px'}
        direction={'column'}
        alignItems={'flex-start'}
      >
        <Text fontSize={'21px'} mt={'65px'} mb={'36px'} as={'b'}>
          <b style={{ fontSize: '16px' }}>01. </b>Os gestores me mantêm
          informado sobre assuntos importantes e sobre mudanças na organização
        </Text>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          w={'full'}
          mb={'87px'}
          pl={'100px'}
        >
          <Flex direction={'column'} justifyContent={'flex-start'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da área:
            </Text>
            <RadioGroup fontSize={'21px'} w={'323px'}>
              <Radio variant="groove" value="1">
                Nunca é verdade
              </Radio>
              <Radio variant="groove" value="2">
                Na maioria das vezes não é verdade
              </Radio>
              <Radio variant="groove" value="3">
                Às vezes é verdade, às vezes não
              </Radio>
              <Radio variant="groove" value="4">
                Na maioria das vezes é verdade
              </Radio>
              <Radio variant="groove" value="5">
                Sempre é verdade
              </Radio>
            </RadioGroup>
          </Flex>

          <Divider
            orientation="vertical"
            border={'2px solid #292B30'}
            h={'187px'}
          />

          <Flex direction={'column'} mr={'250px'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da empresa:
            </Text>
            <RadioGroup fontSize={'21px'}>
              <Stack direction="column">
                <Radio variant="groove" value="1">
                  Nunca é verdade
                </Radio>
                <Radio variant="groove" value="2">
                  Na maioria das vezes não é verdade
                </Radio>
                <Radio variant="groove" value="3">
                  Às vezes é verdade, às vezes não
                </Radio>
                <Radio variant="groove" value="4">
                  Na maioria das vezes é verdade
                </Radio>
                <Radio variant="groove" value="5">
                  Sempre é verdade
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Text fontSize={'21px'} mt={'65px'} mb={'36px'} as={'b'}>
          <b style={{ fontSize: '16px' }}>02. </b>Os gestores me mantêm
          informado sobre assuntos importantes e sobre mudanças na organização
        </Text>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          w={'full'}
          mb={'87px'}
          pl={'100px'}
        >
          <Flex direction={'column'} justifyContent={'flex-start'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da área:
            </Text>
            <RadioGroup fontSize={'21px'} w={'323px'}>
              <Radio variant="groove" value="1">
                Nunca é verdade
              </Radio>
              <Radio variant="groove" value="2">
                Na maioria das vezes não é verdade
              </Radio>
              <Radio variant="groove" value="3">
                Às vezes é verdade, às vezes não
              </Radio>
              <Radio variant="groove" value="4">
                Na maioria das vezes é verdade
              </Radio>
              <Radio variant="groove" value="5">
                Sempre é verdade
              </Radio>
            </RadioGroup>
          </Flex>

          <Divider
            orientation="vertical"
            border={'2px solid #292B30'}
            h={'187px'}
          />

          <Flex direction={'column'} mr={'250px'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da empresa:
            </Text>
            <RadioGroup fontSize={'21px'}>
              <Stack direction="column">
                <Radio variant="groove" value="1">
                  Nunca é verdade
                </Radio>
                <Radio variant="groove" value="2">
                  Na maioria das vezes não é verdade
                </Radio>
                <Radio variant="groove" value="3">
                  Às vezes é verdade, às vezes não
                </Radio>
                <Radio variant="groove" value="4">
                  Na maioria das vezes é verdade
                </Radio>
                <Radio variant="groove" value="5">
                  Sempre é verdade
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Text fontSize={'21px'} mt={'65px'} mb={'36px'} as={'b'}>
          <b style={{ fontSize: '16px' }}>03. </b>Os gestores me mantêm
          informado sobre assuntos importantes e sobre mudanças na organização
        </Text>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          w={'full'}
          mb={'87px'}
          pl={'100px'}
        >
          <Flex direction={'column'} justifyContent={'flex-start'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da área:
            </Text>
            <RadioGroup fontSize={'21px'} w={'323px'}>
              <Radio variant="groove" value="1">
                Nunca é verdade
              </Radio>
              <Radio variant="groove" value="2">
                Na maioria das vezes não é verdade
              </Radio>
              <Radio variant="groove" value="3">
                Às vezes é verdade, às vezes não
              </Radio>
              <Radio variant="groove" value="4">
                Na maioria das vezes é verdade
              </Radio>
              <Radio variant="groove" value="5">
                Sempre é verdade
              </Radio>
            </RadioGroup>
          </Flex>

          <Divider
            orientation="vertical"
            border={'2px solid #292B30'}
            h={'187px'}
          />

          <Flex direction={'column'} mr={'250px'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da empresa:
            </Text>
            <RadioGroup fontSize={'21px'}>
              <Stack direction="column">
                <Radio variant="groove" value="1">
                  Nunca é verdade
                </Radio>
                <Radio variant="groove" value="2">
                  Na maioria das vezes não é verdade
                </Radio>
                <Radio variant="groove" value="3">
                  Às vezes é verdade, às vezes não
                </Radio>
                <Radio variant="groove" value="4">
                  Na maioria das vezes é verdade
                </Radio>
                <Radio variant="groove" value="5">
                  Sempre é verdade
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Text fontSize={'21px'} mt={'65px'} mb={'36px'} as={'b'}>
          <b style={{ fontSize: '16px' }}>04. </b>Os gestores me mantêm
          informado sobre assuntos importantes e sobre mudanças na organização
        </Text>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          w={'full'}
          mb={'87px'}
          pl={'100px'}
        >
          <Flex direction={'column'} justifyContent={'flex-start'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da área:
            </Text>
            <RadioGroup fontSize={'21px'} w={'323px'}>
              <Radio variant="groove" value="1">
                Nunca é verdade
              </Radio>
              <Radio variant="groove" value="2">
                Na maioria das vezes não é verdade
              </Radio>
              <Radio variant="groove" value="3">
                Às vezes é verdade, às vezes não
              </Radio>
              <Radio variant="groove" value="4">
                Na maioria das vezes é verdade
              </Radio>
              <Radio variant="groove" value="5">
                Sempre é verdade
              </Radio>
            </RadioGroup>
          </Flex>

          <Divider
            orientation="vertical"
            border={'2px solid #292B30'}
            h={'187px'}
          />

          <Flex direction={'column'} mr={'250px'}>
            <Text fontSize={'21px'} as={'b'}>
              Visão da empresa:
            </Text>
            <RadioGroup fontSize={'21px'}>
              <Stack direction="column">
                <Radio variant="groove" value="1">
                  Nunca é verdade
                </Radio>
                <Radio variant="groove" value="2">
                  Na maioria das vezes não é verdade
                </Radio>
                <Radio variant="groove" value="3">
                  Às vezes é verdade, às vezes não
                </Radio>
                <Radio variant="groove" value="4">
                  Na maioria das vezes é verdade
                </Radio>
                <Radio variant="groove" value="5">
                  Sempre é verdade
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
