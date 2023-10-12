class Session {
    setToken(token) {
        localStorage.setItem("token", token);
    }

    getToken() {
        return localStorage.getItem("token");
    }

    setUserDetails(userDetails) {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }

    getUserDetails() {
        return JSON.parse(localStorage.getItem("userDetails"));
    }
}

const session = new Session(); // Create an instance of the Session class

export const {
    setToken,
    getToken,
    setUserDetails,
    getUserDetails
} = session;