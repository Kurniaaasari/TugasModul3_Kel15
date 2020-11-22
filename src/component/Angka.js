import React, {Component} from 'react';


class Angka extends Component {
    constructor(props) {
        super(props)

        this.state = {
            angka: 1,
            status : "Angka Favorit Anda"
        }
    }

    TombolNext = () => {
        this.setState ({
        angka: this.state.angka +1
        }) 
    }

    TombolPrev = () => {
        this.setState ({
            angka: this.state.angka -1
        })

        if (this.state.angka > 0) {
            this.setState ({
            status: "Angka Favorit Anda"
            })
        } 
        else {
            this.setState ({
                status: "Tidak Ada Angka Favorit"
            })
         }
        }


    shouldComponentUpdate(nextState) {
        return window.confirm('Apakah Anda akan mengganti angka favorit Anda?');
        }
        

    render() {
        return (
            <div className="wrapper2">
                <h2>{this.state.status}</h2>
                <h2>{this.state.angka}</h2>
                <button onClick={this.TombolPrev}>Prev</button> |
                | <button onClick={this.TombolNext} >Next</button>
            </div>
        )
    }
}

export default Angka;