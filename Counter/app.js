let count = 0;
const value = document.getElementById('value');
const btns = document.getElementsByClassName("btn");

for(let i =0;i<btns.length;i++){
    btns[i].addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color='green';
        } else if (count<0){
            value.style.color='red';
        }
        else{
            value.style.color='#222'
        }
        value.textContent=count;
    })
    
};

