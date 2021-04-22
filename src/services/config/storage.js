const LS_KEY = {
  auth_token: 'loginUserDetail',
  keep_logged_in: 'ex-fg'
};
let storageType = checkStorage();
function checkStorage() {
  if (window.localStorage.getItem('ex-fg')) return sessionStorage;
  else return localStorage;
}

const set = {
  authToken: (data) => {
    checkStorage().setItem(
      LS_KEY.auth_token,
      JSON.stringify({
        auth_token: data,
      })
    );
  },
  keepLoggedIn: () => {
    localStorage.setItem(
      LS_KEY.keep_logged_in,
      'check'
    );
  },
};

const fetch = {
  authToken: () => {
    const data = checkStorage().getItem(LS_KEY.auth_token);
    if (data) {
      try {
        const decoded = JSON.parse(data);
        return decoded.auth_token;
      } catch (err) { }
    }
  },
  keepLoggedIn: () => {
    const data = localStorage.getItem(LS_KEY.keep_logged_in);
    if (data) {
      return data;
    }
  },
};

const destroy = {
  authToken: () => {
    checkStorage().removeItem(LS_KEY.auth_token);
  },
  keepLoggedIn: () => {
    localStorage.removeItem(
      LS_KEY.keep_logged_in,
    );
  },
};

export const storage = {
  set,
  fetch,
  destroy,
};
