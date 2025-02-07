function Redirection(url) {
  document.location.href = url;
}

// Fonction pour POST
const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data),
    });
    if (!response.ok) {
      return null;
    }
    const post = await response.json();
    return post;
  } catch (error) {
    return null;
  }
};

// Fonction pour GET
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const get = await response.json();
    return get;
  } catch (error) {
    return null;
  }
}

// Fonction pour PUT
async function putData(url, data, id) {
  try {
    const response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return null;
    }

    const put = await response.json();
    return put;
  } catch (error) {
    return null;
  }
}

// Fonction pour DELETE
async function deleteData(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

const getAuth = () => {
  const auth = localStorage.getItem("auth");
  const token = auth ? JSON.parse(auth) : null;
  return token;
};

const logOut = () => {
  localStorage.removeItem("auth");
  Redirection("http://127.0.0.1:5500/login.html");
};

const auth = getAuth();

// console.log(auth);
// console.log(document.location);
const urlPublic = ["/login.html", "/register.html"];
const urlPrivate = [
  "/dashboard.html",
  "/settings.html",
  "/userDetail.html",
  "/update.html",
  "/updatePassword.html",
];

if (!auth) {
  if (!urlPublic.includes(document.location.pathname)) {
    Redirection("/login.html");
  }
} else {
  if (!urlPrivate.includes(document.location.pathname)) {
    Redirection("/dashboard.html");
  }
}
// document.addEventListener('DOMContentLoaded', function() {
// });
