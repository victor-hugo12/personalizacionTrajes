import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text, TouchableRipple } from 'react-native-paper'

import { BLACK, WHITE } from '@/constants/colors'
import { useTheme } from '@/context/ThemeContext'

interface Props {
  label: string
  icon?: string
  onPress: () => void
  disabled?: boolean
  mode?: string
  multiline?: boolean
  color?: string
}

export const CustomButton: React.FC<Props> = ({ label, icon, onPress, disabled, mode, multiline = false, color }) => {
  const { theme, isDarkTheme } = useTheme()

  const buttonStyle =
    mode === 'contained'
      ? {
          ...styles.container,
          backgroundColor: theme.colors.primary,
          borderWidth: 1,
          borderColor: isDarkTheme ? WHITE : BLACK,
        }
      : {
          ...styles.container,
          borderColor: isDarkTheme ? WHITE : theme.colors.primary,
          borderWidth: 1,
          backgroundColor: 'transparent',
        }

  const textStyle = mode === 'contained' ? { color: WHITE } : { color: theme.colors.primary }

  const iconColor = color ? color : mode === 'contained' ? theme.colors.text : theme.colors.primary

  return (
    <TouchableRipple style={[buttonStyle, multiline && { flexBasis: '49%' }]} onPress={onPress} disabled={disabled}>
      <View style={styles.content}>
        <Text variant="titleMedium" numberOfLines={2} style={[textStyle, { textAlign: 'center' }]}>
          {label}
        </Text>
        {icon && <Icon source={icon} size={20} color={iconColor} />}
      </View>
    </TouchableRipple>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
})
