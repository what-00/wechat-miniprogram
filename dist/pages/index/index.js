require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/View/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 */var View=Object(esm["d" /* createHostComponent */])('view');View.defaultProps={hoverClassName:'none',hoverStopPropagation:false,hoverStartTime:50,hoverStayTime:400};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Input/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */var Input=Object(esm["d" /* createHostComponent */])('input');Input.defaultProps={type:'text',password:false,placeholderClassName:'input-placeholder',disabled:false,cursorSpacing:0,autoFocus:false,focus:false,alwaysEmbed:false,confirmType:'done',confirmHold:false,maxlength:140,selectionEnd:-1,selectionStart:-1,adjustPosition:true,holdKeyboard:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html
 */var Textarea=Object(esm["d" /* createHostComponent */])('textarea');Textarea.defaultProps={placeholderClassName:'textarea-placeholder',disabled:false,maxlength:140,autoFocus:false,focus:false,autoHeight:false,fixed:false,cursorSpacing:0,cursor:-1,showConfirmBar:true,selectionStart:-1,selectionEnd:-1,adjustPosition:true,holdKeyboard:false,disableDefaultPadding:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Video/index.js
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var hostComponentName='video';var Video_VideoRender=function VideoRender(props,ref){var children=props.children,restProps=__rest(props,["children"]);var videoProps=__assign(__assign({},restProps),{ref:ref});return/*#__PURE__*/react["createElement"](hostComponentName,videoProps,children);};/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 * https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */var RemaxVideo=/*#__PURE__*/react["forwardRef"](Video_VideoRender);RemaxVideo.defaultProps={controls:true,danmuBtn:false,enableDanmu:false,autoplay:false,loop:false,muted:false,initialTime:0,pageGesture:false,showProgress:true,showFullscreenBtn:true,showPlayBtn:true,showCenterPlayBtn:true,enableProgressGesture:true,objectFit:'contain',showMuteBtn:false,playBtnPosition:'bottom',enablePlayGesture:false,autoPauseIfNavigate:true,autoPauseIfOpenNative:true,vslideGesture:false,vslideGestureInFullscreen:true,showCastingButton:false,pictureInPictureShowProgress:false,enableAutoRotation:false,showScreenLockButton:false,showSnapshotButton:false,showBackgroundPlaybackButton:false};var Video=Object(esm["d" /* createHostComponent */])(hostComponentName,RemaxVideo);
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html
 */var Swiper=Object(esm["d" /* createHostComponent */])('swiper');Swiper.defaultProps={indicatorDots:false,indicatorColor:'rgba(0, 0, 0, .3)',indicatorActiveColor:'#000000',autoplay:false,current:0,interval:5000,duration:500,circular:false,vertical:false,previousMargin:'0px',nextMargin:'0px',displayMultipleItems:1,skipHiddenItemLayout:false,easingFunction:'default',snapToEdge:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js
var ScrollView=Object(esm["d" /* createHostComponent */])('scroll-view');ScrollView.defaultProps={upperThreshold:50,lowerThreshold:50,scrollX:false,scrollY:false,scrollWithAnimation:false,enableBackToTop:false,enableFlex:false,scrollAnchoring:false,refresherEnabled:false,refresherThreshold:45,refresherDefaultStyle:'black',refresherBackground:'#fff',refresherTriggered:false,enhanced:false,bounces:true,showScrollbar:true,pagingEnabled:false,fastDeceleration:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html
 */var SwiperItem=Object(esm["d" /* createHostComponent */])('swiper-item');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html
 */var MovableView=Object(esm["d" /* createHostComponent */])('movable-view');MovableView.defaultProps={direction:'none',inertia:false,outOfBounds:false,damping:20,friction:2,disabled:false,scale:false,scaleMin:0,scaleMax:10,scaleValue:1,animation:true};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */var MovableArea=Object(esm["d" /* createHostComponent */])('movable-area');MovableArea.defaultProps={scaleArea:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html
 */var CoverView=Object(esm["d" /* createHostComponent */])('cover-view');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
 */var CoverImage=Object(esm["d" /* createHostComponent */])('cover-image');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Icon/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/icon.html
 */var Icon=Object(esm["d" /* createHostComponent */])('icon');Icon.defaultProps={size:23};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Text/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/text.html
 */var Text=Object(esm["d" /* createHostComponent */])('text');Text.defaultProps={selectable:false,userSelect:false,decode:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/RichText/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html
 */var RichText=Object(esm["d" /* createHostComponent */])('rich-text');RichText.defaultProps={nodes:[]};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Progress/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/progress.html
 */var Progress=Object(esm["d" /* createHostComponent */])('progress');Progress.defaultProps={showInfo:false,borderRadius:0,fontSize:16,strokeWidth:6,color:'#09BB07',activeColor:'#09BB07',backgroundColor:'#EBEBEB',active:false,activeMode:'backwards',duration:30};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Button/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/button.html
 * https://q.qq.com/wiki/develop/miniprogram/component/form/button.html
 */var Button=Object(esm["d" /* createHostComponent */])('button');Button.defaultProps={hoverClassName:'button-hover',hoverStartTime:20,hoverStayTime:70};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html
 */var CheckboxGroup=Object(esm["d" /* createHostComponent */])('checkbox-group');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html
 */var Checkbox=Object(esm["d" /* createHostComponent */])('checkbox');Checkbox.defaultProps={disabled:false,checked:false,color:'#09bb07'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Form/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/form.html
 */var Form=Object(esm["d" /* createHostComponent */])('form');Form.defaultProps={reportSubmit:false,reportSubmitTimeout:0};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Label/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/label.html
 */var Label=Object(esm["d" /* createHostComponent */])('label');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Picker/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker.html
 */var Picker=Object(esm["d" /* createHostComponent */])('picker');Picker.defaultProps={mode:'selector',disabled:false,// FIXME: value 的值与 mode 类型变化
// value: 0,
range:[],fields:'day'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html
 */var PickerView=Object(esm["d" /* createHostComponent */])('picker-view');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/picker-view-column.html
 */var PickerViewColumn=Object(esm["d" /* createHostComponent */])('picker-view-column');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio-group.html
 */var RadioGroup=Object(esm["d" /* createHostComponent */])('radio-group');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Radio/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/radio.html
 */var Radio=Object(esm["d" /* createHostComponent */])('radio');Radio.defaultProps={checked:false,disabled:false,color:'#09BB07'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Slider/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/slider.html
 */var Slider=Object(esm["d" /* createHostComponent */])('slider');Slider.defaultProps={min:0,max:100,step:1,disabled:false,value:0,color:'#e9e9e9',selectedColor:'#1aad19',activeColor:'#1aad19',backgroundColor:'#e9e9e9',blockSize:28,blockColor:'#ffffff',showValue:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Switch/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/switch.html
 */var Switch=Object(esm["d" /* createHostComponent */])('switch');Switch.defaultProps={checked:false,disabled:false,type:'switch',color:'#04BE02'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html
 */var Navigator=Object(esm["d" /* createHostComponent */])('navigator');Navigator.defaultProps={target:'self',openType:'navigate',delta:1,hoverClassName:'navigator-hover',hoverStopPropagation:false,hoverStartTime:50,hoverStayTime:600};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Image/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/image.html
 */var Image=Object(esm["d" /* createHostComponent */])('image');Image.defaultProps={mode:'scaleToFill',webp:false,lazyLoad:false,showMenuByLongpress:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */var LivePlayer=Object(esm["d" /* createHostComponent */])('live-player');LivePlayer.defaultProps={mode:'live',autoplay:false,muted:false,orientation:'vertical',objectFit:'contain',backgroundMute:false,minCache:1,maxCache:3,soundMode:'speaker',autoPauseIfNavigate:true,autoPauseIfOpenNative:true};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */var LivePusher=Object(esm["d" /* createHostComponent */])('live-pusher');LivePusher.defaultProps={mode:'RTC',autopush:false,muted:false,enableCamera:false,autoFocus:true,orientation:'vertical',beauty:0,whiteness:0,aspect:'9:16',minBitrate:200,maxBitrate:1000,audioQuality:'high',zoom:false,devicePosition:'front',backgroundMute:false,mirror:false,remoteMirror:false,localMirror:'auto',audioReverbType:0,enableMic:true,enableAgc:true,enableAns:false,audioVolumeType:'voicecall',videoWidth:360,videoHeight:640};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Map/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/map.html
 */var Map=Object(esm["d" /* createHostComponent */])('map');Map.defaultProps={scale:16,minScale:3,maxScale:20,showLocation:false,layerStyle:1,rotate:0,enable3D:false,showCompass:false,showScale:false,enableOverlooking:false,enableZoom:true,enableScroll:true,enableRotate:false,enableSatellite:false,enableTraffic:false,setting:{}};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html
 */var Canvas=Object(esm["d" /* createHostComponent */])('canvas');Canvas.defaultProps={disableScroll:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
 */var OpenData=Object(esm["d" /* createHostComponent */])('open-data');OpenData.defaultProps={lang:'en'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html
 */var OfficialAccount=Object(esm["d" /* createHostComponent */])('official-account');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Editor/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/editor.html
 */var Editor=Object(esm["d" /* createHostComponent */])('editor');Editor.defaultProps={readOnly:false,showImgSize:false,showImgToolbar:false,showImgResize:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Audio/index.js
// 微信已不再维护
var Audio=Object(esm["d" /* createHostComponent */])('audio');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Ad/index.js
var Ad=Object(esm["d" /* createHostComponent */])('ad');Ad.defaultProps={adType:'banner',adTheme:'white'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/WebView/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */var WebView=Object(esm["d" /* createHostComponent */])('web-view');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html
 */var FunctionalPageNavigator=Object(esm["d" /* createHostComponent */])('functional-page-navigator');FunctionalPageNavigator.defaultProps={version:'release'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/Camera/index.js
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/camera.html
 */var Camera=Object(esm["d" /* createHostComponent */])('camera');Camera.defaultProps={mode:'normal',resolution:'medium',devicePosition:'back',flash:'auto',frameSize:'medium'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/MatchMedia/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html
 */var MatchMedia=Object(esm["d" /* createHostComponent */])('match-media');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/PageContainer/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
 */var PageContainer=Object(esm["d" /* createHostComponent */])('page-container');PageContainer.defaultProps={show:false,duration:300,zIndex:100,overlay:true,position:'bottom',round:false,closeOnSlideDown:false};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/ShareElement/index.js
/** @see https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html */var ShareElement=Object(esm["d" /* createHostComponent */])('share-element');ShareElement.defaultProps={transform:false,duration:300,easingFunction:'ease-out'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/KeyboardAccessory/index.js
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/keyboard-accessory.html
 */var KeyboardAccessory=Object(esm["d" /* createHostComponent */])('KeyboardAccessory');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/VoipRoom/index.js
/**
 * 多人音视频对话。需用户授权 scope.camera、scope.record。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */var VoipRoom=Object(esm["d" /* createHostComponent */])('voip-room');VoipRoom.defaultProps={mode:'camera',devicePosition:'front'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/AdCustom/index.js
/**
 * 原生模版广告
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/ad-custom.html
 */var AdCustom=Object(esm["d" /* createHostComponent */])('AdCustom');
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/PageMeta/index.js
/**
 * 页面属性配置节点，用于指定页面的一些属性、监听页面事件。只能是页面内的第一个节点。可以配合 navigation-bar 组件一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-meta.html
 */var PageMeta=Object(esm["d" /* createHostComponent */])('page-meta');PageMeta.defaultProps={scrollDuration:300};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/NavigationBar/index.js
/**
 * 页面导航条配置节点，用于指定导航栏的一些属性。只能是 page-meta 组件内的第一个节点，需要配合它一同使用。
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html
 */var NavigationBar=Object(esm["d" /* createHostComponent */])('navigation-bar');NavigationBar.defaultProps={loading:false,colorAnimationDuration:0,colorAnimationTimingFunc:'linear'};
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/hostComponents/index.js

// EXTERNAL MODULE: ./node_modules/@remax/framework-shared/esm/index.js + 14 modules
var framework_shared_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/api/index.js
var canIUse=wx.canIUse;var base64ToArrayBuffer=wx.base64ToArrayBuffer;var arrayBufferToBase64=wx.arrayBufferToBase64;var getSystemInfoSync=wx.getSystemInfoSync;var getSystemInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getSystemInfo);var getUpdateManager=wx.getUpdateManager;var getLaunchOptionsSync=wx.getLaunchOptionsSync;var onPageNotFound=wx.onPageNotFound;var onError=wx.onError;var onAudioInterruptionEnd=wx.onAudioInterruptionEnd;var onAppShow=wx.onAppShow;var onAppHide=wx.onAppHide;var offPageNotFound=wx.offPageNotFound;var offError=wx.offError;var offAudioInterruptionEnd=wx.offAudioInterruptionEnd;var offAudioInterruptionBegin=wx.offAudioInterruptionBegin;var offAppShow=wx.offAppShow;var offAppHide=wx.offAppHide;var setEnableDebug=Object(framework_shared_esm["m" /* promisify */])(wx.setEnableDebug);var getLogManager=wx.getLogManager;var switchTab=Object(framework_shared_esm["m" /* promisify */])(wx.switchTab);var reLaunch=Object(framework_shared_esm["m" /* promisify */])(wx.reLaunch);var redirectTo=Object(framework_shared_esm["m" /* promisify */])(wx.redirectTo);var navigateTo=Object(framework_shared_esm["m" /* promisify */])(wx.navigateTo);var navigateBack=Object(framework_shared_esm["m" /* promisify */])(wx.navigateBack);var showToast=Object(framework_shared_esm["m" /* promisify */])(wx.showToast);var showModal=Object(framework_shared_esm["m" /* promisify */])(wx.showModal);var showLoading=Object(framework_shared_esm["m" /* promisify */])(wx.showLoading);var showActionSheet=Object(framework_shared_esm["m" /* promisify */])(wx.showActionSheet);var hideToast=Object(framework_shared_esm["m" /* promisify */])(wx.hideToast);var hideLoading=Object(framework_shared_esm["m" /* promisify */])(wx.hideLoading);var showNavigationBarLoading=Object(framework_shared_esm["m" /* promisify */])(wx.showNavigationBarLoading);var setNavigationBarTitle=Object(framework_shared_esm["m" /* promisify */])(wx.setNavigationBarTitle);var setNavigationBarColor=Object(framework_shared_esm["m" /* promisify */])(wx.setNavigationBarColor);var hideNavigationBarLoading=Object(framework_shared_esm["m" /* promisify */])(wx.hideNavigationBarLoading);var setBackgroundTextStyle=Object(framework_shared_esm["m" /* promisify */])(wx.setBackgroundTextStyle);var setBackgroundColor=Object(framework_shared_esm["m" /* promisify */])(wx.setBackgroundColor);var showTabBarRedDot=Object(framework_shared_esm["m" /* promisify */])(wx.showTabBarRedDot);var showTabBar=Object(framework_shared_esm["m" /* promisify */])(wx.showTabBar);var setTabBarStyle=Object(framework_shared_esm["m" /* promisify */])(wx.setTabBarStyle);var setTabBarItem=Object(framework_shared_esm["m" /* promisify */])(wx.setTabBarItem);var setTabBarBadge=Object(framework_shared_esm["m" /* promisify */])(wx.setTabBarBadge);var removeTabBarBadge=Object(framework_shared_esm["m" /* promisify */])(wx.removeTabBarBadge);var hideTabBarRedDot=Object(framework_shared_esm["m" /* promisify */])(wx.hideTabBarRedDot);var hideTabBar=Object(framework_shared_esm["m" /* promisify */])(wx.hideTabBar);var loadFontFace=Object(framework_shared_esm["m" /* promisify */])(wx.loadFontFace);var stopPullDownRefresh=Object(framework_shared_esm["m" /* promisify */])(wx.stopPullDownRefresh);var startPullDownRefresh=Object(framework_shared_esm["m" /* promisify */])(wx.startPullDownRefresh);var pageScrollTo=Object(framework_shared_esm["m" /* promisify */])(wx.pageScrollTo);var createAnimation=wx.createAnimation;var setTopBarText=Object(framework_shared_esm["m" /* promisify */])(wx.setTopBarText);var nextTick=wx.nextTick;var getMenuButtonBoundingClientRect=wx.getMenuButtonBoundingClientRect;var onWindowResize=wx.onWindowResize;var offWindowResize=wx.offWindowResize;var onKeyboardHeightChange=wx.onKeyboardHeightChange;var offKeyboardHeightChange=wx.offKeyboardHeightChange;var getSelectedTextRange=wx.getSelectedTextRange;var request=Object(framework_shared_esm["m" /* promisify */])(wx.request);var downloadFile=Object(framework_shared_esm["m" /* promisify */])(wx.downloadFile);var uploadFile=Object(framework_shared_esm["m" /* promisify */])(wx.uploadFile);var sendSocketMessage=Object(framework_shared_esm["m" /* promisify */])(wx.sendSocketMessage);var onSocketOpen=wx.onSocketOpen;var onSocketMessage=wx.onSocketMessage;var onSocketError=wx.onSocketError;var onSocketClose=wx.onSocketClose;var connectSocket=wx.connectSocket;var closeSocket=Object(framework_shared_esm["m" /* promisify */])(wx.closeSocket);var stopLocalServiceDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.stopLocalServiceDiscovery);var startLocalServiceDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.startLocalServiceDiscovery);var onLocalServiceResolveFail=wx.onLocalServiceResolveFail;var onLocalServiceLost=wx.onLocalServiceLost;var onLocalServiceFound=wx.onLocalServiceFound;var onLocalServiceDiscoveryStop=wx.onLocalServiceDiscoveryStop;var offLocalServiceResolveFail=wx.offLocalServiceResolveFail;var offLocalServiceLost=wx.offLocalServiceLost;var offLocalServiceFound=wx.offLocalServiceFound;var offLocalServiceDiscoveryStop=wx.offLocalServiceDiscoveryStop;var createUDPSocket=wx.createUDPSocket;var setStorageSync=wx.setStorageSync;var setStorage=Object(framework_shared_esm["m" /* promisify */])(wx.setStorage);var removeStorageSync=wx.removeStorageSync;var removeStorage=Object(framework_shared_esm["m" /* promisify */])(wx.removeStorage);var getStorageSync=wx.getStorageSync;var getStorageInfoSync=wx.getStorageInfoSync;var getStorageInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getStorageInfo);var getStorage=Object(framework_shared_esm["m" /* promisify */])(wx.getStorage);var clearStorageSync=wx.clearStorageSync;var clearStorage=Object(framework_shared_esm["m" /* promisify */])(wx.clearStorage);var createMapContext=wx.createMapContext;var saveImageToPhotosAlbum=Object(framework_shared_esm["m" /* promisify */])(wx.saveImageToPhotosAlbum);var previewImage=Object(framework_shared_esm["m" /* promisify */])(wx.previewImage);var previewMedia=Object(framework_shared_esm["m" /* promisify */])(wx.previewMedia);var getImageInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getImageInfo);var compressImage=Object(framework_shared_esm["m" /* promisify */])(wx.compressImage);var chooseMessageFile=Object(framework_shared_esm["m" /* promisify */])(wx.chooseMessageFile);var chooseImage=Object(framework_shared_esm["m" /* promisify */])(wx.chooseImage);var saveVideoToPhotosAlbum=Object(framework_shared_esm["m" /* promisify */])(wx.saveVideoToPhotosAlbum);var createVideoContext=wx.createVideoContext;var chooseVideo=Object(framework_shared_esm["m" /* promisify */])(wx.chooseVideo);var chooseMedia=Object(framework_shared_esm["m" /* promisify */])(wx.chooseMedia);var stopVoice=Object(framework_shared_esm["m" /* promisify */])(wx.stopVoice);var setInnerAudioOption=Object(framework_shared_esm["m" /* promisify */])(wx.setInnerAudioOption);var playVoice=Object(framework_shared_esm["m" /* promisify */])(wx.playVoice);var pauseVoice=Object(framework_shared_esm["m" /* promisify */])(wx.pauseVoice);var getAvailableAudioSources=Object(framework_shared_esm["m" /* promisify */])(wx.getAvailableAudioSources);var createInnerAudioContext=wx.createInnerAudioContext;var createAudioContext=wx.createAudioContext;var stopBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.stopBackgroundAudio);var seekBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.seekBackgroundAudio);var playBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.playBackgroundAudio);var pauseBackgroundAudio=Object(framework_shared_esm["m" /* promisify */])(wx.pauseBackgroundAudio);var onBackgroundAudioStop=wx.onBackgroundAudioStop;var onBackgroundAudioPlay=wx.onBackgroundAudioPlay;var onBackgroundAudioPause=wx.onBackgroundAudioPause;var getBackgroundAudioPlayerState=Object(framework_shared_esm["m" /* promisify */])(wx.getBackgroundAudioPlayerState);var getBackgroundAudioManager=wx.getBackgroundAudioManager;var createLivePusherContext=wx.createLivePusherContext;var createLivePlayerContext=wx.createLivePlayerContext;var stopRecord=Object(framework_shared_esm["m" /* promisify */])(wx.stopRecord);var startRecord=Object(framework_shared_esm["m" /* promisify */])(wx.startRecord);var getRecorderManager=wx.getRecorderManager;var createCameraContext=wx.createCameraContext;var stopLocationUpdate=Object(framework_shared_esm["m" /* promisify */])(wx.stopLocationUpdate);var startLocationUpdateBackground=Object(framework_shared_esm["m" /* promisify */])(wx.startLocationUpdateBackground);var startLocationUpdate=Object(framework_shared_esm["m" /* promisify */])(wx.startLocationUpdate);var openLocation=Object(framework_shared_esm["m" /* promisify */])(wx.openLocation);var onLocationChange=wx.onLocationChange;var getLocation=Object(framework_shared_esm["m" /* promisify */])(wx.getLocation);var chooseLocation=Object(framework_shared_esm["m" /* promisify */])(wx.chooseLocation);var updateShareMenu=Object(framework_shared_esm["m" /* promisify */])(wx.updateShareMenu);var showShareMenu=Object(framework_shared_esm["m" /* promisify */])(wx.showShareMenu);var hideShareMenu=Object(framework_shared_esm["m" /* promisify */])(wx.hideShareMenu);var getShareInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getShareInfo);var createOffscreenCanvas=wx.createOffscreenCanvas;var createCanvasContext=wx.createCanvasContext;var canvasToTempFilePath=Object(framework_shared_esm["m" /* promisify */])(wx.canvasToTempFilePath);var canvasPutImageData=Object(framework_shared_esm["m" /* promisify */])(wx.canvasPutImageData);var canvasGetImageData=Object(framework_shared_esm["m" /* promisify */])(wx.canvasGetImageData);var saveFile=Object(framework_shared_esm["m" /* promisify */])(wx.saveFile);var removeSavedFile=Object(framework_shared_esm["m" /* promisify */])(wx.removeSavedFile);var openDocument=Object(framework_shared_esm["m" /* promisify */])(wx.openDocument);var getSavedFileList=Object(framework_shared_esm["m" /* promisify */])(wx.getSavedFileList);var getSavedFileInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getSavedFileInfo);var getFileSystemManager=wx.getFileSystemManager;var getFileInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getFileInfo);var login=Object(framework_shared_esm["m" /* promisify */])(wx.login);var checkSession=Object(framework_shared_esm["m" /* promisify */])(wx.checkSession);var navigateToMiniProgram=Object(framework_shared_esm["m" /* promisify */])(wx.navigateToMiniProgram);var navigateBackMiniProgram=Object(framework_shared_esm["m" /* promisify */])(wx.navigateBackMiniProgram);var getAccountInfoSync=wx.getAccountInfoSync;var getUserInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getUserInfo);var reportMonitor=wx.reportMonitor;var reportAnalytics=wx.reportAnalytics;var requestPayment=Object(framework_shared_esm["m" /* promisify */])(wx.requestPayment);var authorize=Object(framework_shared_esm["m" /* promisify */])(wx.authorize);var openSetting=Object(framework_shared_esm["m" /* promisify */])(wx.openSetting);var getSetting=Object(framework_shared_esm["m" /* promisify */])(wx.getSetting);var chooseAddress=Object(framework_shared_esm["m" /* promisify */])(wx.chooseAddress);var openCard=Object(framework_shared_esm["m" /* promisify */])(wx.openCard);var addCard=Object(framework_shared_esm["m" /* promisify */])(wx.addCard);var chooseInvoiceTitle=Object(framework_shared_esm["m" /* promisify */])(wx.chooseInvoiceTitle);var chooseInvoice=Object(framework_shared_esm["m" /* promisify */])(wx.chooseInvoice);var startSoterAuthentication=Object(framework_shared_esm["m" /* promisify */])(wx.startSoterAuthentication);var checkIsSupportSoterAuthentication=Object(framework_shared_esm["m" /* promisify */])(wx.checkIsSupportSoterAuthentication);var checkIsSoterEnrolledInDevice=Object(framework_shared_esm["m" /* promisify */])(wx.checkIsSoterEnrolledInDevice);var getWeRunData=Object(framework_shared_esm["m" /* promisify */])(wx.getWeRunData);var stopBeaconDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.stopBeaconDiscovery);var startBeaconDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.startBeaconDiscovery);var onBeaconUpdate=wx.onBeaconUpdate;var offBeaconUpdate=wx.offBeaconUpdate;var onBeaconServiceChange=wx.onBeaconServiceChange;var offBeaconServiceChange=wx.offBeaconServiceChange;var getBeacons=Object(framework_shared_esm["m" /* promisify */])(wx.getBeacons);var stopWifi=Object(framework_shared_esm["m" /* promisify */])(wx.stopWifi);var startWifi=Object(framework_shared_esm["m" /* promisify */])(wx.startWifi);var setWifiList=Object(framework_shared_esm["m" /* promisify */])(wx.setWifiList);var onWifiConnected=wx.onWifiConnected;var offWifiConnected=wx.offWifiConnected;var onGetWifiList=wx.onGetWifiList;var offGetWifiList=wx.offGetWifiList;var getWifiList=Object(framework_shared_esm["m" /* promisify */])(wx.getWifiList);var getConnectedWifi=Object(framework_shared_esm["m" /* promisify */])(wx.getConnectedWifi);var connectWifi=Object(framework_shared_esm["m" /* promisify */])(wx.connectWifi);var addPhoneContact=Object(framework_shared_esm["m" /* promisify */])(wx.addPhoneContact);var writeBLECharacteristicValue=Object(framework_shared_esm["m" /* promisify */])(wx.writeBLECharacteristicValue);var readBLECharacteristicValue=Object(framework_shared_esm["m" /* promisify */])(wx.readBLECharacteristicValue);var onBLEConnectionStateChange=wx.onBLEConnectionStateChange;var offBLEConnectionStateChange=wx.offBLEConnectionStateChange;var onBLECharacteristicValueChange=wx.onBLECharacteristicValueChange;var offBLECharacteristicValueChange=wx.offBLECharacteristicValueChange;var notifyBLECharacteristicValueChange=Object(framework_shared_esm["m" /* promisify */])(wx.notifyBLECharacteristicValueChange);var getBLEDeviceServices=Object(framework_shared_esm["m" /* promisify */])(wx.getBLEDeviceServices);var getBLEDeviceCharacteristics=Object(framework_shared_esm["m" /* promisify */])(wx.getBLEDeviceCharacteristics);var createBLEConnection=Object(framework_shared_esm["m" /* promisify */])(wx.createBLEConnection);var closeBLEConnection=Object(framework_shared_esm["m" /* promisify */])(wx.closeBLEConnection);var stopBluetoothDevicesDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.stopBluetoothDevicesDiscovery);var startBluetoothDevicesDiscovery=Object(framework_shared_esm["m" /* promisify */])(wx.startBluetoothDevicesDiscovery);var openBluetoothAdapter=wx.openBluetoothAdapter;var onBluetoothDeviceFound=wx.onBluetoothDeviceFound;var offBluetoothDeviceFound=wx.offBluetoothDeviceFound;var onBluetoothAdapterStateChange=wx.onBluetoothAdapterStateChange;var offBluetoothAdapterStateChange=wx.offBluetoothAdapterStateChange;var getConnectedBluetoothDevices=Object(framework_shared_esm["m" /* promisify */])(wx.getConnectedBluetoothDevices);var getBluetoothDevices=Object(framework_shared_esm["m" /* promisify */])(wx.getBluetoothDevices);var getBluetoothAdapterState=Object(framework_shared_esm["m" /* promisify */])(wx.getBluetoothAdapterState);var closeBluetoothAdapter=Object(framework_shared_esm["m" /* promisify */])(wx.closeBluetoothAdapter);var getBatteryInfoSync=wx.getBatteryInfoSync;var getBatteryInfo=Object(framework_shared_esm["m" /* promisify */])(wx.getBatteryInfo);var setClipboardData=Object(framework_shared_esm["m" /* promisify */])(wx.setClipboardData);var getClipboardData=Object(framework_shared_esm["m" /* promisify */])(wx.getClipboardData);var stopHCE=Object(framework_shared_esm["m" /* promisify */])(wx.stopHCE);var startHCE=Object(framework_shared_esm["m" /* promisify */])(wx.startHCE);var sendHCEMessage=Object(framework_shared_esm["m" /* promisify */])(wx.sendHCEMessage);var onHCEMessage=wx.onHCEMessage;var offHCEMessage=wx.offHCEMessage;var getHCEState=Object(framework_shared_esm["m" /* promisify */])(wx.getHCEState);var onNetworkStatusChange=wx.onNetworkStatusChange;var offNetworkStatusChange=wx.offNetworkStatusChange;var getNetworkType=Object(framework_shared_esm["m" /* promisify */])(wx.getNetworkType);var setScreenBrightness=Object(framework_shared_esm["m" /* promisify */])(wx.setScreenBrightness);var setKeepScreenOn=Object(framework_shared_esm["m" /* promisify */])(wx.setKeepScreenOn);var onUserCaptureScreen=wx.onUserCaptureScreen;var offUserCaptureScreen=wx.offUserCaptureScreen;var getScreenBrightness=Object(framework_shared_esm["m" /* promisify */])(wx.getScreenBrightness);var makePhoneCall=Object(framework_shared_esm["m" /* promisify */])(wx.makePhoneCall);var stopAccelerometer=Object(framework_shared_esm["m" /* promisify */])(wx.stopAccelerometer);var startAccelerometer=Object(framework_shared_esm["m" /* promisify */])(wx.startAccelerometer);var onAccelerometerChange=wx.onAccelerometerChange;var offAccelerometerChange=wx.offAccelerometerChange;var stopCompass=Object(framework_shared_esm["m" /* promisify */])(wx.stopCompass);var startCompass=Object(framework_shared_esm["m" /* promisify */])(wx.startCompass);var onCompassChange=wx.onCompassChange;var offCompassChange=wx.offCompassChange;var stopDeviceMotionListening=Object(framework_shared_esm["m" /* promisify */])(wx.stopDeviceMotionListening);var startDeviceMotionListening=Object(framework_shared_esm["m" /* promisify */])(wx.startDeviceMotionListening);var onDeviceMotionChange=wx.onDeviceMotionChange;var offDeviceMotionChange=wx.offDeviceMotionChange;var stopGyroscope=Object(framework_shared_esm["m" /* promisify */])(wx.stopGyroscope);var startGyroscope=Object(framework_shared_esm["m" /* promisify */])(wx.startGyroscope);var onGyroscopeChange=wx.onGyroscopeChange;var offGyroscopeChange=wx.offGyroscopeChange;var onMemoryWarning=wx.onMemoryWarning;var offMemoryWarning=wx.offMemoryWarning;var scanCode=Object(framework_shared_esm["m" /* promisify */])(wx.scanCode);var vibrateShort=Object(framework_shared_esm["m" /* promisify */])(wx.vibrateShort);var vibrateLong=Object(framework_shared_esm["m" /* promisify */])(wx.vibrateLong);var createWorker=wx.createWorker;var getExtConfigSync=wx.getExtConfigSync;var getExtConfig=Object(framework_shared_esm["m" /* promisify */])(wx.getExtConfig);var createSelectorQuery=wx.createSelectorQuery;var createIntersectionObserver=wx.createIntersectionObserver;var createRewardedVideoAd=wx.createRewardedVideoAd;var createInterstitialAd=wx.createInterstitialAd;var cloud=wx.cloud;var requestSubscribeMessage=Object(framework_shared_esm["m" /* promisify */])(wx.requestSubscribeMessage);var hideHomeButton=Object(framework_shared_esm["m" /* promisify */])(wx.hideHomeButton);var getRealtimeLogManager=wx.getRealtimeLogManager;var hideKeyboard=Object(framework_shared_esm["m" /* promisify */])(wx.hideKeyboard);var getUserProfile=Object(framework_shared_esm["m" /* promisify */])(wx.getUserProfile);var showShareImageMenu=Object(framework_shared_esm["m" /* promisify */])(wx.showShareImageMenu);var shareVideoMessage=Object(framework_shared_esm["m" /* promisify */])(wx.shareVideoMessage);var shareFileMessage=Object(framework_shared_esm["m" /* promisify */])(wx.shareFileMessage);var onCopyUrl=Object(framework_shared_esm["m" /* promisify */])(wx.onCopyUrl);var offCopyUrl=Object(framework_shared_esm["m" /* promisify */])(wx.offCopyUrl);var authPrivateMessage=Object(framework_shared_esm["m" /* promisify */])(wx.authPrivateMessage);var openCustomerServiceChat=wx.openCustomerServiceChat;var getGroupEnterInfo=wx.getGroupEnterInfo;var reserveChannelsLive=wx.reserveChannelsLive;var openChannelsLive=wx.openChannelsLive;var openChannelsActivity=wx.openChannelsActivity;var getChannelsLiveNoticeInfo=wx.getChannelsLiveNoticeInfo;var getChannelsLiveInfo=wx.getChannelsLiveInfo;var chooseLicensePlate=wx.chooseLicensePlate;var shareToWeRun=Object(framework_shared_esm["m" /* promisify */])(wx.shareToWeRun);var showRedPackage=Object(framework_shared_esm["m" /* promisify */])(wx.showRedPackage);var addVideoToFavorites=wx.addVideoToFavorites;var addFileToFavorites=wx.addFileToFavorites;
// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/types/config.js

// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/types/index.js

// CONCATENATED MODULE: ./node_modules/@remax/wechat/esm/index.js

// CONCATENATED MODULE: ./node_modules/remax/wechat.js

// EXTERNAL MODULE: ./src/pages/index/index.css?modules
var indexmodules = __webpack_require__(4);
var indexmodules_default = /*#__PURE__*/__webpack_require__.n(indexmodules);

// CONCATENATED MODULE: ./src/pages/index/index.js
/* harmony default export */ var index = (function(){return/*#__PURE__*/react["createElement"](View,{className:indexmodules_default.a.app},/*#__PURE__*/react["createElement"](View,{className:indexmodules_default.a.header},/*#__PURE__*/react["createElement"](Image,{src:"https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ",className:indexmodules_default.a.logo,alt:"logo"}),/*#__PURE__*/react["createElement"](View,{className:indexmodules_default.a.text},"\u7F16\u8F91 ",/*#__PURE__*/react["createElement"](Text,{className:indexmodules_default.a.path},"src/pages/index/index.js"),' ',"\u5F00\u59CB")));});
// CONCATENATED MODULE: ./src/pages/index/index.entry.js
__webpack_require__(25);Page(Object(esm["e" /* createPageConfig */])(index,'pages/index/index'));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2lhPP","logo":"logo___Al4Xb","logo-spin":"logo-spin___3_EwH","text":"text___XEtZ5","header":"header___3qOk9"};

/***/ })

},[[24,1,0]]]);