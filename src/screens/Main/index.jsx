import { Box, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Input, InputField, Switch, Text } from "@gluestack-ui/themed";
import { useState } from "react";

export default function Main(){
    const [peso,setPeso] = useState("72")
    const [altura,setAltura] = useState("1.70")
    const [sexo,setSexo] = useState(false)
    const [resultado,setResultado] = useState("")

    const calcularHandle = () =>{
        let alturaConvertida = parseInt(altura)
        let result = 0

        if(altura>=2.2){
            setResultado("Altura deve ser menor que 2.2")
        }
        if(sexo){
            result = (62.1*alturaConvertida)-44.7
            //Mulher
        }else{
            //Homem
            result = (72.7*alturaConvertida)-58
        }
        setResultado(Math.round(result))
    }

    const limparHandle = () =>{
        setResultado("")
        setSexo(false)
        setPeso("72")
        setAltura("1.70")
    }
    return (
        <Box bg="$primary100" p="$5"  h={"$1/2"} w={300} borderRadius="$3xl">
            <Center h={"$full"}>
                <Heading>Peso Ideal</Heading>
                <FormControl>
                    <FormControlLabel>
                        <FormControlLabelText>Peso</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={"$full"}>
                        <InputField  value={peso} onChangeText={setPeso} keyboardType="numeric"/>
                    </Input>
                    <FormControlLabel>
                        <FormControlLabelText>Altura</FormControlLabelText>
                    </FormControlLabel>
                    <Input w={"$full"}>
                        <InputField value={altura} onChangeText={setAltura} keyboardType="numeric"/>
                    </Input>
                    <FormControlLabel>
                        <FormControlLabelText>Sexo</FormControlLabelText>
                    </FormControlLabel>
                    <HStack width={"$full"} space="md" justifyContent="center" alignItems="center">
                        <FormControlLabelText>Homem</FormControlLabelText>
                        <Switch value={sexo} onValueChange={setSexo}/>
                        <FormControlLabelText>Mulher</FormControlLabelText>
                    </HStack>
                    <Box justifyContent="space-around" display="flex" flexDirection="row">
                        <Button onPress={calcularHandle}>
                            <ButtonText>Calcular</ButtonText>
                        </Button>
                        <Button onPress={limparHandle}>
                            <ButtonText>Limpar</ButtonText>
                        </Button>
                    </Box>
                    <Box justifyContent="space-between" alignItems="center" height={50}>
                        <Text>Resultado:</Text>
                        <Text fontWeight="$bold">{resultado}</Text>
                    </Box>
                </FormControl>
            </Center>
        </Box>
    )
}