setInterval(() => {
  const date = new Date();
  const htime = date.getHours();
  const mtime = date.getMinutes();
  const stime = date.getSeconds();
  const hrotation = 30*htime + mtime/2;
  const mrotation = 6*mtime;
  const srotation = 6*stime;

    Hour.style.transform = `rotate(${hrotation}deg)`;
    Minute.style.transform = `rotate(${mrotation}deg)`;
    Second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// 23 hr 39 mins