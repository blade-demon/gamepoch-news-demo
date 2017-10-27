$(document).ready(function () {
    var params = jQuery.deparam(window.location.search.slice(1));
    var newsId = params.id;
    console.log(newsId);
    getNews(newsId);
});

function getNews(id) {
    fetch(`http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.com&id=${id}`).then(function (response) {
        response.text().then(function (data) {
            // 新闻详细数据
            news = JSON.parse(data)[0];
            var newsData = {title: news.post_title, content: news.post_content };
            // 创建新闻
            document.getElementById("container").innerHTML = news.post_content;
//            insertNewsCover(newsData);
        });
    }).catch(function (error) {
        console.log(error);
    });
}

// 创建新闻
function insertNewsCover(data) {
    
}
