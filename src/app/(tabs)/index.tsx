import { Avatar } from '@/Components/avatar';
import { Email } from '@/Components/email';
import { Input } from '@/Components/input';
import { MenuButton } from '@/Components/menu_button';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className=" flex-1  bg-gray-900 p-4 pt-14">
      <Input>
        <MenuButton />
        <Input.Fild placeholder="Pesquizar no e-mail" />
        <Avatar source={{ uri: 'http://github.com/clisamax.png' }} size="small" />
      </Input>
      <Email />
    </View>
  );
}
