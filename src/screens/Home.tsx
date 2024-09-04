import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View, useColorScheme } from 'react-native';

type RouterProp = {
  Contact: undefined;
};

type Props = {
  navigation: StackNavigationProp<RouterProp, 'Contact'>;
};

export default function Home({ navigation }: Props) {
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
        Home
      </Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
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
