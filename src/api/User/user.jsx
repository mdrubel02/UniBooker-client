export const dbUser=async(user)=>{
    const res= await fetch(`https://uni-booker-server-ghru.vercel.app/users`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(user)
    })
    const data = await res.json()
    console.log(data);
    return data
}