class Auth {
    constructor() {
        this.authenticated = false;
        this.userEmail = ''
    }

    login(cb) {
        this.authenticated = true;
        cb();
        console.log('auth user userEmail ' + this.userEmail)
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
