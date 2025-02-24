import { ScrollView } from 'react-native'
import { Button, ButtonText } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    AvatarBadge,
} from '@/components/ui/avatar'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function MyAccount() {
    const { t } = useTranslation()

    return (
        <ScrollView className="mt-10 flex-1 p-9">
            <VStack className="gap-6">
                <Heading className="mb-6">Profile</Heading>
                <HStack className="justify-between">
                    <HStack className="gap-4">
                        <Avatar size="md">
                            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                            <AvatarImage
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                                }}
                            />
                            <AvatarBadge />
                        </Avatar>
                        <VStack>
                            <Heading size="md">Jane Doe</Heading>
                            <Text size="sm">jane_doe@example.com</Text>
                        </VStack>
                    </HStack>
                    <IconSymbol color="green" name="arrow.right" />
                </HStack>
                <Button>
                    <ButtonText>{t('logout')}</ButtonText>
                </Button>
            </VStack>
        </ScrollView>
    )
}
