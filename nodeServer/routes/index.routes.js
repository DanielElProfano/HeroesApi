const express = require('express');
const Hero = require('../model/Hero');

const router = express.Router();

router.get('/', (req, res, next) => {
    
  res.status(200).render('index', { title: 'Upgrade Hub - Handlebars Index' });
});
router.get('/heroes', async(req, res, next) => {
    try{
        let heroes = await Hero.find({id :{$lte:10}});
        return res.status(200).render('index', { heroes });
    }catch(error){
        next(error);
    }
})
router.get('/heroDetail/:id', async (req, res, next) =>{
    try{
        id = req.params.id;
        title = 'Details of: ';
        let hero = await Hero.findOne({ id : id});
        return res.status(200).render('heroDetail', { hero, title });
    }catch(error){
        next(error)
    }

});
router.get('/name/:name', async(req, res, next) =>{
 
    const name = req.params.name;
    name.toLowerCase()
    
    try{
        const hero = await Hero.find({name: name})
                
        return res.(200).json(hero);
    }
    catch(error){
        next(error)
    }
})
router.get('/filter', async (req, res, next) => {

    const gender = req.query.gender;
    const powerstat = req.query.powerStat;
    const align = req.query.align;
  
    if (powerstat){
    
        if(powerstat === "power"){
            console.log(powerstat)
            try{
                console.log(powerstat)
                if(align && gender){
                    const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]}).sort({"powerStats.power": "desc" });
                    return res.status(200).json(heroes);
                }
                if(align){
                    const heroes = await Hero.find({"biography.alignment": align}).sort({"powerStats.power": "desc" });
                    return res.status(200).json(heroes);
                }
                if(gender){
                    const heroes = await Hero.find({"appearance.gender": gender}).sort({"powerStats.power": "desc" });
                    return res.status(200).json(heroes);
                }
                
                const heroes = await Hero.find().sort({"powerStats.power": "desc" });
                return res.status(200).json(heroes);
                
                }catch(error){
                    next(error);
                }
         
         }
         if(powerstat === "intelligence"){
            console.log(powerstat)
            try{
                console.log(powerstat)
                if(align && gender){
                    const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]}).sort({"powerStats.intelligence": "desc" });
                    return res.status(200).json(heroes);
                }
                if(align){
                    const heroes = await Hero.find({"biography.alignment": align}).sort({"powerStats.intelligence": "desc" });
                    return res.status(200).json(heroes);
                }
                if(gender){
                    const heroes = await Hero.find({"appearance.gender": gender}).sort({"powerStats.intelligence": "desc" });
                    return res.status(200).json(heroes);
                }
                
                const heroes = await Hero.find().sort({"powerStats.intelligence": "desc" });
                return res.status(200).json(heroes);
                
                }catch(error){
                    next(error);
                }
           
         }
         if(powerstat === "strength"){
            console.log(powerstat)
            try{
                console.log(powerstat)
                if(align && gender){
                    const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]}).sort({"powerStats.strength": "desc" });
                    return res.status(200).json(heroes);
                }
                if(align){
                    const heroes = await Hero.find({"biography.alignment": align}).sort({"powerStats.strength": "desc" });
                    return res.status(200).json(heroes);
                }
                if(gender){
                    const heroes = await Hero.find({"appearance.gender": gender}).sort({"powerStats.strength": "desc" });
                    return res.status(200).json(heroes);
                }
                
                const heroes = await Hero.find().sort({"powerStats.strength": "desc" });
                return res.status(200).json(heroes);
                
                }catch(error){
                    next(error);
                }
          
         }
         if(powerstat === "speed"){
            console.log(powerstat)
            try{
                console.log(powerstat)
                if(align && gender){
                    const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]}).sort({"powerStats.speed": "desc" });
                    return res.status(200).json(heroes);
                }
                if(align){
                    const heroes = await Hero.find({"biography.alignment": align}).sort({"powerStats.speed": "desc" });
                    return res.status(200).json(heroes);
                }
                if(gender){
                    const heroes = await Hero.find({"appearance.gender": gender}).sort({"powerStats.speed": "desc" });
                    return res.status(200).json(heroes);
                }
                
                const heroes = await Hero.find().sort({"powerStats.speed": "desc" });
                return res.status(200).json(heroes);
                
                }catch(error){
                    next(error);
                }
         }
         if(powerstat === "durability"){
            try{
            console.log(powerstat)
            if(align && gender){
                const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]}).sort({"powerStats.durability": "desc" });
                return res.status(200).json(heroes);
            }
            if(align){
                const heroes = await Hero.find({"biography.alignment": align}).sort({"powerStats.durability": "desc" });
                return res.status(200).json(heroes);
            }
            if(gender){
                const heroes = await Hero.find({"appearance.gender": gender}).sort({"powerStats.durability": "desc" });
                return res.status(200).json(heroes);
            }
            
            const heroes = await Hero.find().sort({"powerStats.durability": "desc" });
            return res.status(200).json(heroes);
            
            }catch(error){
                next(error);
            }
         }
         if(powerstat === "combat"){
            console.log(powerstat)
            try{
               
                if(align && gender){
                    const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]}).sort({"powerStats.combat": "desc" });
                    return res.status(200).json(heroes);
                }
                if(align){
                    const heroes = await Hero.find({"biography.alignment": align}).sort({"powerStats.combat": "desc" });
                    return res.status(200).json(heroes);
                }
                if(gender){
                    const heroes = await Hero.find({"appearance.gender": gender}).sort({"powerStats.combat": "desc" });
                    return res.status(200).json(heroes);
                }
                
                const heroes = await Hero.find().sort({"powerStats.combat": "desc" });
                return res.status(200).json(heroes);
            
            }catch(error){
                next(error);
            }
         }
    }
    
    
    if(align && gender){
        try{
            
            const heroes = await Hero.find({$and:[{"biography.alignment": align},{"appearance.gender": gender}]});
            return res.status(200).json(heroes);
    
        }catch(error){
            next(error);
        }
    }
    if(gender){
        try{
          
            const heroes = await Hero.find({"appearance.gender": gender});
            return res.status(200).json(heroes);
    
        }catch(error){
            next(error);
        }
    }
    if(align){
        try{
            
            const heroes = await Hero.find({"biography.alignment": align});
            return res.status(200).json(heroes);
    
        }catch(error){
            next(error);
        }
    }
    
})
module.exports = router;