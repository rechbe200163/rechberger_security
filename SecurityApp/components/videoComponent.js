import Video from "react-native-video";
import { Text, Linking, Button, View } from "react-native";

export default VideoComponent = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        style={{ width: 300, height: 300 }}
        controls={true}
      />
    </View>
  );
};
