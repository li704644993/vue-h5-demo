//判断是否是iOS设备
export let isIos = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) return true;
  else return false;
};

//判断是否是QQ环境
export let isQQ = function() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/\sQQ/i) !== null) return true;
  else return false;
  
};

//判断是否是Android环境
export let isAndroid = function() {
  var ua = navigator.userAgent.toLowerCase();
  if (/Android/i.test(ua)) return true;
  else return false;
};

// 判断是否是微信环境
export let isWeChat = function() {
  const ua = navigator.userAgent.toLowerCase();
  if (/MicroMessenger/i.test(ua)) return true;
  else return false;
};