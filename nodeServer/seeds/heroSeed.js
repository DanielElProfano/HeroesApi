const express = require('express');
const mongoose = require('mongoose');
const Hero = require('../model/Hero')
const fetch = require('node-fetch');

DB_URL = 'mongodb://localhost:27017/Heroes';


mongoose.connect(DB_URL,{

    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
.then ( ()=>{
    console.log("conectado")
    addmongo();
})
.catch (()=>{
    console.log("Error conecying ti DB");
});

addmongo = async() =>{
    try{
        const array = [];
        const alterEgos = 'alter-egos';
        const placeOfBirth = 'place-of-birth';
        const firstAppearance ='first-appearance';
        const fullName = 'full-name';
        const hairColor = 'hair-color';
        const eyeColor = 'eye-color';
        const groupAffiliation = 'group-affiliation';

            for (let id = 1; id <= 732; id++){
                
            const data = await fetch(`https://www.superheroapi.com/api.php/10217431065143700/${id}`);
       
            console.log("id: " + id)
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
                    groupAffiliation: hero.connections[groupAffiliation],
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
        
       }
    
        console.log('Scrap Finalizado')
    
    }catch (error){
        console.log("error downloading Api" + error)
    
    }
        
}


