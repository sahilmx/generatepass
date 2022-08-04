import { useState } from 'react';
import './App.css';
import './style.css';
import randomChar from './functions/generatePasswordFunctions.js'

function App() {
const [length, setLength] = useState(10);
const [lengthError, setLengthError] = useState('');
const [lowerCase, setLowerCase] = useState(true);
const [password, setPassword] = useState('')
const [upperCase, setUpperCase] = useState(true);
const [symbols, setSymbols] = useState(true);
const [numbers, setNumbers] = useState(true);
const [colorText, setColor] = useState('grey');
const [passStrengthMessage, setPassStrengthMessage] = useState('')
  
const generateRandomPassword =()=>{
	if(lengthError===''){
		const output = randomChar.generatePassword(lowerCase,upperCase,numbers,symbols,length);
		setPassword(output.finalPassword);
		passStrength=1;
		var passStrength =	output.passwordStrength
		switch(passStrength){
			case 1:
				{setColor('red');
				setPassStrengthMessage("Very Week");
				break;}

			case 2:
				{setColor('palevioletred');
				setPassStrengthMessage("Week");

				break;}
			case 3:
				{setColor('yellow');
				setPassStrengthMessage("Strong");

				break;}
			case 4:
				{setColor('green');
				setPassStrengthMessage("Very Strong");

				break;}
		}
	}


};
const copyToClipboard = ()=>{
	const textarea = document.createElement('textarea');	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
};



  return (
    <div className="App">
      <div className="container">
	<h2>Password Generator</h2>
	<div className="result-container" style={{color:colorText}}>
		<span id="result" >{password}</span>
		<button className="btn" onClick={copyToClipboard}>
			Copy
		</button>
	</div>
	<p style={{ display: 'inline', margin: '0 25px', fontSize: '12px', color: colorText }}>{passStrengthMessage}</p>

	<div className="settings">
		<div className="setting">
			<label>Password length</label>
			<input type="range" min="6" max="30" value={length}  onChange={(e)=>{setLength(e.target.value);
				if(e.target.value>30 || e.target.value<6)
				{setLengthError("Value must be in between 6 to 30 ")}else{
					setLengthError('');
				}}}  /><output>{length}</output>

		</div>
		<p style={{ display: 'inline', margin: '0 25px', fontSize: '12px', color: 'red' }}>{lengthError}</p>

		<div className="setting">
			<label>Include uppercase </label> 
			<input type="checkbox"  checked ={upperCase} onClick={(e)=>{
				setUpperCase(e.target.checked); }} />
		</div>
		<div className="setting">
			<label>Include lowercase letters</label> 
			<input type="checkbox"  onClick={(e)=>{
				setLowerCase(e.target.checked); }} checked={lowerCase} />
		</div>
		<div className="setting">
			<label>Include numbers</label> 
			<input type="checkbox"  checked={numbers}  onClick={(e)=>{
				setNumbers(e.target.checked) ;}}/>
		

		</div>
		<div className="setting">
			<label>Include symbols</label> 
			<input type="checkbox"  checked={symbols} onClick={(e)=>{
				setSymbols(e.target.checked)}}/>
		</div>
	</div>
	<button className="btn btn-large"  onClick={generateRandomPassword} id="generate">
		Generate password
	</button>
</div>


    </div>
  );
}

export default App;
