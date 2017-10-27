// 新闻详细数据列表
var newsArray = [];

// 网络请求获取数据
fetch('http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.com').then(function(response){
   response.text().then(function(data){
       // 新闻详细数据列表
       newsArray = JSON.parse(data);
       console.log(newsArray);
       console.log(document.getElementsByClassName("container"));
       // 创建新闻
       insertNewsCover(newsArray);      
       
   });
}).catch(function(error){
    console.log(error);
});


// 插入新闻元素
function insertNewsCover(newsArray) {
    var htmlString = ``;
    newsArray.map(function(news) {
        htmlString += `  
        <div class='newsWrapper'>
            <a class='title' href='./news.html?id=${news.id}'>${news.post_title}</a>
            <p class="subtitle">${news.post_excerpt}</p>
            <p class="author">${news.post_source}</p>
            <p class="date">${news.post_modified}</p>
        </div>
    `;
    });

    document.getElementById("news_container").innerHTML = htmlString;
}