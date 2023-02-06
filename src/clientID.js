module.exports = function pre(body) {
    if (body.action === "set") {
        if (body.details === "zenius.net") {
            var clientIDL = "1068948686454935692";
            return clientIDL;

        }

        if (body.details === "www.youtube.com") {
            var clientIDL = "1068933736349061270";
            return clientIDL;
        }

        if (body.details === "github.com") {
            var clientIDL = "1068945800283037848";
            return clientIDL;
        }
        else {
            var clientIDL = "1068945800283037848";
            return clientIDL;
        }
    }
}