import { mockSentence } from './sentence'
export const Database = jest.fn();


const mock = jest.fn().mockImplementation(() => {
    return  { db: { Sentence: mockSentence} }
    
})

export default mock;