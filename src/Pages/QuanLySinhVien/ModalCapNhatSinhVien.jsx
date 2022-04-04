import React, { Component } from "react";
import { Modal, Button } from "antd";
import Swal from "sweetalert2";

import { quanlysinhvienreact } from "../QuanLySinhVienService/quanLySinhVienService";

export default class ModalCapNhatSinhVien extends Component {
  state = {
    isModalVisible: false,
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
  showModal = () => {
    // setIsModalVisible(true);
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };
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
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Cập Nhật
        </Button>
        <Modal
          title="Cập Nhật Thông Tin"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
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
                value={this.props.data.name}
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
                value={this.props.data.email}
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
                value={this.props.data.numberphone}
              />
            </div>
          </form>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.handleUpdateNhanVien(this.props.data.id, this.state.newSV);
            }}
          >
            Cập Nhật
          </button>
        </Modal>
      </>
    );
  }
}
