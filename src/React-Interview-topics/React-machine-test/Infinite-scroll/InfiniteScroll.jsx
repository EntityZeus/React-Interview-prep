import './InfiniteScroll.css';
import { InfiniteScrollDataClass } from '../Fake-api/infinite-scroll';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const singleItemRef = useRef(null);
    const singleItemHeight = useRef(41);
    const infiniteScrollDataClass = new InfiniteScrollDataClass();

    useEffect(() => {

      const initilizeData = async () => {
        const data = await infiniteScrollDataClass.infiniteScrollData(0, 100);
        setItems(data);
        if(singleItemRef.current) {
          singleItemHeight.current = singleItemRef.current.getBoundingClientRect().height;
        }
      }
      initilizeData();
      return () => {
        if(containerRef.current){
            console.log('Removing event listener');
            containerRef.current.removeEventListener('scroll', handleScroll);
        }
      }
    }, []);

    const handleScroll = async () => {
        const totalScrolled = containerRef.current.scrollHeight - containerRef.current.scrollTop;
        const isBottomReached = Math.abs(totalScrolled - containerRef.current.clientHeight) <= 1;
        const isTopReached = containerRef.current.scrollTop === 0;
        if(isBottomReached) {
            const data = await infiniteScrollDataClass.infiniteScrollData(currentIndex + 100, 100);
            setItems(data);
            setCurrentIndex(prev => prev + 100);
        }
        if(isTopReached) {
            setCurrentIndex(prev => Math.max(prev - 100, 0));
            const data = await infiniteScrollDataClass.infiniteScrollData(Math.max(currentIndex - 100, 0), 100);
            setItems(data);
            console.log('Top reached');
        }
    }

    return (
        <div className="infinite-scroll-container" onScroll={handleScroll}
        ref={containerRef}>
            <ul className="list-group">
              {items.map(item => (
                <li className="list-group-item" key={item.id} ref={singleItemRef}>
                  {item.name}
                </li>
              ))}
            </ul>
        </div>
    )
}

export default InfiniteScroll;