export const getAllProducts = async ()=> {
    const res= await fetch('https://65270817917d673fd76d5d82.mockapi.io/products/products');
    if (!res.ok) 
        throw new Error ("No responde");
    const data = await res.json();
    return data;
}; 
