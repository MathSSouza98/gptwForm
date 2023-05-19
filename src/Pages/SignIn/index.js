import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ChevronRightIcon } from '@chakra-ui/icons';
import blobTop from '../../Assets/blobTop.png';
import blobBot from '../../Assets/blobBot.png';
import gptw from '../../Assets/gptw 1.svg';
import email from '../../Assets/Icones-login-email.svg';
import pass from '../../Assets/Icones-login-pass.svg';

export default function SignIn() {
  const { register, watch, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  function isValidEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (isValidEmail(watch('email')) && watch('password').length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [watch('email'), watch('password')]);

  function onSubmit() {
    navigate('/questions');
  }

  return (
    <Flex
      w={'100%'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      background={'white'}
      position={'relative'}
    >
      <Image w={'572px'} src={blobTop} position={'absolute'} top={0} left={0} />
      <Image
        w={'595px'}
        src={blobBot}
        position={'absolute'}
        bottom={0}
        right={0}
      />

      <Flex
        w={'497px'}
        h={'417px'}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        color={'#292B30'}
        mb={'80px'}
      >
        <Image w={'80px'} src={gptw} mb={'40px'} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Text>E-mail</Text>
          <InputGroup>
            <InputLeftElement pointerEvents={'none'}>
              <Image mt={9} src={email} />
            </InputLeftElement>

            <Input
              {...register('email')}
              border={'1px solid #B8CAE8'}
              mt={'10px'}
              mb={'10px'}
              type="text"
              color={'black'}
              placeholder="ivan_campos@mbox.com"
              h={'56px'}
              pl={10}
            />
          </InputGroup>

          <Text>Senha</Text>
          <InputGroup>
            <InputLeftElement pointerEvents={'none'}>
              <Image mt={9} src={pass} />
            </InputLeftElement>

            <Input
              {...register('password')}
              border={'1px solid #B8CAE8'}
              mt={'10px'}
              mb={'10px'}
              type="password"
              placeholder="********"
              h={'56px'}
            />
          </InputGroup>

          <Flex w={'497px'} justifyContent={'space-between'}>
            <Checkbox colorScheme="red" alignItems={'center'}>
              Lembrar senha
            </Checkbox>

            <Link color={'#E60000'}>
              Esqueci minha senha
              <ChevronRightIcon />
            </Link>
          </Flex>

          <Button
            type="submit"
            mt={'20px'}
            w={'497px'}
            h={'56px'}
            bg={'brand.customRed'}
            _hover={'none'}
            color={'white'}
            isDisabled={disabled}
          >
            Fazer login
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
