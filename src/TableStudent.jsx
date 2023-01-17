import React, {useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function TableStudent({listSV,removeSinhVien}) {
    const [scoreMax, setScoreMax] = useState(false);
    const listeningBtnMark = () => {
        setScoreMax(!scoreMax);
    }


    return (
    <div className='TableStudent'>
        <Button variant="success" style={{margin: '20px 0px 20px 0px'}} onClick={() => listeningBtnMark()}>Đánh dấu sinh viên điểm cao</Button>{' '}
        <Table striped bordered hover style={{width: 'max-content'}}>
        <thead>
            <tr>
                {/* <th>#</th> */}
                <th>First Name</th>
                <th>Last Name</th>
                <th>Score</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                listSV.map((item) => {
                    return(
                        <tr id = {item.id} key = {item.id}> 
                            {/* <td>{item.id}</td> */}
                            <td style={(scoreMax && item.score >= 5) ? {color: 'red'} : {}}>{item.firstName}</td>
                            <td style={(scoreMax && item.score >= 5) ? {color: 'red'} : {}}>{item.lastName}</td>
                            <td>{item.score}</td>
                            <td><Button variant="danger" onClick={() => removeSinhVien(item)}>Xóa</Button>{' '}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
    </div>
  )
}
