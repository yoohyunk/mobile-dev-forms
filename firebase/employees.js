import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const employeesCollectionRef = collection(db, "employees");

export const saveEmployee = async (employeeData) => {
  try {
    const docRef = await addDoc(employeesCollectionRef, employeeData);
    return docRef.id;
  } catch (error) {
    console.error("Employee 저장 에러: ", error);
    throw error;
  }
};

export const fetchEmployees = async () => {
  try {
    const querySnapshot = await getDocs(employeesCollectionRef);
    const employees = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return employees;
  } catch (error) {
    console.error("Employee 조회 에러: ", error);
    throw error;
  }
};
