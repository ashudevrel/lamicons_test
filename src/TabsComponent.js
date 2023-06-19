import React, { useState } from 'react'

const TabsComponent = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderTabs = () => {
        return tabs.map((tab, index) => {
            const isActive = index === activeTab;
            const tabClassName = isActive ? 'active' : '';

            return (
                <li
                key={index} className={tabClassName} onClick={() => handleTabClick(index)}>
                    {tab.title}
                </li>
            );
        });
    };

    const renderContent = () => {
        const currentTab = tabs[activeTab];
        return currentTab && <p>{currentTab.content}</p>;
    };

  return (
    <div>
        <ul className="tabs">{renderTabs()}</ul>
        <div className="content">{renderContent()}</div>
    </div>
  )
}

export default TabsComponent
