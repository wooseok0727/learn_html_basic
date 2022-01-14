'use strict';

/**
 * 검색창 제어
 */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022
