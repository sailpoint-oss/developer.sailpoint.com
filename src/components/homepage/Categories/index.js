import React from 'react';

import {getCatagories} from '../../../services/DiscourseService';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryButtons from './CategoryButtons/index.js';
import styles from './styles.module.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 7,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: {max: 3000, min: 2100},
    items: 7,
    partialVisibilityGutter: 30,
  },
  largeLaptoplaptop: {
    breakpoint: {max: 2100, min: 1775},
    items: 6,
    partialVisibilityGutter: 30,
  },
  laptop: {
    breakpoint: {max: 1775, min: 1480},
    items: 5,
    partialVisibilityGutter: 30,
  },
  largeTablet: {
    breakpoint: {max: 1480, min: 1250},
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {max: 1250, min: 750},
    items: 3,
    partialVisibilityGutter: 30,
  },
  smallTablet: {
    breakpoint: {max: 750, min: 560},
    items: 2,
    partialVisibilityGutter: 30,
  },
  smallTablet: {
    breakpoint: {max: 560, min: 0},
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export default function Categories({filterCallback, selectedCategory}) {
  const [catIntegrationTypeData, setCatIntegrationTypeData] = React.useState();

  const getCat = async () => {
    const categoryData = await getCatagories();
    const catIntegrationType = [];
    for (const category of categoryData.category_list.categories) {
      // 59 for production marketplace, 57 for staging marketplace

      catIntegrationType.push({
        key: category.id,
        name: category.name,
        slug: category.slug,
      });
    }
    setCatIntegrationTypeData(catIntegrationType);
  };

  function uppercaseText(text) {
    switch (text) {
      case 'identitynow':
        return 'IdentityNow';

      case 'identityiq':
        return 'IdentityIQ';

      case 'nerm':
        return 'NERM';

      default:
        return text;
    }
  }

  React.useEffect(() => {
    getCat();
  }, []);
  if (catIntegrationTypeData) {
    return (
      <Carousel partialVisible={false} responsive={responsive}>
        {catIntegrationTypeData.map(function (a, index) {
          return (
            <div className={styles.categoryButtonContainer}>
              <CategoryButtons
                key={a.name}
                text={uppercaseText(a.name)}
                slug={a.slug}
                filterCallback={filterCallback}></CategoryButtons>
            </div>
          );
        })}
      </Carousel>
    );
  } else {
    return <div>Loading...</div>;
  }
}
