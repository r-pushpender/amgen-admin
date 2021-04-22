const LS_KEY = {
  auth_token: 'loginUserDetail',
};
let storageType = checkStorage();
function checkStorage() {
  window.localStorage.setItem('ex-fg', 'check');
  if (window.localStorage.getItem('ex-fg')) return 'localStorage';
  else return 'sessionStorage';
}

const set = {
  authToken: (data) => {
    localStorage.setItem(
      LS_KEY.auth_token,
      JSON.stringify({
        auth_token: data,
      })
    );
  },
};

const fetch = {
  authToken: () => {
    const data = localStorage.getItem(LS_KEY.auth_token);
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
    localStorage.removeItem(LS_KEY.auth_token);
  },
};

export const storage = {
  set,
  fetch,
  destroy,
};
