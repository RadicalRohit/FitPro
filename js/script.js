//var selSub;
//$('.sub-name').click(function () {
//    selSub = $('.sub-name').text();
//
//    
//});
//





function updateSubTitle( subTitle ) {
  var subTitleHolder = subTitle.getAttribute("data-sub");
    $("#sub-program").attr("placeholder", subTitleHolder);
//  $('#sub-program').text(subTitleHolder);
}




//
//// edit on click
//
//function divClicked() {
//    var divHtml = $(this).prev('#sub-program').html();
//    var editableText = $("<textarea />");
//    editableText.val(divHtml);
//    $(this).prev('#sub-program').replaceWith(editableText);
//    editableText.focus();
//    // setup the blur event for this new textarea
//    editableText.blur(editableTextBlurred);
//}
//
//function editableTextBlurred() {
//    var html = $(this).val();
//    var viewableText = $("<div>");
//    viewableText.html(html);
//    $(this).replaceWith(viewableText);
//    // setup the click event for this new div
//    viewableText.click(divClicked);
//}
//
//$(document).ready(function () {
//    $("#i-edit").click(divClicked);
//});