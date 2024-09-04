import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';

type RouterProp = {
  Home: undefined;
};

type Props = {
  navigation: StackNavigationProp<RouterProp, 'Home'>;
};

export default function Contact({ navigation }: Props) {
  const theme = useColorScheme();
  const isDarkTheme = theme == 'dark';
  const isTheme = isDarkTheme ? 'light' : 'dark';
  const darkThemes = { backgroundColor: isDarkTheme ? 'black' : 'white' };

  return (
    <View
      style={{
        ...styles.container,
        ...darkThemes,
      }}
    >
      <Text
        style={{
          ...styles.title,
        }}
      >
        Contact
      </Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style={isTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});
