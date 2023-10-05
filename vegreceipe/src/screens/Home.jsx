import { StatusBar, StyleSheet, Text, View,ScrollView, Image, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {ArrowLeftOnRectangleIcon, BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import axios from 'axios'
import Recipes from '../components/Recipes'
import { BackHandler } from 'react-native'
const Home = () => {

  const [activeCatgeory,setActiveCategory]=useState('Dessert')
  const [categories , setCategories] = useState([])
  const [recipes,setRecipes]=useState([])

  const getCategories = async()=>{
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      if(response && response.data){
        setCategories(response.data.categories)
      }
    } catch (err) {
      console.log('error',err.message)
    }
  }

  const getRecipes = async(category="Dessert")=>{
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}
      `);
      if(response && response.data){
        setRecipes(response.data.meals);
      }
    } catch (err) {
      console.log('error',err.message)
    }
  }

  const handleRecipeChange = (category)=>{
    getRecipes(category);
    setActiveCategory(category);
    setRecipes([])
  }

  useEffect(()=>{
    getCategories();
    getRecipes(activeCatgeory);
  },[])


  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle={'light-content'} />
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50}} className="space-y-6 pt-3" 
      > 
      {/* Avatar and Bell icon */}
      <View className="mx-4 flex-row justify-between items-center mb-2">
        <Image source={require("../../assets/avatar.jpeg")} className="rounded-full" style={{height:hp(5),width:hp(5.5)}}  />
        {/* <BellIcon size={hp(4)} color={"gray"}  /> */}
        <ArrowLeftOnRectangleIcon onPress={()=>{BackHandler.exitApp()}} size={hp(4)} color={"gray"}  />
        {/* <Text style={{fontSize:hp(3)}} className="font-bold text-amber-500">Veg Recipes</Text> */}
      </View>

      {/* Greetings and Punchline */}
      <View className="mx-4 space-y-2 mb-2 ">
        <View>
        <Text className="text-neutral-600 font-semibold" style={{fontSize:hp(3.8)  }}>Make your Own Food,</Text>
        </View>
        <Text className="text-neutral-600 font-semibold" style={{fontSize:hp(3.8)  }}>stay at  <Text className="text-amber-400">Home</Text></Text>

      </View>

      {/* Search bar */}
      <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
        <TextInput placeholder='Search any recipe' placeholderTextColor={'gray'} style={{fontSize:hp(1.7)}} className="flex-1 text-base mb-1 pl-3 tracking-wider"/>
        <View className="bg-white rounded-full p-3">
          <MagnifyingGlassIcon  size={hp(2.5)} strokeWidth={3} color={'gray'}/>
        </View>
      </View>

      {/* Categories */}
      <View>
        {categories.length>0 && <Categories handleRecipeChange={handleRecipeChange} categories={categories} activeCatgeory={activeCatgeory}  />}
      </View>
      
      {/* Recipes */}
      <View>
        <Recipes recipes={recipes} categories={categories} />
      </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})