import { PlaceMoreCommentInput } from './more-comment.input';
import { PlaceMoreCommentOutput } from './more-comment.output';

export async function placeMoreComment(
  input: PlaceMoreCommentInput,
): Promise<PlaceMoreCommentOutput> {
  const url = new URL(
    `https://place.map.kakao.com/commentlist/v/${input.id}/${input.commentId}`,
  );

  const response = await fetch(url.toString(), { method: 'GET' });

  if (!response.ok) {
    throw new Error('장소 댓글 가져오기 실패');
  }

  const data = await response.json();

  return data;
}
