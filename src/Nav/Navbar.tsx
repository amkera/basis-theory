import { NavLink } from "react-router-dom"
import "./NavBar.css"
import { NavBarItems, NavBarItemsProps } from "./NavBarItems"

const NavBar = () => {
  const navBarItems = NavBarItems.map(
    ({ title, url }: NavBarItemsProps, index: number) => {
      return (
        <li className="navbar-item" key={index}>
          <NavLink to={url}>{title}</NavLink>
        </li>
      )
    }
  )

  return (
    <nav>
      <ul className="navbar-items">{navBarItems}</ul>
    </nav>
  )
}

export default NavBar
