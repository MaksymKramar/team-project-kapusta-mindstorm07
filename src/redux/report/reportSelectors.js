export const getReports = (state) => state.report.items;
export const isLoadingValue = (state) => state.report.isLoading;
export const getCategoriesExpenses = (state) =>
  state.report.categories.expenses;
export const getCategoriesIncomes = (state) => state.report.categories.incomes;
