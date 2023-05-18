/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {getStory}  from "../services/HackernewsApi";
import mapTime from "../utils/MapTime";


const StoriesWrapper = styled.div`
    margin: 0 auto;
    width: 84%;
    background-color: #F6F6EF;
    padding: 5px 0 0 5px;
`;

const StoryLink = styled.a`
    font-family: Verdana, Geneva, sans-serif;
    font-size: 10pt;
    color: #000000;
    text-decoration: none;
    margin: 0;
    padding: 0;
`;

const StoryDetails = styled.p`
    font-family: Verdana, Geneva, sans-serif;
    font-size: 7pt;
    color: #828282;
    margin: 0;
    padding: 0;
`;

interface StoryProps {
    storyId: number;
}

interface StoryData {
    url: string;
    title: string;
    score: number;
    by: string;
    time: number;
  }

const Story: React.FC<StoryProps> = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    })

    return story && story.url ? (
        <StoriesWrapper>
            <StoryLink href={story.url}>{story.title}</StoryLink>
            <StoryDetails>{story.score} {story.score > 1 ? 'points' : 'point'} by: {story.by} {mapTime(story.time)} ago</StoryDetails>
        </StoriesWrapper>
    ) : null
}

export default Story