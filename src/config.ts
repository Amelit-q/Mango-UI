async function loadConfig() {
    const configPath = process.env.NODE_ENV
    return fetch(configPath, {method: "GET"}).then(res => res.json())
    // REACT_APP_API_BASEURL
}

export interface Config {
    readonly [key: string]: string

    readonly apiServiceHost: string
}

let config: Config

export async function getConfig() {
    try {
        const conf = await loadConfig()
        if (conf instanceof Object) {
            config = Object.assign({}, conf as Config)
            Object.freeze(config)
        }
        return Promise.resolve()
    } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e)
    }
}

export {config}
