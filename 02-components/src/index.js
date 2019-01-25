import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";

class App extends React.Component {
    render(){
        const comments = [];
        for(let i = 0; i<5; i++) {
            comments.push(
                <ApprovalCard key={"approvalCard"+i}>
                    <CommentDetail 
                        author={Faker.name.prefix() + " " + Faker.name.firstName() + " "+ Faker.name.lastName()} 
                        timeAgo={Faker.date.recent().toUTCString()}
                        content={Faker.lorem.paragraph()}
                        avatar={Faker.image.avatar()}
                    />
                </ApprovalCard>
            );
        }
        return(
            <div className="ui container comments">
                {comments}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));