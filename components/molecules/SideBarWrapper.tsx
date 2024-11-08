// components/molecules/SidebarWrapper.tsx
"use client";

import React, { useRef, useEffect } from 'react';
import { Sidebar as SyncfusionSidebar, SidebarModel } from '@syncfusion/ej2-navigations';
import { Button, RadioButton, ChangeArgs } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import styles from './SidebarWrapper.module.css';

enableRipple(true);

interface SidebarProps extends SidebarModel {
  elementId: string;
}

const SidebarWrapper: React.FC<SidebarProps> = ({ elementId, ...props }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      console.log('Initializing Sidebar');
      const defaultSidebar = new SyncfusionSidebar({
        width: "280px",
        type: "Push",
        enablePersistence: true,
        target: document.querySelector('.maincontent') as HTMLElement,
        ...props
      });
      defaultSidebar.appendTo(sidebarRef.current);

      // Toggle button initialization
      const toggleButton = new Button({ iconCss: 'e-icons burg-icon', isToggle: true, content: 'Open' }, '#toggle');

      // Click Event
      document.getElementById('toggle')!.onclick = (): void => {
        if (document.getElementById('toggle')!.classList.contains('e-active')) {
          toggleButton.content = 'Close';
          defaultSidebar.show();
        } else {
          toggleButton.content = 'Open';
          defaultSidebar.hide();
        }
      };

      // Close the Sidebar
      document.getElementById('close')!.onclick = (): void => {
        defaultSidebar.hide();
        document.getElementById('toggle')!.classList.remove('e-active');
        toggleButton.content = 'Open';
      };

      // RadioButton initialization
      const positionLeft = new RadioButton({ label: 'Left', name: 'state', checked: true, change: changePosition });
      positionLeft.appendTo('#left');

      const positionRight = new RadioButton({ label: 'Right', name: 'state', change: changePosition });
      positionRight.appendTo('#right');

      function changePosition(args: ChangeArgs) {
        defaultSidebar.position = (args.event.target as HTMLInputElement).id === "left" ? "Left" : "Right";
      }

      return () => {
        // Cleanup event listeners
        document.getElementById('toggle')!.onclick = null;
        document.getElementById('close')!.onclick = null;
        defaultSidebar.destroy();
      };
    }
  }, [props]);

  return (
    <div id={elementId} ref={sidebarRef} className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>JaliverHorse</div>
      <button id="toggle" className={styles.button}>Toggle Sidebar</button>
      <button id="close" className={styles.button}>Close Sidebar</button>
      <div>
        <input type="radio" id="left" name="position" />
        <label htmlFor="left">Left</label>
        <input type="radio" id="right" name="position" />
        <label htmlFor="right">Right</label>
      </div>
    </div>
  );
};

export default SidebarWrapper;