const express = require('express');
const path = require('path');
const Hero = require('../model/Hero');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/allHeroes', async(req, res, next) =>{
    try{
        console.log('allHeroes')
        const allheroes = await Hero.find();
        return res.status(200).json(allheroes);
    }
    catch(error){
        next(error)
    }
})
router.get('/id/:id', async (req,res, next) =>{
    const id = req.params.id;
    try{
        const hero = await Hero.findOne({id: id});
        return res.status(200).json(hero);
    }catch(error){
        next(error);
    }
})

router.get('/name/:name', async(req, res, next) =>{
 
    const name = req.params.name;
    name.toLowerCase()
    console.log(typeof(name));
    try{
        const hero = await Hero.find({name: name})
                
        return res.status(200).json(hero);
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

router.get('/addMongo', async (req, res, next) => {
    try{
        const array = [];
        const alterEgos = 'alter-egos';
        const placeOfBirth = 'place-of-birth';
        const firstAppearance ='first-appearance';
        const fullName = 'full-name';
        const hairColor = 'hair-color';
        const eyeColor = 'eye-color';
   
            for (let id = 1; id <= 732; id++){
                
            const data = await fetch(`https://www.superheroapi.com/api.php/10217431065143700/${id}`);
                  
            const hero = await data.json();
            const newHero = new Hero(
             {
                id : Number(hero.id),
                name : hero.name,
                gender : hero.gender,
                image :{
                    url:hero.image.url
                },
                powerStats:{
                    intelligence: Number(hero.powerstats.intelligence) ? hero.powerstats.intelligence : 1,
                    strength: Number(hero.powerstats.strength) ? hero.powerstats.strength : 1,
                    speed: Number(hero.powerstats.speed) ? hero.powerstats.speed : 1,
                    durability: Number(hero.powerstats.durability) ? hero.powerstats.durability : 1,
                    power: Number(hero.powerstats.power) ? hero.powerstats.power : 1,
                    combat: Number(hero.powerstats.combat) ? hero.powerstats.combat : 1,
                    
                },
                biography:{
                    fullName: hero.biography[fullName],
                    alterEgos: hero.biography[alterEgos],
                    aliases: hero.biography.aliases,
                    placeOfBirth: hero.biography[placeOfBirth],
                    firstAppearance: hero.biography[firstAppearance],
                    publisher: hero.biography.publisher,
                    alignment: hero.biography.alignment
                },
                work:{
                    base: hero.work.base,
                    occupation: hero.work.occupation
                },
                connections:{
                    groupAffiliation: hero.connections.groupAffiliation,
                    relatives: hero.connections.relatives
                },
                appearance:{
                    eyeColor: hero.appearance[eyeColor],
                    hairColor: hero.appearance[hairColor],
                    gender: hero.appearance.gender,
                    race: hero.appearance.race,
                    height: hero.appearance.height,
                    weight: hero.appearance.weight
                }
                
               
            } );
            const saveHero =  await newHero.save(newHero)
            if (!saveHero){
                console.log("error id")
            }
          
       }
    
         
        
        return res.status(200).send("completado");
    
    }catch{
        console.log("error downloading Api")
        res.status(500).send("Error");
    }
        
    })
router.get('/duplicate', async (req, res, next) =>{ //elimina registros duplicado de la db, si hubiera
       
        const array=[];
        for(let i = 1; i<732; i++){
            const hero = await Hero.find({id: i});
            let id = hero._id;
           
            if(hero.length > 1){
                
                    let id = hero[1]._id;
                    const delHero = await Hero.findByIdAndDelete(id);
                    array.push(delHero);
                   
                };
               
                
            }
            return res.status(200).send(array);
        }
    
    );

module.exports = router;