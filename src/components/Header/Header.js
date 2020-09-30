import React from "react";
import './Header.css';
function Header(props) {
 return (
    <header>
        <table>
          <tbody>
            <tr>
              {props.navAction === 'actionStep1' ? <td className="active"><span>Step 1</span></td> : <td><span>Step 1</span></td>}
              {props.navAction === 'actionStep2' ? <td className="active"><span>Step 2</span></td> : <td><span>Step 2</span></td>}
              {props.navAction === 'actionStep3' ? <td className="active"><span>Step 3</span></td> : <td><span>Step 3</span></td>}
              {props.navAction === 'actionReview' ? <td className="active"><span>Review</span></td> : <td><span>Review</span></td>}
            </tr>
          </tbody>
        </table>
    </header>
  );
}

export default Header;