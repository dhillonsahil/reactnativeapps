import { StatusBar, Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation()
   const ring1padding = useSharedValue(0);
   const ring2padding = useSharedValue(0)

   useEffect(()=>{
    ring1padding.value=0;
    ring2padding.value=0;
    setTimeout(()=>ring1padding.value=withSpring(ring1padding.value+hp(5)),100);
    setTimeout(()=>ring2padding.value=withSpring(ring2padding.value+hp(5)),300);
    setTimeout(()=>navigation.navigate("Home"),1500);
   },[])

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500" >
      <StatusBar barStyle={'light-content'} />
      {/* Logo Images with rings */}
      <Animated.View className="rounded-full bg-white/20" style={{padding:ring1padding}}>
        <Animated.View className="rounded-full bg-white/20" style={{padding:ring2padding}}>
          <Image style={{width:hp(20),height:hp(20)}} source={require("../../assets/welcome_image.png")} />
        </Animated.View>
      </Animated.View>
      {/* Title And Tagline  */}
      <View className="flex items-center space-y-2">
        <Text className="font-bold text-white tracking-widest " style={{fontSize:hp(6)}}>
          Veg Recipes
        </Text>
        <Text className="font-medium text-white tracking-widest" style={{fontSize:hp(2)}}>
          Food is always Right
        </Text>
      </View>
    </View>
  )
}

export default Welcome
