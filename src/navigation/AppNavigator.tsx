import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SearchScreen} from '../view/SearchScreen';
import {DetailsScreen} from '../view/DetailsScreen';

export type RootStackParamList = {
  Search: undefined;
  Details: { weather: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
