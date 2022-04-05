import React, { Component } from "react";
import { Modal, Button } from "antd";
import Swal from "sweetalert2";

import { quanlysinhvienreact } from "../QuanLySinhVienService/quanLySinhVienService";

export default class UpdateNhanVien extends Component {
  state = {
    newSV: {
      id: "",
      name: "",
      email: "",
      numberphone: "",
    },
  };
  handleResetInputValue = () => {
    this.setState({
      detail: {
        id: "",
        name: "",
        email: "",
        numberphone: "",
      },
    });
  };
  handleUpdateNhanVien = (id, data) => {
    quanlysinhvienreact
      .USER_UPDATE(id, data)
      .then((res) => {
        Swal.fire("Thành công !", "Đã đăng ký sinh viên !", "success");
        this.handleResetInputValue();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleOnChange(e) {
    this.setState({
      detail: { ...this.state.detail, [e.target.name]: e.target.value },
    });
  }
  componentDidMount() {
    let idUrl = this.props.match.params.id;
    quanlysinhvienreact
      .GET_DETAIL(idUrl)
      .then((res) => {
        this.setState({ detail: res.data });
        console.log(this.state.detail);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form className="my-5">
          <div className="form-group">
            <label htmlFor="name">Họ và tên: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Họ và tên"
              name="name"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.detail?.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email của bạn"
              name="email"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.detail?.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberphone">Số điện thoại: </label>
            <input
              type="text"
              className="form-control"
              id="numberphone"
              aria-describedby="emailHelp"
              placeholder="Số điện thoại của bạn"
              name="numberphone"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
              value={this.state.detail?.numberphone}
            />
          </div>
        </form>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.handleUpdateNhanVien(this.state.detail?.id, this.state.detail);
          }}
        >
          Cập Nhật
        </button>
      </div>
    );
  }
}
