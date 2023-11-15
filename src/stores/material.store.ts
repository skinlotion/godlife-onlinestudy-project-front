import { create } from 'zustand';

interface MaterialStore {

    studyMaterialName : string | null;
    studyMaterialImageUrl : string | null;
    studyMaterialImageWriter : string | null;
    studyMaterialDatetime : string | null;

    setStudyMaterialName : (studyMaterialName : string | null ) => void;
    setStudyMaterialImageUrl : (studyMaterialImageUrl : string | null ) => void;
    setStudyMaterialImageWriter : (studyMaterialImageUrl : string | null ) => void;
    setStudyMaterialDatetime : (studyMaterialDatetime : string | null) => void;

    resetMaterial : ( )=> void;
}

const useMaterialStore = create<MaterialStore>((set) => ({
    studyMaterialName : '',
    studyMaterialImageUrl : '',
    studyMaterialImageWriter : '',
    studyMaterialDatetime : '',

    setStudyMaterialName : (studyMaterialName : string | null ) => {set((state) => ({ ...state, studyMaterialName }))},
    setStudyMaterialImageUrl : (studyMaterialImageUrl : string | null ) => {set((state) => ({ ...state, studyMaterialImageUrl }))},
    setStudyMaterialImageWriter : (studyMaterialImageWriter : string | null ) => {set((state) => ({ ...state, studyMaterialImageWriter }))},
    setStudyMaterialDatetime : (studyMaterialDatetime : string | null) => {set((state) => ({ ...state, studyMaterialDatetime }))},

    resetMaterial :( )=> { set((state) =>({...state, studyMaterialName : '' ,studyMaterialImageUrl : '',studyMaterialImageWriter : '', studyMaterialDatetime : ''})) }
    
}));

export default useMaterialStore;