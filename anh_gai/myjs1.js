var student = {
	"rollnumber" : "A00580",
	"name" : "Ly1",
	"avatar" : "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg",
	"phone" : "123456789",
	"address" : "Hà Nội"
};
var student1 = {
	"rollnumber" : "A00581",
	"name" : "Ly2",
	"avatar" : "https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg",
	"phone" : "123456789",
	"address" : "Hà Nội"
};
var student2 = {
	"rollnumber" : "A00582",
	"name" : "Ly3",
	"avatar" : "https://i.pinimg.com/originals/8f/c3/e3/8fc3e39d820e2748fb3a6458899deee1.jpg",
	"phone" : "123456789",
	"address" : "Hà Nội"
};
var student3 = {
	"rollnumber" : "A00583",
	"name" : "Ly4",
	"avatar" : "https://i.ytimg.com/vi/hoL-fMI-0X8/mqdefault.jpg",
	"phone" : "123456789",
	"address" : "Hà Nội"
};
var student4 = {
	"rollnumber" : "A00584",
	"name" : "Ly5",
	"avatar" : "http://static2.yan.vn/YanNews/2167221/201804/duong-mich-da-xinh-dep-tro-lai-sau-tham-hoa-toc-mai-a7c1fbde.jpg",
	"phone" : "123456789",
	"address" : "Hà Nội"
};
var student5 = {
	"rollnumber" : "A00585",
	"name" : "Ly6",
	"avatar" : "https://wx4.sinaimg.cn/mw690/cf640af3gy1fr1xmh3ylzj20k00zkjt8.jpg",
	"phone" : "123456789",
	"address" : "Hà Nội"
};

var listArray = new Array();
listArray.push(student);
listArray.push(student1);
listArray.push(student2);
listArray.push(student3);
listArray.push(student4);
listArray.push(student5);

var classMainContent = document.getElementsByClassName('main-content');
if(classMainContent != null && classMainContent.length > 0){
	var mainContent = classMainContent[0];
	for (var i = 0; i < listArray.length; i++) {
		var	itemContent ='<div class="personal-infor">';
            itemContent +='<div class="avatar" style="background-image: url('+ listArray[i].avatar + '); background-size: cover">';
            itemContent +='</div>' ;
            itemContent +=' <div class="line-infor">';
            itemContent +='<label>Rollnumber</label>';
            itemContent +='<div>'+ listArray[i].rollnumber +'</div>';
            itemContent +='</div>';
            itemContent +='<div class="line-infor">';
            itemContent +='<label>Name</label>';
            itemContent +='<div>'+ listArray[i].name +'</div>';
            itemContent += '</div>';
            itemContent +='<div class="line-infor">';
            itemContent +='<label>Phone</label>';
            itemContent +='<div>'+ listArray[i].phone +'</div>' ;
            itemContent +='</div>';
            itemContent +='<div class="line-infor">';
            itemContent +='<label>Address</label>';
            itemContent +='<div>'+ listArray[i].address +'</div>';
            itemContent +='</div>';
            itemContent +='</div>';

            mainContent.innerHTML += itemContent;
	}
}