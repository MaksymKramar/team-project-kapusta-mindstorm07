export const getTransactionsTrue = (state) => state.transactions.itemsTrue;
export const getTransactionsFalse = (state) => state.transactions.itemsFalse;

export const isLoadingValue = (state) => state.transactions.isLoading;
export const getTransactionsTotalAmount = (state) =>
  state.transactions.totalAmount;
export const getTransactionsSum = (state) => state.transactions.sum;
export const getLoading = (state) => state.transactions.isLoading;


const getFilteredCategExp = createSelector(
  [getCategoriesExpenses],
  (arr, category) => arr?.find((ar) => ar.category === category)?.details
);

const getFilteredCategInc = createSelector(
  [getCategoriesIncomes],
  (arr, category) => arr?.find((ar) => ar.category === category)?.details
);


