import React, {useState, useEffect} from 'react'

import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
    
  return (
    <div>
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