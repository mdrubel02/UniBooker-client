export const imageUpload=async(formData)=>{
    const res = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=3553ac76de47a575a54c28abe9ce8e93`,{
     method:'POST',
     body: formData
    })
    const data = await res.json()
    return data
 }