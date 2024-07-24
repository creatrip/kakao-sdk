export interface PlaceDetailOutput {
  basicInfo: {
    cid: number;
    placenamefull: string;
    mainphotourl: string;
    phonenum: string;
    address: {
      newaddr: { newaddrfull: string; bsizonno: string };
      region: {
        name3: string;
        fullname: string;
        newaddrfullname: string;
      };
      addrbunho: string;
      addrdetail: string;
    };
    homepage: string;
    homepagenoprotocol: string;
    wpointx: number;
    wpointy: number;
    roadview: {
      panoid: number;
      tilt: number;
      pan: number;
      wphotox: number;
      wphotoy: number;
      rvlevel: number;
    };
    category: {
      cateid: string;
      catename: string;
      cate1name: string;
      fullCateIds: string;
    };
    feedback: {
      allphotocnt: number;
      blogrvwcnt: number;
      comntcnt: number;
      scoresum: number;
      scorecnt: number;
    };
    openHour: {
      periodList: {
        periodName: string;
        timeList: {
          timeName: string;
          timeSE: string;
          dayOfWeek: string;
        }[];
      }[];
      realtime: {
        holiday: string;
        breaktime: string;
        open: string;
        moreOpenOffInfoExists: string;
        datetime: string;
        currentPeriod: {
          periodName: string;
          timeList: {
            timeName: string;
            timeSE: string;
            dayOfWeek: string;
          }[];
        };
        closedToday: string;
      };
    };
    operationInfo: { appointment: string };
    source: { date: string };
    regions: { depth: number; id: string; name: string }[];
    isStation: false;
  };

  comment: {
    placenamefull: string;
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
      photoList: { url: string; near: boolean }[];
      userCommentCount: number;
      userCommentAverageScore: number;
      myStorePick: boolean;
      level: { nowLevel: number; badge: string };
      date: string;
      isMy: boolean;
      isBlock: boolean;
      isEditable: boolean;
      isMyLike: boolean;
    }[];
    hasNext: boolean;
    reviewWriteBlocked: string;
  };

  findway: {
    x: number;
    y: number;
    subway: {
      stationSimpleName: string;
      stationId: string;
      exitNum: string;
      toExitDistance: number;
      subwayList: { subwayId: string; subwayName: string }[];
      toExitMinute: number;
    }[];
    busstop: {
      busStopId: string;
      busStopName: string;
      busStopDisplayId: string;
      toBusstopDistance: number;
      wpointx: number;
      wpointy: number;
      busInfo: {
        busType: string;
        busTypeCode: string;
        busList: { busId: string; busName: string }[];
        busNames: string;
      }[];
    }[];
    busDirectionCheck: boolean;
  };

  photo: {
    photoList: {
      photoCount: number;
      categoryName: string;
      list: {
        photoid: string;
        orgurl: string;
      }[];
    }[];
  };

  blogReview?: {
    placenamefull: string;
    moreId: number;
    blogrvwcnt: number;
    list: {
      blogname: string;
      blogurl: string;
      contents: string;
      outlink: string;
      date: string;
      reviewid: string;
      title: string;
      photoList: { orgurl: string }[];
      isMy: false;
    }[];
  };
}
