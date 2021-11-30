const platos = require('../data/platosdb')


module.exports = {
    index : (req,res) => {
        res.render('index',{
            platos,
        }) 
    } ,   
    detail : (req,res) => {
        let plato = platos.find(plato => plato.id === +req.params.id);
        
        return res.render('detalleMenu', {
            plato
        });
    }

}
    
    
    
    
    
    
    

        /* let id = req.params.id; */   /* el objeto "params" lo que hace es capturar un objeto y enviarlo en el metodo request en este caso por eso se usa para los id porque te los manda de a uno */
/* 
        let plato = platos.find(plato => plato.id === +re.params.id); /* con el mas lo hacemos un numero  */

       /*  return res.send(plato)
       
    }
        
} */