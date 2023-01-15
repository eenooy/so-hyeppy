import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
