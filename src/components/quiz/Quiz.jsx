import { useState } from 'react'
import './quiz.css'

export default function Quiz() {

const [questions, setQuestion] = useState([
{
  questionText: 'What is the capital of France?',
                    answerOptions: [
                        { answerText: 'New York', isCorrect: false },
                        { answerText: 'London', isCorrect: false },
                        { answerText: 'Paris', isCorrect: true },
                        { answerText: 'Dublin', isCorrect: false },
                    ],
},
{
  questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { answerText: 'Jeff Bezos', isCorrect: false },
                        { answerText: 'Elon Musk', isCorrect: true },
                        { answerText: 'Bill Gates', isCorrect: false },
                        { answerText: 'Tony Stark', isCorrect: false },
                    ],
},
{
  questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { answerText: 'Apple', isCorrect: true },
                        { answerText: 'Intel', isCorrect: false },
                        { answerText: 'Amazon', isCorrect: false },
                        { answerText: 'Microsoft', isCorrect: false },
                    ],
},
{
  questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { answerText: '1', isCorrect: false },
                        { answerText: '4', isCorrect: false },
                        { answerText: '6', isCorrect: false },
                        { answerText: '7', isCorrect: true },
                    ],
}
])

const [currentQuastion, setCurrentQuastion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(0)


const handelCurentQuastion = (isCorrect)=>{
  setCurrentQuastion(currentQuastion+1)
  console.log(isCorrect);
  if(isCorrect){
    setScore(score+1)
  }
}
// console.log(questions.map[currentQuastion]);
  return (
    
               
                <div className='app'>
                        {currentQuastion >= 4 ?<div className='score-section'>
                        You scored {score} out of 4
                    </div>
                        :<> <div className='question-section'>
                          <div className='question-count'>
                              <span>Question {currentQuastion+1}</span>/ 4
                          </div>
                            <div className='question-text'>{questions[currentQuastion].questionText}</div>
                      </div>
                      
                      <div className='answer-section'>
                      {questions[currentQuastion].answerOptions.map(am => {
                        return <button onClick={() => handelCurentQuastion(am.isCorrect)}>{am.answerText}</button>
                      })}
                      </div> </> }
                    </div>
  )
}
