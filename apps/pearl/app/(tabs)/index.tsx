import { StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { VStack } from "@/components/ui/vstack";
import { useTranslation } from "react-i18next";
import { Image } from "expo-image";

export default function Home() {
    const { t } = useTranslation("common");

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/partial-react-logo.png")}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{t("title")}</ThemedText>
                <HelloWave />
            </ThemedView>
            <VStack>
                <ThemedText type="default">{t("description")}</ThemedText>
            </VStack>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
