import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import { ListItem } from "../types";

type Props = {
  data: ListItem[];
};

const List: React.FC<Props> = ({ data }) => {
  const renderItem = ({ item, index }: { item: ListItem; index: number }) => (
    <View style={styles.itemWrapper}>
      <View style={styles.bullet}>
        <Text style={styles.bulletText}>{index + 1}</Text>
      </View>
      <Text style={styles.listItemText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ height: 21 }} />}
      scrollEnabled={false}
      keyExtractor={(item, index) => `${index}-${item.title}`}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 35,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bullet: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5E6180",
    borderRadius: 100,
  },
  bulletText: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 24,
    color: "white",
  },
  listItemText: {
    marginLeft: 11,
    flexShrink: 1,
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 24,
    color: "#45403F",
  },
});

export default List;
