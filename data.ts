import {RiComputerLine} from 'react-icons/ri'
import { IProject, IService, ISkill } from './type';
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

export const projects:IProject[] = [ 
    {
        id:1,
        name: "Qt HMI interface development to pilot a motor",
        description: 
            "This project allows to monitor the current sensing in a motor",
        image_path: "/images/ihmmotor.jpg",
        deployed_url: "https://github.com/xaviSalazar/IHMstage",
        github_url: "https://github.com/xaviSalazar/IHMstage",
        category : ["C++"],
        key_techs :["C++","Qt Creator"],

    },
    {
        id:2,
        name: "Embedded Image Classification Prototype",
        description: 
            "Image Classification Microcontroller (Edge computing)",
        image_path: "/images/pcbcircuit.jpg",
        deployed_url: "private",
        github_url: "private",
        category : ["C++"],
        key_techs :["C++","ESP32"],

    },
    {
        id:3,
        name: "FPGA HDMI image generator",
        description: 
            "HDMI 1.0 protocol implementation in a FPGA",
        image_path: "/images/vhdl.jpg",
        deployed_url: "https://github.com/orgs/PGE-M2SME/dashboard",
        github_url: "https://github.com/orgs/PGE-M2SME/dashboard",
        category : ["VHDL"],
        key_techs :["VHDL","FPGA"],

    },
]