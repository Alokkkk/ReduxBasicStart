import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();

    const goToNextOne = () => {
        navigation.push('SecondHome');
    };

    return (
        <View>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={goToNextOne}>
                <Text>
                    Go To Next
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
