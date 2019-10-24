import React from 'react'

import '../../styles/footer/_footer.scss'

const Footer = () => ( 
    <div className="container">
        <footer className="footer">
            <ul className="footer-list">
                <li>
                    <a className="footer-list-link" rel="noopener noreferrer" href="https://github.com/xparnie" target="_blank"><i className="fab fa-github-square"></i></a>
                </li>
                <li>
                    <a className="footer-list-link" rel="noopener noreferrer" href="https://twitter.com/xparnie" target="_blank"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li>
                    <a className="footer-list-link" rel="noopener noreferrer" href="mailto:akariwdim@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
                </li>
            </ul>
        </footer>
    </div>
)

export default Footer








