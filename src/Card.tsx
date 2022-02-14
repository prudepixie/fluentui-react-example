import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
} from '@fluentui/react/lib/DocumentCard';

const DocumentCardActivityPeople = [{ name: 'Title goes here', profileImageSrc: `${process.env.PUBLIC_URL}/matt.jpg` }];

export const DocumentCardBasicExample: React.FunctionComponent = () => (
  <DocumentCard
    aria-label="Default Document Card with large file name."
  >
    <DocumentCardActivity activity="Secondary line" people={DocumentCardActivityPeople} />
    <DocumentCardTitle
      title={
        'Citizens of distant epochs muse about at the edge of forever hearts of the...'
      }
      shouldTruncate
    />
  </DocumentCard>
);
