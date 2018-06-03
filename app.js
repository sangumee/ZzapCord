var app = require('./config/express')();
var db=require('./config/db')();

// Login Page (Now it's First Showing Page), But Later Needs Welcome Page
app.get('/', function(req,res){
  res.render('login');
});

// Main Page , After Login
app.get(['/main','/main/:id'], function(req,res){
  var sql='SELECT FROM game_list';
  db.query(sql).then(function(game_lists){
    var id=req.params.id;
    if(id){
      var sql='SELECT FROM game_list WHERE @rid=:rid';
      db.query(sql,{params:{rid:id}}).then(function(game_list){
        res.render('main', {game_lists:game_lists, game_list:game_list[0]});
      });
    }else{
      res.render('main', {game_lists:game_lists});
    }
  })
});

app.listen(2000, function() {
  console.log('Connected 2000 port!!!');
});
