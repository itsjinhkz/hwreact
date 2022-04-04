import "./App.css";
import "antd/dist/antd.css";
import NavbarQuanLySinhVien from "./Pages/NavbarQuanLySinhVien/NavBarQuanLySinhVien";
import { Route, Switch } from "react-router";
import QuanLySinhVien from "./Pages/QuanLySinhVien/QuanLySinhVien";
import ChiTietSinhVien from "./Pages/ChiTietSinhVien/ChiTietSinhVien";
import ThemSinhVien from "./Pages/ThemSinhVien/ThemSinhVien";

function App() {
  return (
    <div className="App">
      <NavbarQuanLySinhVien />
      <Switch>
        <Route exact path="/">
          <h1>Danh Sách Sinh Viên</h1>
          <QuanLySinhVien />
        </Route>
        <Route path="/detail">
          <ChiTietSinhVien />
        </Route>
        <Route path="/themsinhvien">
          <ThemSinhVien />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
