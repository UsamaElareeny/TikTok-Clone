import { useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { VideoCard } from "./VideoCard";

const { height: windowHeight } = Dimensions.get("window");

export const FeedList = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <VideoCard video={item} isViewable={activeIndex === index} />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        snapToInterval={windowHeight}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
