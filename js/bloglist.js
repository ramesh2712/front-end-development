var projectListObjects = [
    
    {
    name : 'Hello there ! This is Post 1'

    },
    {
    name : 'Hello there ! This is Post 2. '
    },
    {
    name : 'Hello there ! This is Post 3. '
    },
    {
    name : 'Hello there ! This is Post 4. '        
    },
    {
     name : 'Hello there ! This is Post 5. '
    }];

    var removedPosts = [];
    var modal = document.getElementById('myModal');
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
   

    showCards();

    function showCards(){
        projectListObjects.forEach( function(value,index){
            var template =  '<div class="post" id='+index+'>'+
           '<div class="post-left">'+
                '<p class="post-username">Jimi</p>'+
            '</div>'+
            '<div class="post-content">'+
            '<p class="post-title">'+ value.name+'​</p>' +
                '<p class"deleteButton"  onclick="removePost('+index+')" style="float: right;"<i class="fa fa-trash"></i></p>'+
                '<p class="post-desc">Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.</p>'
                +
                '</br>'+
                '<p id="three-dots">...</p>'+
               '</div>';
            
               if(removedPosts.includes(index)==false){
               document.getElementById('allPostsContainerId').innerHTML += template;
               }
             

        });

        
    }

    var temp_index = 0;

  function removePost(index){
     
    modal.style.display='block';
    temp_index = index;

  }

  function removePostClicked(){
   
    removedPosts.push(temp_index);
      
    document.getElementById('allPostsContainerId').innerHTML ='';
    modal.style.display='none';
    showCards();
  }

  function ignore(){
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
