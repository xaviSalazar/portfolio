import {RiComputerLine} from 'react-icons/ri'
import { IService, ISkill } from './type';
import { SiCplusplus } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import {BsCircleFill} from 'react-icons/bs'


export const services:IService[] = [

    {
        title: "C++ Developer",
        about: 
            "Good knowledge of writing code using C/C++ and Unix",
        Icon: SiCplusplus,
    },
    {
        title: "Hardware Skills",
        about: "I build, develop and test required prototypes. I do PCB schematics and harware tests.",
        Icon: GiCircuitry,
    },
    {
        title: "VHDL Developer",
        about: "I create and prepare VHDL designs with creative solutions",
        Icon: RiComputerLine,
    },

]


export const languages:ISkill [] = [
    {
        name:'Python',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name:'Javascript',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name:'React',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name:'C++',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'C',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'VHDL',
        level: '90%',
        Icon: BsCircleFill
    },
]

export const tools:ISkill [] = [
    {
        name:'QtCreator',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name:'TensorFlowLite',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name:'UML',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name:'Object-Oriented Programming',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'AgileMethodology and Scrum',
        level: '90%',
        Icon: BsCircleFill
    },
]
