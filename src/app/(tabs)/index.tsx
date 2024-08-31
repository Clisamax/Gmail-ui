import { MenuButton } from '@/app/Components/menu_button';
import { Input } from '../Components/input';
import { View } from 'react-native';
import { Avatar } from '@/app/Components/avatar';

const Home: React.FC = () => {
  return (
    <View className=" flex-1  bg-gray-900 p-4 pt-14">
      <Input>
			<MenuButton/>
			<Input.Fild placeholder='Pesquizar no e-mail'/>
			<Avatar source={{uri: "http://github.com/clisamax.png"}} size='small'/>
			</Input>
    </View>
  );
};		
export default Home;
