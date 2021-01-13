function WordInput(props) {
  
  const { word, updateWord } = props;

  return (
    <>
      <label htmlFor={word.wordNumber}>{word.label}</label>
      <input 
        onChange={(e) => updateWord(e)} type="text" 
        name={word.wordNumber} 
        id={word.wordNumber} 
        required
        value={word.word}
      />
    </>
  )
}

export default WordInput;