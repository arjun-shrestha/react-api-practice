import React from 'react';
import PageLink from './PageLink'
import {getPaginationItems} from '../lib/pagination'

export type Props = {
    currentPage: number;
    lastPage: number;
    maxLength : number;
    setCurrentPage : (page: number) => void;
};

export default function Pagination({
    currentPage,
    lastPage,
    maxLength,
    setCurrentPage,
}: Props){
    const PageNumbers = getPaginationItems(currentPage, lastPage, maxLength);

    console.log( `This is the PageNumber Array : ${PageNumbers}`);
    return (
        <nav className="pagination" aria-label="Pagination">
            <PageLink
             href="#" 
             disabled = {currentPage === 1}
             onClick={() => setCurrentPage(currentPage -1)}>Previous</PageLink>

            {PageNumbers.map((pageNum, index) => (
                <PageLink 
                    key={index}
                    href="#"
                    active={pageNum === currentPage}
                    disabled= {isNaN(pageNum)}
                    onClick={() => setCurrentPage(pageNum)}>
                    {!isNaN(pageNum) ? pageNum : '...'}
                </PageLink>
            ))}
            <PageLink 
            href="#" 
            disabled={currentPage === lastPage}
            onClick={() => setCurrentPage(currentPage + 1)}>Next</PageLink>
        </nav>
    )


}