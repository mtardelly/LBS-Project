/* eslint-disable default-case */
export function formatarCpfeCnpj(cpfoucnpj){

    cpfoucnpj = cpfoucnpj.replace(/\D/g, '');

  if (cpfoucnpj.length > 11) {
      if(cpfoucnpj.length>14){
          cpfoucnpj = cpfoucnpj.substring(0, 14);
      }
        switch (cpfoucnpj.length) {
            case 4:
            case 5:
                cpfoucnpj = cpfoucnpj.replace(/(\d{2})(.*)/, '$1.$2');
                break;
            case 6:
            case 7:
            case 8:
                cpfoucnpj = cpfoucnpj.replace(/(\d{2})(\d{3})(.*)/, '$1.$2.$3');
                break;
            case 9:
            case 10:
            case 11:
                cpfoucnpj = cpfoucnpj.replace(/(\d{2})(\d{3})(\d{3})(.*)/, '$1.$2.$3/$4');
                break;
            case 12:
            case 13:
            case 14:
            case 15:
                cpfoucnpj = cpfoucnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(.*)/, '$1.$2.$3/$4-$5');
                break;
              default:
                break;

      }
      return cpfoucnpj

    //cpfoucnpj = cpfoucnpj.substring(0, 11);
  }
  switch (cpfoucnpj.length) {
    case 4:
    case 5:
    case 6:
      cpfoucnpj = cpfoucnpj.replace(/(\d{3})(.*)/, '$1.$2');
      break;
    case 7:
    case 8:
    case 9:
      cpfoucnpj = cpfoucnpj.replace(/(\d{3})(\d{3})(.*)/, '$1.$2.$3');
      break;
    case 10:
    case 11:
      cpfoucnpj = cpfoucnpj.replace(/(\d{3})(\d{3})(\d{3})(.*)/, '$1.$2.$3-$4');
      break;
    default:
      break;
  }
  return cpfoucnpj;
}


export function validarCpf(cpfoucnpj) {

    /*if(cpfoucnpj.length > 16){
        
        cpfoucnpj = cpfoucnpj.replace(/[^\d]+/g,'');

        if (cpfoucnpj === "00000000000000" || 
            cpfoucnpj === "11111111111111" || 
            cpfoucnpj === "22222222222222" || 
            cpfoucnpj === "33333333333333" || 
            cpfoucnpj === "44444444444444" || 
            cpfoucnpj === "55555555555555" || 
            cpfoucnpj === "66666666666666" || 
            cpfoucnpj === "77777777777777" || 
            cpfoucnpj === "88888888888888" || 
            cpfoucnpj === "99999999999999")
            return false;
         
        // Valida DVs

        let tamanho = cpfoucnpj.length - 2
        let numeros = cpfoucnpj.substring(0,tamanho);
        let digitos = cpfoucnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        let i

        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(0))
            return false;
            
        tamanho = tamanho + 1;
        numeros = cpfoucnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== digitos.charAt(1))
            return false;
            
        return true;
        
    }*/
    

	if (!cpfoucnpj) {
		return false;
	}
	cpfoucnpj = cpfoucnpj.replace(/\D/g, '');
	if (cpfoucnpj.length < 11) {
		return false;
	}
	let soma = 0;
    let resto;
  	if (cpfoucnpj === '00000000000') {
  		return false;
  	}
  	for (let i=1; i<=9; i++) {
  		soma = soma + parseInt(cpfoucnpj.substring(i-1, i)) * (11-i);
  	}
  	resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
    	resto = 0;
    }
    if (resto !== parseInt(cpfoucnpj.substring(9, 10)) ) {
    	return false;
    }
  	soma = 0;
    for (let i = 1; i <= 10; i++) {
    	soma = soma + parseInt(cpfoucnpj.substring(i-1, i)) * (12-i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
    	resto = 0;
    }
    if (resto !== parseInt(cpfoucnpj.substring(10, 11) )) {
    	return false;
    }
    return true;
    

}