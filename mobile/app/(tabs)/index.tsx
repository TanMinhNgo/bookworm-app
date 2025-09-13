import { useAuthStore } from '@/store/authStore';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type AuthStore = {
    logout: () => void;
}

const Index = () => {
    const {logout} = useAuthStore() as AuthStore;
        

    return (
        <View>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
