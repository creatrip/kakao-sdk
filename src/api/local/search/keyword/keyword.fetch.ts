import { SearchKeywordInput } from './keyword.input';
import { SearchKeywordOutput } from './keyword.output';

/**
 * 키워드로 장소 검색하기
 *
 * @link https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword
 */
export async function searchKeyword(
  restApiKey: string,
  input: SearchKeywordInput,
): Promise<SearchKeywordOutput> {
  const url = new URL('https://dapi.kakao.com/v2/local/search/keyword.json');

  url.searchParams.append('query', input.query);

  if (input.categoryGroupCode != undefined) {
    url.searchParams.append('category_group_code', input.categoryGroupCode);
  }

  if (input.longitude != undefined) {
    url.searchParams.append('x', String(input.longitude));
  }

  if (input.latitude != undefined) {
    url.searchParams.append('y', String(input.latitude));
  }

  if (input.radius != undefined) {
    if (input.radius < 0) {
      throw new Error('radius는 0 이상이어야 합니다.');
    }

    if (input.radius > 20000) {
      throw new Error('radius는 20000 이하여야 합니다.');
    }

    url.searchParams.append('radius', String(input.radius));
  }

  if (input.rect != undefined) {
    url.searchParams.append('rect', input.rect);
  }

  if (input.page != undefined) {
    if (input.page < 1) {
      throw new Error('page는 1 이상이어야 합니다.');
    }

    if (input.page > 45) {
      throw new Error('page는 45 이하여야 합니다.');
    }

    url.searchParams.append('page', String(input.page));
  }

  if (input.size != undefined) {
    if (input.size < 1) {
      throw new Error('size는 1 이상이어야 합니다.');
    }

    if (input.size > 15) {
      throw new Error('size는 15 이하여야 합니다.');
    }

    url.searchParams.append('size', String(input.size));
  }

  if (input.sort != undefined) {
    url.searchParams.append('sort', input.sort);
  }

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `KakaoAK ${restApiKey}`,
    },
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('키워드로 장소 검색하기 실패');
  }

  const data = await response.json();

  return {
    meta: {
      totalCount: data.meta.total_count,
      pageableCount: data.meta.pageable_count,
      isEnd: data.meta.is_end,
      sameName: {
        region: data.meta.same_name.region,
        keyword: data.meta.same_name.keyword,
        selectedRegion: data.meta.same_name.selected_region,
      },
    },
    documents: data.documents.map(
      (document: any): SearchKeywordOutput['documents'][0] => ({
        id: Number(document.id),
        placeName: document.place_name,
        categoryName: document.category_name,
        categoryGroupCode: document.category_group_code,
        categoryGroupName: document.category_group_name,
        longitude: Number(document.x),
        latitude: Number(document.y),
        phone: document.phone,
        addressName: document.address_name,
        roadAddressName: document.road_address_name,
        placeUrl: document.place_url,
        distance: document.distance != '' ? Number(document.distance) : null,
      }),
    ),
  };
}
