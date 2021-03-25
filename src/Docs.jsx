import {useState} from "react";

import "./main.css";
import "./Docs.css";


import {Avatars, Alerts, Badges, Buttons, Card, Colors, Lists, Modal, Navbar, Toast} from "./components/index.js";

function SidebarItem({name, setSidebarItem, sidebarItem})
{
    function clickHandler(name)
    {
        setSidebarItem(name);
        console.log("I have changed the useState!",name);
    }
    return(
        <li className="ls-item" onClick={() => clickHandler(name)} style={sidebarItem===name?{backgroundColor:"#474747", color:"#EDF2F4", borderRadius:"0.2rem"}:null}>{name}</li>
    );
}
function Docs(){
    /* "":{component:< />} */
    const componentList = {
        "Avatars" : {component : <Avatars/> },
        "Alerts"  : {component : <Alerts/>  },
        "Badges"  : {component : <Badges/>  },
        "Buttons" : {component : <Buttons/> }, 
        "Card"    : {component : <Card/>    }, 
        "Lists"   : {component : <Lists/>   }, 
        "Modal"   : {component : <Modal/>   },
        "Navbar"  : {component : <Navbar/>  },
        "Toast"   : {component : <Toast/>   },
        "Colors"  : {component : <Colors/>  }
    };
    const [sidebarItem, setSidebarItem] = useState("Buttons");

    return(
        <div className="doc-container">
             <aside className="aside">
                <ul className="ls">
                    <li className="ls-item highlighted">Installation Guide</li>
                    {
                        Object.keys(componentList).map(componentName => <SidebarItem key={componentName} name={componentName} setSidebarItem={setSidebarItem} sidebarItem={sidebarItem}/>)
                    }
                </ul>
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