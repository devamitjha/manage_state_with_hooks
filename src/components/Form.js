import { useState } from 'react'

function Form({ addList }) {
    const [user, setUser] = useState('');
    const [desig, setDesig] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addList(user, desig);
        setUser('');
        setDesig('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="formField">
                <label className="addTitle">User Name</label>
                <input type="text" value={user} required onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="formField">
                <label className="addTitle">Enter Designation</label>
                <input type="text" value={desig} required onChange={(e) => setDesig(e.target.value)} />
            </div>
            <button class="addBtn">Add User</button>
        </form>
    )
}

export default Form
