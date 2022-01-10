window.dataLayer = window.dataLayer || [];

jQuery("a").click(function(){
  let buttonURL = jQuery(this).attr("href");
  let divName = jQuery(this).closest("div").attr("class");
  window.dataLayer.push({
    'event': 'ButtonClick',
    'buttonName': jQuery(this).text(),
    'buttonURL': buttonURL, 
    'formURL': window.location.href, 
    'divName': divName,
  });     
})  

jQuery("button").click(function(){
  let buttonURL = jQuery(this).attr("href");
  let divName = jQuery(this).closest("div").attr("class");
  window.dataLayer.push({
    'event': 'ButtonClick',
    'buttonName': jQuery(this).text(),
    'buttonURL': buttonURL, 
    'formURL': window.location.href, 
    'divName': divName,
  });     
})  

let currentURL = new URL(window.location.href);
let currentParams = currentURL.searchParams;
// 判斷是否在搜尋頁面
if (jQuery("meta[property='og:url']").attr("content").includes(`${window.location.hostname}/search/`)
 && currentParams.has('s')){
  window.dataLayer.push({
    'event': 'Search',
    'gaSearchKeyword': currentParams.get('s'), 
    'gaSearchPagination': '1', 
    'gaSearchPath': window.location.href,
  });  
}

// 戀愛交友
jQuery("#gform_6").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();
  let formJob = jQuery(this).find("input[name='input_23']").val();
  let formAttendance = jQuery(this).find("input[name='input_18']").val();
  let formOption = jQuery(this).find("input[name='input_17']:checked").val();
  let shareDirection = [];
  jQuery(this).find("#input_6_30 input[type='checkbox']:checked").each(function(){
    shareDirection.push(jQuery(this).val());
  });

  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '戀愛交友',
      'formTitle': '伊然老師分享邀約',
      'formURL': window.location.href,
      'formAge': '',
      'formGender': '',
      'formEmail': email,
      'formJob': formJob,
      'formAttendance': formAttendance,
      'formOption': formOption,
      'shareDirection': shareDirection.join(","),
    });    
  }
});

// 社會關懷[青少年]
jQuery("#gform_7").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();

  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '社會關懷',
      'formTitle': '青少年',
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
    });    
  }
});

// 社會關懷[父母]
jQuery("#gform_8").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();

  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '社會關懷',
      'formTitle': '父母',
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
    });    
  }
});

// 我要諮商
jQuery("#gform_2").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();

  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '諮商',
      'formTitle': '我要諮商',
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
    });    
  }
});

// 聯絡我們
jQuery("#gform_3").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();
  let categories = []

  jQuery(this).find("input[name='input_17']:checked").each(function(){
    categories.push(jQuery(this).val());
  });

  if(email != "" && categories.length > 0){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '聯絡我們',
      'formTitle': '我有疑問',
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
      'questionCategory': category ,
    });    
  }
});

// 媒體採訪
jQuery("#gform_4").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();
  let categories = []
  jQuery(this).find("#input_4_12 input[type='checkbox']:checked").each(function(){
    categories.push(jQuery(this).val());
  });

  if(email != "" && categories.length > 0){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '聯絡我們',
      'formTitle': '媒體採訪',
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
      'fieldOfInterview': categories.join(","),
    });    
  }
});

// 合作提案
jQuery("#gform_5").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();

  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '聯絡我們',
      'formTitle': '合作提案',
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
      'questionCategory': '',
    });    
  }
});

// 成為志工[簡易版]
jQuery("#gform_13").submit(function(e){
  let event = jQuery(this).find("input[name='input_16']").val(); 
  let email = jQuery(this).find("input[name='input_11']").val();

  if(email != "" && event != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '志工表單',
      'formTitle': event,
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
    });    
  }
});

// 成為志工[詳細版]
jQuery("#gform_14").submit(function(e){
  let event = jQuery(this).find("input[name='input_16']").val(); 
  let email = jQuery(this).find("input[name='input_11']").val();

  if(email != "" && event != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '志工表單',
      'formTitle': event,
      'formURL': window.location.href,
      'formAge': '',
      'formEmail': email,
      'formGender': '',
    });    
  }
});

// 卓越職場
jQuery("#gform_10").submit(function(e){
  let email = dataLayer_content['visitorEmail'];
  let categories = []
  jQuery(this).find("#input_10_1 input[type='checkbox']:checked").each(function(){
    categories.push(jQuery(this).val());
  });

  window.dataLayer.push({
    'event': 'formSubmission',
    'formType': '卓越職場',
    'formTitle': '職場領域',
    'formURL': window.location.href,
    'formAge': '',
    'formEmail': email,
    'formGender': '',
    'fieldOfInterview': categories.join(","),
  });    

});