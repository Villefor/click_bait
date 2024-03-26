import { useNavigation } from "@react-navigation/native";
import { useAppContext, actionTypes } from "../../context/context";
import * as SecureStore from "expo-secure-store";

 export const handleLogout = async () => {
    
    const { state, dispatch } = useAppContext();
    const navigation = useNavigation();
    await SecureStore.deleteItemAsync("accessToken");

    navigation.navigate("Login");
}
