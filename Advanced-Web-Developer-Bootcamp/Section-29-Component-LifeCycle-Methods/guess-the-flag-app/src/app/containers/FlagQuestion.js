import React, { Component } from 'react';
import FlagChoice from '../components/FlagChoice';
import FlagAnswer from '../components/FlagAnswer';
import './FlagQuestion.css';

export const QuestionStates = {
    QUESTION: 1,
    ANSWER_WRONG: 2,
    ANSWER_CORRECT: 3
}

class FlagQuestion extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        userChoice: undefined,
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({userChoice: Number(e.target.value)});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.onGuess(this.state.userChoice);
    }
  
    render() {
      const {
        flag,
        questionState,
        options,
        answerText,
        onNext
      } = this.props;
      const {userChoice} = this.state;
      let opts = options.map(opt => ({
        ...opt,
        checked: userChoice === opt.id
      }));
      let output = questionState === QuestionStates.QUESTION ?
        (<FlagChoice handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     options={opts} />) :
        (<FlagAnswer
          correct={questionState === QuestionStates.ANSWER_CORRECT}
          answer={answerText}
          onNext={onNext} />);
  
      return (
        <div>
          {output}
          <img
             className="flag-img"
             src={flag}
             alt="Guess the flag"
           />
        </div>
      );
    }
  }

FlagQuestion.defaultProps = {
    options: [],
}

export default FlagQuestion;