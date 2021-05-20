import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    return useCallback(() => {
        navigation.goBack();
    }, [navigation]);
};
