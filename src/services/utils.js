import config from '../config'

export function createUrl(path){
    return `${config.serverUrl}/${path}`
}

export function createError(error){
    return {ststus : 'error', error}
}


