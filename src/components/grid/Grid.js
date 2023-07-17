import React from "react";
import InputResult from "../result/Result";
import BtnNumber from "../number/Number";
import BtnOperator from "../btn/Btn";

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            lastOperator: "",
            lastOperation: "",
            count: 1
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    // componentDidUpdate(){}
    
    // shouldComponentUpdate(){return true;}

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        const operators = ['.', '+', '-', '*', '/'];
        const pressed = event.key;
        if (operators.includes(pressed)) { return this.appendOperator(pressed); }
        else if (pressed >= 0 && pressed <= 9) { return this.appendValue(pressed); }
        else if (pressed === "Escape") { return this.handleClickClear(); }
        else if (pressed === "Enter") { return this.handleCalculate(); }
        else if (pressed === ",") { return this.appendValue('.'); }
        else if (pressed === "Backspace") { return this.handleRemoveValue() }
        event.preventDefault();
    }

    handleOperator(event) {
        this.appendOperator(event.target.id)
    }

    handleClickClear() {
        this.setState({
            text: "",
            lastOperator: "",
            lastOperation: "",
            count: 1
        })
    }

    handleClickBtnNumber(event) {
        this.setState({
            text: this.state.text + event.target.textContent,
        })
    }

    handleRemoveValue() {
        if (this.state.text.length) this.setState({ text: this.state.text.slice(0, -1) })
    }

    handleCopy() {
        if (this.state.text.length > 0) navigator.clipboard.writeText(this.state.text);
    }

    handleTheme() {
        const body = document.querySelector('body');
        const calculator = document.querySelector('.calculator');
        body.classList.toggle('dark-mode');
        calculator.classList.toggle('dark-mode');
    }

    appendValue(value) {
        this.setState({
            text: this.state.text + value,
        })
        console.log(this.state)
    }

    appendOperator(value) {
        this.setState({
            text: this.state.text + value,
            lastOperator: value,
            lastOperation: this.state.text.toString(),
            count: 1
        })
        console.log(this.state)
    }

    handleCalculate() {

        if (this.state.text.length === 0) {
            return;
        }

        let result = 0;
        const value = this.state.text.toString().replace(/(^|[^0-9])0+([0-9]+)/g, '$1$2');

        if (this.state.count > 1) {

            const lastOperation = this.state.lastOperation
            const op = `${value} ${this.state.lastOperator} ${lastOperation}`;
            result = this.evaluateExpression(op)

            this.setState({
                text: result.toString(),
                count: this.state.count + 1
            })

        } else {
            result = this.evaluateExpression(value)

            this.setState({
                text: result.toString(),
                lastOperation: value.replace(/.*[-+*/]/, '')
            })

            this.setState({ count: this.state.count + 1 })
        }

    }

    evaluateExpression(expression) {
        try {
            return eval(expression);
        }
        catch (error) {
            this.setState({ text: "Erro", count: 1 })
            return error
        }
    }

    render() {

        return (
            <div className="calculator">

                <InputResult value={this.state.text} />

                <div className="grid">

                    <BtnNumber text="C" onClick={this.handleClickClear.bind(this)} />
                    <BtnNumber text={<i className='bx bx-arrow-back'></i>} onClick={this.handleRemoveValue.bind(this)} />
                    <BtnNumber text={<i className='bx bxs-moon' ></i>} onClick={this.handleTheme.bind(this)} />
                    <BtnOperator operator="/" text="÷" onClick={this.handleOperator.bind(this)} />

                    <BtnNumber text="9" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="8" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="7" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnOperator operator="*" text="×" onClick={this.handleOperator.bind(this)} />

                    <BtnNumber text="6" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="5" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="4" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnOperator operator="-" text="-" onClick={this.handleOperator.bind(this)} />

                    <BtnNumber text="3" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="2" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="1" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnOperator operator="+" text="+" onClick={this.handleOperator.bind(this)} />

                    <BtnNumber text={<i className='bx bx-copy'></i>} onClick={this.handleCopy.bind(this)} />
                    <BtnNumber text="0" onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnNumber text="." onClick={this.handleClickBtnNumber.bind(this)} />
                    <BtnOperator text="=" onClick={this.handleCalculate.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Grid;
