import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

type Props = {
  primary: string;
  url: string;
  children: React.ReactNode;
};

export const FooterListItem: React.FC<Props> = (props) => {
  const { primary, children, url } = props;

  const openLink = (url: string) => {
    window.open(url);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => openLink(url)}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
};
