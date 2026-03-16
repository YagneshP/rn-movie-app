// import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";
import { icons } from "../../constants/icons";
import { images } from "../../constants/images";

const TabIcon = ({ icon, title, focused }: any) => {
  return (
    <>
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image source={icon} tintColor='#151312' className='size-5' />
        <Text className='text-secondary text-base font-semibold ml-2'>
          {title}
        </Text>
      </ImageBackground>
    </>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} title='Home' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.person} title='Profile' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.save} title='Saved' focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} title='Search' focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
