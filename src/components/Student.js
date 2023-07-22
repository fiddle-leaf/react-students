import Score from "./Score";

export default function Student({ student }) {
    //console.log(student.scores);
    return (
        <div className="student">
            {/**
             * <Student> component renders student's name & bio properties
             */}
            <h3>{student.name}</h3>
            <p>{student.bio}</p>
            <h3>Scores</h3>
            <div className="scores">
                {/**
                 * <Student> renders a <Score> component for each score object in the student's scores property.
                 */}
                {
                    //Map arrays of info to components
                    student.scores.map(score => {
                        return <Score score={score} key={score.score} />
                    })}
            </div>
        </div>
    )
}