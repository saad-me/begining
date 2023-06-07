function calculator(operator,numb1,numb2,ans){
    numb1 = prompt('enter any number:')
    numb2 = prompt('enter any number:')
   operator = prompt('enter your operator(+-/%x):')
   switch (operator){
       case '+'
      :ans  = numb1 + + + numb2
      console.log(ans);
      break;
      case'-'
      :ans = numb1 -numb2
      console.log(ans);
      break;
      case '/'
      :ans = numb1 / numb2
      console.log(ans);
      break;
      case '%' 
      :ans = numb1 % numb2
      console.log(ans);
      break;
      case 'x'
      :ans = numb1 * numb2
      console.log(ans);
      break;
      default
      :console.error('invalid operator');
      
      
   }}
   calculator();
   
