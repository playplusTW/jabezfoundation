window.dataLayer = window.dataLayer || [];


// 產品列表事件 https://www.jabezfoundation.org/product-category/youth
if (jQuery("meta[property='og:url']").attr("content").includes(`${window.location.hostname}/product-category/youth/`)){
  let items = []  

  jQuery(".products>.product-small").each(function(){
    let item_id = jQuery(this).find("a.wishlist-toggle").data("product")
    let item = {
      'item_name': jQuery(this).find(".product-title.name a").text(),
      'item_id': item_id,
      'price': jQuery(this).find(".amount bdi").text(),
      'item_brand': '雅比斯',
      'item_category': jQuery(this).find(".category").text().replace(/(\r\n|\n|\r|\t)/gm, ""),
      'item_variant': jQuery(this).find(".gc_custom_activity_date").text(),
      'item_list_name': '青少專區',
      'item_list_id': 'youth',
      'quantity': '1',
    } 
    items.push(item);

  });

  window.dataLayer.push({ 'ecommerce': null }); // Clear the previous ecommerce object.
  window.dataLayer.push({ 
    'event': "view_item_list", 
    'ecommerce': {
      'items': items
    } 
  })

  jQuery(".wishlist-toggle:not(.active)").click(function(){
    if( jQuery(this).hasClass("active") ){

    }else{
      window.dataLayer.push({ 
        'event': "add_to_wishlist", 
        'ecommerce': {
          'wish_item': items.find(obj => obj.item_id == jQuery(this).data("product"))
        } 
      })      
    }
  });

}
// 產品內頁事件 
if (jQuery("meta[property='og:url']").attr("content").includes(`${window.location.hostname}/product/`)){

  jQuery(".wishlist-toggle:not(.active)").click(function(){
    if( jQuery(this).hasClass("active") ){

    }else{
      window.dataLayer.push({ 
        'event': "add_to_wishlist", 
        'ecommerce': {
          'wish_item': {
            'item_name': jQuery(".product-title.name a").text(),
            'item_id': jQuery(this).data("product"),
            'price': jQuery(".amount bdi:first").text(),
            'item_brand': '雅比斯',
            'item_category': jQuery(".category").text().replace(/(\r\n|\n|\r|\t)/gm, ""),
            'item_variant': jQuery(".gc_custom_activity_date").text(),
            'item_list_name': '青少專區',
            'item_list_id': 'youth',
            'quantity': '1',            
          }
        } 
      })      
    }
  });

}

// 產品列表事件 https://www.jabezfoundation.org/shop/
if (jQuery("meta[property='og:url']").attr("content").includes(`${window.location.hostname}/shop/`)){
  let items = []  

  jQuery(".products>.product-small").each(function(){
    let item_id = jQuery(this).find("a.gc-add-to-cart-a").attr("href").replace("?add-to-cart=", "")
    let item = {
      'item_name': jQuery(this).find(".product-title.name a").text(),
      'item_id': item_id,
      'price': jQuery(this).find(".amount bdi").text(),
      'item_brand': '雅比斯',
      'item_category': jQuery(this).find(".category").text().replace(/(\r\n|\n|\r|\t)/gm, ""),
      'item_variant': jQuery(this).find(".gc_custom_activity_date").text(),
      'item_list_name': '首頁',
      'item_list_id': '',
      'quantity': '1',
    } 
    items.push(item);

  });

  window.dataLayer.push({ 'ecommerce': null }); // Clear the previous ecommerce object.
  window.dataLayer.push({ 
    'event': "view_item_list", 
    'ecommerce': {
      'items': items
    } 
  })
}



// 按鈕事件
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

// 按鈕事件
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
  let age = jQuery(this).find("input[name='input_18']").val();
  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '社會關懷',
      'formTitle': '父母',
      'formURL': window.location.href,
      'formAge': age,
      'formEmail': email,
      'formGender': '',
    });    
  }
});

// 我要諮商
jQuery("#gform_2").submit(function(e){
  let email = jQuery(this).find("input[name='input_11']").val();
  let formGender = jQuery(this).find("input[name='input_2']:checked").val();
  let formAge = jQuery(this).find("select[name='input_3']").val();

  if(email != ""){
    window.dataLayer.push({
      'event': 'formSubmission',
      'formType': '諮商',
      'formTitle': '我要諮商',
      'formURL': window.location.href,
      'formAge': formAge,
      'formEmail': email,
      'formGender': formGender,
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
      'questionCategory': categories.join(",") ,
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