import React from "react";
import "./App.css";
import JsonData from "./assets/datacenters.json";
import { MDBTable, MDBTableBody } from "mdbreact";
window.value = 0;

class BasicTable extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            text: "",
        };
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    async handleDisplay(key, value, index, parent) {
        console.log("key: ", key);
        console.log("value: ", value);
        console.log("index: ", index);
        console.log("windowvalue: ", parent);
        
        // let result = await fetch("http://localhost:5000/", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ statement: "Check response" }),
        // }).then((response) => {
        //     return response.json();
        // });
        // return result;
        
    }

    handleInputChange = (e) => {
        e.preventDefault();
        console.log(e);
    };

    renderTable = (JsonData, index) => {
        window.value++;
        return (
            <MDBTable bordered small responsive>
                <MDBTableBody>
                    <tr>
                        {Object.keys(JsonData).map((key, index) => {
                            return (
                                <div key={key}>
                                    <td>
                                        <form onSubmit={this.handleInputChange}>
                                            <input
                                                // value={key}
                                                placeholder={key}
                                                onChange={this.handleDisplay.bind(
                                                    this,
                                                    key,
                                                    JsonData[key],
                                                    index,
                                                    window.value
                                                )}
                                            />
                                            <button type="submit"></button>
                                        </form>
                                    </td>
                                    <td>
                                        {typeof JsonData[key] === "object" &&
                                        JsonData[key].constructor.name !==
                                            "Array" ? (
                                            <>
                                                <td
                                                    onClick={this.handleDisplay.bind(
                                                        this,
                                                        key,
                                                        JsonData[key]
                                                    )}
                                                >
                                                    {key}
                                                </td>
                                                <br />
                                                {this.renderTable(
                                                    JsonData[key],
                                                    index
                                                )}
                                                <br />
                                            </>
                                        ) : (
                                            <form>
                                                <input
                                                    value={JsonData[key]}
                                                    placeholder={JsonData[key]}
                                                    onChange={this.handleDisplay.bind(
                                                        this,
                                                        key,
                                                        JsonData[key]
                                                    )}
                                                />
                                                <button type="submit"></button>
                                            </form>
                                        )}
                                    </td>
                                </div>
                            );
                        })}
                    </tr>
                </MDBTableBody>
            </MDBTable>
        );
    };
    render() {
        return (
            <div className="App">
                <h1>JSON to Table Converter</h1>
                <MDBTable>{this.renderTable(JsonData)}</MDBTable>
            </div>
        );
    }
}

export default BasicTable;
