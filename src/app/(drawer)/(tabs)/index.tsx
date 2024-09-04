import { Avatar } from '@/Components/avatar';
import { Email } from '@/Components/email';
import { FloatButton } from '@/Components/float_button';
import { Input } from '@/Components/input';
import { MenuButton } from '@/Components/menu_button';
import { EMAILS } from '@/utils/email';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <View className=" flex-1  bg-gray-900 p-4 pt-14">
      <Input>
        <MenuButton />
        <Input.Fild placeholder="Pesquizar no e-mail" />
        <Avatar source={{ uri: 'http://github.com/clisamax.png' }} size="small" />
      </Input>
      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 font-subtitle text-sm mt-6"> Entrada </Text>
        )}
      />
      <FloatButton icon="edit" />
    </View>
  );
}
