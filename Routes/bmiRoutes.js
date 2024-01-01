const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.sendFile('index.html', { root: 'views' });
});

router.post('/bmicalculator', (req, res) => {

let weight = parseFloat(req.body.Weight);
let height = parseFloat(req.body.Height);
const age = parseInt(req.body.Age);
const gender = req.body.gender;
const weightUnit = req.body.WeightUnit
const heightUnit = req.body.HeightUnit
if(weightUnit==="lbs"){
    weight = weight/2.2
}

if(heightUnit=== "ft"){
    height = height*34
}
const bmi = calculateBMI(weight, height, age, gender);

res.send(`<h1>BMI Result: ${bmi}</h1>`);
});


function calculateBMI(weight, height,age,gender ) {

var bmi  = weight/(height/100 * height/100)

if(gender === "male"){
result = calculateForMen(age,bmi)
}else if(gender === "female"){
result = calculateForWomen(age,bmi)
}
result = bmi.toFixed(2) + " - " +  result 
return result
}

function calculateForMen(age,bmi){
result = ''
if(age<18){
if(bmi<20){
    result = 'Underwight'
    }else if(bmi<25){
        result = 'Healthy'
    }else if(bmi<30){
        result = 'Overwight'
    }else if(bmi<40){
        result = 'Obese'
    }else if(40<=bmi){
        result = 'Extremely obese'
    }}
    else if(age<=34){
    if(bmi<21){
        result = 'Underwight'
    }else if(bmi<26){
        result = 'Healthy!!'
    }else if(bmi<31){
        result = 'Overwight'
    }else if(bmi<41){
        result = 'Obese'
    }else if(41<=bmi){
        result = 'Extremely obese'
    }
    }
    else if(age<=44){
        if(bmi<22){
            result = 'Underwight'
        }else if(bmi<27){
            result = 'Healthy!!'
        }else if(bmi<32){
            result = 'Overwight'
        }else if(bmi<42){
            result = 'Obese'
        }else if(42<=bmi){
            result = 'Extremely obese'
        }
        }
        else if(age<=54){
            if(bmi<23){
                result = 'Underwight'
            }else if(bmi<28){
                result = 'Healthy!!'
            }else if(bmi<33){
                result = 'Overwight'
            }else if(bmi<43){
                result = 'Obese'
            }else if(43<=bmi){
                result = 'Extremely obese'
            }
            }else{
                if(bmi<25){
                    result = 'Underwight'
                }else if(bmi<30){
                    result = 'Healthy!!'
                }else if(bmi<35){
                    result = 'Overwight'
                }else if(bmi<45){
                    result = 'Obese'
                }else if(45<=bmi){
                    result = 'Extremely obese'
                } 
            }
return result
}

function calculateForWomen(age,bmi){
result = ''
if(age<18){
if(bmi<19){
    result = 'Underwight'
    }else if(bmi<=24){
        result = 'Healthy'
    }else if(bmi<=30){
        result = 'Overwight'
    }else if(bmi<=35){
        result = 'Obese'
    }else if(35<=bmi){
        result = 'Extremely obese'
    }}
    else if(age<=34){
    if(bmi<20){
        result = 'Underwight'
    }else if(bmi<25){
        result = 'Healthy!!'
    }else if(bmi<31){
        result = 'Overwight'
    }else if(bmi<41){
        result = 'Obese'
    }else if(41<=bmi){
        result = 'Extremely obese'
    }
    }
    else if(age<=44){
        if(bmi<21){
            result = 'Underwight'
        }else if(bmi<26){
            result = 'Healthy!!'
        }else if(bmi<32){
            result = 'Overwight'
        }else if(bmi<42){
            result = 'Obese'
        }else if(42<=bmi){
            result = 'Extremely obese'
        }
        }
        else if(age<=54){
            if(bmi<22){
                result = 'Underwight'
            }else if(bmi<27){
                result = 'Healthy!!'
            }else if(bmi<33){
                result = 'Overwight'
            }else if(bmi<43){
                result = 'Obese'
            }else if(43<=bmi){
                result = 'Extremely obese'
            }
            }else{
                if(bmi<24){
                    result = 'Underwight'
                }else if(bmi<29){
                    result = 'Healthy!!'
                }else if(bmi<35){
                    result = 'Overwight'
                }else if(bmi<45){
                    result = 'Obese'
                }else if(45<=bmi){
                    result = 'Extremely obese'
                } 
            }
return result
}

module.exports = router;
