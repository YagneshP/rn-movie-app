import { icons } from "@rn_movie_app/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";
interface Props {
  placeholder: "string";
  onPress?: () => void;
}

const Searchbar = ({ onPress, placeholder }: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image
        source={icons.search}
        className='size-5'
        resizeMode='contain'
        tintColor='ab8bff'
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        className='flex-1 ml-2 text-white'
        placeholderTextColor='#A8B5DB'
      />
    </View>
  );
};

export default Searchbar;
