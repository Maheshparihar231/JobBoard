import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseScreen from './courses';
import Coursedetail from './coursedetail';

const SettingsStack = createNativeStackNavigator();

function CourseStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{
      headerShown:false
    }}>
      <SettingsStack.Screen name="All Course" component={CourseScreen} />
      <SettingsStack.Screen name="Course Details" component={Coursedetail} />
    </SettingsStack.Navigator>
  );
}

export default CourseStackScreen