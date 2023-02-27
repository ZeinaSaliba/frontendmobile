import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dummy = [
  {
    userId: 1,
    message:
      'hello fatima i have nothing to say you, but if you like avocados we can have a salad',
    time: '18:34',
  },
  {
    userId: 2,
    message:
      'hello fatima i have nothing to say you, but if you like avocados we can have a salad dsfjd sadhkdsh kshfdkhd khdsfkh khsdkh khkhdf khkfdh kfhfdk dkhdk dkh dsfhfkshdfjk sdhkfjh',
    time: '18:35',
  },
];

const getRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummy);
    }, 2000);
  });
};

export default function Conversation(props) {
  const {navigation} = props;
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [chatIds, setChatIds] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const getProfile = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        const image = await AsyncStorage.getItem('userImage');
        const chatIdd = await AsyncStorage.getItem('chatId');
        setProfile({name, image});
        setChatIds(chatIdd);
      } catch (error) {
        throw error;
      }
    };
    getProfile();
    console.log('profile', profile);
  }, []);

  useEffect(() => {
    console.log('chatId', chatIds);
    fetch(`http://192.168.18.22:3000/api/chat/chat/${chatIds}`)
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        setData(res);
      });
  }, [chatIds]);

  const onChange = value => {
    setValue(value);
  };
  const send = () => {
    if (value) {
      fetch(`http://192.168.18.22:3000/api/chat/addMessage/${chatIds}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            userId: 1,
            message: value,
            time: 'now',
          }),
      })
        .then(res => res.json())
        .then(res => {
          console.log('res', res);
          setData([
            ...data,
            {
              userId: 1,
              message: value,
              time: 'now',
            },
          ]);
          setValue(null);
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };
  return isLoading ? (
    <ActivityIndicator
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      size={'large'}
    />
  ) : (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="angle-left" color={'#a8a8a8'} size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{profile?.name}</Text>
        <Image
          source={{
            uri: profile?.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <ScrollView>
          {data.map((item, key) => (
            <View key={key} style={{flex: 1}}>
              {item?.userId != 1 ? (
                <View style={styles.viewSender}>
                  <View style={styles.sender}>
                    <Text style={styles.color}>{item?.message}</Text>
                  </View>
                  <Text style={styles.colorTime}>{item?.time}</Text>
                </View>
              ) : (
                <View style={styles.viewReceiver}>
                  <View style={styles.receiver}>
                    <Text style={styles.color}>{item?.message}</Text>
                  </View>
                  <Text style={styles.colorTime}>{item?.time}</Text>
                </View>
              )}
              <View>
                <Image style={styles.imageChat} />
              </View>
              <View>
                <View style={styles.voice}></View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.inputMessage}>
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder={'Type your message here'}
            placeholderTextColor={'#a8a8a8'}
            color={'black'}
            value={value}
            onChangeText={value => {
              onChange(value);
            }}
          />
          <TouchableOpacity style={styles.sendIcon} onPress={send}>
            <Icon name="arrow-right" color={'white'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
