import { __await } from "tslib";

class Api {
    constructor (url) {
        this.url = url;
    }

    async get () {
        let resp = {
            success: false,
            data: ''
        }
        try {
            const tmp = await fetch(this.url);
            const data = await tmp.json();
            resp.success = true;
            resp.data = data.articles;
        } catch (error) {
            resp.data = error;
        }
        return resp;
    }

}

export default Api;