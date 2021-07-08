import './components/main-slider';
import './components/catalog-slider';
import './components/marketing';
import './components/catalog-filter-toggle';
import './components/catalog-props';
import './components/card-select';
import './components/stepper';
import './components/card-slider';
import './components/card-bottom-tabs';
import SimpleBar from 'simplebar';
import './components/products';
import './components/burger';
import './components/mobile-filters';

if (document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-description__navigation'));
}

if (document.querySelector('.to-top')) {
  document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.site-container'));
  });
}

