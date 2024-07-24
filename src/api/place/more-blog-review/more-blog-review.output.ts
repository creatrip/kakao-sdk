export interface PlaceMoreBlogReviewOutput {
  blogReview: {
    placenamefull: string;
    /** undefined 이면 더보기 불가능 */
    moreId?: number;
    blogrvwcnt: number;
    list: {
      blogname: string;
      blogurl: string;
      contents: string;
      outlink: string;
      date: string;
      reviewid: string;
      title: string;
      photoList: {
        orgurl: string;
      }[];
      isMy: boolean;
    }[];
  };
}
