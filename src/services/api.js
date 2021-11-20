import axios from "axios";

axios.defaults.baseURL = "https://kapusta-backend-project.herokuapp.com/";

export async function getAllCategories() {
  const { data } = await axios.get("api/categories");
  return data;
}

export async function createCategory(category) {
  const { result } = await axios.post("api/categories", category);
  return result;
}

export async function deleteCategory(id) {
  await axios.delete(`api/categories/${id}`);
  return id;
}
///// TRANSACTION////////////////////////////////////
export async function addTransaction(transaction) {
  const { data } = await axios.post("api/transactions/add", transaction);
  return data;
}

export async function deleteTransactionById(id) {
  await axios.delete(`api/transactions/${id}`);
  return id;
}

export async function getTransByMonth(date) {
  const { data } = await axios.get(`api/transactions/${date}`);
  return data;
}

export async function getFullTransInfo({ type, date }) {
  const { data } = await axios.get(`api/transactions/?${type}=${date}`);
  return data;
}
