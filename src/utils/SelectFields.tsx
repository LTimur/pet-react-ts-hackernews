interface FieldsData {
    id: number;
    by: string;
    url: string;
    time: number;
    title: string;
    score: number;
  }
  
  const selectFields = ({ id, by, url, time, title, score }: FieldsData): FieldsData => ({
    id,
    by,
    url,
    time,
    title,
    score
  });
  
  export default selectFields;
  