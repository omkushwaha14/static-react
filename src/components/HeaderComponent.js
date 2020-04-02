import React,{Component} from 'react';
import { Nav, Jumbotron } from 'reactstrap';




class Header extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
                <Nav className="navbar navbar-dark" expand="md">
                    <div className="container">


                        <h5> <a href="/home">Home</a></h5>
                        <h5><a href="/aboutus">About</a></h5>
                        <h5>  <a href="/menu">Menu</a></h5>
                        <h5> <a href="/contactus">Contact</a></h5>


                    </div>
                </Nav>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>We are for you</h1>
                                <p>We provide you very testy and finger licking goods we are made for serving you best class meal than other!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>

        );
    }
}




export default Header;