const API_URL = `http://localhost:4000`

export const getBlog = async (id) => {
    const response = await fetch(`${API_URL}/blogs/item/${id}`,{
    method:'GET',

      
        // type of content?
        headers: {
            'Content-Type': 'application/json'
        },
        // body updated the "text" in your model with the text you sent as parameter 
        
        
    
         } )
    let data = await response.json()
    // return the data collect from fetch 
    return data
}