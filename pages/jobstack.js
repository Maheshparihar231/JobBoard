import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobScreen from './jobs';
import JobDetailsScreen from './jobdetails';

const JobStack = createNativeStackNavigator();

function JobStackScreen() {
  return (
    <JobStack.Navigator screenOptions={{
      headerShown:false
    }}>
      <JobStack.Screen name="All Jobs" component={JobScreen} />
      <JobStack.Screen name="Job Details" component={JobDetailsScreen} />
    </JobStack.Navigator>
  );
}
export default JobStackScreen;