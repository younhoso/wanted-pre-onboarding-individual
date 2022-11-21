
import styled from 'styled-components';
import { useIssuesValue } from '../hooks/useIssues';
import { Issue } from '../types/index';
import IssueItem from './IssueItem';

const IssueListWrapper = styled.div`
	all: unset;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

function IssueList() {
  const issues = useIssuesValue();
  console.log(issues)

  if (issues === null) return null;

  return (
    <IssueListWrapper>
      {issues.map((issue: Issue, index) => (
        <IssueItem issue={issue} key={issue.id} index={index} />
      ))}
    </IssueListWrapper>
  );
}

export default IssueList;