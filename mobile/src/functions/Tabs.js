import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function Tabs() {
    const tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen/>
            </tab.Navigator>
        </NavigationContainer>
    )
}