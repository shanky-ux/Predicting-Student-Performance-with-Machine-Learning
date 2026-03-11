/**
 * app.js — MathScore client-side validation & UX
 * No external dependencies. Vanilla JS.
 */
(function () {
  'use strict';

  const form      = document.getElementById('prediction-form');
  const submitBtn = document.getElementById('submit-btn');
  const resultCard = document.getElementById('result-card');
  if (!form) return;

  /* ── Validation rules ── */
  const RULES = {
    gender:                    { err:'gender-err',    msg:'Please select a gender.' },
    ethnicity:                 { err:'ethnicity-err', msg:'Please select an ethnicity group.' },
    parental_level_of_education:{ err:'edu-err',       msg:'Please select an education level.' },
    lunch:                     { err:'lunch-err',     msg:'Please select a lunch type.' },
    test_preparation_course:   { err:'prep-err',      msg:'Please select a test preparation status.' },
    writing_score:             { err:'writing-err',   msg:null /* custom */ },
    reading_score:             { err:'reading-err',   msg:null },
  };

  function validateScore(id, errId) {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el) return true;
    const v = el.value.trim();
    let msg = '';
    if (v === '') msg = 'Score is required.';
    else if (isNaN(Number(v))) msg = 'Must be a number.';
    else if (Number(v) < 0 || Number(v) > 100) msg = 'Must be between 0 and 100.';
    setFieldState(el, err, msg);
    return !msg;
  }

  function validateSelect(id, errId, msg) {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el) return true;
    const error = el.value ? '' : msg;
    setFieldState(el, err, error);
    return !error;
  }

  function setFieldState(el, errEl, error) {
    if (error) {
      el.classList.add('is-invalid'); el.classList.remove('is-valid');
      if (errEl) errEl.textContent = error;
      el.setAttribute('aria-invalid', 'true');
    } else {
      el.classList.remove('is-invalid'); el.classList.add('is-valid');
      if (errEl) errEl.textContent = '';
      el.setAttribute('aria-invalid', 'false');
    }
  }

  function validateAll() {
    const results = [
      validateSelect('gender',                     'gender-err',  'Please select a gender.'),
      validateSelect('ethnicity',                  'ethnicity-err','Please select an ethnicity group.'),
      validateSelect('parental_level_of_education','edu-err',     'Please select an education level.'),
      validateSelect('lunch',                      'lunch-err',   'Please select a lunch type.'),
      validateSelect('test_preparation_course',    'prep-err',    'Please select a test preparation status.'),
      validateScore('writing_score', 'writing-err'),
      validateScore('reading_score', 'reading-err'),
    ];
    return results.every(Boolean);
  }

  /* ── Real-time validation ── */
  ['gender','ethnicity','parental_level_of_education','lunch','test_preparation_course'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', () => validateSelect(id, RULES[id].err, RULES[id].msg));
    el.addEventListener('blur',   () => validateSelect(id, RULES[id].err, RULES[id].msg));
  });
  ['writing_score','reading_score'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur',  () => validateScore(id, RULES[id].err));
    el.addEventListener('input', () => {
      let v = parseInt(el.value, 10);
      if (!isNaN(v)) { if (v < 0) el.value = 0; if (v > 100) el.value = 100; }
    });
  });

  /* ── Form submit ── */
  form.addEventListener('submit', function (e) {
    if (!validateAll()) {
      e.preventDefault();
      const first = form.querySelector('.is-invalid');
      if (first) { first.focus(); first.scrollIntoView({ behavior:'smooth', block:'center' }); }
      return;
    }
    submitBtn.classList.add('is-loading');
    submitBtn.setAttribute('disabled', 'true');
  });

  /* ── Scroll to result + animate score counter ── */
  if (resultCard) {
    setTimeout(() => resultCard.scrollIntoView({ behavior:'smooth', block:'center' }), 400);

    document.querySelectorAll('.score-num').forEach(el => {
      const target = parseFloat(el.textContent.trim());
      if (isNaN(target)) return;
      const duration = 900;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(1);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      })(start);
    });
  }

})();
