/* eslint-disable react/function-component-definition */
import { useEffect, useState } from 'react';
import { getStoryIds } from '../services/HackernewsApi';
import Story from './Story';

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      {storyIds.slice(0, 100).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

export default StoriesContainer;
