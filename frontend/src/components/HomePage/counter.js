/*
import React, {useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const {ref: ref1, inView: inView1} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const {ref: ref2, inView: inView2} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    const {ref: ref3, inView: inView3} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    useEffect(() => {
        let intervalId1, intervalId2, intervalId3;
        if (inView1) {
            intervalId1 = setInterval(() => {
                if (count1 < 1000) {
                    setCount1(count1 + 5);
                }
            }, 5);
        }
        if (inView2) {
            intervalId2 = setInterval(() => {
                if (count2 < 20000) {
                    setCount2(count2 + 100);
                }
            }, 5);
        }
        if (inView3) {
            intervalId3 = setInterval(() => {
                if (count3 < 80000) {
                    setCount3(count3 + 500);
                }
            }, 5);
        }

        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
        };
    }, [inView1, inView2, inView3, count1, count2, count3]);

    return (
        <>
            <div ref={ref1}>
                Мы сделали {count1} домов за год
            </div>
            <div ref={ref2}>
                Мы сделали {count2} машин за год
            </div>
            <div ref={ref3}>
                Мы сделали {count3} самолетов за год
            </div>
        </>
    );
}

export default Counter;

*/
import { useState, useEffect, useRef } from 'react';

function Counter() {
  const counters = [
    { max: 1000, step: 1, label: 'домов' },
    { max: 20000, step: 2, label: 'машин' },
    { max: 80000, step: 5, label: 'самолетов' },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const refs = counters.map(() => useRef(null));

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const { max, step } = counters[index];
          const intervalId = setInterval(() => {
            setCounts(prevCounts => {
              const newCounts = [...prevCounts];
              newCounts[index] = Math.min(newCounts[index] + step, max);
              return newCounts;
            });
          }, 5);
          return () => clearInterval(intervalId);
        }
      });
    }, { threshold: 0.5 });

    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [counters, refs]);

  return (
    <>
      {counts.map((count, index) => (
        <div key={index} ref={refs[index]}>
          Мы сделали {count} {counters[index].label} за год
        </div>
      ))}
    </>
  );
}

export default Counter;
