// import React from 'react';
// import { TouchableOpacity } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useTheme } from '@react-navigation/native';
// import BackArrow from '@icons/navigation/BackArrow';
// import MyWorkRelationshipIdentitiesStack from '../MainStack/MyWorkRelationshipIdentitiesStack';
// import Welcome from '@OrgManagement/Welcome';
// import WorkRelationship from '@OrgManagement/WorkRelationship';
//
// import { withoutHeader, withHeader } from '../options';
//
// const Stack = createStackNavigator();
//
// export const NotAuthorizedStack = () => {
//     const {
//         colors: { activeTintColor, welcomeBackground, border },
//     } = useTheme();
//
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name={'FirstScreen'}
//                 component={WorkRelationship}
//                 options={withoutHeader}
//             />
//         </Stack.Navigator>
//     );
// };