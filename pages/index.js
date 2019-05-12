import React, {useState} from 'react'


const answerMap = {
    true: 'Yeah, thats dope!',
    false: 'No way, man!'
}

const Index = () => {
    const [answer, setAnswer] = useState(null);

    const getRandomAnswer = () => {
        return Math.random() >= 0.5
    }

    return (
        <div>
            <button style={{width: 150, fontSize: 20,borderRadius: 10}} onClick={() => setAnswer(getRandomAnswer())}> Ask Randy! </button>
            {answer !== null && <pre>{answerMap[answer]}</pre>}
        </div>
    )
}

export default Index
