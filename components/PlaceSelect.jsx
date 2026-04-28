'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './PlaceSelect.module.css';

export default function PlaceSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(value || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const debounceRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Sync external value changes
  useEffect(() => {
    if (!value) setSearch('');
  }, [value]);

  const searchPlaces = useCallback(async (query) => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?` +
        `q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=8` +
        `&featuretype=city&accept-language=en`,
        {
          headers: { 'User-Agent': 'SSGKFilms-ContactForm/1.0' }
        }
      );
      const data = await res.json();

      // Deduplicate and format results
      const seen = new Set();
      const places = data
        .map((item) => {
          const addr = item.address || {};
          const city = addr.city || addr.town || addr.village || addr.state || item.name || '';
          const state = addr.state || '';
          const country = addr.country || '';
          
          // Build display name: City, State, Country
          let display = city;
          if (state && state !== city) display += `, ${state}`;
          if (country) display += `, ${country}`;

          return { display, city, country };
        })
        .filter((p) => {
          if (seen.has(p.display)) return false;
          seen.add(p.display);
          return true;
        });

      setResults(places);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    onChange(val); // Update parent live
    setIsOpen(true);

    // Debounce API call
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      searchPlaces(val);
    }, 400);
  };

  const handleSelect = (place) => {
    setSearch(place.display);
    onChange(place.display);
    setIsOpen(false);
    setResults([]);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type a city or place..."
        value={search}
        onChange={handleInputChange}
        onFocus={() => { if (results.length > 0) setIsOpen(true); }}
        autoComplete="off"
      />

      {isOpen && (results.length > 0 || loading) && (
        <div className={styles.dropdown}>
          {loading && (
            <div className={styles.loadingRow}>
              <span className={styles.spinner}></span>
              <span>Searching worldwide...</span>
            </div>
          )}
          {results.map((place, i) => (
            <button
              key={i}
              type="button"
              className={styles.option}
              onClick={() => handleSelect(place)}
            >
              <svg className={styles.pinIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className={styles.optionText}>{place.display}</span>
            </button>
          ))}
          {!loading && results.length === 0 && search.length >= 2 && (
            <p className={styles.noResults}>No places found</p>
          )}
        </div>
      )}
    </div>
  );
}
