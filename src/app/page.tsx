import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Title from "../../components/atoms/title";
import SidebarWrapper from "../../components/molecules/SidebarWrapper";
// Import Syncfusion CSS files directly in the JavaScript/TypeScript file
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <SidebarWrapper elementId="sidebar" />
      <main className={styles.main}>
        <Title />
        <ol>
          <li>
            This is a landing page where New NHBC Buyer / Tenant / leaseholder - Tenant will log in - <code>src/app/page.tsx</code>.
          </li>
          <li>No requirement for SSO - Integration to FB, Google, MS Azure.</li>
        </ol>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
          </a>
        </div>
      </main>
    </div>
  );
}