import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import './main-layout.css';

export function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
