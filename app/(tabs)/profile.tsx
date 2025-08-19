import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: windowWidth } = Dimensions.get("window");

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="person-add-outline"
          size={24}
          color="black"
          style={styles.headerIconLeft}
        />
        <Text style={styles.headerTitle}>
          Nature Lover <Ionicons name="chevron-down" size={16} color="black" />
        </Text>
        <Ionicons
          name="ellipsis-horizontal"
          size={24}
          color="black"
          style={styles.headerIconRight}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileInfoContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            }}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>@naturelover</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>14</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>38</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>91</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
          </View>
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileButtonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Feather name="bookmark" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.bioText}>Tap to add bio</Text>
        </View>
        <View style={styles.contentTabs}>
          <TouchableOpacity style={styles.contentTab}>
            <Ionicons name="grid-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentTab}>
            <Ionicons name="heart-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentGrid}>
          <Image
            source={require("../../assets/images/Profile Image 1.png")}
            style={styles.gridItem}
          />
          <Image
            source={require("../../assets/images/Profile Image 2.png")}
            style={styles.gridItem}
          />
          <Image
            source={require("../../assets/images/Profile Image 3.png")}
            style={styles.gridItem}
          />
          <Image
            source={require("../../assets/images/Profile Image 4.png")}
            style={styles.gridItem}
          />
          <Image
            source={require("../../assets/images/Profile Image 5.png")}
            style={styles.gridItem}
          />
          <TouchableOpacity style={styles.createVideoCard}>
            <Ionicons name="add" size={30} color="black" />
            <Text style={styles.createVideoText}>
              Tap to create{"\n"}a new video
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNavBar}>
        <View style={styles.navBarItem}>
          <Ionicons name="home-outline" size={24} color="gray" />
          <Text style={styles.navBarText}>Home</Text>
        </View>
        <View style={styles.navBarItem}>
          <Ionicons name="search-outline" size={24} color="gray" />
          <Text style={styles.navBarText}>Discover</Text>
        </View>
        <TouchableOpacity style={styles.addVideoButton}>
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.navBarItem}>
          <Ionicons name="mail-outline" size={24} color="gray" />
          <Text style={styles.navBarText}>Inbox</Text>
        </View>
        <View style={styles.navBarItem}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.navBarText}>Me</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    paddingBottom: 70,
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
  headerIconLeft: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  headerIconRight: {
    padding: 5,
  },
  profileInfoContainer: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#A0A0A0",
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  statLabel: {
    fontSize: 12,
    color: "gray",
  },
  profileActions: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: "#D0D0D0",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  editProfileButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  bookmarkButton: {
    borderWidth: 1,
    borderColor: "#D0D0D0",
    padding: 8,
    borderRadius: 5,
  },
  bioText: {
    color: "gray",
    fontSize: 14,
    marginBottom: 20,
  },
  contentTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    backgroundColor: "white",
  },
  contentTab: {
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
  },
  contentGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 1,
  },
  gridItem: {
    width: windowWidth / 3 - 2,
    height: 160,
    backgroundColor: "#E0E0E0",
    marginBottom: 2,
  },
  createVideoCard: {
    width: windowWidth / 3 - 2,
    height: 160,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  createVideoText: {
    textAlign: "center",
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navBarItem: {
    alignItems: "center",
    padding: 5,
  },
  navBarText: {
    fontSize: 10,
    color: "gray",
  },
  addVideoButton: {
    backgroundColor: "black",
    width: 40,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
