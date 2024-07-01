import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
    function toggleFeatures() {
        const selectedValue = document.getElementById('featureToggle').value;
        const allItems = document.querySelectorAll('.menu__list-item');
        const publicItems = document.querySelectorAll('.menu__list-item:not(.menu__list-item--experimental)');
        const experimentalItems = document.querySelectorAll('.menu__list-item--experimental');
    
        if (selectedValue === 'public') {
          publicItems.forEach(item => item.classList.remove('hidden'));
          experimentalItems.forEach(item => item.classList.add('hidden'));
        } else if (selectedValue === 'experimental') {
          publicItems.forEach(item => item.classList.add('hidden'));
          experimentalItems.forEach(item => item.classList.remove('hidden'));
        } else {
          allItems.forEach(item => item.classList.remove('hidden'));
        }
      }
}
