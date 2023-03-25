import React, { useState } from "react";
import "./Cal.css";
import ButtonComp from "./Utils/Button_Comp";

const Cal = () => {
  const [value1, setValue1] = useState(0);
  const [currentExp, setCurrentExp] = useState(0);
  const [currentOp, setCurrentOp] = useState(null);
  const [displayInput, setDisplayInput] = useState(true);
  const buttonsArr = [
    [
      {
        value: 1,
        calFun: () => {
          setCurrentExp((prevState) => {
            let newValue;
            if (prevState != 0) {
              newValue = `${prevState}` + 1;
            } else {
              newValue = 1;
            }

            return newValue;
          });
        },
        id: 1,
      },
      {
        value: 2,
        calFun: () => {
          setCurrentExp((prevState) => {
            //    const variableName =  condition ?  true op1 : false op2
            const newValue = prevState != 0 ? `${prevState}` + 2 : 2;
            return newValue;
          });
        },
        id: 2,
      },
      {
        value: 3,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 3 : 3;
            return newValue;
          });
        },
        id: 3,
      },
    ],
    [
      {
        value: 4,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 4 : 4;
            return newValue;
          });
        },
        id: 4,
      },
      {
        value: 5,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 5 : 5;
            return newValue;
          });
        },
        id: 5,
      },
      {
        value: 6,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 6 : 6;
            return newValue;
          });
        },
        id: 6,
      },
    ],
    [
      {
        value: 7,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 7 : 7;
            return newValue;
          });
        },
        id: 7,
      },
      {
        value: 8,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 8 : 8;
            return newValue;
          });
        },
        id: 8,
      },
      {
        value: 9,
        calFun: () => {
          setCurrentExp((prevState) => {
            const newValue = prevState != 0 ? `${prevState}` + 9 : 9;
            return newValue;
          });
        },
        id: 9,
      },
    ],
  ];

  const operationArr = [
    {
      value: "+",
      calFun: () => {
        const currentValue = parseInt(currentExp) + value1;
        setCurrentExp(0);
        setValue1(currentValue);
        console.log("value1", value1, currentValue);
        setCurrentOp("+");
      },
      id: "plus",
    },
    {
      value: "-",
      calFun: () => {
        const currentValue = parseInt(currentExp) - parseInt(value1);
        setCurrentExp(0);
        setValue1(parseInt(currentValue));
        console.log("value1", value1, currentValue);
        setCurrentOp("-");
      },
      id: "minus",
    },
    {
      value: "=",
      id: "equal",
      calFun: () => {
        console.log(currentOp === "+");
        if (currentOp === "+") {
          setCurrentExp(parseInt(currentExp) + parseInt(value1));
        } else if (currentOp === "-") {
          return currentExp > value1
            ? setCurrentExp(parseInt(currentExp) - parseInt(value1))
            : setCurrentExp(parseInt(value1) - parseInt(currentExp));
        }

        setValue1(0);
      },
    },
  ];
  const buttons1 = buttonsArr[0].map((bt) => {
    return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />;
  });
  const buttons2 = buttonsArr[1].map((bt) => {
    return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />;
  });
  const buttons3 = buttonsArr[2].map((bt) => {
    return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />;
  });

  const operationButtons = operationArr.map((bt) => {
    return <ButtonComp key={bt.id} value={bt.value} calFun={bt.calFun} />;
  });

  const changeCheckBox = (event) => {
    console.log("change event ", event.target.checked);
    setDisplayInput(event.target.checked)
  }
  return (
    <div className="cal-comp">
      <div className="cal-button-wrapper">
        <div>
          <input
            type="checkbox"
            onChange={changeCheckBox}
            value={displayInput}
          />

          {displayInput ? (
            <input type='number' value={currentExp} onChange={(event) => setCurrentExp(event.target.value)}/>
          ) : (
            <span>check display input</span>
          )}
        </div>
        <div className="cal-button-row"> {buttons1} </div>
        <div className="cal-button-row"> {buttons2} </div>
        <div className="cal-button-row"> {buttons3} </div>
        <div className="cal-button-row"> {operationButtons} </div>
      </div>
    </div>
  );
};

export default Cal;
