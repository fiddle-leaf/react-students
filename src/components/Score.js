export default function Score({ score }) {
    //inline styling 
    
    return (
        <div>
            {/**
             * <Score> component renders the score object's date & score properties.
             */}
            <h4>{score.date}</h4>
            <h4>Score: {score.score}</h4>
        </div>
    )
}