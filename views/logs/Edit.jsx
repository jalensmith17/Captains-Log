const React = require('react')

function Edit(props) {
    const { title, _id, shipIsBroken, entry } = props.log

    return(
        <div>
            <h1>{title} Edit Page</h1>
            <a href="/logs">Back to Logs Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST"> <br/>
                Title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
                Ship Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit