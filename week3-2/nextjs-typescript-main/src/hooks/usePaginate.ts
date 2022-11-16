import { useState } from 'react';

export type initalValu = {
  [key: string]: number;
};

function usePaginate<T>({ PAGE_SIZE }: initalValu, allData: T[]) {
  const [itemOffset, setItemOffset] = useState(0);
  // 전체 데이터의 길이 + 보여주고자하는 개수
  const endOffset = itemOffset + PAGE_SIZE;
  const currentItems = allData?.slice(itemOffset, endOffset); //전체 데이터의 길이에서 보여주고자하는 개수를 잘라낼수 있습.
  const pageCount = Math.ceil(allData?.length / PAGE_SIZE);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * PAGE_SIZE) % allData?.length; //N번째 페이지의 첫 게시물의 위치
    setItemOffset(newOffset);
  };

  return { currentItems, pageCount, handlePageClick };
}

export default usePaginate;
