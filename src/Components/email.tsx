import { Avatar } from '@/Components/avatar';
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

export function Email() {
  return (
    <View className="w-full flex-row gap-4 ">
      <Avatar source={{ uri: 'http://github.com/clisamax.png' }} />
      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          <MaterialIcons name="label-important" size={16} color={colors.yellow[600]} />
          <Text className="text-lg font-subtitle text-gray-400 flex-1">Clisamax Gomes</Text>
          <Text className="text-sm font-body text-gray-400 "> 31/08/2024</Text>
        </View>
        <Text className="text-base font-body text-gray-400" numberOfLines={1} lineBreakMode="tail">
          Assunto do email
        </Text>
        <View className="flex-row items-center gap-4">
          <Text className="text-base font-body text-gray-400 " numberOfLines={1} lineBreakMode="tail">
            Essa é a messagem do email
          </Text>
          <MaterialIcons name="star" size={22} color={colors.blue[600]} />
        </View>
      </View>
    </View>
  );
}
