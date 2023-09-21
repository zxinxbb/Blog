const API_URL = `http://localhost:4000`

export const addBlog = async (blog) => {
    
    let obj = { title: blog.title, text: blog.text , /* date: blog.date , */ image: blog.image}
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