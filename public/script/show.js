window.onload()

function likeCheck(){
    if (user){
        const likeButton = document.querySelector('.like-btn')
        likeButton.classList.toggle('like-btn-liked')    
    }
}

module.exports = likeCheck