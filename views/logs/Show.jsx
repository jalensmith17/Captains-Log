const React = require('react')

function Show(props) {
    return (
        <div>
            <h1>{props.log.name}</h1>
            <a href="/logs">Back to Logs Index Page</a>
            <p>
                The {props.log.title} is {props.log.shipIsBroken ? "broken" : "not broken"} <br/>
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.log.title}`} />
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}>
                    <button>{`Edit this ${props.log.title}`}</button>
                </a>
            </div>
        </div>
    )
}

module.exports = Show