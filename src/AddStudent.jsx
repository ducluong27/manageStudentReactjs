/* eslint-disable no-sequences */
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const AddStudent = ({listSV, addSinhVien}) => {
    const [sv, setSinhVien] = useState({id:uuidv4(),  firstname:'', lastname: '', score:''});

    const listeningBtnAdd = () => {
        addSinhVien(sv);
        setSinhVien({id:uuidv4(),  firstname:'', lastname: '', score:''});
    }

    const changeSinhVien = (key, value) => {
        const tmpSinhvien = {...sv };
        tmpSinhvien[key] = value;
        setSinhVien(tmpSinhvien);
    }

    return (
        <div className="AddStudent">
            <form>
                <div className="form-input">
                    <label for="exampleInputEmail1" className="form-label">Họ và tên đệm: </label>
                    <input type="text" className="form-control"  onChange={(e) => changeSinhVien('firstName', e.target.value)} style={{width: "max-content"}}/>
                </div>
                <div className="form-input">
                    <label for="exampleInputPassword1" className="form-label">Tên: </label>
                    <input type="text" className="form-control"  onChange={(e) => changeSinhVien('lastName', e.target.value)} style={{width: "max-content"}} />
                </div>
                <div className="form-input">
                    <label for="exampleInputPassword1" className="form-label">Điểm số: </label>
                    <input type="number" className="form-control"  onChange={(e) => changeSinhVien('score', e.target.value)} style={{width: "max-content"}}/>
                </div>
                <button type='reset' className="btn btn-primary" onClick={() => listeningBtnAdd()} style={{width: "max-content"}}>Thêm sinh viên</button>
            </form>
        </div>

    )
}

export default AddStudent