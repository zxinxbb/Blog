const API_URL = `http://localhost:4000`

export const getBlog = async (id) => {

    let response = await fetch(`${API_URL}/blogs/item/${id}`)
    let data = await response.json()
    return data
}   