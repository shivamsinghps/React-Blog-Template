import React ,{useState,useEffect}from 'react'
import classes from './ReadProgress.module.css'

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }
    console.log(target);

    const element         = target.current;
    const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop =  window.pageYOffset || 0;
    // console.log(element.clientHeight,'element.clientHeight');
    // console.log(element.offsetTop,'element.offsetTop');
    // console.log(window.innerHeight,'window.innerHeight');
    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return <div className={classes.reading_progress_bar} style={{width: `${readingProgress}%`}} />;
};

export default ReadingProgress
