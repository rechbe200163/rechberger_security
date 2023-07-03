import Video from "react-native-video";

export default VideoComponent = () => {
  return (
    <Video
      source={{
        uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      }}
      style={{ width: 300, height: 300 }}
      controls={true}
      resizeMode={"none"}
    />
  );
};
