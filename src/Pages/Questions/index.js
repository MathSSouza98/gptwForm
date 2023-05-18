import React, { useEffect, useState } from "react";

import ModalComponent from "../../Components/Modal";
import { useDisclosure } from "@chakra-ui/react";



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
        <p>asdasdasasdaasd</p>
        </>
    )
}