const API_URL = `http://localhost:4000`

export const updateBlog = async (blog) => {
    
    const response = await fetch(`${API_URL}/blogs/items/${blog._id}`, {
        // what method?
        method: 'PATCH',
        // type of content?
        headers: {
            'Content-Type': 'application/json'
        },
        // updated the "text" in your model with the text you sent as parameter 
        body: JSON.stringify({
            text: blog.text,
            // image: blog.image

    })
    })
    const json = await response.json()
    return json
}