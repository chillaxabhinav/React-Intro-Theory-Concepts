import React , {Fragment , PureComponent} from 'react';
import classes from './Person.css';
import Aux from '../../../Auxiliary/Auxiliary';
import withClass from '../../../Auxiliary/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends PureComponent {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    };
    render(){
        return (
            <Aux>
            {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    //ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        )       
    }
}


Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
}

export default withClass(Person,classes.Person);