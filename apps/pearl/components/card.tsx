import { Button, ButtonText } from "@/components/ui/button";
import { Card as CardComponent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "./ui/hstack";
import { Image } from "@/components/ui/image";

type Props = {
    title: string;
    description: string;
    image: string;
};

export function Card({ title, description, image }: Props) {
    return (
        <CardComponent
            className="p-5  rounded-lg max-w-[360px] m-3 "
            variant="elevated"
        >
            <Image
                source={{
                    uri: "https://gluestack.github.io/public-blog-video-assets/saree.png",
                }}
                className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                alt="image"
            />
            <Text className="text-sm font-normal mb-2 text-typography-700">
                Fashion Clothing
            </Text>
            <VStack className="mb-6">
                <Heading size="md" className="mb-4">
                    Cotton Kurta
                </Heading>
                <Text size="sm">
                    Floral embroidered notch neck thread work cotton kurta in
                    white and black.
                </Text>
            </VStack>
            <HStack className="gap-2">
                <Button className="w-1/2">
                    <ButtonText size="sm">Add to cart</ButtonText>
                </Button>
                <Button
                    variant="outline"
                    className="w-1/2"
                >
                    <ButtonText size="sm" className="text-typography-600">
                        Wishlist
                    </ButtonText>
                </Button>
            </HStack>
        </CardComponent>
    );
}
