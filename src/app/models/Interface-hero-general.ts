export interface InterfaceHeroGeneral {

    name : string;
    gender : string;
    image : string;
    alignment : string;
    id: number;
   
}

export interface InterfaceFilteHeroes{

    name : string;
    gender : string;
    image : string;
    alignment : string;
    id: number;
    intelligence : number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat :number;
}

export interface InterfaceHeroDetail {

    id: string;
    name : string;
    gender : string;
    race : string;
    weight : string[];
    image : string;
    intelligence : string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat :string;
    height  : string;
    base : string;
    fullName : string;
    groupAffiliation: string; 
    alterEgos: string;
    alignment : string;
    // eyeColor : string;
    // hairColor: string;
    // occupation : string;
    
}
export interface InterfacePowerStats{
    id: string;
    intelligence : string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat :string;
    name: string;

}

export interface InterfaceEmmitOutput{
    id: number;
    origenHire: boolean;
    fire: boolean;

}
