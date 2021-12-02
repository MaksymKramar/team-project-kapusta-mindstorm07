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

export async function getTransByMonthMinus(date) {
  const { data } = await axios.get(`api/transactions/${date}?type=false`);
  return data;
}

export async function getTransByMonthPlus(date) {
  const { data } = await axios.get(`api/transactions/${date}?type=true`);
  return data;
}

export async function getFullTransInfo({ date, type }) {
  const { data } = await axios.get(
    `api/transactions/?type=${type}&date=${date}`
  );
  return data;
}

export async function addBalance(balanceSum) {
  const { data } = await axios.patch("api/auth/user", balanceSum);
  return data;
}

export async function getSummary() {
  const { data } = await axios.get("api/transactions/report");
  return data;
}
