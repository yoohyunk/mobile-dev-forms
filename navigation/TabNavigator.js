import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import EmployeeFormScreen from "../screens/EmployeeFormScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import EmployeeListScreen from "../screens/EmployeeListScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="EmployeeForm"
          component={EmployeeFormScreen}
          options={{ title: "Employee" }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Tab.Screen
          name="EmployeeList"
          component={EmployeeListScreen}
          options={{ title: "Employee List" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
