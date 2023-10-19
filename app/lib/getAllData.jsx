export default async function getAllData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
 
    if(!response.ok) {
       throw new Error('failed to fetch users')
    }
 
     return await response.json()
 }