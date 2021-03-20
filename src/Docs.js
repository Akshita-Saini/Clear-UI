import {useState} from "react";

import "./main.css";
import "./Docs.css";

import {Buttons, Lists, Avatars, Card, Modal} from "./components/index.js";

function SidebarItem({name, setSidebarItem})
{
    function clickHandler(name)
    {
        setSidebarItem(name);
        console.log("I have changed the useState!!",name);
    }
    return(
        <li onClick={() => clickHandler(name)}>{name}</li>
    );
}
function Docs(){
    const componentList = {"Buttons" : {component : <Buttons />}, "Lists" : {component : <Lists />}, "Avatars" : {component: <Avatars/>}, "Card" : {component : <Card />}, "Modal" : {component : <Modal />}};
    const [sidebarItem, setSidebarItem] = useState("Buttons");

    return(
        <div className="doc-container">
             <aside className="aside">
                <nav>
                    <ul>
                        {
                            Object.keys(componentList).map(componentName => <SidebarItem key={componentName} name={componentName} setSidebarItem={setSidebarItem}/>)
                        }
                    </ul>
                </nav>
            </aside> 
            <div className="docs">
                        {
                          componentList[sidebarItem].component
                        }
            </div>
        </div>
    );
}

export {Docs};