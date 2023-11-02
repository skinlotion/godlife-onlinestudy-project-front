import { useState, useEffect } from 'react';

const usePagination = <T>() => {

    //              state: 전체 게시물 리스트 상태              //
    const [studyRoomInfoList, setStudyRoomInfoList] = useState<T[]>([]);

    return {
        setStudyRoomInfoList,
    };
}

export default usePagination;