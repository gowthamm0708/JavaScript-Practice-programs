import React, { useState } from 'react';
import { Users, DoorOpen, UserCheck, Calculator as Elevator, Users as UsersGroup, ParkingSquare, Shield, LayoutDashboard, Laptop, ScrollText, Wrench, LineChart } from 'lucide-react';
import './App.scss';

const menuItems = [
  {
    id: 'personnel',
    label: 'Personnel',
    icon: <Users className="icon" />,
  },
  {
    id: 'access',
    label: 'Access',
    icon: <DoorOpen className="icon" />,
    subModules: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <LayoutDashboard className="icon" />,
      },
      {
        id: 'device-management',
        label: 'Device Management',
        icon: <Laptop className="icon" />,
        subMenu: [
          'Device',
          'I/O Board',
          'Door Setting',
          'Reader',
          'Auxiliary Input',
          'Auxiliary Output',
          'Event Type',
          'Daylight Saving Time',
          'Real-Time Monitoring',
          'Alarm Monitoring',
        ],
      },
      {
        id: 'access-rule',
        label: 'Access Rule',
        icon: <ScrollText className="icon" />,
      },
      {
        id: 'advanced-functions',
        label: 'Advanced Functions',
        icon: <Wrench className="icon" />,
      },
      {
        id: 'access-control-reports',
        label: 'Access Control Reports',
        icon: <LineChart className="icon" />,
      },
    ],
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: <UserCheck className="icon" />,
  },
  {
    id: 'elevator',
    label: 'Elevator',
    icon: <Elevator className="icon" />,
  },
  {
    id: 'visitor',
    label: 'Visitor',
    icon: <UsersGroup className="icon" />,
  },
  {
    id: 'parking',
    label: 'Parking',
    icon: <ParkingSquare className="icon" />,
  },
  {
    id: 'patrol',
    label: 'Patrol',
    icon: <Shield className="icon" />,
  },
];

function App() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeSubModule, setActiveSubModule] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleModuleClick = (moduleId) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
      setActiveSubModule(null);
    } else {
      setActiveModule(moduleId);
      setActiveSubModule(null);
    }
    setExpanded(true);
    console.log('Active Module:', moduleId);
  };

  const handleSubModuleClick = (subModuleId) => {
    setActiveSubModule(activeSubModule === subModuleId ? null : subModuleId);
    console.log('Active SubModule:', subModuleId);
  };

  const handleModulesClick = () => {
    setExpanded(!expanded);
    setActiveModule(null);
    setActiveSubModule(null);
  };

  const activeModuleData = menuItems.find(item => item.id === activeModule);
  const activeSubModuleData = activeModuleData?.subModules?.find(
    sub => sub.id === activeSubModule
  );

  console.log('Active Module Data:', activeModuleData);
  console.log('Active SubModule Data:', activeSubModuleData);

  return (
    <div className={`min-h-screen bg-[#0A192F] flex items-center justify-center ${expanded ? 'expanded' : ''}`}>
      <div className={`nav-container ${activeSubModuleData?.subMenu ? 'expanded' : ''}`}>
        <div className="nav-header">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6 text-white">
              <span className="text-highlight button" onClick={handleModulesClick}>Modules </span>
            </div>
          </div>
        </div>

        <div className="nav-content">
          {expanded && (
            <div className="menu-section">
              <div className="menu-section-title">Main Module</div>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`menu-item ${activeModule === item.id ? 'active' : ''}`}
                  onClick={() => handleModuleClick(item.id)}
                >
                  <div className="icon-wrapper">{item.icon}</div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}

          {activeModuleData?.subModules && (
            <div className="menu-section">
              <div className="menu-section-title">Sub Module</div>
              {activeModuleData.subModules.map((subModule) => (
                <div
                  key={subModule.id}
                  className={`menu-item ${activeSubModule === subModule.id ? 'active' : ''}`}
                  onClick={() => handleSubModuleClick(subModule.id)}
                >
                  <div className="icon-wrapper">{subModule.icon}</div>
                  <span>{subModule.label}</span>
                </div>
              ))}
            </div>
          )}

          {activeSubModuleData?.subMenu && (
            <div className="menu-section">
              <div className="menu-section-title">Sub Menu</div>
              {activeSubModuleData.subMenu.map((item) => (
                <div key={item} className="menu-item">
                  {/* <div className="icon-wrapper"></div> */}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
