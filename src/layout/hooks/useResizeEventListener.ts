import { onBeforeMount, onBeforeUnmount } from 'vue';
import { useLayoutStore } from '@/store/layout';

export const layoutCompactWidth = 768;

export const useResizeEventListener = () => {
  const store = useLayoutStore();

  const resizeEventListener = () => {
    if (
      window.innerWidth < layoutCompactWidth &&
      store.isLayoutCompact === false
    ) {
      store.isMenuCollapse = true;
      store.isLayoutCompact = true;
    } else if (
      window.innerWidth >= layoutCompactWidth &&
      store.isLayoutCompact === true
    ) {
      store.isMenuCollapse = false;
      store.isLayoutCompact = false;
    }
  };

  onBeforeMount(() => {
    resizeEventListener();
    window.addEventListener('resize', resizeEventListener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeEventListener);
  });
};
