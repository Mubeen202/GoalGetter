import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainCard from './Cards/MainCard'
import PremierData from './data/PremierData'
import Laliga from './data/Laliga'

export default function UpNextPremierScreen() {
    const [matchData, setMatchData]=useState(PremierData)
    useEffect(()=>{
    setMatchData(PremierData)
    
    },[matchData])
    console.log('this is premier')

  return (
    <View>
      <MainCard matchData={matchData}/>
    </View>
  )
}

export function UpNextLaligaScreen() {
    const [matchData, setMatchData]=useState(Laliga)
    useEffect(()=>{
    setMatchData(Laliga)
    
    },[matchData])
    console.log('this is laliga')
  return (
    <View>
      <MainCard matchData={matchData}/>
    </View>
  )
}
