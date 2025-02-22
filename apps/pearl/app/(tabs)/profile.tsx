import { StyleSheet } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { Button, ButtonText } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { VStack } from '@/components/ui/vstack'

export default function Profile() {
    const { t } = useTranslation()

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }
            className="h-96"
        >
            <VStack className="p-4">
                <Button>
                    <ButtonText>{t('logout')}</ButtonText>
                </Button>
            </VStack>

        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
})
