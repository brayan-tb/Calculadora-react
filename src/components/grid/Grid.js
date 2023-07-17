import React from "react";
import InputResult from "../result/Result";
import BtnNumber from "../number/Number";
import BtnOperator from "../btn/Btn";

class Grid extends React.Component {

    // componentDidMount(){
    //     console.log("componentDidMount")
    // }

    // componentDidUpdate(){
    //     console.log("componentDidUpdate")
    // }

    // componentWillUnmount(){
    //     console.log("componentWillUnmount")
    // }

    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return true;
    // }

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            lastOperator: "",
            lastOperation: "",
            count: 1
        }
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

    handleCalculate() {
        
        let result = 0;
        if (this.state.text.length > 0) {
    
        const value = this.state.text.toString().replace(/(^|[^0-9])0+([0-9]+)/g, '$1$2');

        if (this.state.count > 1) {
            const lastOperation = this.state.lastOperation
            let op = `${value} ${this.state.lastOperator} ${lastOperation}`;
            // console.log(lastOperation)
            // console.log("conta: " + op);

            try {
                result = eval(op);
            } catch (error) {
                this.setState({text: "Erro",count: 1 })
                return "Erro"
            }

            this.setState({
                text: result.toString(),
                count: this.state.count + 1
            })

        } else {
            try {
                result = eval(value);
            } catch (error) { this.setState({ text: "Erro", count: 1 })
                return "Erro"
            }
            this.setState({
                text: result.toString(),
                lastOperation: value.replace(/.*[-+*/]/, '')
            })

            this.setState({ count: this.state.count + 1 })
        }
    }
    }

    handleOperator(event) {
        // console.log(this.state.lastOperation + " " + event.target.textContent)
        this.setState({
            text: this.state.text + event.target.id,
            lastOperator: event.target.id,
            lastOperation: this.state.text.toString(),
            count: 1
        })
        // console.log(this.state)
    }

    render() {
        // console.log("render")
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
