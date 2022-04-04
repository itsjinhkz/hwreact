import React, { Component } from "react";
import { GrConfigure } from "react-icons/gr";
import Swal from "sweetalert2";
import ModalCapNhatSinhVien from "./ModalCapNhatSinhVien";
import { quanlysinhvienreact } from "../QuanLySinhVienService/quanLySinhVienService";

export default class QuanLySinhVien extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    quanlysinhvienreact
      .GET_LIST()
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderTable = () => {
    return this.state.data.map((sv) => {
      let { id, name, numberphone, email } = sv;
      return (
        <tr>
          <th scope="row">{id}</th>
          <td>{name}</td>
          <td>{email}</td>
          <td>{numberphone}</td>
          <td>
            <ModalCapNhatSinhVien data={sv} />
            <button
              className="btn btn-warning"
              onClick={() => {
                this.deleteUser(id);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  deleteUser = (id) => {
    quanlysinhvienreact
      .DELETE_USER(id)
      .then((res) => {
        Swal.fire("Thành công !", "Đã xóa sinh viên !", "success");
        quanlysinhvienreact
          .GET_LIST()
          .then((res) => {
            this.setState({ data: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Email</th>
              <th scope="col">SĐT</th>
              <th scope="col">
                <GrConfigure />
              </th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
