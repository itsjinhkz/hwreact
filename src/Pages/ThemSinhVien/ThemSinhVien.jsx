import React, { Component } from "react";
import Swal from "sweetalert2";
import styles from "./ThemSinhVien.module.css";
import { quanlysinhvienreact } from "../QuanLySinhVienService/quanLySinhVienService";
export default class ThemSinhVien extends Component {
  state = {
    newSV: {
      id: "",
      name: "",
      email: "",
      numberphone: "",
    },
  };
  handleOnChange(e) {
    this.setState({
      newSV: { ...this.state.newSV, [e.target.name]: e.target.value },
    });
  }
  handleResetInputValue = () => {
    this.setState({
      newSV: {
        id: "",
        name: "",
        email: "",
        numberphone: "",
      },
    });
  };
  handleThemSV = (data) => {
    quanlysinhvienreact
      .USER_ADD(data)
      .then((res) => {
        Swal.fire("Thành công !", "Đã đăng ký sinh viên !", "success");
        this.handleResetInputValue();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className={styles.boxShadow}>
        <h1>Đăng Ký Sinh Viên</h1>
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
                value={this.state.newSV.name}
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
                value={this.state.newSV.email}
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
                value={this.state.newSV.numberphone}
              />
            </div>
          </form>
          <button
            className="btn btn-success"
            onClick={() => {
              this.handleThemSV(this.state.newSV);
            }}
          >
            Đăng ký
          </button>
        </div>
      </div>
    );
  }
}
