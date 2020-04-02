import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,Breadcrumb,BreadcrumbItem,Col } from 'reactstrap';
import {Link}  from 'react-router-dom'
function RenderMenuItem ({dish}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100" height="250" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <h5> <CardTitle>{dish.name}</CardTitle> </h5>
                    <h6> <CardTitle>Rs {dish.price}</CardTitle></h6>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (


            <div className="col-4  p-2"  key={dish.id}>
                <RenderMenuItem dish={dish}  />
                <hr/>
            </div>


        );
    });

    return (
        <div className="container">
            <div className="row">

                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row ">
                {menu}
            </div>
        </div>
    );
}

export default Menu;