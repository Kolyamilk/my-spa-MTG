import React, { useState } from 'react';
import imgReviews from '../assets/people-reviews.png'


type ReviewProps = {
    name: string;
    review: string;
    date: string;
};
//ф-ция изменения имени 
const formatName = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length > 1) {
    
        return `${names[0]} ${names[1].charAt(0)}.`;
    }
    return fullName; 
};

const Review: React.FC<ReviewProps> = ({ name, review, date }) => (
    <div className='review-block'>
        <h3>{formatName(name)}</h3>
        <p>{review}</p>
        <span>{date}</span>
    </div>
);

type PaginationProps = {
    reviewsPerPage: number;
    totalReviews: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
    reviewsPerPage,
    totalReviews,
    paginate,
    currentPage
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='nav-paginate'>
            <ul >
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
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

 
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <div className='reviews'>
            <h1>Отзывы: <img src={imgReviews} alt="" /></h1>
            {currentReviews.map((review, index) => (
                <Review key={index} name={review.name} review={review.review} date={review.date} />
            ))}
            <Pagination
                reviewsPerPage={reviewsPerPage}
                totalReviews={reviews.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Main;