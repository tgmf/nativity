export default function (to, from, savedPosition) {
  if (to.hash) {
    const headerHeight = document.getElementById('navigation').offsetHeight;
    const windowWidth = document.documentElement.clientWidth;
    return {
      selector: to.hash, 
      offset: { x: 0, y: windowWidth > 768 ? 0 : (headerHeight ? headerHeight : 64) }
    }
  }
}