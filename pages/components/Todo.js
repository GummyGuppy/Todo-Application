import React from 'react'
import { useState, useRef } from 'react'
import {db} from '../../public/init-firebase'
import { Icon } from '@iconify/react';


//chakra ui imports
import {Input, Button, Flex, Alert, Heading, Box, Center, CloseButton, Spacer} from '@chakra-ui/react'

export default function Todo() {

    const [todo, setTodo] =  useState()  
    const [flag, setFlag] = useState(true)

    var myString = 'Todo'
    

    //retrive data from firestore

    const getData = () => {
        db.collection('Todo').onSnapshot(function (query) {
            setTodo(
                query.docs.map((doc) => ({
                    id: doc.id
                }))
            )
        })
    }




    // function toggleDataIDButton() {
    //     if(flag) {
    //         getData()
    //         setFlag(false)          
    //     }
    //     else {
    //         setTodo([])
    //         setFlag(true)
    //     }
    // }
        

    //{todo.map((td) => (<Alert maxWidth='500px' status='warning'>ID: {td.id} ~~~ {td.data().Task} <Spacer/><CloseButton/></Alert>
   // ))}

    return (
        <>     
       
        
       
        <Flex direction='column' align='center' w='100vw' h='80vh'
        bg='white'>

            <Icon icon="vscode-icons:file-type-firebase" width='150px' height='150px'/>

            <Heading mt='20px' bg='#CAEBF2'>Firestore CRUD Operations Tool</Heading>


            <Input mt='20px' placeholder='Create new Todo' w='300px' bg='#CAEBF2' color='white'/>
            <Input  mt='20px' type='file' variant='outline' w='300px' paddingTop='1' 
            bg='#CAEBF2' color='FF3B3F'
            />
            <Button w='110px' mt='20px' color='#FF3B3F' variant='outline' bg='#CAEBF2'>CREATE</Button>
            
           
           {todo && todo.map}
                
            
            <Button onClick={getData} w='110px' mt='10px' color='#FF3B3F' 
            bg='#CAEBF2' variant='outline'>READ</Button>
            
            
            <Button w='110px' mt='10px' color='#FF3B3F' variant='outline' bg='#CAEBF2'> UPDATE</Button>
            <Button w='110px' mt='10px' color='#FF3B3F' variant='outline' bg='#CAEBF2'>DELETE</Button>
        </Flex>
      
        <Flex direction='row' h='10vh' justify='center' mt='40px'>
        <Icon icon="openmoji:linkedin" height='75px' width='75px'/>
        <Icon icon="line-md:github-twotone" height='75px' width='75px' />
        </Flex>
        


        
        </>
    )
}