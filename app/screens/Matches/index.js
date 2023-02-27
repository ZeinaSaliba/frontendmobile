import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dummy = [
  {
    chatId: 1,
    link: 'http://placeimg.com/640/480/people',
    name: 'Warda',
    lastMessage: 'hello how are you nice talking to you',
    time: `12:00`,
  },
  {
    chatId: 2,
    link: 'http://placeimg.com/640/480/people',
    name: 'Warda',
    lastMessage: 'hello how are you nice talking to you',
    time: `12:00`,
  },
];

const getRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummy);
    }, 2000);
  });
};

export default function Matches(props) {
  const {navigation} = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://192.168.18.22:3000/api/chat/chatList/1`)
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        setData(res);
        console.log('fgfghgf', res);
      })
      .catch(err => {
        console.log('err', err);
      });
    console.log('data', data);
  }, []);
  const chat = async (user, chatId) => {
    try {
      navigation.navigate('Conversation');
      await AsyncStorage.setItem('userName', user.name);
      await AsyncStorage.setItem('userImage', user.link);
      console.log('chchchchchchchchchchatId', chatId);
      await AsyncStorage.setItem('chatId', chatId.toString());
    } catch (error) {
      throw error;
    }
  };
  
  return isLoading ? (
    <ActivityIndicator
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      size={'large'}
    />
  ) : (
    <View style={[{flex: 1}]}>
      <View style={[styles.displayText]}>
        <Text style={[styles.textMatches, styles.colorMatches]}>Matches</Text>
        <View style={[styles.dot, styles.borderMatches]}>
          <Text style={[styles.textnumber, {color: 'white'}]}>1</Text>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', flex: 1}}>
            {data.map((item, key) => (
              <View key={key} style={styles.imageText}>
                <View style={[styles.imageView]}>
                  <Image style={styles.image} source={{uri: item?.link}} />
                </View>
                <Text style={[{fontWeight: 'bold'}, styles.color]}>
                  {item?.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={[styles.container]}>
        <View style={styles.displayText}>
          <Text style={[styles.textMatches, styles.colorMessages]}>
            Messages
          </Text>
          <View style={[styles.dot, styles.borderMessages]}>
            <Text style={[styles.textnumber, {color: 'white'}]}>{data?.length}</Text>
          </View>
        </View>
        <ScrollView>
          {data?.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() =>
                chat({name: item?.name, link: item?.link}, item?.chatId)
              }
              style={styles.card}>
              <View style={[styles.imageView]}>
                <Image style={styles.image} source={{uri: item?.link}} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.color, styles.chatTitle]}>
                  {item?.name}
                </Text>
                <Text numberOfLines={1} style={styles.chatText}>
                  {item?.lastMessage}
                </Text>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.chatTime}>{item?.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
