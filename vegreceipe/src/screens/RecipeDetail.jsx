import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ChevronLeftIcon, ClockIcon} from 'react-native-heroicons/outline';
import {FireIcon, HeartIcon, Square3Stack3DIcon, UserGroupIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Loading from '../components/Loading';
import YoutubeIframe from 'react-native-youtube-iframe';
import { AnimatedImage } from 'react-native-reanimated/lib/typescript/reanimated2/component/Image';
import Animated, { FadeInDown } from 'react-native-reanimated';
// import WebView from 'react-native-webview';

const RecipeDetail = props => {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  const [recipeData, setRecipeData] = useState({});
  const [loading, setLoading] = useState(true);

  const getRecipe = async mealId => {
    try {
      const response =
        await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}

      `);
      if (response && response.data) {
        setRecipeData(response.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log('error', err.message);
    }
  };

  const getYoutubeVideoId = url=>{
    const regex=/[?&]v=([^&]+)/
    const match = url.match(regex)
    if(match && match[1]){
      return  match[1];
    }
    return null;
  }

  const ingredientsIndexes=(meal)=>{
    if(!meal) return [];
    let indexes=[];
    for(let i=1;i<=20;i++){
      if(meal['strIngredient'+i]){
        indexes.push(i);
      }
    }

    return indexes; 
  }
  useEffect(() => {
    getRecipe(Number(item.idMeal));
  }, []);
  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}>
      <StatusBar barStyle={'light-content'} />
      {/* Image */}
      <View className="flex-row justify-center">
        <Animated.Image
          source={{uri: item.strMealThumb}}
          sharedTransitionTag={item.strMeal}
          style={{
            width: wp(98),
            height: hp(50),
            borderBottomLeftRadius: 53,
            borderBottomRightRadius: 53,
            borderRadius: 53,
            marginTop: 4,
          }}
        />
      </View>

      {/* Back Button */}
      <View className="w-full absolute flex-row justify-between items-center pt-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white ">
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>
        {/* Favourtie Icons */}
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-5 bg-white ">
          <HeartIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color={isFavourite ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      {/* Show Loading or data */}
      {loading ? (
        <Loading size="large" className="mt-16" />
      ) : (
        <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} className="px-4 flex justify-between space-y-4 pt-8">
          <View className="space-y-2">
            <Text
              style={{fontSize: hp(3)}}
              className="font-bold flex-1 text-neutral-700">
              {recipeData?.strMeal}
            </Text>
            <Text
              style={{fontSize: hp(2)}}
              className="font-bold flex-1 text-neutral-500">
              {recipeData?.strArea}
            </Text>
          </View>
          {/* Misc */}
          <Animated.View  entering={FadeInDown.delay(100).duration(700).springify().damping(12)} className="flex-row justify-around">
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <ClockIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                  35
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Mins
                </Text>
              </View>
            </View>
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <UserGroupIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                    03
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Servings
                </Text>
              </View>
            </View>
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <FireIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                  103
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Cal
                </Text>
              </View>
            </View>
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={'#525252'} />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Easy
                </Text>
              </View>
            </View>
          </Animated.View>

          {/* Ingredients */}
          <Animated.View  entering={FadeInDown.delay(200).duration(700).springify().damping(12)} className="space-y-2">
            <Text style={{fontSize:hp(2.5)}} className="font-bold flex-1 text-neutral-700">
              Ingredients 
            </Text>
            <View className="space-y-2 ml-3 ">
              {
                ingredientsIndexes(recipeData).map(i=>{
                  return(
                    <View key={i} className="flex-row space-x-4">
                      <View style={{height:hp(1.5),width:hp(1.5)}} className="bg-amber-300 rounded-full"></View>
                        <View className="flex-row space-x-2">
                          <Text style={{fontSize:hp(1.7)}} className="font-extrabold text-neutral-700">{recipeData['strIngredient'+i]}</Text>
                          <Text style={{fontSize:hp(1.7)}} className="font-medium text-neutral-600">{recipeData['strMeasure'+i]}</Text>
                        
                        </View>
                      </View>
                  )
                })
              }
            </View>
          </Animated.View>

          {/* Instructions */}
          <Animated.View  entering={FadeInDown.delay(300).duration(700).springify().damping(12)} className="space-y-2">
            <Text style={{fontSize:hp(2.5)}} className="font-bold flex-1 text-neutral-700">
              Instructions
            </Text>
            <Text style={{fontSize:hp(1.6)}} className="text-neutral-700">
              {
                recipeData?.strInstructions
              }
            </Text>
          </Animated.View>


          {/*  Recipe Video */}
          {
            recipeData.strYoutube && (
              <Animated.View  entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="space-y-4">
                <Text style={{fontSize:hp(2.5)}} className="font-bold flex-1 text-neutral-700">
              Recipe Video 
            </Text>
            <View>
              </View>
              <YoutubeIframe  videoId={getYoutubeVideoId(recipeData?.strYoutube)} height={hp(30)} />
              </Animated.View>
            )
          }
        </Animated.View>
      )}
    </ScrollView>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({});
