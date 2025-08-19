import { Ionicons } from "@expo/vector-icons";
import { ResizeMode, Video } from "expo-av";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export const VideoCard = ({ video, isViewable }) => {
  const videoRef = useRef(null);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isViewable) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [isViewable]);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: video.videoURL }}
        resizeMode={ResizeMode.COVER}
        isLooping
      />
      <View style={styles.overlay}>
        <View style={styles.metadataContainer}>
          <Text style={styles.username}>@{video.username}</Text>
          <Text style={styles.title}>{video.title}</Text>
          {video.hashtags && (
            <Text style={styles.hashtags}>{video.hashtags}</Text>
          )}
          {video.musicTitle && (
            <View style={styles.musicContainer}>
              <Ionicons
                name="musical-note"
                size={14}
                color="white"
                style={styles.musicIcon}
              />
              <Text style={styles.musicText}>{video.musicTitle}</Text>
            </View>
          )}
        </View>

        <View style={styles.actionContainer}>
          <Image
            source={{ uri: video.avatar }}
            style={styles.avatar}
            onError={(e) =>
              console.log("Image loading error:", e.nativeEvent.error)
            }
          />

          <TouchableOpacity
            onPress={handleLikePress}
            style={styles.actionButton}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={32}
              color={isLiked ? "red" : "white"}
            />
            <Text style={styles.actionText}>{video.likes}</Text>
          </TouchableOpacity>
          <View style={styles.actionButton}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={32}
              color="white"
            />
            <Text style={styles.actionText}>{video.comments}</Text>
          </View>
          <View style={styles.actionButton}>
            <Ionicons name="arrow-redo-outline" size={32} color="white" />
            <Text style={styles.actionText}>{video.shares}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 30,
    paddingTop: 60,
  },
  metadataContainer: {
    marginBottom: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  title: {
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },
  hashtags: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  musicContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicIcon: {
    marginRight: 5,
  },
  musicText: {
    color: "white",
    fontSize: 12,
  },
  actionContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 20,
  },
  actionButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  actionText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});
