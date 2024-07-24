import { PlaceDetailInput } from './detail.input';
import { PlaceDetailOutput } from './detail.output';

export async function placeDetail(
  input: PlaceDetailInput,
): Promise<PlaceDetailOutput> {
  const url = new URL('https://place.map.kakao.com/main/v/' + input.id);

  const response = await fetch(url.toString(), { method: 'GET' });

  if (!response.ok) {
    throw new Error('장소 상세 정보 가져오기 실패');
  }

  const data = await response.json();

  if (!data.isExist) {
    throw new Error('존재하지 않는 장소입니다.');
  }

  return data;
}
