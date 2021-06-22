import React, {useState, useEffect} from 'react'
import Donut from './Components/Donut/Donut';
import axios from "axios";


function App() {

  const [graph, setGraph] = useState([]);

  const getGraph = () => {
    axios
    .get("http://localhost:4000/graphics", {
    })
    .then((response) => {
        
        setGraph(response.data.results);
    })
    .catch((err) => {
        console.log(err);
    });
  };

  useEffect(() => {
    getGraph();
  }, []);

  return (
    <>
      {graph.map((element) => (
        <Donut 
          name={element.graph.name}
          count={element.graph.count}
          article1={element.graph.article1}
          article2={element.graph.article2}
          percentage1={Number(element.graph.percentage1)}
          percentage2={Number(element.graph.percentage2)}
          number1={element.graph.number1}
          number2={element.graph.number2}
          color={element.graph.color}
        />
      ))}
    </>
  );
}

export default App;
