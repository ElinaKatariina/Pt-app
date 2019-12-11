import React from 'react';

class Traininglist extends React.Component {

    constructor(props) {
        super(props);
        this.state = { trainings: []};
    }

    componentDidMount() {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ trainings: responseData.content});
        })
    }

    render(){
        const trainingResult = this.state.trainings.map((training) =>
        <tr key={training.id}>
            <td>{training.activity}</td>
            <td>{training.date}</td>
            <td>{training.duration}</td>
        </tr>
        );
        return(
            <div>
                <table>
                    <tbody>
                        {trainingResult}
                    </tbody>
                </table>
            </div>
        );
    }

}
export default Traininglist;