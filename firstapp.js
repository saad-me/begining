function calculator(operator,numb1,numb2,ans,factorial,vari){
    numb1 = prompt('enter any number:')
    numb2 = prompt('enter any number:')
   operator = prompt('enter your operator(+-/%xf):')
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
      case 'f'
      :factorial=prompt('for factorial choose number1(1) or choose number2(2):')
      if (factorial=1)
      for (vari = 1;vari<=numb1;vari++){
     factorial = factorial*vari;
      }
       else {
        for (vari = 1;vari<=numb2;vari++)
        factorial = 1
        factorial =factorial * vari;
    }
    console.log(factorial);break;
      default
      :console.error('invalid operator');
}  
    }
calculator();
