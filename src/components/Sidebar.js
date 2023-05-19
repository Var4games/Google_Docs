import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Description as DescriptionIcon, InsertChart as InsertChartIcon, Slideshow as SlideshowIcon, Assignment as AssignmentIcon } from '@mui/icons-material';

const Sidebar = ({ open, onClose }) => {
  const handleDocsClick = () => {
    window.open('https://docs.google.com', '_blank');
  };

  const handleSheetsClick = () => {
    window.open('https://sheets.google.com', '_blank');
  };

  const handleSlidesClick = () => {
    window.open('https://slides.google.com', '_blank');
  };

  const handleFormsClick = () => {
    window.open('https://forms.google.com', '_blank');
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={handleDocsClick}>
          <ListItemIcon>
            <span style={{ color: '#4285F4', fontWeight: 'bold' }}>G</span>
            <span style={{ color: '#DB4437', fontWeight: 'bold' }}>o</span>
            <span style={{ color: '#F4B400', fontWeight: 'bold' }}>o</span>
            <span style={{ color: '#4285F4', fontWeight: 'bold' }}>g</span>
            <span style={{ color: '#0F9D58', fontWeight: 'bold' }}>l</span>
            <span style={{ color: '#DB4437', fontWeight: 'bold' }}>e</span>
          </ListItemIcon>
          <ListItemText primary="Docs" style={{ padding: 8, fontWeight: 'bold', width: '180px' }} />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleDocsClick}>
          <ListItemIcon>
            <DescriptionIcon style={{ color: '#4285F4', padding: 1 }} />
          </ListItemIcon>
          <ListItemText primary="Docs" />
        </ListItem>
        <ListItem button onClick={handleSheetsClick}>
          <ListItemIcon>
            <InsertChartIcon style={{ color: '#34A853' }} />
          </ListItemIcon>
          <ListItemText primary="Sheets" />
        </ListItem>
        <ListItem button onClick={handleSlidesClick}>
          <ListItemIcon>
            <SlideshowIcon style={{ color: '#FBBC05' }} />
          </ListItemIcon>
          <ListItemText primary="Slides" />
        </ListItem>
        <ListItem button onClick={handleFormsClick}>
          <ListItemIcon>
            <AssignmentIcon style={{ color: '#AB47BC' }} />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
