import React from 'react';
import './App.css';
import {Tabs} from 'antd';
import Chart from "./components/Chart";
import Header from "./components/Header";
import {TabsType} from "./types/TabsType";
import Colors from "./constants/Colors";

const { TabPane } = Tabs;

const tabs: TabsType[] = [
  { name: 'Summary' },
  { name: 'Chart', Component: <Chart /> },
  { name: 'Statistics' },
  { name: 'Analysis' },
  { name: 'Settings' },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs defaultActiveKey="Chart" tabBarStyle={{ color: Colors.grey }}>
        {tabs.map(tab => (
            <TabPane tab={tab.name} key={tab.name}>
              {tab.Component}
            </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default App;
