import { useState, useEffect   } from "react";

function Typer() {
  const lorem = `Pellentesque libero risus, tempor ut nulla ac, dapibus consequat mi. Nam vitae suscipit neque, nec rhoncus nunc. Fusce sit amet rutrum felis.`
  const [timer, setTimer] = useState(0);
  const [words, setWords] = useState(0);
  const [errors, setErrors] = useState(0);
  const [myText, setMyText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isTyping) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  const handleChange = (e) => {
    const userInput = e.target.value;
    if (!isTyping) {
      setIsTyping(true); 
    }

    setMyText(userInput);
    const userWords = userInput.trim().split(/\s+/).filter(Boolean);
    const loremWords = lorem.trim().split(/\s+/).filter(Boolean);

    // Comparer avec lorem et compter les erreurs et les mots corrects
    let errorCount = 0;
    let inputWords = 0;
    // alert(loremWords.length);
    for (let i = 0; i < Math.min(loremWords.length, userWords.length); i++) {
      if(loremWords[i] !== userWords[i]) {
      if (loremWords[i-1] !== userWords[i-1]) {
        errorCount++;
      }}
      if (loremWords[i] === userWords[i]) {
        inputWords++;
      }
      if (inputWords === loremWords.length) {
        setIsTyping(false);
        setTimeout(() => {
          alert("Vous avez gagné en " + timer + " secondes !");
        }, 200);
      }
    }
    setWords(inputWords);
    setErrors(errorCount);
  };

  const handleRestart = () => {
    setTimer(0);
    setWords(0);
    setErrors(0);
    setMyText("");
    setIsTyping(false);
  };


  return (
    <div className="container">
      <h1>Typer</h1>
      <div className="row align-items-start">
        <div className="col-12">
          <div className="row mb-3">
            <div className="col">Timer : {timer}</div>
            <div className="col">Words : {words}</div>
            <div className="col">Errors : {errors}</div>

            
            <div className="col me-0">
              <button className="btn btn-primary" onClick={handleRestart}>
                Restart
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>{lorem}</p>
          </div>
          
          <div className="col-6">
            <textarea
              className="form-control"
              rows="10"
              cols="50"
              name="myText"
              value={myText}
              onChange={handleChange}></textarea>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Typer