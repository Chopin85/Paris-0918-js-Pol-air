import React, { Component } from 'react';
import PrintSearch from './current/PrintSearch'
import Icon from './current/Icon';
import Background from './current/Background';
import IndiceDuJours from '../Pollution/IndiceDuJours'
import Titles from '../Titles';
import Footer from '../Footer';
import DateIndex from '../date/DateIndex';
import Mascotte from './Mascotte';
import './home.css';

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
        <div className="bloc-central-form bloc-central" >
            <div className="page-child">
            <DateIndex />
            </div>
            <div className="page-child">
                <Titles/>
            </div>

            <div className="page-child">
            {this.props.dataPol && <Mascotte temperature={this.props.temperature} dataPol={this.props.dataPol} description={this.props.description}/> }
                <PrintSearch
                city={this.props.city}
                temperature={this.props.temperature}
                degre={this.props.degre}
                description={this.props.description}
                humidity={this.props.humidity}
                pourcentage={this.props.pourcentage}/>
                <Icon icon={this.props.icon}/>
            </div>
            <div>
                {this.props.loading ? "En cours de chargement" : <Background imgBackground={this.props.imgBackground} /> }
            </div>
            <div>
            <IndiceDuJours indice={this.props.dataPol} />
            </div>
        </div>
        <div className="page-footer">
            <Footer />
        </div>
    </div>

         );
    }
}

export default Home;