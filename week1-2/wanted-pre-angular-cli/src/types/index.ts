export interface IssueResponse {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
  comments: number;
  created_at: string;
}

export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  user: {
    name: string;
    profile_url: string;
  };
}
