function valueFunc(){
    const valuesDOM = document.querySelectorAll(".values-list span");
    valuesDOM.forEach((value) =>{
        value.addEventListener("click",function() {
           valuesDOM.forEach((item) => {
            item.classList.remove("active");
           });
           value.classList.add("active")
        });
    });
};

export default valueFunc();