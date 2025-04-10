import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { fetchEmployees } from "../firebase/employees";

const EmployeeListScreen = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEmployees = async () => {
    try {
      const fetchedEmployees = await fetchEmployees();
      setEmployees(fetchedEmployees);
    } catch (error) {
      console.error("Error fetching employees: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {employees.length === 0 ? (
        <Text>empty</Text>
      ) : (
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>Name: {item.name}</Text>
              <Text style={styles.itemText}>Email: {item.email}</Text>
              <Text style={styles.itemText}>Phone: {item.phone}</Text>
              <Text style={styles.itemText}>Role: {item.position}</Text>
              <Text style={styles.itemText}>Department: {item.department}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default EmployeeListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
