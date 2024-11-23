
const api = "http://localhost:8080"

export const authenticateUser = async(username, password) => { 
    const response = await fetch(`${api}/api/user/auth`, { 
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ 
                'username': username, 
                'password': password
            })
        })
        return response;
    
}

