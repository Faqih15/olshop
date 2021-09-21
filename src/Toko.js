import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Button, Card, Row, Col, Table } from "react-bootstrap";

// mentahan id:"", judul

export default class Toko extends Component {
  state = {
    products: [
      {
        id: "001",
        judul: "mika bento",
        gambar: "bento 1.png",
        teks: "[5 PCS] Kotak Makan / Mika Bento 4 Sekat",
        harga: 9000,
      },
      {
        id: "002",
        judul: "cutter",
        gambar: "cutter 1.png",
        teks: "[2 PCS] PISAU CUTTER/PISAU PEMOTONG KERTAS",
        harga: 8000,
      },
      {
        id: "003",
        judul: "kamper",
        gambar: "kamper 1.png",
        teks: "[1 PCS] KAPUR BARUS/KAPUR WANGI/1 PACK ISI 16 PCS TOTAL 450GRAM",
        harga: 3000,
      },
      {
        id: "004",
        judul: "kapur semut",
        gambar: "kapur 1.png",
        teks: "[12 PCS] KAPUR AJAIB ANTI KECOA DAN SEMUT MERK BAGUS / Kapur anti kecoa dll",
        harga: 15000,
      },
      {
        id: "005",
        judul: "correction pen",
        gambar: "tipex 1.png",
        teks: "[1 PCS] PENGHAPUS TIPEX/CORRECTION PEN MERK VAN ART",
        harga: 4000,
      },
      {
        id: "006",
        judul: "facial tissue",
        gambar: "tisu 1.png",
        teks: "[1 PCS] TISU POP UP / TISU MINI / TISU FACIAL MINI / TISSU SERBAGUNA MINI",
        harga: 5000,
      },
    ],
    troli: [],
    allTotal: null,
    text: "",
  };
  componentDidMount(){
    const testTotal = this.state.products.reduce((total, prd) =>{
      console.log(prd)
      return total + prd.harga
    },0)
    console.log(testTotal)
  }

  fungsiPlus = (i) => {
    let { products, troli, allTotal } = this.state;
    const [itemSudahAda] = troli.filter((x) => x.id === products[i].id);
    if (itemSudahAda) {
      itemSudahAda.qty++;
      itemSudahAda.total += itemSudahAda.harga;
    } else {
      const data = products[i];
      troli.push({ ...data, qty: 1, total: data.harga });
    }
    this.setState({ troli });
    if (troli.length) {
      allTotal = troli.reduce(
        (acumulator, currentValue) => acumulator + currentValue.total,
        0
      );
      this.setState({ allTotal });
    }
  };

  fungsiMinus = (i) => {
    let { products, troli, allTotal } = this.state;
    const idx = troli.findIndex((x) => x.id === products[i].id);
    if (idx !== -1) {
      if (troli[idx]?.qty > 1) {
        troli[idx].qty--;
        troli[idx].total -= troli[idx].harga;
      } else {
        troli.splice(idx, 1);
      }
    }
    if (troli.length) {
      allTotal = troli.reduce(
        (acumulator, currentValue) => acumulator + currentValue.total,
        0
      );
    } else {
      allTotal = null;
    }
    this.setState({ allTotal });
    this.setState({ troli });
  };

  render() {
    const { tampilkanModalTroli, daftarBarang, allTotal } = this.state;
    console.log(this.state.products);
    return (
      <div onSubmit={this.submit}>
        <Row>
          <Col xs={9} md={9}>
            <Row>
              {this.state.products.map((parazet, idx) => (
                <Col xs={6} md={3}>
                  <CardGroup>
                    <Card
                      className="bg-white text-dark"
                      style={{ height: "32rem" }}
                    >
                      <Card.Img variant="top" src={parazet.gambar} />
                      <Card.Body>
                        <Card.Title>{parazet.judul}</Card.Title>
                        <Card.Text>{parazet.teks}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Text>{parazet.harga}</Card.Text>
                        <Button
                          className="mx-2"
                          name="trash"
                          variant="primary"
                          onClick={() => this.fungsiMinus(idx)}
                        >
                          -
                        </Button>
                        <Button
                          className="mx-2"
                          variant="primary"
                          onClick={() => this.fungsiPlus(idx)}
                        >
                          +
                        </Button>{" "}
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={3} md={3}>
            <Table>
              Keranjang
              <br />
              <tr>
                <th>Nama</th>
                <th>Qty</th>
                <th>Harga</th>
                <th>Total</th>
              </tr>
              <tbody>
                {this.state.troli.map((parazet, i) => (
                  <tr key={i}>
                    <td>{parazet.judul}</td>
                    <td>{parazet.qty}</td>
                    <td>{parazet.harga}</td>
                    <td>{parazet.total}</td>
                    {/* <td>{parazet.teks}</td> */}
                  </tr>
                ))}
              </tbody>
              <hr />
              <h1>{allTotal}</h1>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
