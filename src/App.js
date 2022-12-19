import "./App.css";
import Rutas from "./routes/Rutas";
import React, { useEffect } from "react";
function App() {
  const { productos, fetchGetDataCollection } = useFirebase();
  useEffect(() => {
    fetchGetDataCollection();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={`App`}>
      <Rutas data={productos} />
    </div>
  );
}

export default App;
