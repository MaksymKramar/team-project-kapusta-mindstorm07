const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.name;

const getIsLoading = (state) => state.auth.isLoading;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getIsLoading,
};

export default authSelector;
