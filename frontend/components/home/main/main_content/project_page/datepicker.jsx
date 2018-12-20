import React from 'react';
import moment from 'moment';

class DatePickerInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let selectedDate;
    (this.props.selectedDate !== null) ? selectedDate = moment(this.props.selectedDate).format("MMM D") : selectedDate = null

    return (
      <div onClick={this.props.onClick} className="due-date-button">
        <div className="dashed-circle-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 366.8 366.8"><path d="M353.4 71.6c-2.4-11.6-8-22-16-30 -2.4-2.4-5.2-4.8-8.4-6.8l-0.4-0.4c-0.4-0.4-0.8-0.4-1.2-0.8 -1.2-0.8-2.4-1.6-3.6-2h-0.4c-8.4-4.4-17.6-6.8-28-6.8h-24.8V7.6c0-4-3.2-7.6-7.6-7.6 -4 0-7.6 3.2-7.6 7.6V24H111.8V7.6c0-4-3.6-7.6-7.6-7.6s-7.6 3.2-7.6 7.6V24H71.8c-7.6 0-15.2 1.6-22 4.4 -7.6 3.2-14.4 7.6-20 13.2 -3.2 3.2-6 6.8-8.4 10.4 -2.4 4-4.4 8-6 12.4 -0.8 2.4-1.6 4.8-2 7.2 -0.8 4-1.2 8-1.2 12v40V308c0 16.4 6.8 31.2 17.2 41.6C40.2 360.4 55 366.8 71 366.8h224.8c16.4 0 31.2-6.8 41.6-17.2 10.8-10.8 17.2-25.6 17.2-41.6V123.6v-40C354.6 79.6 354.2 75.6 353.4 71.6zM27.8 83.2c0-3.2 0.4-6 0.8-8.8 0.4-2.8 1.6-5.6 2.4-8.4 1.6-3.6 3.6-6.8 5.6-9.6 1.2-1.6 2.4-2.8 3.6-4.4 2.4-2.4 5.2-4.4 8-6.4 6.8-4 14.4-6.4 22.8-6.4h24.8v16.4c0 4 3.2 7.6 7.6 7.6 4 0 7.6-3.2 7.6-7.6V39.2h145.6v16.4c0 4 3.2 7.6 7.6 7.6 4 0 7.6-3.2 7.6-7.6V39.2h24.8c8.4 0 16.4 2.4 22.8 6.4 2.8 2 5.6 4 8 6.4 6 6 10.4 13.6 12 22.4 0.4 2.8 0.8 6 0.8 8.8V116H27.8V83.2zM340.6 307.6c0 12.4-4.8 23.6-12.8 31.6S308.6 352 296.6 352H71.8c-12 0-23.2-4.8-31.2-12.8S27.8 320 27.8 308V130.8h312.8V307.6z" /></svg>
        </div>
        <div>Due Date
          {(selectedDate !== null) ? <br></br> : ""}
          <div className="due-date-future">{selectedDate}</div>
        </div>
      </div>
    );
  }
}

export default DatePickerInput;