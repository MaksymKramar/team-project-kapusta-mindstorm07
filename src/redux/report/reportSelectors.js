export const getReports = (state) => state.report.items;
export const isLoadingValue = (state) => state.report.isLoading;
export const getCategoriesExpenses = (state) =>
  state.report.categories.expenses;
export const getCategoriesIncomes = (state) => state.report.categories.incomes;
export const getDescription = (state) => state.report.description;
export const getMonth = (state) => state.report.date.month;
export const getYear = (state) => state.report.date.year;
export const getCategorySums = (state) => state.report.categorySums;
