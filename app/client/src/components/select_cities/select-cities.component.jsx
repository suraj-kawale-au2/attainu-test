import React from 'react';

class SelectCities extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            cities : []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/cities`)
        .then(res=>res.json())
        .then(allcities=>this.setState({cities:allcities}))
    }

    render(){
        const { cities } = this.state;
        const { handleChange } = this.props
    return (
        <div className="jumbotron">
            <div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect02" onChange={handleChange}>
                    <option>Choose...</option>
                    {
                        cities.length?cities.map((cities,i)=>
                                    <option defaultValue={i+1} key={i}>
                                    {cities}
                                    </option>):<option defaultValue={1}>Loading....</option>
                    }
                </select>
            </div>
        </div>
    )
    }
}

export default SelectCities;
