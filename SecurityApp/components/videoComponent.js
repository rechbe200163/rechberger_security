import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Video, ResizeMode } from "expo-av";

const videoList = [
  "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={videoList}
        renderItem={({ item: videoUri }) => <VideoPlayer uri={videoUri} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

function VideoPlayer({ uri }) {
  return (
    <View style={styles.videoContainer}>
      <Video
        style={styles.video}
        source={{ uri }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10, // Added padding to the main container
  },
  videoContainer: {
    position: "relative",
    width: 320,
    height: 200,
    marginBottom: 20, // Added bottom margin to each video container
  },
  video: {
    width: "100%",
    height: "100%",
  },
  progressBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    height: 10,
  },
  progress: {
    backgroundColor: "red",
  },
});
