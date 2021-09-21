import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";

export default class Game extends Component {
  state = {
    nilai: [0, 15, 30, 40, 45, 50],
    pointP1: 0,
    pointP2: 0,
    last: "belum ada last scorer",
    winner: "belum ada winner",
    adventage: "belum ada adventage player",
  };

  componentDidUpdate() {
    if (this.state.pointP1 === 40) {
      if (this.state.winner !== "deuce") {
        if (this.state.pointP1 === this.state.pointP2) {
          this.setState({ winner: "deuce" });
        }
      }
    }
  }

  fungsiDeuce = () => {
    if (this.state.seri === "deuce") {
      if (this.state.pointP1 === 15) {
        this.setState({ seri: "deuce" });
      }
    }
  };

  tambahPointP1 = () => {
    const index = this.state.nilai.findIndex(
      (element) => element === this.state.pointP1
    );
    if (this.state.pointP1 === 30) {
      if (this.state.last === "Player 1") {
        this.setState({
          pointP1: this.state.nilai[index + 1],
          last: "Player 1",
          winner: "Winner player 1",
        });
      } else {
        this.setState({
          pointP1: this.state.nilai[index + 1],
          last: "Player 1",
        });
      }
    } else {
      if (this.state.winner === "deuce") {
        if (this.state.adventage === "Player 1") {
          this.setState({
            pointP1: "adventage state",
            last: "Player 1",
            winner: "Winner player 1",
          });
        } else {
          this.setState({
            pointP1: "adventage state",
            last: "Player 1",
            adventage: "Player 1",
          });
        }
      } else {
        if (this.state.pointP1 === 40) {
          if (this.state.last === "Player 1") {
            this.setState({
              // pointP1: this.state.nilai[index + 1],
              last: "Player 1",
              winner: "Winner player 1",
            });
          } else {
            this.setState({
              pointP1: this.state.nilai[index + 1],
              last: "Player 1",
            });
          }
        } else {
          this.setState({
            pointP1: this.state.nilai[index + 1],
            last: "Player 1",
          });
        }
      }
    }
  };

  tambahPointP2 = () => {
    const index = this.state.nilai.findIndex(
      (element) => element === this.state.pointP2
    );
    if (this.state.pointP2 === 30) {
      if (this.state.last === "Player 2") {
        this.setState({
          pointP2: this.state.nilai[index + 1],
          last: "Player 2",
          winner: "Winner player 2",
        });
      } else {
        this.setState({
          pointP2: this.state.nilai[index + 1],
          last: "Player 2",
        });
      }
    } else {
      if (this.state.winner === "deuce") {
        if (this.state.adventage === "Player 2") {
          this.setState({
            pointP2: "adventage state",
            last: "Player 2",
            winner: "Winner player 2",
          });
        } else {
          this.setState({
            pointP2: "adventage state",
            last: "Player 2",
            adventage: "Player 2",
          });
        }
      } else {
        if (this.state.pointP2 === 40) {
          if (this.state.last === "Player 2") {
            this.setState({
              // pointP2: this.state.nilai[index + 1],
              last: "Player 2",
              winner: "Winner player 2",
            });
          } else {
            this.setState({
              pointP2: this.state.nilai[index + 1],
              last: "Player 2",
            });
          }
        } else {
          this.setState({
            pointP2: this.state.nilai[index + 1],
            last: "Player 2",
          });
        }
      }
    }
  };

  render() {
    return (
      <div>
        <div className="row" style={{ minHeight: "10vh" }}>
          <div className="col align-self-center">
            <div className="row justify-content-center">
              <h3>WINNER || {this.state.winner}</h3>
              <h3>ADVENTAGE PLAYER || {this.state.adventage}</h3>
              <h3>LAST SCORER || {this.state.last}</h3>
              <div>
                <Button
                  onClick={() =>
                    this.setState({
                      pointP1: 0,
                      pointP2: 0,
                      last: "belum ada last scorer",
                      winner: "belum ada winner",
                      adventage: "belum ada adventage player",
                    })
                  }
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ minHeight: "50vh" }}>
          <div className="col align-self-center">
            <div className="row justify-content-center">
              <h3>Player 1</h3>
            </div>
            <div className="row justify-content-center">
              <h3>{this.state.pointP1}</h3>
            </div>
            <div className="row justify-content-center">
              <div>
                <Button
                  disabled={
                    this.state.winner !== "belum ada winner"
                      ? this.state.winner !== "deuce" && true
                      : false
                  }
                  onClick={this.tambahPointP1}
                >
                  Point
                </Button>
              </div>
            </div>
          </div>
          <div className="col align-self-center">
            <div className="row justify-content-center">
              <h3>Player 2</h3>
            </div>
            <div className="row justify-content-center">
              <h3>{this.state.pointP2}</h3>
            </div>
            <div className="row justify-content-center">
              <div>
                <Button
                  disabled={
                    this.state.winner !== "belum ada winner"
                      ? this.state.winner !== "deuce" && true
                      : false
                  }
                  onClick={this.tambahPointP2}
                >
                  Point
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
