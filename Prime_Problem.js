let num = 13;
let flag = 1;
for(let i = 0;i<num-1;i++){
	if(num%i==1){
	flag = 0;
        break;
    	}
}
if(flag==0){
	console.log("Yes");
}else{
        console.log("No");
    }
