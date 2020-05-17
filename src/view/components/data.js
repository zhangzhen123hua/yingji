export const geoCoordMap = {
  国家煤矿安全监察局: [126, 43],
  龙煤集团: [127.7629489, 46.3297718],
  黑龙江煤矿安全监察局: [126.53, 45.80],
  龙鹤岗矿业集团: [130.2994126400, 47.3475878400],
  双鸭山矿业集团: [131.2259077300, 46.5325305500],
  新疆能源公司: [118, 44],
  七台河矿业集团: [131.0243150400, 45.7652328400],
  鸡西矿业集团: [130.9740127900, 45.2935993800]
}

export const getGeoCoordList = () => {
  const res = []
  for (const key in geoCoordMap) {
    res.push({ name: key, value: geoCoordMap[key] })
  }
  return res
}

export const lines = [
  [geoCoordMap['黑龙江煤矿安全监察局'], geoCoordMap['国家煤矿安全监察局']],
  [geoCoordMap['龙煤集团'], geoCoordMap['黑龙江煤矿安全监察局']],
  [geoCoordMap['龙鹤岗矿业集团'], geoCoordMap['龙煤集团']],
  [geoCoordMap['双鸭山矿业集团'], geoCoordMap['龙煤集团']],
  [geoCoordMap['新疆能源公司'], geoCoordMap['龙煤集团']],
  [geoCoordMap['七台河矿业集团'], geoCoordMap['龙煤集团']],
  [geoCoordMap['鸡西矿业集团'], geoCoordMap['龙煤集团']]
]
