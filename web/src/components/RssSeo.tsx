import React from 'react';
import { NextSeoProps } from 'next-seo/lib/types';
import { NextSeo } from 'next-seo';

function RssSeo(props: NextSeoProps) {
  const og = props.openGraph || {};

  return (
    <NextSeo
      {...props}
      openGraph={{
        ...og,
        title: og.title || props.title,
        description: og.description || props.description,
        url: og.url || props.canonical,
      }}
    />
  );
}

export default RssSeo;
