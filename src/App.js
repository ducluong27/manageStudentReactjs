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
    const svIndex = tmpSinhVien.indexOf(sv => sv.id ===  _sv.id);
    if (svIndex > -1) {
      tmpSinhVien.splice(svIndex, 1);
      setListSV(tmpSinhVien);
    }
  }
  
  return (
    <div className="Form">
      <div className='addForm'>
        <AddStudent addSinhVien={(e) => addSinhVien(e)}/>
      </div>
      <div className='tableStudent'>
        <TableStudent listSV = {listSV} setListSV = {setListSV}/>
      </div>
    </div>
  );
}

export default App;
