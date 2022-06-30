const FunctionTime = () => {
    const MAIN_TIME = document.querySelector('.main__time');
    const NUMBER_DAY = document.querySelector('.number__day');
    const NUMBER_MONTH = document.querySelector('.number__month');
    const NUMBER_YEAR = document.querySelector('.number__year');
    const INFO__WEEK = document.querySelector('.information__week');
    const INFO__MONTH = document.querySelector('.information__month');
    const INFO__YEAR = document.querySelector('.information__year');

    const NEW_DATE = new Date();
        
    let CurrentHour = NEW_DATE.getHours();
    let CurrentMinute = NEW_DATE.getMinutes();
    let CurrentSecond = NEW_DATE.getSeconds();
    let CurrentYear = NEW_DATE.getFullYear();
    
    MAIN_TIME.innerHTML = `${CurrentHour}:${CurrentMinute}:${CurrentSecond}`;
    setTimeout("FunctionTime()", 500);

    const SetNumberValue = () => {
        let CurrentDay = NEW_DATE.getDate();
        let CurrentMonth = NEW_DATE.getMonth();

        NUMBER_DAY.innerHTML = `${CurrentDay}`;
        NUMBER_MONTH.innerHTML = `${CurrentMonth}`;
        NUMBER_YEAR.innerHTML = `${CurrentYear}`;

        const CorrectNumberValue = () => {
            if (CurrentDay < 10 && CurrentMonth < 10) {
                NUMBER_DAY.innerHTML = `0${CurrentDay}`;
                NUMBER_MONTH.innerHTML = `0${CurrentMonth}`;
            } else if (CurrentDay < 10) {
                NUMBER_DAY.innerHTML = `0${CurrentDay}`;
            } else if (CurrentMonth < 10) {
                NUMBER_MONTH.innerHTML = `0${CurrentMonth}`;
            }
        }
        CorrectNumberValue();
    }
    SetNumberValue();

    const SetInformationValue = () => {
        let CurrentDayName = NEW_DATE.getDay();
        let CurrentMonthName = NEW_DATE.getMonth();
        
        INFO__YEAR.innerHTML = `${CurrentYear}`;

        const GetDayName = () => {
            switch (CurrentDayName) {
                case 0:
                    INFO__WEEK.innerHTML = `Sunday`;
                    break;
                case 1:
                    INFO__WEEK.innerHTML = `Monday`;
                    break;
                case 2:
                    INFO__WEEK.innerHTML = `Tuesday`;
                    break;
                case 3:
                    INFO__WEEK.innerHTML = `Wednesday`;
                    break;
                case 4:
                    INFO__WEEK.innerHTML = `Thursday`;
                    break;
                case 5:
                    INFO__WEEK.innerHTML = `Friday`;
                    break;
                case 6:
                    INFO__WEEK.innerHTML = `Saturday`;
                    break;
                default:
                    INFO__WEEK.innerHTML = `Monday`;
                    break;
            }
        }
        GetDayName();

        const GetMonthName = () => {
            switch (CurrentMonthName) {
                case 0:
                    INFO__MONTH.innerHTML = `January`;
                    break;
                case 1:
                    INFO__MONTH.innerHTML = `February`;
                    break;
                case 2:
                    INFO__MONTH.innerHTML = `March`;
                    break;
                case 3:
                    INFO__MONTH.innerHTML = `April`;
                    break;
                case 4:
                    INFO__MONTH.innerHTML = `May`;
                    break;
                case 5:
                    INFO__MONTH.innerHTML = `June`;
                    break;
                case 6:
                    INFO__MONTH.innerHTML = `July`;
                    break;
                case 7:
                    INFO__MONTH.innerHTML = `August`;
                    break;
                case 8:
                    INFO__MONTH.innerHTML = `September`;
                    break;
                case 9:
                    INFO__MONTH.innerHTML = `October`;
                    break;
                case 10:
                    INFO__MONTH.innerHTML = `November`;
                    break;
                case 11:
                    INFO__MONTH.innerHTML = `December`;
                    break;
                default:
                    INFO__MONTH.innerHTML = 'January';
            }
        }
        GetMonthName();
    }
    SetInformationValue();

    const CorrectValues = () => {
        if (CurrentHour < 10 && CurrentMinute < 10 && CurrentSecond < 10) {
            MAIN_TIME.innerHTML = `0${CurrentHour}:0${CurrentMinute}:0${CurrentSecond}`;
        } else if (CurrentMinute < 10 && CurrentSecond < 10) {
            MAIN_TIME.innerHTML = `${CurrentHour}:0${CurrentMinute}:0${CurrentSecond}`;
        } else if (CurrentHour < 10) {
            MAIN_TIME.innerHTML = `0${CurrentHour}:${CurrentMinute}:${CurrentSecond}`;
        } else if (CurrentMinute < 10) {
            MAIN_TIME.innerHTML = `${CurrentHour}:0${CurrentMinute}:${CurrentSecond}`;
        } else if (CurrentSecond < 10) {
            MAIN_TIME.innerHTML = `${CurrentHour}:${CurrentMinute}:0${CurrentSecond}`;   
        }
    }
    CorrectValues();
}