export interface PlaceMoreCommentOutput {
  comment: {
    kamapComntcnt: number;
    scoresum: number;
    scorecnt: number;
    list: {
      commentid: string;
      contents: string;
      point: number;
      username: string;
      profile: string;
      profileStatus: string;
      photoCnt: number;
      likeCnt: number;
      kakaoMapUserId: string;
      photoList: {
        url: string;
        near: boolean;
      }[];
      ownerReply: {};
      strengths: {
        id: number;
        name: string;
      }[];
      userCommentCount: number;
      userCommentAverageScore: number;
      myStorePick: boolean;
      level: {
        nowLevel: number;
        badge: string;
      };
      date: string;
      isMy: boolean;
      isBlock: boolean;
      isEditable: boolean;
      isMyLike: boolean;
    }[];
    strengthCounts: {
      id: number;
      name: string;
      count: number;
    }[];
    hasNext: boolean;
    reviewWriteBlocked: string;
  };
}
