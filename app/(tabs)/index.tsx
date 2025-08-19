import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FeedList } from "../../components/FeedList";
import { mockVideos } from "../../Data";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState("forYou");

  useEffect(() => {
    setVideos(mockVideos);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={[
            styles.headerText,
            activeTab === "following" && styles.activeHeaderText,
          ]}
          onPress={() => setActiveTab("following")}
        >
          Following
        </Text>
        <Text style={styles.headerSeparator}>|</Text>
        <Text
          style={[
            styles.headerText,
            activeTab === "forYou" && styles.activeHeaderText,
          ]}
          onPress={() => setActiveTab("forYou")}
        >
          For You
        </Text>
      </View>

      <FeedList videos={videos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "absolute",
    top: 0,
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingTop: 40,
  },
  headerText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  activeHeaderText: {
    color: "white",
  },
  headerSeparator: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    fontWeight: "bold",
  },
});
