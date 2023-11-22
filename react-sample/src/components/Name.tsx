import React from "react";

const Name = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        // style 객체의 키는 캐멀 케이스가 됨
        <div style={{padding: '16px', backgroundColor: 'grey'}}>
            {/* for 대신 htmlFor 사용 */}
            <label htmlFor="name">이름</label>
            {/* class나 onChange 대신, className이나 onChange를 사용 */}
            <input id="name" className="input-name" type="text" onChange={onChange}/>
        </div>
    )
}

export default Name
