import React from 'react'

import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
    
  return (
    <div>
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */}
      <PropagateLoader
        color="#253BE1"
        // loading={loading}
        size={15}
        // cssOverride={override}
      />
    </div>
  );
}

export default Loading