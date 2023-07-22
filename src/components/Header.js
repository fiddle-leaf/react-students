
export default function Header() {
    const goals = [
        'Initialize state using useState',
        'Pass info as props from a parent to a child component',
        'Map arrays of info to components',
    ]
    return (
        <header>
            <h2>Assigment</h2>
            <ul>
                {
                    //Map arrays of info to components
                    goals.map(goal => {
                        return <li key={goals.lastIndexOf(goal)}>{goal}</li>
                    })
                }
            </ul>
        </header>
    )
}