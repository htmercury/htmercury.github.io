import React from "react";

import SEO from "../components/seo";
import genStyles from "../styles/page.module.scss";

const NotesPage = () => (
  <>
    <SEO title="Notes" />
    <div className={genStyles.title}>Notebook.</div>
    <div className={genStyles.subtitle}>A collection of useful resources.</div>

    <div className={genStyles.container} style={{maxWidth: "1440px"}}>
      <ol>
        <li>Nothing here, just yet.</li>
      </ol>
    </div>
  </>
);

export default NotesPage;
