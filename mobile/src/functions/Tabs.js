// Esse Arquivo é o Responsável por fazer a Mudança de Telas na parte inferior do APP

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Folder from '../pages/Folder';
import Book from '../pages/Book';

const tab = createBottomTabNavigator();
export default function Tabs() {
    return (
        <tab.Navigator>
            <tab.Screen name='Folder' component={Folder} />
            <tab.Screen name='Book' component={Book} />
        </tab.Navigator>
    )
}