// import { StudyMaterialListMock } from 'mocks';
import { StudyMaterialListMock } from 'mocks';
import {useState, useEffect } from 'react';
// import { StudyMaterialViewListItem } from 'types';

const useImagePagination = <T>() =>{
    
    //          state: 현재 스터디 이미지 번호 상태          //
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    //          state: 현재 섹션 번호 상태          //
    const [currentSectionNumber, setCurrentSectionNumber] = useState<number>(1);
    //          state: 보여줄 스터디 이미지 리스트 상태          //
    const [viewImageList, setViewImageList] = useState<string[]>([]);
    //          state: 보여줄 스터디 자료 번호 리스트 상태          //
    const [viewImageNumberList, setViewImageNumberList] = useState<number[]>([]);
    

    //          state: 전체 스터디 이미지 번호 상태          //
    const [totalPage, setTotalPage] = useState<number>(0);
    //          state: 전체 섹션 번호 상태          //
    const [totalSection, setTotalSection] = useState<number>(0);
    //          state: 전체  스터디 이미지 리스트 상태          //
    const [materialImageList, setMaterialImageList] = useState<string[]>([]);


    //          function: 보여줄 자료 이미지 리스트 불러오기 함수          //
    const setViewImagePage = (totalPage: number) => {
        const FIRST_PAGE_INDEX = 6 * (currentSectionNumber - 1) ;
        const LAST_PAGE_INDEX = 6 * currentSectionNumber-1;

        const tmpPageImageList : string[] = [];
        const tmpPageImageNumberList : number[] = [];        

        for (let pageNumber = FIRST_PAGE_INDEX; pageNumber <= LAST_PAGE_INDEX; pageNumber++) {
            if (pageNumber > totalPage) break;
            // 임시 데이터 자료 이미지 주소 넘기기 //
            const studyMaterial = StudyMaterialListMock[pageNumber];
            if (studyMaterial && studyMaterial.studyMaterialImageUrl !== null) {
                tmpPageImageList.push(studyMaterial.studyMaterialImageUrl);

            }
        }

        setViewImageList(tmpPageImageList);


    }

    //          effect: 전체 자료 리스트가 변경될 시 작업          //
    useEffect(() => {
        const totalPage = Math.floor((materialImageList.length - 1) ) + 1;
        const totalSection = Math.floor((materialImageList.length - 1) /6 ) + 1;
        // setViewMaterial();
        setTotalPage(totalPage);
        setTotalSection(totalSection);

        setViewImagePage(totalPage);

    }, [materialImageList]);

    //          effect: 현재 페이지가 변경될 시 보여줄 이미지 리스트 불러오기          //
    useEffect(() => {
        // setViewMaterial();
    }, [currentPageNumber]);

    //          effect: 현재 섹션이 변경될 시 보여줄 페이지 리스트 불러오기          //
    useEffect(() => {
        setViewImagePage(totalPage);
    } ,[currentSectionNumber]);

    return {
        currentPageNumber, 
        setCurrentPageNumber, 
        currentSectionNumber, 
        setCurrentSectionNumber,
        viewImageNumberList,
        setViewImageNumberList,
        viewImageList,
        setViewImagePage,
        totalSection,
        materialImageList,
        setMaterialImageList
    };

}

export default useImagePagination;