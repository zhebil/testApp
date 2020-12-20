import React, {useContext, useEffect, useState} from 'react';
import withUnsplashAPI from '../components/hoc/withUnsplachAPI';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import Layout from '../components/layout';
import {FlatList} from 'react-native-gesture-handler';
import ListItem from '../components/listItem';
import {SafeAreaView} from 'react-native-safe-area-context';
function PhotosScreen({navigation, unsplashAPI}) {
  const [photoData, setPhotoData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        const data = await unsplashAPI.getPhotos();
        setPhotoData(data);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, []);
  // console.log(photoData);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
    <Layout>
      <FlatList
        style={{paddingHorizontal: 15}}
        ListHeaderComponent={<Text style={styles.title}>Фотографии</Text>}
        data={photoData}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => {
          return <ListItem navigation={navigation} item={item} />;
        }}
      />
    </Layout>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    marginBottom: 15
  }
});

export default withUnsplashAPI()(PhotosScreen);
