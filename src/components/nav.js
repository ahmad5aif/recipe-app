import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" style={({isActive})=>{return{borderBottom: isActive ? '2px solid #2C3333' : ''}}}>home</NavLink></li>
                <li><NavLink to="/categories" style={({isActive})=>{return{borderBottom: isActive ? '2px solid #2C3333' : ''}}}>categories</NavLink></li>
                <li><NavLink to="/about" style={({isActive})=>{return{borderBottom: isActive ? '2px solid #2C3333' : ''}}}>about</NavLink></li>
            </ul>
        </nav>
    )
}

export default function Navbar() {
    return (
        <>
        <div className="App-header container">
            <Nav />
            <h1><Link to="/"> Resp'eee!! </Link></h1>
        </div>
        <Outlet />
        </>
    )
}
