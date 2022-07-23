import {useState, useEffect} from "react";
import './Navigation.css';
import {getNav} from "../../../services/api";
import {Menu} from "antd";

export const Navigation = () => {

    const [nav, setNav] = useState([])
    useEffect(() => {
        const fetchNav = async () => {
            const data = await getNav()
            setNav(data)
        };
        fetchNav()
    }, [])

    const generateMenuAdditionalItems = (links, isSublink) => {
        return (
            links.map((link) => ({
                key: link.id,
                label: link.caption,
                children: (link.children ?? []).length > 0 ? generateMenuAdditionalItems(link.children ?? [], true):undefined
            }))
        )
    }

    const generateMenuMainItems = (links) => {
        return (links.map((link) => {
            if (typeof link.parent == 'undefined') {
                return  ({
                    key: link.id,
                    label: link.caption,
                    children: (link.children ?? []).length > 0 ? generateMenuAdditionalItems(link.children ?? [], true):undefined
                })
            }
        }))
    }

    return (
        <div>
            <Menu
                className="navigation"
                mode="horizontal"
                items={generateMenuMainItems(nav)}
            />
        </div>
    )


}