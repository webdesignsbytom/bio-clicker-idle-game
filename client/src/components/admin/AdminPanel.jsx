import React, { useContext } from 'react';
import './adminPanel.css';
import { OptionContext } from '../../context/OptionContext';

function AdminPanel() {
  const { isAdminPanelOpen, setIsAdminPanelOpen } = useContext(OptionContext);

  return(
    <>
        {isAdminPanelOpen && <div className='admin__panel__container'>Hi</div>}
    </>
  )

}

export default AdminPanel;
