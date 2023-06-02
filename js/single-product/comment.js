const commentReviewsFunc = function() {
    const commentStartsDOM = document.querySelectorAll(".comment-form-rating .star");
    commentStartsDOM.forEach((item) => {
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            commentStartsDOM.forEach((e) =>e.classList.remove("active"));
            item.classList.add("active");
        });
    });
};


const addNewCommentFunc = () => {
    let comments = [];
    let commentTextDOM = document.getElementById("comment-text");
    let commentNameDOM = document.getElementById("comment-name");
    let CommentButton = document.querySelector(".form-submit input");
    let CommentListDOM = document.querySelector(".comment-list");
    let CommentEmailDOM = document.querySelector("#email");
    let commentText = "";
    let commentName = "";

    commentTextDOM.addEventListener("input",function(e){
        commentText = e.target.value;

    })

    commentNameDOM.addEventListener("input",function(e){
        commentName = e.target.value;
        
    })
    
    function addComment(e){
        e.preventDefault();
        comments.push({text: commentText, name:commentName});
        let result = "";
        comments.forEach((item) => {
            result += `
            <li class="comment-item">
                <div class="comment-avatar">
                    <img src="img/avatars/avatar1.jpg" alt="">
                </div>
                <div class="comment-text">
                    <ul class="comment-star">
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-half"></i></li>
                    </ul>
                    <div class="comment-meta">
                        <strong>${item.name}</strong>
                        -
                        <time>16 Nisan 2023</time>
                    </div>
                    <div class="comment-description">
                        <p>${item.text}</p>
                    </div>
                </div>
            </li>
            
            `
        });
        CommentListDOM.innerHTML=result;
        commentNameDOM.value = "";
        commentTextDOM.value = "";
        CommentEmailDOM.value = "";
    }
    CommentButton.addEventListener("click",addComment);
}

function commentFunc(){
    commentReviewsFunc();
    addNewCommentFunc();
}

export default commentFunc();