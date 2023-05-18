import React, { useEffect, useState } from "react";
import { 
    useDisclosure, 
    Flex, 
    Box,
    Text,
    RadioGroup,
    Radio,
} from "@chakra-ui/react";

import ModalComponent from "../../Components/Modal";
import HeaderQuestions from "../../Components/HeaderQuestions";
import { Form } from "react-router-dom";



export function Questions () {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [disabled, setDisabled] = useState(true);
    
    useEffect(() => {
        onOpen()
        setTimeout(() => {
            setDisabled(false)
        }, 30000)
    },[])

    return (
        <>
        <ModalComponent 
            isOpen={isOpen}
            onClose={onClose}
            isDisabled={disabled}
        />
        <HeaderQuestions />
        <Flex
            width={'1270px'}
            mr={'85px'}
            ml={'85px'}
            direction={'column'}
            alignItems={'flex-start'}
        >
            <Text
                fontSize={'21px'}
                ml={'169px'}
                mt={'65px'}
                as={'b'}
            >
                <b style={{fontSize:'16px'}}>01. </b>Os gestores me mantêm informado sobre assuntos importantes e sobre mudanças na organização</Text>
            <Flex 
                
                justifyContent={'space-between'} 
                alignItems={'center'}
                ml={'300px'}
                mr={'301px'}
                mt={'35px'}
                >
                <Flex 
                    direction={'column'}
                    justifyContent={'flex-start'}
                    border='1px solid red'
                >
                    <Text 
                        fontSize={'21px'}
                        as={'b'}
                        
                    >
                        Visão da área:
                    </Text>
                    <RadioGroup fontSize={'21px'}>
                            <Radio>
                                Nunca é verdade
                            </Radio>
                            <Radio>
                                Na maioria das vezes não é verdade
                            </Radio>
                            <Radio>
                                Às vezes é verdade, às vezes não
                            </Radio>
                            <Radio>
                                Na maioria das vezes é verdade
                            </Radio>
                            <Radio>
                                Sempre é verdade
                            </Radio>
                        </RadioGroup>
                </Flex>

                <Flex
                    direction={'column'}
                >
                    <Text 
                        fontSize={'21px'}
                        as={'b'}
                    >
                        Visão da empresa:
                    </Text>
                    <RadioGroup fontSize={'21px'}>
                        <Radio>
                            Nunca é verdade
                        </Radio>
                        <Radio>
                            Na maioria das vezes não é verdade
                        </Radio>
                        <Radio>
                            Às vezes é verdade, às vezes não
                        </Radio>
                        <Radio>
                            Na maioria das vezes é verdade
                        </Radio>
                        <Radio>
                            Sempre é verdade
                        </Radio>
                    </RadioGroup>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}