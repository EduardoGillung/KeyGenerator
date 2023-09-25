import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar itens salvos
    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        }catch{error}{
            console.log("Erro ao buscar", error)
            return[];
        }
    }


    //Salvar um item no storage
    const saveItem = async (key) => {
        try{
            let passwords = await getItem(key);

            passwords.push()

            
        }catch{error}{
            console.log(" ERRO AO SALVAR ", error)
        }
    }

    //Remover algo do storage
    const removeItem = async () => {

    }

    return { 
        getItem,
        saveItem,
        removeItem,
    }
}



export default useStorage;
