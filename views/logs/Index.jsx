const React = require('react')

function Index(props) {
    return (
        <div>
            <h1>Logs Index Page</h1>
            <a href="/logs/new">Create a New Log</a>
            <ul>
                {props.logs.map((log, i) => {
                    return (
                        <li key={log._id}>
                            <a href={`/logs/${log._id}`}>{log.title}</a> - {log.entry}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

module.exports = Index