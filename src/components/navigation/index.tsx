import React, { useEffect, useMemo, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SCREEN_ACTIVITY,
  SCREEN_BOOKMARKS,
  SCREEN_DISCOVER,
  SCREEN_HOME,
  SCREEN_PROFILE,
} from "src/common/constants";
import HomeScreen from "src/modules/home-screen";
import ProfileScreen from "src/modules/profile-screen";
import DiscoverScreen from "src/modules/discover-screen";
import ActivityScreen from "src/modules/activity-screen";
import BookmarksScreen from "src/modules/bookmarks-screen";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";
import { styles } from "src/components/navigation/styles";
import HeaderCenter from "../header-center";
import HeaderLeft from "src/components/header-left";
import HeaderRight from "src/components/header-right";
import moment from "moment";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (source?: any) => () => {
  return source && <Image source={source} style={styles.tabBarImage} />;
};

export default function Navigation() {
  const { t } = useTranslation();
  const [startTime] = useState(moment());
  const [elapsedTime, setElapsedTime] = useState(0);

  const [assets, assetsError] = useAssets([
    require("src/assets/home.png"),
    require("src/assets/discover.png"),
    require("src/assets/activity.png"),
    require("src/assets/bookmarks.png"),
    require("src/assets/profile.png"),
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(now.diff(startTime)).get("m");
      setElapsedTime(duration);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  const homeIcon = useMemo(() => getTabBarIcon(assets?.[0]), [assets]);
  const discoverIcon = useMemo(() => getTabBarIcon(assets?.[1]), [assets]);
  const activityIcon = useMemo(() => getTabBarIcon(assets?.[2]), [assets]);
  const bookmarksIcon = useMemo(() => getTabBarIcon(assets?.[3]), [assets]);
  const profileIcon = useMemo(() => getTabBarIcon(assets?.[4]), [assets]);

  return (
    <Tab.Navigator
      initialRouteName={SCREEN_HOME}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name={SCREEN_HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: t("navigation.home"),
          headerTitle: () => <HeaderCenter title={t("home.title")} />,
          headerTitleAlign: "center",
          headerLeft: () => <HeaderLeft elapsedTime={elapsedTime} />,
          headerRight: () => <HeaderRight />,
          headerTransparent: true,
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name={SCREEN_DISCOVER}
        component={DiscoverScreen}
        options={{
          tabBarLabel: t("navigation.discover"),
          tabBarIcon: discoverIcon,
        }}
      />
      <Tab.Screen
        name={SCREEN_ACTIVITY}
        component={ActivityScreen}
        options={{
          tabBarLabel: t("navigation.activity"),
          tabBarIcon: activityIcon,
        }}
      />
      <Tab.Screen
        name={SCREEN_BOOKMARKS}
        component={BookmarksScreen}
        options={{
          tabBarLabel: t("navigation.bookmarks"),
          tabBarIcon: bookmarksIcon,
        }}
      />
      <Tab.Screen
        name={SCREEN_PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: t("navigation.profile"),
          tabBarIcon: profileIcon,
        }}
      />
    </Tab.Navigator>
  );
}
