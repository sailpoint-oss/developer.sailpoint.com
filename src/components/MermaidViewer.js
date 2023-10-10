import React from 'react';
import mermaid from 'mermaid'
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function MermaidViewer({ children, diagram }) {
  mermaid.contentLoaded();
  const [width, setWidth] = React.useState(0);
  const [mermaidCursorStart, setMermaidCursorStart] = React.useState({ cursor: 'grab', clickX: 0, clickY: 0, offsetX: 0, offsetY: 0 });
  const [mermaidCursorMoving, setMermaidCursorMoving] = React.useState({ x: 0, y: 0 });
  const [mermaidRender, setMermaidRender] = React.useState(false);

  function increaseWidth(e) {
    setWidth(width + 300)
  }

  function decreaseWidth(e) {
    setWidth(width - 300)
  }

  function resetWidth(e) {
    setWidth(0)
    setMermaidCursorStart({ cursor: 'grab', clickX: e.screenX, clickY: e.screenY, offsetX: 0, offsetY: 0 })
    setMermaidCursorMoving({ x: 0, y: 0 })
  }

  function setMouseDown(e) {
    if (e.screenX) {
      setMermaidCursorStart({ cursor: 'grabbing', clickX: e.screenX, clickY: e.screenY, offsetX: mermaidCursorMoving.x, offsetY: mermaidCursorMoving.y })
      setMermaidCursorMoving({ x: mermaidCursorMoving.x, y: mermaidCursorMoving.y })
    } else {
      setMermaidCursorStart({ cursor: 'grabbing', clickX: e.changedTouches[0].screenX, clickY: e.changedTouches[0].screenY, offsetX: mermaidCursorMoving.x, offsetY: mermaidCursorMoving.y })
      setMermaidCursorMoving({ x: mermaidCursorMoving.x, y: mermaidCursorMoving.y })
    }

  }

  function setMouseUp(e) {
    setMermaidCursorStart({ cursor: 'grab', clickX: 0, clickY: 0 })
  }

  function drag(e) {
    if (mermaidCursorStart.cursor === 'grabbing') {
      if (e.screenX) {
        setMermaidCursorMoving({ x: mermaidCursorStart.clickX - e.screenX + mermaidCursorStart.offsetX, y: mermaidCursorStart.clickY - e.screenY + mermaidCursorStart.offsetY })
      } else {
        setMermaidCursorMoving({ x: mermaidCursorStart.clickX - e.changedTouches[0].screenX + mermaidCursorStart.offsetX, y: mermaidCursorStart.clickY - e.changedTouches[0].screenY + mermaidCursorStart.offsetY })
      }
      
      
    }
  }
  

  React.useEffect(() => {
    let canceled = false;
    setTimeout(() => {
      if (!canceled) {
        setMermaidRender(true)
      }
    }, 1000);
    return () => {
      canceled = true;
    };
  })


  let renderedDiagram;
  if (mermaidRender === true) {
      renderedDiagram = <div id="mermaid" draggable="false" className="mermaid" style={{ position: 'relative', top: -mermaidCursorMoving.y + 'px', left: -mermaidCursorMoving.x + 'px', width: 'calc(100% + ' + width + 'px)', maxHeight: '1000px' }}>{diagram}</div>
    } else {
      renderedDiagram = <div>Mermaid Chart Loading ...</div>
    }


  return (
    <div>

      <img className={styles.zoomIn} onClick={(e) => increaseWidth(e)} src={useBaseUrl('/icons/magnifying-glass-plus-regular.svg')}></img>
      <img className={styles.zoomIn} onClick={(e) => resetWidth(e)} src={useBaseUrl('/icons/house-regular.svg')}></img>
      <img className={styles.zoomIn} onClick={(e) => decreaseWidth(e)} src={useBaseUrl('/icons/magnifying-glass-minus-regular.svg')}></img>
      <div
        style={{ cursor: mermaidCursorStart.cursor }}
        className={styles.mermaidContainer}
        onMouseMove={(e) => drag(e)}
        onTouchMove={(e) => drag(e)}
        onMouseDown={(e) => setMouseDown(e)}
        onTouchStart={(e) => setMouseDown(e)}
        onMouseUp={(e) => setMouseUp(e)}
        onTouchEnd={(e) => setMouseUp(e)}
        onMouseLeave={(e) => setMouseUp(e)}
      >
      {renderedDiagram}
      </div>


    </div>

  );
}