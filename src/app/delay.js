export function delay(data, delay = 500){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, [delay])
    });
}