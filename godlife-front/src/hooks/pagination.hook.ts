import { useState, useEffect } from 'react';

const usePagination = <T>() => {

    //              state: 내가 참여한 스터디 방 리스트 상태              //
    const [studyRoomInfoList, setStudyRoomInfoList] = useState<T[]>([]);

    return {
        setStudyRoomInfoList,
    };
}

export default usePagination;