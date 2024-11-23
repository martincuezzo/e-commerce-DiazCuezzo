const productos=[
    {   id:'1',
        nombre:`Camisa Boxy`,
        stock:20,
        descripcion:`camisa de lino`,
        img:'./camisa boxy.webp',
        precio:200,
        categoria:`camisa-larga`
    },
    {   id:'2',
        nombre:`Chino negro`,
        stock:20,
        descripcion:`sin detalle`,
        img:'./chino negro.webp',
        precio:2300,
        categoria:`pantalones`
    },
    {   id:'3',
        nombre:`Camisa lino clasico`,
        stock:20,
        descripcion:`camisa de lino`,
        img:'./camisa lino clasico.webp',
        precio:240,
        categoria:`camisa-corta`
    },
    {   id:'4',
        nombre:`Gorra Rock`,
        stock:20,
        descripcion:`sin descripcion`,
        img:'./gorra rock.webp',
        precio:2220,
        categoria:`accesorios`
    },
    {   id:'5',
        nombre:`Remera Yellow`,
        stock:20,
        descripcion:`algodon`,
        img:'./remera yellow.webp',
        precio:2030,
        categoria:`remeras`
    }
    
    
    ]
    export const getProductos= ()=>{
        let error=false
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (error){
                    reject(`hay un error, intente mas tarde`)
                }else{
                    resolve(productos)
                }
        
            },2000)
        })
    
    }

    export const getOneProduct = (id) =>{
     let error = false
     return new Promise ((resolve, reject)=>{
         setTimeout(()=>{
             if(error){
                 reject('Hubo un error')
             }else{
                 let onProduct = productos.find((item)=> item.id === id)
                 resolve(onProduct)
             }
         },2000)
     })
 }