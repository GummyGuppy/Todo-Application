import { Flex, Center, Input, Heading, Switch, Button, FormControl } from '@chakra-ui/react'
import React from 'react'
import { useState, useRef } from 'react'
import firebase from 'firebase/app'

import {db} from '../../public/init-firebase'




export default function Todo() {

    const [todo, setTodo] =  useState()
    
    const myArray = []


    const handleClick = (e) => {
        e.preventDefault()

        //add to db
        db.collection("Todos").add({
            inprogress: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todo
        })

        setTodo('')
    }




    return (
        <>

        <Flex align='center' justify='center' h='100vh' >
            
            <Center w='400px' h='400px' bg='' flexDirection='column' borderWidth='5px'>
   
                    <Heading mt={5}>Enter a todo</Heading>
                    
                    <Input paddingLeft={4} paddingRight={4} mt={5} w='75%' 
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    />                
                    <Switch mt='30px'>Important</Switch>
                    
                    <Button mt={10} colorScheme='blue' onClick={handleClick}>Submit</Button>

            </Center>
            <Center w='400px' h='400px' ml={20} flexDirection='column' borderWidth='5px'>
            

            </Center>
        </Flex>
        


        </>
    )
}
