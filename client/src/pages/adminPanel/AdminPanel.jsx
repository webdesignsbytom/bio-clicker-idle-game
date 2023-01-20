import React from 'react';

function AdminPanel() {
  return (
    <>
      <div>
        <div className='adminPanel__title'>
          <h1>Admin Panel</h1>
        </div>

        <div className="create__container">
            <div className="create__item__container">Create Item</div>
            <div className="create__building__container">Create Building</div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
