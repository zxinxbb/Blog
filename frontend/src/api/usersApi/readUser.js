const API_URL = `http://localhost:4000`

export const getUsers = async () => {
    
     let response = await fetch(`${API_URL}/users/items`)
   
     let data = await response.json()
    
     return data
}