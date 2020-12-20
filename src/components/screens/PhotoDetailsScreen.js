import React from "react";

import {  View, Image } from "react-native";
import { connect } from "react-redux";

function PhotoDetailsScreen({ photos, route }) {
  const thisPhoto = photos.find((item) => item.id === route.params?.id);
  const {
    urls: { regular },
  } = thisPhoto;

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: regular }}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps)(PhotoDetailsScreen);
