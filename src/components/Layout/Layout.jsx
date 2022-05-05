import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div className={css.layout}>
      <Outlet />
    </div>
  );
}
