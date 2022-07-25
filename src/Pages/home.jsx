import React from 'react'

const home = () => {
    return (
        <div>
            <section className="container">
                <form id="my-form">
                    <h1>Add User</h1> 
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="text" id="email" />
                    </div>
                    <input class="btn" type="submit" value="Submit" />
                </form>
                <ul className="users">
                    <ul class="items">
                        <li class="item">Item 1</li>
                        <li class="item">Item 2</li>
                        <li class="item">Item 3</li>
                    </ul>
                </ul>          
            </section>
        </div>
    )
}

export default home
