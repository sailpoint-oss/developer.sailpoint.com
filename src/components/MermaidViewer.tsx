import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
interface MermaidViewerProps {
  diagram: string;
}
interface CursorState {
  cursor: 'grab' | 'grabbing';
  clickX: number;
  clickY: number;
  offsetX: number;
  offsetY: number;
}
interface MovingState {
  x: number;
  y: number;
}

const MermaidViewer: React.FC<MermaidViewerProps> = ({ diagram }) => {
  mermaid.contentLoaded();

  const [width, setWidth] = useState<number>(0);
  const [mermaidCursorStart, setMermaidCursorStart] = useState<CursorState>({
    cursor: 'grab',
    clickX: 0,
    clickY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const [mermaidCursorMoving, setMermaidCursorMoving] = useState<MovingState>({
    x: 0,
    y: 0,
  });

  const [mermaidRender, setMermaidRender] = useState<boolean>(false);

  const increaseWidth = () => setWidth((prev) => prev + 300);
  const decreaseWidth = () => setWidth((prev) => prev - 300);

  const resetWidth = (e: React.MouseEvent<HTMLImageElement>) => {
    setWidth(0);
    setMermaidCursorStart({
      cursor: 'grab',
      clickX: e.screenX,
      clickY: e.screenY,
      offsetX: 0,
      offsetY: 0,
    });
    setMermaidCursorMoving({ x: 0, y: 0 });
  };

  const setMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const screenX = 'screenX' in e ? e.screenX : e.changedTouches[0].screenX;
    const screenY = 'screenY' in e ? e.screenY : e.changedTouches[0].screenY;

    setMermaidCursorStart({
      cursor: 'grabbing',
      clickX: screenX,
      clickY: screenY,
      offsetX: mermaidCursorMoving.x,
      offsetY: mermaidCursorMoving.y,
    });
  };

  const setMouseUp = () => {
    setMermaidCursorStart((prev) => ({ ...prev, cursor: 'grab' }));
  };

  const drag = (e: React.MouseEvent | React.TouchEvent) => {
    if (mermaidCursorStart.cursor === 'grabbing') {
      const screenX = 'screenX' in e ? e.screenX : e.changedTouches[0].screenX;
      const screenY = 'screenY' in e ? e.screenY : e.changedTouches[0].screenY;

      setMermaidCursorMoving({
        x: mermaidCursorStart.clickX - screenX + mermaidCursorStart.offsetX,
        y: mermaidCursorStart.clickY - screenY + mermaidCursorStart.offsetY,
      });
    }
  };

  useEffect(() => {
    setMermaidRender(true); // Immediately set render state
  
    let canceled = false;
    const timeout = setTimeout(() => {
      if (!canceled) {
        setMermaidRender(true);
      }
    }, 100); // Small delay to ensure mermaid.js processes correctly
  
    return () => {
      canceled = true;
      clearTimeout(timeout);
    };
  }, []);
  

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
        onClick={resetWidth}
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
        {mermaidRender ? (
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
        ) : (
          <div>Diagram Loading ...</div>
        )}
      </div>
    </div>
  );
};

export default MermaidViewer;
