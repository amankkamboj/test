import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <>
    <div className='container'>
    <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none' href=''>Meetups App</a>
        <nav>
            <ul className='nav nav-pills'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>All Meetup</Link>
                </li>
                <li>
                    <Link className='nav-link' to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link className='nav-link' to='/favorities'>Favorities</Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
    </>
  )
}

export default MainNavigation;