const LS_KEY = {
  auth_token: 'loginUserDetail',
};
let storageType = checkStorage();
function checkStorage() {
  if (!window.localStorage.getItem('ex-fg')) {
    window.localStorage.setItem('ex-fg', 'check');
  }
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
};

const destroy = {
  authToken: () => {
    checkStorage().removeItem(LS_KEY.auth_token);
  },
};

export const storage = {
  set,
  fetch,
  destroy,
};
