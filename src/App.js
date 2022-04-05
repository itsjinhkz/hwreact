import "./App.css";
import "antd/dist/antd.css";
import NavbarQuanLySinhVien from "./Pages/NavbarQuanLySinhVien/NavBarQuanLySinhVien";
import { Route, Switch } from "react-router";
import QuanLySinhVien from "./Pages/QuanLySinhVien/QuanLySinhVien";
import ChiTietSinhVien from "./Pages/ChiTietSinhVien/ChiTietSinhVien";
import ThemSinhVien from "./Pages/ThemSinhVien/ThemSinhVien";
import UpdateNhanVien from "./Pages/UpdateNhanVien/UpdateNhanVien";

function App() {
  return (
    <div className="App">
      <NavbarQuanLySinhVien />
      <Switch>
        <Route exact path="/">
          <h1>Danh Sách Sinh Viên</h1>
          <QuanLySinhVien />
        </Route>
        <Route path="/detail/:id" component={ChiTietSinhVien} />
        <Route path="/themsinhvien" component={ThemSinhVien} />
        <Route path="/update/:id" component={UpdateNhanVien} />
      </Switch>
    </div>
  );
}

export default App;
