import React from "react";
import { MendableSearchBar } from "@mendable/search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SearchBarWrapper() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <div className="mendable-search">  
      <MendableSearchBar
        anon_key={customFields.mendableAnonKey}
        style={{ accentColor: "#179C54", darkMode: false }}
        placeholder="Search"
        dialogPlaceholder="How do I create a SaaS Connector?"
        messageSettings={{ openSourcesInNewTab: false, prettySources: true }}
        searchBarStyle={{
          borderColor: "#9d9ea1",
          color:"#9d9ea1"
        }}
        askAIText="Ask Codey"
        isPinnable
        showSimpleSearch
        userIcon={useBaseUrl('/icons/magnifying-glass-plus-regular.svg')}
      />
    </div>
  );
}