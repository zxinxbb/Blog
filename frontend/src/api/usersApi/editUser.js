const API_URL = `http://localhost:4000`

export const editUser = async (user) => {
    
    const response = await fetch(`${API_URL}/users/item/${user._id}`, {
        // what method?
        method:'PATCH',

      
        // type of content?
        headers: {
            'Content-Type': 'application/json'
        },
        // body updated the "text" in your model with the text you sent as parameter 
        body: JSON.stringify(
            {
                username:user.text,
                password:user.text,
                email:user.text


            }
        )
    })
    const json = await response.json()
    return json
}