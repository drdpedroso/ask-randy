import React, {useEffect, useState} from 'react';

const answerMap = {
    true: 'Yeah, thats dope!',
    false: 'No way, man!'
}

const Answer = () => {
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        setAnswer(getRandomAnswer())
    }, []);

    const getRandomAnswer = () => {
        return Math.random() >= 0.5
    }

    return (
        <div style={{textAlign: 'center'}}>
            {answer !== null && <h1>{answerMap[answer]}</h1>}
        </div>
    );
};

export default Answer;
