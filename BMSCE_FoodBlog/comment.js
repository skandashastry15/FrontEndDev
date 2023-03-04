const form = document.getElementById('comment-form');
    const commentsDiv = document.getElementById('comments');
    let date=new Date();
    form.addEventListener('submit', event => {
      event.preventDefault();
      const d=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;
      const newComment = document.createElement('div');
      newComment.innerHTML = `<p><strong><span style="font-size:30px; color:grey; font-family:Comic Sans MS">${name}</span></strong><br>
        <strong><span style="font-size:15px;">${d}</span></strong> 
        <br><span style="font-size:20px;">${comment}</span></p><hr>`;
      commentsDiv.appendChild(newComment);
      document.getElementById('comment').value=null;
      document.getElementById('name').value=null;
    });