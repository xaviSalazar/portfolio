import {RiComputerLine} from 'react-icons/ri'
import { IProject, IService, ISkill } from './type';
import { SiCplusplus } from "react-icons/si";
import { GiCircuitry } from "react-icons/gi";
import {BsCircleFill} from 'react-icons/bs';
import {DiPython} from 'react-icons/di';

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
    {
        title: "Python Developer",
        about: "Develop back-end components to improve responsiveness and overall performance",
        Icon: DiPython,
    },

]


export const languages:ISkill [] = [
    {
        name:'Python',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name:'Javascript',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name:'React',
        level: '65%',
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
        name: "QtCreator Human-Machine interface to pilot a motor",
        description: 
            "This project allows to monitor the current sensing in a motor. The project was validated with an oscilloscope, left side(IHM) and right side(oscilloscope measures) ",
        image_path: "/images/ihmmotor.jpg",
        deployed_url: "https://github.com/xaviSalazar/IHMstage",
        github_url: "https://github.com/xaviSalazar/IHMstage",
        category : ["C++","Qt Creator"],
        key_techs :["C++","Qt Creator"],

    },
    {
        id:2,
        name: "FPGA HDMI image generator",
        description: 
            "HDMI 1.0 protocol implementation in a FPGA",
        image_path: "/images/fpga.jpg",
        deployed_url: "https://github.com/orgs/PGE-M2SME/dashboard",
        github_url: "https://github.com/orgs/PGE-M2SME/dashboard",
        category : ["VHDL"],
        key_techs :["VHDL","FPGA"],

    },
    {
        id:3,
        name: "Legal-tech development",
        description: 
            "This is a prototype of a legal-tech website",
        image_path: "/images/legal_tech.png",
        deployed_url: "https://xavisalazar.github.io/legal-tech/",
        github_url: "private",
        category : ["WEB"],
        key_techs :["React JS", "Javascript", "Node js"],

    },
    {
        id:4,
        name: "CRM for whatsapp",
        description: 
            "This is a CRM for whatsapp currently using the latest api from META",
        image_path: "/images/crm_whatsapp.png",
        deployed_url: "https://xavisalazar.github.io/mui-whatsapp-app/",
        github_url: "private",
        category : ["WEB"],
        key_techs :["React JS", "Javascript", "Node js"],

    },
    {
        id:5,
        name: "LTE-CAT module PCB design and production",
        description: 
            "I conceived the PCB routing in a constrained board due to limiting size. This card allows to connect any Linux or Microcontroller to the mobile internet",
        image_path: "/images/InternetModule.jpg",
        deployed_url: "https://github.com/orgs/PGE-M2SME/dashboard",
        github_url: "https://github.com/orgs/PGE-M2SME/dashboard",
        category : ["PCB"],
        key_techs :["PCB","BOARD DESIGN"],

    },
]