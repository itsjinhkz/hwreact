import React, { Component } from "react";
import { quanlysinhvienreact } from "../QuanLySinhVienService/quanLySinhVienService";

export default class ChiTietSinhVien extends Component {
  state = {
    detail: null,
  };
  componentDidMount() {
    let idUrl = this.props.match.params.id;
    quanlysinhvienreact
      .GET_DETAIL(idUrl)
      .then((res) => {
        this.setState({ detail: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>Chi Tiết Sinh Viên</h1>
        <div className="my-5">
          <h3>Họ và tên: {this.state.detail?.name}</h3>
          <h3>Email: {this.state.detail?.email}</h3>
          <h3>SĐT: {this.state.detail?.numberphone}</h3>
        </div>
      </div>
    );
  }
}
