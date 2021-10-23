class CountdownTimer {
  #timerId = null;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    };

  updateTimer(time) {
    // links to elements
    const refs = {
      timer: document.querySelector(this.selector),
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    // split target date
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    // fill fields with values
    refs.days.textContent = String(days).padStart(3, "0");
    refs.hours.textContent = String(hours).padStart(2, "0");
    refs.mins.textContent = String(mins).padStart(2, "0");
    refs.secs.textContent = String(secs).padStart(2, "0");
    };
  
    // timer start function
  startTimer() {
    this.#timerId = setInterval(() => {
      const time = this.targetDate - Date.now();
      if (time < 0) return this.stopTimer(this.#timerId);
      return this.updateTimer(time);
    }, 1000);
    };

    // timer stop function
  stopTimer(id) {
    clearInterval(id);
    alert("Happy New Year!");
    };
};

const newYear = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(`Jan, 1, ${new Date().getFullYear() + 1}`),
});

newYear.startTimer();