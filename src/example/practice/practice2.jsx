import { useState } from 'react';

export default function Practice2() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');

  
    const [list, setList] = useState([
        { name: '신동엽', phone: '010-7894-7894', age: 50 },
        { name: '강호동', phone: '010-4321-4321', age: 40 },
        { name: '유재석', phone: '010-1234-1234', age: 30 },
    ]);


    const handleAdd = () => {
        if (name === '' || phone === '' || age === '') {
            alert('모든 항목을 입력하세요.');
            return;
        }
        const newPerson = { name: name, phone: phone, age: age };
        setList([...list, newPerson]);

        setName('');
        setPhone('');
        setAge('');
    };

    const handleDelete = (index) => {
        const newList = list.filter((item, i) => i !== index);
        setList(newList);
    };

    return (<>
            <h2>전화번호부</h2>

            <input 
                type="text" 
                placeholder="성명" 
                value={name}
                onChange={(event) => setName(event.target.value)} 
            />
            <input 
                type="text" 
                placeholder="연락처 (예: 010-1234-5678)" 
                value={phone}
                onChange={(event) => setPhone(event.target.value)} 
            />
            <input 
                type="text" 
                placeholder="나이" 
                value={age}
                onChange={(event) => setAge(event.target.value)} 
            />
            <button type="button" onClick={handleAdd}>등록</button>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        성명: {item.name} 연락처: {item.phone} 나이: {item.age}
                        <button type="button" onClick={() => handleDelete(index)}>삭제</button>
                    </li>
                ))}
            </ul>

            <div>총 {list.length}명</div>
        </>
    );
}