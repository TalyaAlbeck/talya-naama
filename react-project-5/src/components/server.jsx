
const apiRequests = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('please reload the page');
    } catch(err) {
        errMsg = err.massage;
    } finally {
        return errMsg;
    }
}

export async function updateList(id, list) {
    const updateOption = {
    method: 'PATCH',
    body: JSON.stringify({todo: list})
}
const result = await apiRequests(`http://localhost:3000/users/${id}`, updateOption);
if (result) setFetchError(result);
}

