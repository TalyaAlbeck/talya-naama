
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

export default apiRequests;

// const postOptions = {
//     method: 'post',
//     body: JSON.stringify(myNewItem)
// }
// const result = await apiRequests('http://localhost:3000/users', postOptions);
// if (result) setFetchError(result);