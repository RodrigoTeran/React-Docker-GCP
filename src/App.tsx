import React from 'react';

import DockerImg from "./assets/img/Docker-Logo-2013.png";

const App: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen bg-slate-50 flex justify-center items-center flex-col gap-y-11">
      <h1 className="text-6xl text-slate-600 font-medium">Test docker</h1>
      <img className="w-60" src={DockerImg} alt="Docker" />
    </div>
  );
}

export default App;
