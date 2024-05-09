export function delay(data : object[], delay : number = 500){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, delay)
    });
}