import React , {Fragment , PureComponent} from 'react';
import classes from './Person.css';
import Aux from '../../../Auxiliary/Auxiliary';
import withClass from '../../../Auxiliary/withClass';


class Person extends PureComponent {
    render(){
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )       
    }
}

export default withClass(Person,classes.Person);