import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <input type="text" id="result" readOnly />
        <div className="grid">
                
                <button onClick="clearValue()">C</button>
                <button onClick="removeValue()"><i className='bx bx-arrow-back'></i></button>
                <button onClick="changeTheme()"><i className='bx bxs-moon' ></i></button>
                <button className="operator" onClick="appendValue('/')">÷</button>

                <button onClick="appendValue('9')">9</button>
                <button onClick="appendValue('8')">8</button>
                <button onClick="appendValue('7')">7</button>
                <button className="operator" onClick="appendValue('*')">×</button>

                <button onClick="appendValue('6')">6</button>
                <button onClick="appendValue('5')">5</button>
                <button onClick="appendValue('4')">4</button>
                <button className="operator" onClick="appendValue('-')">-</button>

                <button onClick="appendValue('3')">3</button>
                <button onClick="appendValue('2')">2</button>
                <button onClick="appendValue('1')">1</button>
                <button className="operator" onClick="appendValue('+')">+</button>
                
                <button id="copy" onClick="copyResult()"><i className='bx bx-copy'></i></button>
                <button onClick="appendValue('0')">0</button>
                <button onClick="appendValue('.')">,</button>
                <button className="operator" onClick="calculate()">=</button>

            </div>
      </div>
    </div>
  );
}

export default App;
