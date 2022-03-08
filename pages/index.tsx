import React, { Fragment, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet'

const Home = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
  <div className="pageLayout">
    <p>To See example usage click on one of the Links above.</p>
    <button onClick={() => setOpen(true)}>Open bottom sheet</button>
    <BottomSheet open={open} header={
        <Fragment>
          <div onClick={() => setOpen(false)}>
            <button onClick={() => setOpen(false)}>Close Sheet</button>
          </div>
          <button onClick={() => setOpen(false)}>Close Sheet</button>
        </Fragment>
      }>
        <div>
       
        <button disabled={false} onClick={(e) => setOpen(false)}>Close Sheet</button>

    <button onClick={() => setOpen(false)}>Close Sheet</button>
  <input type="radio" name="some-name-1" />
    </div>
    
    
    
    </BottomSheet>
  </div>
)}

export default Home;
