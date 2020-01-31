import React from 'react';
import logo from './logo.svg';
import MyH1 from './MyH1';
import './App.css';

function App() {
  const color = 'blue';
  const text = 'date: '
  const time = Date.now();

  const props={
    id: 'id',
    className: 'className',
    title: 'Title',
  };

  let num = 0;

  const items = ['data1', 'data2', 'data3'];

  function MyText(){
    //関数名はキャメルケース
    return (<p>my text</p>)
  }

  return (
    <>
      <MyH1 />
      
      {(() => {
        //プレーンなJS
        num++;
        return <p>{num}</p>
      })()}

      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <MyText />

      <div style={{ color: color }}>{text}:{time}</div>
      
      <h1 {...props}>hello, props</h1>

      {/* 三項演算子 */}
      <div>
        {time%2 === 0 ? <p>true</p>: <p>false</p>}
        {time%2 === 0 && <p>if ture</p>}
      </div>

      <h1 className="class"
      //id='Id'
      >Hello, World
      </h1>
      
      <div>
        画像<br />
        <img src="img.svg" alt="" />
      </div>

      <div>
        テキストエリア<br />
        <label htmlFor="text">text</label>
        <input type="text" defaultValue="aaa"></input>
      </div>
      
      <div>
        ラジオボタン<br />
        <input type="radio" defaultValue="bbb" id="radio" name="radio"></input><br />
        <input type="radio" defaultValue="ccc" id="radio" name="radio" defaultChecked></input>
      </div>

      <div>
        スタイル<br />
        <p style={{textAlign: 'left', color: 'red'}}>css</p>
      </div>

      
      <h1 tabIndex="1">tabIndex</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* {}の中でJSコードがかける */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
