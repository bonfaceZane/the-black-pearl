import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { VStack } from "@/components/ui/vstack";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";
import React from "react";
import Swiper from "react-native-swiper";

const images = [
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=3083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
    const { t } = useTranslation("common");

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Swiper
                    showsButtons={false}
                    showsPagination={false}
                    autoplay={true}
                >
                    {images.map((image) => (
                        <Image
                            style={{ height: 300 }}
                            source={{
                                uri: image,
                            }}
                        />
                    ))}
                </Swiper>
            }
        >
            <VStack className="">
                <ThemedText type="default">{t("description")}</ThemedText>
            </VStack>
        </ParallaxScrollView>
    );
}
