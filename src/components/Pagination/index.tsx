import Link from 'next/link';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { PaginationContainer } from './styles';

interface PaginationProps {
  next: number | null;
  prev: number | null;
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export function Pagination({
  next,
  prev,
  page,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <PaginationContainer>
      {prev !== null && (
        <button className="first-button" type="button" onClick={onPrev}>
          <MdArrowBackIosNew />
        </button>
      )}

      <span>
        Página {page} de {totalPages}
      </span>

      {next !== null && (
        <button className="last-button" type="button" onClick={onNext}>
          <MdArrowForwardIos />
        </button>
      )}
    </PaginationContainer>
  );
}
