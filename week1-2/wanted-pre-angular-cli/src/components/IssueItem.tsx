/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Issue } from '../types/index';

interface Props {
  issue: Issue;
  index?: number;
}

const Banner = styled.a`
	border-style: solid;
	border-width: 0.1rem;
	border-color: black;
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	img {
		width: 100%;
		height: 3rem;
		object-fit: contain;
	}
`;

const IssueItemInner = styled.li`
	all: unset;	
	width: 100%;
	font-size: 1rem;
	hr {
		width: 100%;
		border-style: solid;
		border-width: 0px;
		border-bottom-width: 0.1rem;
	}
	a {
		all: unset;
		cursor: pointer;
		display: flex;
	}
	div.left {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.3rem;
	}
	div.right {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div.leftTop{
		display: flex;
		gap: 0.5rem;
		font-size: 1.2em;
	}
	div.leftBottom {
		display: flex;
		gap: 0.5rem;
	}
`

const BANNER_IMG_URL =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

function IssueItem({ issue, index }: Props) {
  return (
    <>
      <IssueItemInner>
        <Link to={`/${issue.id}`} state={{ state: issue }}>
          <div className="left">
            <div className="leftTop">
              <div>#{issue.number}</div>
              <div>{issue.title}</div>
            </div>
            <div className="leftBottom">
              <div>작성자: {issue.user.name},</div>
              <div>작성일: {issue.created_at}</div>
            </div>
          </div>
          <div className="right">
            <div>코멘트: {issue.comments}</div>
          </div>
        </Link>
        <hr />
      </IssueItemInner>
      {index === 4 && (
        <Banner
          href="https://www.wanted.co.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={BANNER_IMG_URL} alt="wanted_logo" />
        </Banner>
      )}
    </>
  );
}

export default memo(IssueItem);

