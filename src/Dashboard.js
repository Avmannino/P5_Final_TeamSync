import React from 'react'
import SideBar from './Sidenav'
import Card from './Card'

export default function Dashboard() {
    return (
        <>
            <div className='side-nav'>
                <SideBar />
            </div>
            <div className='table'>
                <Card />
            </div>
        </>
    )
}
