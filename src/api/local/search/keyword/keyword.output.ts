import { CategoryGroupCode } from './keyword.enum';

/**
 * 키워드로 장소 검색하기 응답
 */
export interface SearchKeywordOutput {
  meta: {
    /**
     * 검색어에 검색된 문서 수
     */
    totalCount: number;

    /**
     * total_count 중 노출 가능 문서 수 (최대: 45)
     */
    pageableCount: number;

    /**
     * 현재 페이지가 마지막 페이지인지 여부  \
     * 값이 false면 다음 요청 시 page 값을 증가시켜 다음 페이지 요청 가능
     */
    isEnd: boolean;

    /**
     * 질의어의 지역 및 키워드 분석 정보
     */
    sameName: {
      /**
       * 질의어에서 인식된 지역의 리스트  \
       * 예: '중앙로 맛집' 에서 중앙로에 해당하는 지역 리스트
       */
      region: string[];

      /**
       * 질의어에서 지역 정보를 제외한 키워드  \
       * 예: '중앙로 맛집' 에서 '맛집'
       */
      keyword: string;

      /**
       * 인식된 지역 리스트 중, 현재 검색에 사용된 지역 정보
       */
      selectedRegion: string;
    };
  };

  /**
   * 응답 결과
   */
  documents: {
    /**
     * 장소 ID
     * @example 8227836
     */
    id: number;

    /**
     * 장소명, 업체명
     * @example 'GS 칼텍스 남일주유소'
     */
    placeName: string;

    /**
     * 카테고리 이름
     * @example '교통,수송 > 자동차 > 주유,가스 > 주유소 > GS칼텍스'
     */
    categoryName: string;

    /**
     * 중요 카테고리만 그룹핑한 카테고리 그룹 코드
     * @example 'OL7'
     */
    categoryGroupCode: CategoryGroupCode;

    /**
     * 중요 카테고리만 그룹핑한 카테고리 그룹명
     * @example '주유소,충전소'
     */
    categoryGroupName: keyof typeof CategoryGroupCode;

    /**
     * 전화번호
     * @example '031-566-3477'
     */
    phone: string;

    /**
     * 전체 지번 주소
     * @example '경기 구리시 교문동 754-8'
     */
    addressName: string;

    /**
     * 전체 도로명 주소
     * @example '경기 구리시 아차산로 436'
     */
    roadAddressName: string;

    /**
     * X 좌표값, 경위도인 경우 longitude (경도)
     * @example 127.131588561163
     */
    longitude: number;

    /**
     * Y 좌표값, 경위도인 경우 latitude(위도)
     * @example 37.5938564774086
     */
    latitude: number;

    /**
     * 장소 상세페이지 URL
     * @example 'http://place.map.kakao.com/8195886'
     */
    placeUrl: string;

    /**
     * 중심좌표까지의 거리 (단, x,y 파라미터를 준 경우에만 존재)  \
     * 단위 meter
     */
    distance: number | null;
  }[];
}
