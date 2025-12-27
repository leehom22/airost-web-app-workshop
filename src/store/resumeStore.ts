import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export interface ResumeStore extends Resume {
    resumeId: string,
    setResumeData : (resumeData : Resume) => void
    setClearResumeData: () => void
}

const initialFeedback =  {
            overallScore: 0,
            ATS: {
                score: 0,
                tips: []
            },
            toneAndStyle: {
                score: 0,
                tips: []
            },
            content: {
                score: 0,
                tips: []
            },
            structure: {
                score: 0,
                tips: []
            },
            skills: {
                score: 0,
                tips: []
            }
}

export const useResumeStore = create<ResumeStore>()(
    persist(
    (set) => ({
        // Initial state
        resumeId:'',
        id: '',
        companyName: '',
        jobTitle: '',
        imagePath: '',
        resumePath: '',
        feedback: initialFeedback,

        // Actions
        setResumeData: ({id,companyName,jobTitle,imagePath,resumePath,feedback}) => set(() => ({
            resumeId: id,
            id: id,
            companyName: companyName,
            jobTitle: jobTitle,
            imagePath: imagePath,
            resumePath: resumePath,
            feedback: feedback,
        })),

        setClearResumeData: () => set(() => ({
            id: '',
            companyName: '',
            jobTitle: '',
            imagePath: '',
            resumePath: '',
            feedback: initialFeedback,
        }
        
    ))
        }),
        {
            name: 'resume-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)