import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "discover",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="paperplane" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="filter"
                options={{
                    title: "Filter",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name="slider.horizontal.3"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: "inbox",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name="bubble" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "profile",
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name="person.2.badge.key"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
