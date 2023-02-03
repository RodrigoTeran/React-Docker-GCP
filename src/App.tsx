import React from 'react';

import DockerImg from './assets/img/Docker-Logo-2013.png';

const App: React.FunctionComponent = () => {
  return (
    <div className="w-screen h-screen bg-slate-50 flex justify-center items-center flex-col gap-y-11">
      <div className="flex flex-col gap-y-4">
        <h1 className="text-6xl text-slate-600 font-medium">Test docker</h1>
        <p className="flex flex-col items-center gap-y-4">
          <div className="rounded bg-slate-400 text-slate-900 px-4 py-1">
            $ Hello world!
          </div>
        </p>
      </div>
      <img className="w-60" src={DockerImg} alt="Docker" />
    </div>
  );
};

export default App;
