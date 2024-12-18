import { StyleSheet, View } from 'react-native'

import i18n from '@/language'

import { CustomButton } from '../CustomButton'

interface Option {
  value: string
  icon?: string
  color?: string
}

interface Props {
  options: Option[]
  onSelect: (value: string) => void
  selected: string
  disabled?: boolean
  multiline?: boolean
}

export const SelectionGroupButton: React.FC<Props> = ({
  options,
  onSelect,
  selected,
  disabled = false,
  multiline = false,
}) => {
  return (
    <View style={[styles.container, multiline && { flexWrap: 'wrap' }]}>
      {options.map(({ value, icon, color }) => (
        <CustomButton
          key={value}
          label={i18n.t(value)}
          icon={icon}
          onPress={() => onSelect(value)}
          mode={selected === value ? 'contained' : 'outlined'}
          disabled={disabled}
          multiline={multiline}
          color={color}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
})
