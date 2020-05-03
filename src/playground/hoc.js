//Higher order component - a component that renders another component

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin&&<p>this is private info. Please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ?
                <WrappedComponent {...props}/> :
                <p>you don't have permission to see this</p>
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo=requireAuthentification(Info);


ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details" />,document.getElementById("app"));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the details" />,document.getElementById("app"));