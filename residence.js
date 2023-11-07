const {Citizen}= require ('./citizen')

let residence1 = new Citizen('Matete', 2112891310391);
residence1.addAddress('Limpopo');
residence1.getDetails()