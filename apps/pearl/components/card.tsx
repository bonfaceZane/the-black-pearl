import { Button, ButtonText } from '@/components/ui/button'
import { Card as CardComponent } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { HStack } from './ui/hstack'
import { Image } from '@/components/ui/image'
import { Link } from 'expo-router'

type Props = {
    title: string
    description: string
    image: string
}

export function Card({ title, description, image }: Props) {
    return (
        <Link href="/trip-details">
            <CardComponent
                className="m-3 max-w-[360px] rounded-lg p-5 sm:w-full"
                variant="elevated"
            >
                <Image
                    source={{
                        uri: image,
                    }}
                    className="mb-6 aspect-[4/3] h-[240px] w-full rounded-md"
                    alt="image"
                />
                <VStack className="mb-2 gap-1">
                    <Heading size="md" className="">
                        {title}
                    </Heading>
                    <Text size="sm">{description}</Text>
                </VStack>
                <HStack className="gap-2">
                    <Button className="w-1/2">
                        <ButtonText size="sm">explore</ButtonText>
                    </Button>
                    <Button variant="outline" className="w-1/2">
                        <ButtonText size="sm" className="text-typography-600">
                            wishlist
                        </ButtonText>
                    </Button>
                </HStack>
            </CardComponent>
        </Link>
    )
}
