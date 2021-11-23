import _ from 'lodash';
import React, { useEffect } from 'react';
import './app.css';

const App = props => {
  console.log('app', _.uniqueId('app'))

  useEffect(() => {
    // const oWorker = wx.createWorker('workers/fsdpf.worker.js');

    // oWorker.postMessage('remaxjs')
  }, [])

  return props.children
};

export default App;
