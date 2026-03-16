import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
// import { Image } from "expo-image";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <ImageBackground source={images.highlight}>
                  <Image
                    source={icons.home}
                    tintColor='#151312'
                    className='size-5'
                  />
                </ImageBackground>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: "Save",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
