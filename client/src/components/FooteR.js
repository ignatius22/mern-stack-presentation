import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function FooteR() {
    return (
        <div>
            <div className="d-flex flex-column">
                <footer className="footer">
                    <div>
                    <a href="https://mearnstackapp.herokuapp.com">Soul UI</a>
                    <span>&copy; 2020 Soul UI.</span>
                    </div>
                    <div className="ml-auto">
                    <span>Powered by</span>
                    <a href="https://mearnstackapp.herokuapp.com">Soul UI</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default FooteR
