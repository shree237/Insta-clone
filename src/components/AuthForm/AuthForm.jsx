import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AuthForm = () => {

  const [isLogin, setLogin] = useState(true)
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email:'',
    password:'',
    confirmpassword:''
  })


  const handleAuth = () =>{

    if(!inputs.email ||  !inputs.password){
      alert("Please fill all the fields")
      return;
    }
    navigate('/')
  }


  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
    <Image src='/logo.png' h={24} cursor={"pointer"} alt="Instagram" />

    <Input placeholder='Email' fontSize={14} type="email" value={inputs.email} onChange={(e)=> setInputs({...inputs,email:e.target.value})}   />
    <Input placeholder='Password' fontSize={14} type="password" value={inputs.password} onChange={(e)=> setInputs({...inputs,password:e.target.value})}   />

    {!isLogin ? <Input placeholder="Confirm Password" fontSize={14} type="password" value={inputs.confirmpassword} onChange={(e)=> setInputs({...inputs,confirmpassword:e.target.value})} /> : null}

    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
      {isLogin ?  'Log In' : 'Sign Up'}
    </Button>
    
    {/* --------------- OR TEXT  ----------------------- */}

    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
      <Box flex={2} h={"1px"} bg={"gray.400"} />
      <Text mx={1} color={"white"}>OR</Text>
      <Box flex={2} h={"1px"} bg={"gray.400"} />

    </Flex>


    <Flex>
      <Image src="/google.png" w={5} alt="Google" />
      <Text mx={2} color={"blue.500"}>
        Log in with Google
      </Text>
    </Flex>
    </VStack>
    </Box>

{/* Box for sign up or sign in */}

    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <Flex alignItems={"center"} justifyContent={"center"}>

        <Box mx={2} fontSize={14}>
          {isLogin ? "Dont Have an Account ?" : "Already have an Account"}
        </Box>
        <Box onClick={()=> setLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
          {isLogin ? "Sign Up" : "Log in"}
        </Box>

      </Flex>
    </Box>

    


    </>
  )
}

export default AuthForm