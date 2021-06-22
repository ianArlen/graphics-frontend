import React from 'react'
import { ChartDonut, ChartThemeColor} from '@patternfly/react-charts';
import './Donut.css';

const Donut = ({name, count, article1, article2, percentage1, percentage2, number1, number2, color}) => {
    const donutColor = color => {
      switch (color) {
        case "green":   return ChartThemeColor.green;
        case "blue": return ChartThemeColor.blue;
        case "orange":  return ChartThemeColor.orange;
        default:      return ChartThemeColor.black;
      }
    }

    const colorCss = (side, color)=> {
      switch (color) {
        case "green":   return side + "-green";
        case "blue": return side + "-blue";
        case "orange":  return side + "-orange";
        default:      return "";
      }
    }

    return (
        <div>
         <div className="graphic-grid">
          <ChartDonut
            constrainToVisibleArea={true}
            data={[{},{},{ x: article2, y: percentage2 },{ x: article1 , y: percentage1},]}
            donutOrientation="top"
            height={275}
            subTitle = {name}
            subTitlePosition="center"
            title={count}
            ariaTitle="bottom"
            themeColor={donutColor(color)}
            width={250}
          />
         
          <div className={colorCss("left",color)}>
           <strong> {article1} </strong>
           <br></br>
           <p className="amount"><strong className="percentage">{percentage1}% </strong>&nbsp; {number1}</p> 
          </div>
       
          <div className={colorCss("right",color)}>
           <strong> {article2} </strong>
           <br></br>
           <p className="amount"><strong className="percentage">{percentage2}% </strong> &nbsp; {number2}</p> 
          </div>
         </div>
        </div>
    )
}

export default Donut
