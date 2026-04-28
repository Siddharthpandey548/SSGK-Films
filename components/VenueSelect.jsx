'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VenueSelect.module.css';

const VENUES = [
  // India
  { name: 'Taj Lake Palace, Udaipur', region: 'India' },
  { name: 'Umaid Bhawan Palace, Jodhpur', region: 'India' },
  { name: 'The Leela Palace, Jaipur', region: 'India' },
  { name: 'ITC Grand Bharat, Gurugram', region: 'India' },
  { name: 'Oberoi Amarvilas, Agra', region: 'India' },
  { name: 'Samode Palace, Jaipur', region: 'India' },
  { name: 'Falaknuma Palace, Hyderabad', region: 'India' },
  { name: 'Suryagarh, Jaisalmer', region: 'India' },
  { name: 'Taj Mahal Palace, Mumbai', region: 'India' },
  { name: 'The Oberoi Udaivilas, Udaipur', region: 'India' },
  { name: 'Rambagh Palace, Jaipur', region: 'India' },
  { name: 'JW Marriott Mussoorie', region: 'India' },
  // Europe
  { name: 'Villa Balbianello, Lake Como', region: 'Europe' },
  { name: 'Château de Chantilly, France', region: 'Europe' },
  { name: 'Belmond Hotel Cipriani, Venice', region: 'Europe' },
  { name: 'The Ritz Paris, France', region: 'Europe' },
  { name: 'Amalfi Coast, Italy', region: 'Europe' },
  { name: 'Claridge\'s, London', region: 'Europe' },
  { name: 'Hotel de Russie, Rome', region: 'Europe' },
  { name: 'Aman Venice, Italy', region: 'Europe' },
  // Middle East
  { name: 'Atlantis The Royal, Dubai', region: 'Middle East' },
  { name: 'One&Only Royal Mirage, Dubai', region: 'Middle East' },
  { name: 'The St. Regis Abu Dhabi', region: 'Middle East' },
  { name: 'Bvlgari Resort, Dubai', region: 'Middle East' },
  // Asia
  { name: 'Aman Tokyo, Japan', region: 'Asia' },
  { name: 'Four Seasons Bali, Indonesia', region: 'Asia' },
  { name: 'Mandarin Oriental, Bangkok', region: 'Asia' },
  { name: 'The Siam, Bangkok', region: 'Asia' },
  // Americas
  { name: 'The Plaza, New York', region: 'Americas' },
  { name: 'Rosewood Mayakoba, Mexico', region: 'Americas' },
  { name: 'Four Seasons Resort Bora Bora', region: 'Americas' },
  { name: 'Montage Laguna Beach, California', region: 'Americas' },
  // Other
  { name: 'Other / Custom Venue', region: '' },
];

export default function VenueSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [customMode, setCustomMode] = useState(false);
  const ref = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const filtered = VENUES.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.region.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, v) => {
    const key = v.region || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(v);
    return acc;
  }, {});

  const handleSelect = (venue) => {
    if (venue.name === 'Other / Custom Venue') {
      setCustomMode(true);
      onChange('');
      setIsOpen(false);
      return;
    }
    onChange(venue.name);
    setIsOpen(false);
    setSearch('');
    setCustomMode(false);
  };

  if (customMode) {
    return (
      <div className={styles.wrapper} ref={ref}>
        <input
          type="text"
          className={styles.customInput}
          placeholder="Type your venue name..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => { setCustomMode(false); onChange(''); setIsOpen(true); }}
          aria-label="Back to venue list"
        >
          ←
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? styles.valueText : styles.placeholderText}>
          {value || 'Select a venue'}
        </span>
        <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchBox}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              ref={inputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Search venues..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.list}>
            {Object.entries(grouped).map(([region, venues]) => (
              <div key={region}>
                <div className={styles.regionLabel}>{region}</div>
                {venues.map((v, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`${styles.option} ${v.name === value ? styles.optionSelected : ''}`}
                    onClick={() => handleSelect(v)}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            ))}
            {Object.keys(grouped).length === 0 && (
              <p className={styles.noResults}>No venues found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
