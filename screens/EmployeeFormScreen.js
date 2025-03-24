import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const EmployeeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name should be at least 2 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must be numeric")
    .min(10, "Phone must be at least 10 digits")
    .required("Required"),
  position: Yup.string().required("Required"),
  department: Yup.string().required("Required"),
});

const EmployeeFormScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Information</Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position: "",
          department: "",
        }}
        validationSchema={EmployeeSchema}
        onSubmit={(values) => {
          console.log("Employee Info:", values);
          alert("Employee information submitted!");
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
            {/* Name */}
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="John Doe"
            />
            {errors.name && touched.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            {/* Email */}
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="john@example.com"
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* Phone */}
            <Text>Phone:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              placeholder="1234567890"
            />
            {errors.phone && touched.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}

            {/* Position */}
            <Text>Position:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("position")}
              onBlur={handleBlur("position")}
              value={values.position}
              placeholder="Manager"
            />
            {errors.position && touched.position && (
              <Text style={styles.error}>{errors.position}</Text>
            )}

            {/* Department */}
            <Text>Department:</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("department")}
              onBlur={handleBlur("department")}
              value={values.department}
              placeholder="Sales"
            />
            {errors.department && touched.department && (
              <Text style={styles.error}>{errors.department}</Text>
            )}

            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EmployeeFormScreen;

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
