var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
      title:' Article one | Senthilkumar Lakshmanan',
      heading:' Article one ',
      date:' Sep 18, 2016',
      content:`<p>
                    This is the content of the article one. This is the content of the article one. 
                    This is the content of the article one. 
                </p>
                <p>
                    This is the content of the article one. This is the content of the article one. 
                    This is the content of the article one. 
                </p>
                <p>
                    createTemplate function used. 
                </p>`
    },
    'article-two':{
      title:' Article two | Senthilkumar Lakshmanan',
      heading:' Article two ',
      date:' Sep 18, 2016',
      content:`<p>
                    This is the content of the article two. This is the content of the article two. 
                    This is the content of the article two. 
                </p>
                <p>
                    This is the content of the article two. This is the content of the article two. 
                    This is the content of the article two. 
                </p>
                <p>
                    createTemplate function used. 
                </p>`
    },
    'article-three':{
      title:' Article three | Senthilkumar Lakshmanan',
      heading:' Article three ',
      date:' Sep 18, 2016',
      content:`<p>
                    This is the content of the article three. This is the content of the article three. 
                    This is the content of the article three. 
                </p>
                
                <p>
                    createTemplate function used. 
                </p>`
    }
}
function createTemplate(data){

      var heading=data.heading;
      var title=data.title;
      var date=data.date;
      var content=data.content;
      var htmlTemplate=`<html>
          <head>
              <title>
                  ${title}
              </title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link href="/ui/style.css" rel="stylesheet" />
                  
              </style>
          </head>
          <body>
              <h3>${heading}</h3>
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>Article one</h3>
              <div>
                  ${date}
              </div>
              <div class="container">
              <div>
                  ${content}
              </div>
              </div>
          </body>

      </html>`

      return htmlTemplate;

}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
 // res.send('Article one is requested and will be served');
 //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
 var articleNam=req.params.articleName;
 res.send(createTemplate(articles[articleNam]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
