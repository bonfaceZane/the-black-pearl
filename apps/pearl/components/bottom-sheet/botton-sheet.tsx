import { View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { forwardRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

type BottomSheetComponentProps = {}

type Ref = BottomSheet

export const BottomSheetComponent = forwardRef<Ref, BottomSheetComponentProps>(
    (props, ref) => {
        const snapPoints = ['25%', '50%', '70%', '100%']

        return (
            <GestureHandlerRootView>
                <BottomSheet
                    ref={ref}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    handleIndicatorStyle={{ backgroundColor: 'red' }}
                >
                    <BottomSheetView>
                        <Text>Awesome 🎉</Text>
                    </BottomSheetView>
                </BottomSheet>
            </GestureHandlerRootView>
        )
    }
)
