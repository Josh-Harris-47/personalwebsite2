

function hover(){
  var selectabout = document.body.getElementsByClassName('about');
  var body = document.body.getElementsByClassName('aboutMe');
  var selectgallery = document.body.getElementsByClassName('images');
  var gallery = document.body.getElementsByClassName('picGallery');
  info = {
    index: 0,
    mousetime: this.i
  }
  body[0].addEventListener('mouseover',function(e){
    info.index += 1;
    selectabout[0].style.display = 'block';
  });
  body[0].addEventListener('mouseout',function(){
    selectabout[0].style.display = 'none';
  });
  gallery[0].addEventListener('mouseover',function(e){
    info.index += 1;
    selectgallery[0].style.display = 'flex';
  });
  gallery[0].addEventListener('mouseout',function(){
    selectgallery[0].style.display = 'none';
  });
  setTimeout(function(){
    if(info.index == 0){
      alert('pssst hover over About Me or Pictures')
    }else{
      console.log("I\'m awesome")
    }

  },3000);
}
hover();
