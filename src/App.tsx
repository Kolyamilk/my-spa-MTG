import  { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import dataReviews from './data/data.json';


interface Review {
  name: string;
  review: string;
  date: string;
}

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    try {
   
      const reviewsArray: Review[] = Object.values(dataReviews.ru).map(review => ({
        name: review.name,
        review: review.review,
        date: review.date,
      }));
      setReviews(reviewsArray);
    } catch (error) {
      console.error("Неполучилось получить данные об отзывах: ", error);
    }
  }, []);

  return (
    <>
      <Header />
      <Main reviews={reviews} />
    </>
  );
}

export default App;