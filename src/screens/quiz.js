import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Quiz() {

    const [data, setData] = useState([]);
    const [resultArray,setResultArray] = useState([])
    const param = useParams();

    const [indexNumber, setIndexNumber] = useState(0);
    const [marks, setMarks] = useState(0);
    const [result, setResult] = useState(false);



    const [arr, setArr] = useState([
        {
            language: "English",
            difficult : "Easy",
            question: "What does HTML stand for?",
            answer: "Hyper Text Markup Language",
            options: [
                "Hyper Text Preprocessor",
                "Hyper Text Markup Language",
                "Hyper Text Multiple Language",
                "Hyper Tool Multi Language",
            ],
        },
        {
            language: "English",
            difficult : "Easy",
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheet",
            options: [
                "Common Style Sheet",
                "Colorful Style Sheet",
                "Computer Style Sheet",
                "Cascading Style Sheet",
            ],
        },
        {

            language: "English",
            difficult : "Medium",
            question: "What does PHP stand for?",
            answer: "Hypertext Preprocessor",
            options: [
                "Hypertext Preprocessor",
                "Hypertext Programming",
                "Hypertext Preprogramming",
                "Hometext Preprocessor",
            ],
        },
        {
            language: "English",
            difficult : "Medium",
            question: "What does SQL stand for?",
            answer: "Structured Query Language",
            options: [
                "Stylish Question Language",
                "Stylesheet Query Language",
                "Statement Question Language",
                "Structured Query Language",
            ],
        },
        {
            difficult : "Hard",
            language: "German",
            question: "Putzen ",
            answer: "To Clean",
            options: [
                "To Threaten",
                "To procrastinate",
                "To endager",
                "To spoil",
            ],
        },
        {
            language: "German",
            difficult : "Hard",
            question: "What is \"to write\"? ",
            answer: "Schrieben",
            options: [
                "Schrieben",
                "Schlange",
                "Schule",
                "lesen",
            ],
        }
    ])


    let filterData = () => {
        const newArray = arr.filter((x) => {
            return x.language === param.language && x.difficult===param.difficulty;
        })
        setData(newArray)
    }

    useEffect(() => {
        filterData();
    }, [arr])

    let checkAns = (selected, correct,index) => {
        if (selected === correct) {
            resultArray[index]=1;
        } else {
            resultArray[index]=0;
        }
    }

    let handleNext = ()=>{
        setIndexNumber(indexNumber + 1)
    }

    let handlePrevious = ()=>{
        setIndexNumber(indexNumber - 1)
    }

    let handleSubmit = ()=>{
        const counter = resultArray.reduce((count, value) =>    count + (value === 1 ? 1 : 0), 0);
        setMarks(counter)
        setResult(true)
    }



    return (
        <div className='App'>
            <div className='quiz'>

                <div className='box'>
                    <h1>Quiz</h1>
                </div>
                {data.length > 0 ? (
                    result ? (
                        <div>
                            <h3>Marks : {marks}</h3>
                            <h3>Percentage : {(marks / data.length) * 100}%</h3>
                        </div>) : (
                        <div>
                            <div className='sub'>
                                <h3>Question {indexNumber + 1} of {data.length}</h3>
                            </div>

                            <div className='questionBox'>
                                <h1>{data[indexNumber].question}</h1>
                            </div>
                            <div className="answerBox">
                                {
                                    data[indexNumber].options.map((e, i) => {
                                        return (
                                            <div key={i} className="options">
                                                <button onClick={() => { checkAns(e, data[indexNumber].answer,indexNumber) }}>{e}</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="buttons">
                                {indexNumber != 0 && <button className="previous" onClick={handlePrevious}>Previous</button>}
                                {indexNumber + 1 != data.length && <button className="next" onClick={handleNext}>Next</button>}
                                {indexNumber + 1 == data.length && <button onClick={handleSubmit}>Submit</button>}
                            </div>
                        </div>)) : (<h1>No Data Found</h1>)
                }
            </div>
        </div>
    );

}

export default Quiz;