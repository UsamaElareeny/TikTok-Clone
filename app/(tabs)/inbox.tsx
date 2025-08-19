import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: windowWidth } = Dimensions.get("window");

export default function Inbox() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Direct messages</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Ionicons
          name="paper-plane-outline"
          size={80}
          color="#E0E0E0"
          style={styles.paperPlaneIcon}
        />
        <Text style={styles.messageFriendsText}>Message your friends</Text>
        <Text style={styles.shareVideosText}>
          Share videos or start a conversation
        </Text>
      </View>
      <View style={styles.bottomSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "white",
  },
  headerIcon: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  paperPlaneIcon: {
    marginBottom: 20,
  },
  messageFriendsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  shareVideosText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  bottomSpacer: {
    height: 30,
    backgroundColor: "white",
  },
});
