const API_URL = `http://localhost:4000`

export const addBlog = async (blog) => {
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { text: blog , date: blog , image: blog}
    const response = await fetch(`${API_URL}/blogs/item`, {
        // method type?
        method: 'POST',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    return json
}