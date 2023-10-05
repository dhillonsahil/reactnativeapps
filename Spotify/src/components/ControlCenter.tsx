import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackServices } from '../../MusicPlayerServices'

const ControlCenter = () => {

    const playbackState = usePlaybackState()
    // next
    const skipToNext=async ()=>{
        await TrackPlayer.skipToNext()
    }
    // Previous Button
    const skipToPrevious=async ()=>{
        await TrackPlayer.skipToPrevious()
    }
    // toggle
    const togglePlayback = async(playback:State)=>{
        const CurrentTrack = await TrackPlayer.getCurrentTrack()
        if(CurrentTrack!==null){
            if(playback===State.Paused || playback===State.Ready){
                await TrackPlayer.play()
            }else{
                await TrackPlayer.pause()
            }
        }
    }

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>
            <Pressable onPress={()=>togglePlayback(playbackState)}>
                <Icon style={styles.icon} name={playbackState===State.Playing ?"pause":"play-arrow"} size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter