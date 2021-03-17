import JSONEditorDemo from "./JSONEditorDemo";
import React, { Component } from "react";
import data from "./datacenters.json";
import axios from "axios";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            json: data,
        };
        this.updateJsonPermanently = this.updateJsonPermanently.bind(this);
    }

    render() {
        return (
            <div className="app">
                <h1 style={{textAlign:'center'}}>Json Editor</h1>
                <div className="contents">
                    <div className="menu">
                        <button onClick={this.updateJsonPermanently}>
                            Update Json Permanently
                        </button>
                    </div>
                    <JSONEditorDemo
                        json={this.state.json}
                        onChangeJSON={this.onChangeJSON}
                    />
                    <div className="code">
                        <pre>
                            <code>
                                {JSON.stringify(this.state.json, null, 2)}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }

    onChangeJSON = (json) => {
        this.setState({ json });
    };

    updateJsonPermanently() {
        let data = this.state.json;
        axios
            .post("http://localhost:5000", {
                data,
            })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default App;
