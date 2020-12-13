import { useState } from 'react';
import Form from './Form'

function List() {
    const [list, setList] = useState([
        {
            id: 1,
            user: "Dev Amit Jha",
            desig: "Developer"
        }
    ])
    const addList = (user, desig) => {
        setList([...list, { id: Math.random(50), user, desig }]);
        //console.log(desig);
    }
    return (
        <div className="container_">
            <div className="form_area">
                <Form addList={addList} />
            </div>
            <div className="card_list">
                {
                    list.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                <div className="avatar">
                                    <img src="images/sample.jpg" />
                                </div>
                                <h3>{item.user}</h3>
                                <h6>{item.desig}</h6>
                                <div className="social">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List
