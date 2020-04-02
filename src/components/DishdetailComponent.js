import React  from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';



function RenderDish({dish}) {
    return (
        <div className="container">
            <div className=' col-4 card md-2 p-3 '>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <h5><CardTitle>{dish.name}</CardTitle></h5>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>

    )
}

function RenderComments({comments}) {
    if (comments != null) {
        return (
            <div className="col-4 md-2 p-3">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>

                                <h6> <p>{comment.author}, {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))}</p></h6>
                                <p>=>{comment.comment}</p>

                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail=(props)=> {
    if(props.dish !=null){
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        )}
    else{
        return (
            <div></div>
        )
    }
}


export default DishDetail