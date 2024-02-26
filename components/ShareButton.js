import {StyleSheet, View, Text, TouchableOpacity, Share} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export function ShareButton() {
    
    const handleShare = async (item) => {
        try {
            const formattedHouse = item.house ? item.house : 'Não disponível';
            const formattedParty = item.party ? item.party : 'Não disponível';
            const formattedState = item.state ? item.state : 'Estado não cadastrado';
            const formattedPhone = item.phone ? item.phone : 'Telefone não disponível';
            const formattedEmail = item.email ? item.email : 'Email não disponível';

            const result = await Share.share({
                message: `${item.name} (${formattedHouse} - ${formattedParty}/${formattedState})\n${formattedPhone}\n${formattedEmail}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return <View style={styles.inviteContainer}>
    <TouchableOpacity onPress={() => navigation.navigate("Share with friends")} style={styles.buttons}>
      <Text style={styles.shareButtonText}>Share with friends</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
    inviteContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: '5%',
    },
    buttons: {
      backgroundColor: 'rgba(39, 32, 126, 1)',
      borderRadius: 32,
      paddingHorizontal: '10%',
      paddingVertical: '4%',
      flex: 1,
      marginHorizontal: '1%',
      alignItems: 'center',
    },
    shareButtonText: {
      color: 'white',
      marginRight: 10,
      fontSize: 18,
    },
});
