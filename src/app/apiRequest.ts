export async function apiRequest(path : string, method = 'GET', bodyData = null){
    const response = await fetch(import.meta.env.VITE_URL + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('authTOKEN')
        },
        body: bodyData ? JSON.stringify(bodyData) : null,
    });
    const responseData = await response.json();
    return responseData
}