import React from "react";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";
import { Body } from "./layouts/body";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.css';
const ORG = 'Hope Tutors Inc';


export class App extends React.Component {

    render() {
        return <div className="app">
            <Header org={ORG} />
            <Body />
            <Footer year="2019" org={ORG} />
        </div>
    }
}