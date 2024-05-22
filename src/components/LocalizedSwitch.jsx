import React from 'react';
import { Routes, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';

const LocalizedSwitch = ({ children }) => {
  const { formatMessage } = useIntl();
  const { lang } = useParams();

  const localizeRoutePath = (path) => {
    if (!path) return path;
    if (Array.isArray(path)) {
      return path.map((p) => `/${lang}${formatMessage({ id: p })}`);
    }
    return path === '*' ? path : `/${lang}${formatMessage({ id: path })}`;
  };

  return (
    <Routes>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const localizedPath = localizeRoutePath(child.props.path);
          return React.cloneElement(child, { ...child.props, path: localizedPath });
        }
        return child;
      })}
    </Routes>
  );
};

export default LocalizedSwitch;
