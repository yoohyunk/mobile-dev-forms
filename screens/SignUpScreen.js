import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          alert("Sign Up Successful!");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="user@example.com"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <Text>Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="********"
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Text>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              placeholder="********"
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            <Button title="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  error: {
    color: "red",
    marginBottom: 5,
  },
});
