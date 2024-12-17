export const productosdb=[
    {   
        nombre:`Chino negro`,
        stock:20,
        descripcion:`sin detalle`,
        img:'../chino negro.webp',
        precio:2300,
        categoria:`pantalones`
    },
    {   
        nombre:`Camisa lino clasico`,
        stock:20,
        descripcion:`camisa de lino`,
        img:'../camisa lino clasico.webp',
        precio:240,
        categoria:`camisa-larga`
    },
    {   
        nombre:`Gorra Rock`,
        stock:20,
        descripcion:`sin descripcion`,
        img:'../gorra rock.webp',
        precio:2220,
        categoria:`accesorios`
    },
    {   
        nombre:`Remera Yellow`,
        stock:20,
        descripcion:`cuello mao`,
        img:'../remera yellow.webp',
        precio:2030,
        categoria:`remeras`
    },
    {   
        nombre:`Camisa Lino Raya ancha`,
        stock:10,
        descripcion:`algodon`,
        img:'../camisa lino raya.webp',
        precio:2030,
        categoria:`camisa-larga`
    },
    {  
        nombre:`Camisa Raya Ancha`,
        stock:10,
        descripcion:`algodon`,
        img:'../Camisa Raya Ancha.webp',
        precio:2030,
        categoria:`camisa-larga`
    },
    {   
        nombre:`Camisa Lino rayado`,
        stock:10,
        descripcion:`algodon`,
        img:'../Camisa Lino rayado.webp',
        precio:2030,
        categoria:`camisa-larga`
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