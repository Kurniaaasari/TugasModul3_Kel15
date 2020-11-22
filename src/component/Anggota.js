import React, { Component } from "react";

class Anggota extends Component {
	state = {
		nama: "Kurniasari"
	}

	componentDidMount() {
	alert(`Mount triggered!`)
	}

	ChangeName = () => {
		this.setState((state) => {
			if (state.nama === "Kurniasari"){
				return {nama : "Obed Jeck Gredo T."}
			} else {
				return { nama: "Kurniasari"}
			}
		})
	}

	shouldComponentUpdate(nextState) {
        return window.confirm('Apakah Anda akan melihat anggota lainnya?');
    }

	render(){
		return (
			<div>
				<h2>Anggota Kelompok 15</h2>
				<h2>{this.state.nama}</h2>
					<button className="btn-click" onClick={this.ChangeName}>Change Name!</button>
					<br/>
			</div>
		);
	}
}

export default Anggota;