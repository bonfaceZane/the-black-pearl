import { View, Text } from 'react-native'

type Props = {
  title: string
  description: string
}

export const Section = ({ title, description }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  )
}

