import React from 'react'

const Footer = () => {
    var copyright = new Date();
    return (
        <footer>
            <div className="container">
                <div className="flex-footer">
                    <p style={{ color: 'white' }}>Copyright &copy; {copyright.getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer