import { TextInput, View } from 'react-native';
import { Txt } from '../Txt/Txt';
import { styles } from './SearchBar.style';

interface SearchBarProps {
  onSubmit: (city: string) => void;
}

export function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={styles.input}
      placeholder=" chercher une ville ....Ex: Paris"
    />
  );
}
