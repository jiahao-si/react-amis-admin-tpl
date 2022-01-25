type NavItem = {
  label: string;
  children?: Array<NavItem>;
  icon?: string;
  path?: string;
  component?: React.ReactType;
  getComponent?: () => Promise<React.ReactType>;
};
