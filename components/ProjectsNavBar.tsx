import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem:FunctionComponent<{value:Category | 'all', handlerFilterCategory:Function, active:string}> = ({
    value,
    handlerFilterCategory,
    active
}) => {

    let className = "capitalize cursor-pointer hover:text-green";
    if(active === value) className += " text-green";

    return (
    <li 
        className={className}
        onClick={()=>handlerFilterCategory(value)}
    >
        {value}
    </li>)
}




const ProjectsNavBar:FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
    return (
        <div className="flex space-x-3 px-3 py-2 overflow-x-auto list-none">
            <NavItem value="all" {...props}/>
            <NavItem value="C++" {...props}/>
            <NavItem value="C" {...props}/>
            <NavItem value="Qt Creator" {...props}/>
            <NavItem value="VHDL" {...props}/>
            <NavItem value="PCB" {...props}/>
            <NavItem value="WEB" {...props}/>
        </div>
    )
}

export default ProjectsNavBar