const React = require('react');

function New(props) {
    return (
        <div>
            <h1>New Log Page</h1>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" placeholder="Title" /> <br/>
                Entry: <input type="text" name="entry" placeholder="Entry" /> <br/>
                Ship Broken: <input type="checkbox" name="shipIsBroken" /> <br/>
                <input type="submit" name="" value="Create Log Entry"/>
            </form>
        </div>
    )
}