/* eslint-disable @typescript-eslint/no-useless-constructor */
// <h2>{this.state.data.toLocaleTimeString()}.</h2>
import { Component } from "react";

class Componente extends Component<{ texto: string }, { data: Date, texto: string }> {
    private temporizador
    constructor(props) {
        super(props);
        this.state = {
            data: new Date(),
            texto: this.props.texto
        }
    }
    alteracao() {
        this.setState({
            data: new Date()
        })
    }
    componentDidMount() {
        this.temporizador = setInterval(
            () => this.alteracao(),
            1000
        );
    }
    render() {
        return (
            <div>
                <h1>{this.state.texto}</h1>
                <h2>
                    Data: {this.state.data.toLocaleDateString()}
                    <span> </span>
                    Hora: {this.state.data.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}
export default Componente