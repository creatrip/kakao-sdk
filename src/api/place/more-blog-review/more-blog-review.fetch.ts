import { PlaceMoreBlogReviewInput } from './more-blog-review.input';
import { PlaceMoreBlogReviewOutput } from './more-blog-review.output';

export async function placeMoreBlogReview(
  input: PlaceMoreBlogReviewInput,
): Promise<PlaceMoreBlogReviewOutput> {
  const url = new URL(
    `https://place.map.kakao.com/blogrvwlist/v/${input.id}/${input.moreId}`,
  );

  const response = await fetch(url.toString(), { method: 'GET' });

  if (!response.ok) {
    throw new Error('장소 블로그 후기 가져오기 실패');
  }

  const data = await response.json();

  return data;
}
