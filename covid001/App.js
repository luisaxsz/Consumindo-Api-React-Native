import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CovidCard } from './covidCard';


export default function App() {
  const [dados, setDados] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true")
      .then(res => res.json())
      .then((data) => setDados(data.infectedByRegion))
      .catch(error => console.error(error));
  }, []);

    const handleNextState = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dados.length);
    };
  

  return (
    <View>
      {dados.length > 0 && (
        <CovidCard dadosLocal={dados[currentIndex]} onNext={handleNextState} />
      )}
    </View>
  );
}

