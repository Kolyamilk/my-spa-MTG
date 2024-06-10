import React, { useState, useEffect } from 'react';

// Определим типы для пропсов компонента Review
const currentPage = 1;
type ReviewProps = {
    name: string;
    review: string;
    date: string;
};

const Review: React.FC<ReviewProps> = ({ name, review, date }) => (
    <div className='review-block'>

        <h3>{name}</h3>
        <p>{review}</p>
        <span>{date}</span>
    </div>
);

// Определим типы для пропсов компонента Pagination
type PaginationProps = {
    reviewsPerPage: number;
    totalReviews: number;
    paginate: (pageNumber: number) => void;
    currentPage: number; // Добавляем это свойство
};

const Pagination: React.FC<PaginationProps> = ({
    reviewsPerPage,
    totalReviews,
    paginate,
    currentPage // Передаем currentPage как пропс
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='nav-paginate'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className={currentPage === number ? 'active' : ''}>
                        <a onClick={() => paginate(number)} href="#!">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Определим типы для пропсов компонента Main
type MainProps = {
    reviews: {
        name: string;
        review: string;
        date: string;
    }[];
};

const Main: React.FC<MainProps> = ({ reviews }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage] = useState(10);
    // Получить текущие отзывы
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    // Сменить страницу
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <div>
            <h1>Отзывы:</h1>
            {currentReviews.map((review, index) => (
                <Review key={index} name={review.name} review={review.review} date={review.date} />
            ))}
            <Pagination
                reviewsPerPage={reviewsPerPage}
                totalReviews={reviews.length}
                paginate={paginate}
                currentPage={currentPage} // Передаем текущую страницу компоненту Pagination
            />
        </div>
    );
};

export default Main;