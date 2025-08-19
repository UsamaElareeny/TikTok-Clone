import Ionicons from "@expo/vector-icons/Ionicons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CameraScreen() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionMessage}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <SafeAreaView style={styles.controlsContainer}>
          <View style={styles.topControls}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.back()}
            >
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.soundsButton}>
              <Ionicons name="musical-notes-sharp" size={16} color="white" />
              <Text style={styles.soundsText}>Sounds</Text>
            </View>
          </View>
          <View style={styles.sideControls}>
            <TouchableOpacity
              style={styles.sideButton}
              onPress={toggleCameraFacing}
            >
              <Ionicons name="camera-reverse-outline" size={30} color="white" />
              <Text style={styles.sideButtonText}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideButton}>
              <Ionicons name="timer-outline" size={30} color="white" />
              <Text style={styles.sideButtonText}>Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideButton}>
              <Ionicons name="sparkles-sharp" size={30} color="white" />
              <Text style={styles.sideButtonText}>Beauty</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideButton}>
              <Ionicons name="filter-outline" size={30} color="white" />
              <Text style={styles.sideButtonText}>Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sideButton}>
              <Ionicons name="flash-outline" size={30} color="white" />
              <Text style={styles.sideButtonText}>Flash</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomControls}>
            <TouchableOpacity style={styles.effectsButton}>
              <Ionicons name="happy-outline" size={30} color="white" />
              <Text style={styles.effectsText}>Effects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recordButton}>
              <View style={styles.recordInnerCircle} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadButton}>
              <Ionicons name="image-outline" size={30} color="white" />
              <Text style={styles.uploadText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionMessage: {
    textAlign: "center",
    paddingBottom: 10,
  },
  controlsContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  iconButton: {
    padding: 8,
  },
  soundsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  soundsText: {
    color: "white",
    marginLeft: 6,
  },
  sideControls: {
    position: "absolute",
    right: 15,
    top: "25%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sideButton: {
    alignItems: "center",
    marginVertical: 15,
  },
  sideButtonText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
    position: "absolute",
    bottom: 75,
    left: 0,
    right: 0,
  },
  effectsButton: {
    alignItems: "center",
  },
  effectsText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  recordInnerCircle: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#fe2c55",
  },
  uploadButton: {
    alignItems: "center",
  },
  uploadText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});
