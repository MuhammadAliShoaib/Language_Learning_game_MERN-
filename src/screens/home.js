import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../config/contextAPI/userContext";

function Home() {

    const navigate = useNavigate();
    const context = useContext(UserContext);
    const [language, setLanguage] = useState();
    const [difficulty, setDifficulty] = useState();
    const [valid, setValid] = useState(true);


    let handleLanguage = (event) => {
        setLanguage(event.target.value);

    }

    let handleDiff = (event) => {
        setDifficulty(event.target.value);
    }

    let handleSubmit = () => {
        navigate(`/quiz/${language}/${difficulty}`)
    }

    useEffect(() => {
        if (language && difficulty) {
            setValid(false)
        }
    }, [language, difficulty])

    useEffect(() => {
        console.log(context.info)
    }, [context])

    return (
        <>
            {<h1> Hello {context.info.firstName}!</h1>}
            <select onChange={handleLanguage}>
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="German">German</option>
            </select>

            <select onChange={handleDiff}>
                <option value="">Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>

            <button onClick={handleSubmit} disabled={valid}>Start Quiz</button>
        </>
    )
}

export default Home;