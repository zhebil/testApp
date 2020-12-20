import React, { useContext, useEffect, useState } from "react";
import withUnsplashAPI from "../hoc/withUnsplachAPI";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../listItem";
import { bindActionCreators, compose } from "redux";
import { photoLoaded } from "../../actions";
import { connect } from "react-redux";
function PhotosScreen({ navigation, unsplashAPI, photos, photoLoaded }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let mount = true;
    const request = async () => {
      try {
        const data = await unsplashAPI.getPhotos();
        if (mount) photoLoaded(data);
      } catch (e) {
        alert(e);
      } finally {
        if (mount) setLoading(false);
      }
    };
    request();
    return () => (mount = false);
  }, [photoLoaded]);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
        <FlatList
          style={{ paddingHorizontal: 15 }}
          ListHeaderComponent={<Text h1 style={styles.title}>Фотографии</Text>}
          data={photos}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            return <ListItem navigation={navigation} item={item} />;
          }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      photoLoaded: photoLoaded,
    },
    dispatch
  );
};

export default compose(
  withUnsplashAPI(),
  connect(mapStateToProps, mapDispatchToProps)
)(PhotosScreen);
