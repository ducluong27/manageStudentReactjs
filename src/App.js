import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import AddStudent from './AddStudent';
import TableStudent from './TableStudent';

function App() {
  const [listSV, setListSV] = useState([])
  console.log(listSV);

  const addSinhVien = (sv) => {
    const tmpSinhVien = [...listSV, sv];
    setListSV(tmpSinhVien);
  }

  const removeSinhVien = (_sv) => {
    const tmpSinhVien = [...listSV];
    console.log(_sv);
    const svIndex = tmpSinhVien.indexOf(_sv);
    console.log(svIndex)
    if (svIndex > -1) {
      tmpSinhVien.splice(svIndex, 1);
      setListSV(tmpSinhVien);
    }
    console.log(listSV);
  }
  
  return (
    <div className="Form">
      <div className='addForm'>
        <AddStudent addSinhVien={(e) => addSinhVien(e)}/>
      </div>
      <div className='tableStudent'>
        <TableStudent listSV = {listSV} removeSinhVien = {removeSinhVien}/>
      </div>
    </div>
  );
}

export default App;
