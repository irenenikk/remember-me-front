const {defineSupportCode} = require('cucumber');
const Nightmare = require('nightmare');
const {App} = require('./page-objects/app');
const StaticServer = require('static-server');

function MinimalistConstructor() {
    this.start = () => {
        this.server = new Promise((resolve) => {
            const server = new StaticServer({
                rootPath: 'build',
                host: 'localhost',
                port: 3001
            });

            server.start(() => {
                resolve(server);
            });
        });

        return this.server;
    };

    this.stop = () => {
        return this.server.then((server) => {
            return new Promise((resolve) => {
                server.stop();
                resolve();
                return server;
            })
        });
    };
}

function getNightmareOptions(withDevTools) {
    const baseOptions = {
        show: true
    };

    if (withDevTools) {
        baseOptions.openDevTools = {
            mode: 'detach'
        };
    }

    return baseOptions;
}

defineSupportCode(function ({setWorldConstructor, Before, After}) {
    setWorldConstructor(MinimalistConstructor);

    Before(function () {
        this.nightmare = new Nightmare(
            getNightmareOptions(true)
        );
        this.app = new App(this.nightmare);

        return this.start();
    });

  After(function () {
        return new Promise((resolve) => {
            this.nightmare.end()
                .then(resolve);
        })
            .then(() => {
                this.app = null;
                this.nightmare = null;

                return this.stop();
            });
    });
});
