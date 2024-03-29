import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component{

	renderSurveys(){
		return this.props.surveys.reverse().map(survey => {
			return(

					<div className="card blue-grey darken-1" key={survey._id} >
				        <div className="card-content white-text">
				          <span className="card-title">{survey.title}</span>
				          <p>{survey.body}</p>
				          <p className="right">
				          	SentOn : {new Date(survey.dateSent).toLocaleDateString()}
				           </p>

				        </div>  
				        <div className="card-action">
				          <a href="javascript:void(0)">Yes : {survey.yes}</a>
				          <a href="javascript:void(0)">No : {survey.no}</a>
				        </div>
			      	</div>

				)
		})

	}
	componentDidMount(){

		this.props.fetchSurveys();
	}

	render(){
		return(

			<div> 
				{ this.renderSurveys() }

			</div>

			);
	}
}

function mapStateToProps({ surveys}){
	return { surveys };
}


export default connect(mapStateToProps, { fetchSurveys })(SurveyList);