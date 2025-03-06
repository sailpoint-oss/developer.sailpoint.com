import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface MermaidViewerProps {
  diagram: string;
}

interface CursorState {
  cursor: string;
  clickX: number;
  clickY: number;
  offsetX: number;
  offsetY: number;
}

interface CursorPosition {
  x: number;
  y: number;
}

const MermaidViewer: React.FC<MermaidViewerProps> = ({ diagram }) => {
  const [width, setWidth] = useState(0);
  const [mermaidCursorStart, setMermaidCursorStart] = useState<CursorState>({
    cursor: 'grab',
    clickX: 0,
    clickY: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const [mermaidCursorMoving, setMermaidCursorMoving] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [mermaidRender, setMermaidRender] = useState(false);

  const increaseWidth = () => setWidth(width + 300);
  const decreaseWidth = () => setWidth(width - 300);

  const resetWidth = (e: React.MouseEvent | React.TouchEvent) => {
    setWidth(0);
    setMermaidCursorStart({
      cursor: 'grab',
      clickX: (e instanceof MouseEvent ? e.screenX : e.changedTouches[0].screenX) || 0,
      clickY: (e instanceof MouseEvent ? e.screenY : e.changedTouches[0].screenY) || 0,
      offsetX: 0,
      offsetY: 0,
    });
    setMermaidCursorMoving({ x: 0, y: 0 });
  };

  const setMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const screenX = e instanceof MouseEvent ? e.screenX : e.changedTouches[0].screenX;
    const screenY = e instanceof MouseEvent ? e.screenY : e.changedTouches[0].screenY;

    setMermaidCursorStart({
      cursor: 'grabbing',
      clickX: screenX,
      clickY: screenY,
      offsetX: mermaidCursorMoving.x,
      offsetY: mermaidCursorMoving.y,
    });

    setMermaidCursorMoving({
      x: mermaidCursorMoving.x,
      y: mermaidCursorMoving.y,
    });
  };

  const setMouseUp = () => {
    setMermaidCursorStart({ cursor: 'grab', clickX: 0, clickY: 0 });
  };

  const drag = (e: React.MouseEvent | React.TouchEvent) => {
    if (mermaidCursorStart.cursor === 'grabbing') {
      const screenX = e instanceof MouseEvent ? e.screenX : e.changedTouches[0].screenX;
      const screenY = e instanceof MouseEvent ? e.screenY : e.changedTouches[0].screenY;

      setMermaidCursorMoving({
        x: mermaidCursorStart.clickX - screenX + mermaidCursorStart.offsetX,
        y: mermaidCursorStart.clickY - screenY + mermaidCursorStart.offsetY,
      });
    }
  };

  useEffect(() => {
    let canceled = false;
    setTimeout(() => {
      if (!canceled) {
        setMermaidRender(true);
      }
    }, 100);
    return () => {
      canceled = true;
    };
  }, []);

  let renderedDiagram;
  let loadingIndicator;

  if (mermaidRender) {
    loadingIndicator = <div></div>;
    renderedDiagram = (
      <div
        id="mermaid"
        draggable="false"
        className="mermaid"
        style={{
          position: 'relative',
          top: -mermaidCursorMoving.y + 'px',
          left: -mermaidCursorMoving.x + 'px',
          width: `calc(100% + ${width}px)`,
          maxHeight: '1000px',
        }}
      >
        {diagram}
      </div>
    );
  } else {
    loadingIndicator = <div>Diagram Loading ...</div>;
    renderedDiagram = (
      <div
        id="mermaid"
        draggable="false"
        className="mermaid"
        style={{
          visibility: 'hidden',
          position: 'relative',
          top: -mermaidCursorMoving.y + 'px',
          left: -mermaidCursorMoving.x + 'px',
          width: `calc(100% + ${width}px)`,
          maxHeight: '1000px',
        }}
      >
        {diagram}
      </div>
    );
  }

  return (
    <div>
      <img
        className={styles.zoomIn}
        onClick={increaseWidth}
        src={useBaseUrl('/icons/magnifying-glass-plus-regular.svg')}
        alt="Zoom In"
      />
      <img
        className={styles.zoomIn}
        onClick={(e) => resetWidth(e)}
        src={useBaseUrl('/icons/house-regular.svg')}
        alt="Reset Zoom"
      />
      <img
        className={styles.zoomIn}
        onClick={decreaseWidth}
        src={useBaseUrl('/icons/magnifying-glass-minus-regular.svg')}
        alt="Zoom Out"
      />
      <div
        style={{ cursor: mermaidCursorStart.cursor }}
        className={styles.mermaidContainer}
        onMouseMove={drag}
        onTouchMove={drag}
        onMouseDown={setMouseDown}
        onTouchStart={setMouseDown}
        onMouseUp={setMouseUp}
        onTouchEnd={setMouseUp}
        onMouseLeave={setMouseUp}
      >
        {loadingIndicator}
        {renderedDiagram}
      </div>
    </div>
  );
};

export default MermaidViewer;
