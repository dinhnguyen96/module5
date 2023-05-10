import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import List from "./component/tourList.jsx";
import Nav from "./component/Nav";
import CreateForm from "./component/CreateForm";
import UpdateForm from "./component/UpdateForm";
import ViewsDetail from "./component/ViewsDetail";
function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path={"/"} element={<List/>}></Route>
            <Route path={"/create"} element={<CreateForm />}></Route>
            <Route path={"/update/:id"} element={<UpdateForm />}></Route>
            <Route path={"/views/:id"} element={<ViewsDetail />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
