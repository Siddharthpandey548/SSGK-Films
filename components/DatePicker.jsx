'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './DatePicker.module.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function DatePicker({ value, onChange }) {
  const today = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [pickerMode, setPickerMode] = useState('days'); // 'days' | 'months' | 'years'
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
        setPickerMode('days');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const selectDate = (day) => {
    const mm = String(viewMonth + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    onChange(`${viewYear}-${mm}-${dd}`);
    setIsOpen(false);
    setPickerMode('days');
  };

  const selectMonth = (monthIdx) => {
    setViewMonth(monthIdx);
    setPickerMode('days');
  };

  const selectYear = (year) => {
    setViewYear(year);
    setPickerMode('months');
  };

  const isDatePast = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < todayStart;
  };

  const isSelected = (day) => {
    if (!value) return false;
    const [y, m, d] = value.split('-').map(Number);
    return y === viewYear && m === viewMonth + 1 && d === day;
  };

  const isToday = (day) => {
    return viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate();
  };

  const formatDisplay = () => {
    if (!value) return '';
    const [y, m, d] = value.split('-');
    return `${d} ${MONTHS[parseInt(m) - 1]} ${y}`;
  };

  // Year range for year picker (current year to +10)
  const startYear = today.getFullYear();
  const yearRange = Array.from({ length: 12 }, (_, i) => startYear + i);

  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDay = getFirstDayOfMonth(viewMonth, viewYear);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => { setIsOpen(!isOpen); setPickerMode('days'); }}
      >
        <span className={value ? styles.valueText : styles.placeholderText}>
          {value ? formatDisplay() : 'Choose your auspicious date'}
        </span>
        <svg className={styles.calIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {/* Header */}
          <div className={styles.header}>
            {pickerMode === 'days' && (
              <button type="button" className={styles.navBtn} onClick={prevMonth} aria-label="Previous month">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
            )}
            {pickerMode === 'years' && (
              <button type="button" className={styles.navBtn} onClick={() => setViewYear(y => y - 12)} aria-label="Previous years">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
            )}

            <div className={styles.headerCenter}>
              {pickerMode === 'days' && (
                <>
                  <button type="button" className={styles.monthBtn} onClick={() => setPickerMode('months')}>
                    {MONTHS[viewMonth]}
                  </button>
                  <button type="button" className={styles.yearBtn} onClick={() => setPickerMode('years')}>
                    {viewYear}
                  </button>
                </>
              )}
              {pickerMode === 'months' && (
                <button type="button" className={styles.yearBtn} onClick={() => setPickerMode('years')}>
                  {viewYear}
                </button>
              )}
              {pickerMode === 'years' && (
                <span className={styles.yearRangeLabel}>
                  {startYear} — {startYear + 11}
                </span>
              )}
            </div>

            {pickerMode === 'days' && (
              <button type="button" className={styles.navBtn} onClick={nextMonth} aria-label="Next month">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            )}
            {pickerMode === 'years' && (
              <button type="button" className={styles.navBtn} onClick={() => setViewYear(y => y + 12)} aria-label="Next years">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            )}
          </div>

          {/* === DAYS VIEW === */}
          {pickerMode === 'days' && (
            <>
              <div className={styles.dayLabels}>
                {DAYS.map(d => <span key={d} className={styles.dayLabel}>{d}</span>)}
              </div>
              <div className={styles.grid}>
                {blanks.map(b => <span key={`b${b}`} className={styles.blank}></span>)}
                {days.map(day => {
                  const past = isDatePast(day);
                  const sel = isSelected(day);
                  const tod = isToday(day);
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={past}
                      className={`${styles.day} ${past ? styles.past : ''} ${sel ? styles.selected : ''} ${tod ? styles.today : ''}`}
                      onClick={() => selectDate(day)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* === MONTHS VIEW === */}
          {pickerMode === 'months' && (
            <div className={styles.monthsGrid}>
              {MONTHS_SHORT.map((m, i) => (
                <button
                  key={m}
                  type="button"
                  className={`${styles.monthCell} ${i === viewMonth ? styles.monthActive : ''}`}
                  onClick={() => selectMonth(i)}
                >
                  {m}
                </button>
              ))}
            </div>
          )}

          {/* === YEARS VIEW === */}
          {pickerMode === 'years' && (
            <div className={styles.yearsGrid}>
              {yearRange.map(y => (
                <button
                  key={y}
                  type="button"
                  className={`${styles.yearCell} ${y === viewYear ? styles.yearActive : ''}`}
                  onClick={() => selectYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
