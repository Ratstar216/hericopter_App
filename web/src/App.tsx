import React from 'react';
import { useEffect } from 'react';
import Map from './Map'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Map />
      </header>
      <body>
      <div id="controls">
        <button id="emergencyBtn">緊急</button>
        <button id="resumeBtn">再始動</button>
        {/* <button onclick="location.href='index_map.html'">航路</button> */}
        <div id="distanceDisplay">距離: 計算中...</div>
        {/* <button onclick="location.href='index_llm.html'">管制官からの指示</button> */}
      </div>
      <p>出典：国土地理院</p>
      <a href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル一覧</a>
      </body>
    </div>
  );
}

export default App;
