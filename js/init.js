//Hook up the tweet display
CountDownTimer('08/16/2024 04:40 PM UTC');

function CountDownTimer(dt) {
	const end = new Date(dt);

	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;
	let timer;

	function showRemaining() {
		const now = new Date();
		const distance = end - now;
		if (distance < 0) {

			clearInterval(timer);
			document.getElementById('countdown').innerHTML = '<h1>El Plan Porto inicio</h1>';

			return;
		}
		const days = Math.floor(distance / _day);
		const hours = Math.floor((distance % _day) / _hour);
		const minutes = Math.floor((distance % _hour) / _minute);
		const seconds = Math.floor((distance % _minute) / _second);

		document.getElementById('days').innerHTML = days;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;

		document.getElementById('days-desc').innerHTML = 'Dias';
		document.getElementById('hours-desc').innerHTML = 'Horas';
		document.getElementById('minutes-desc').innerHTML = 'Minutos';
		document.getElementById('seconds-desc').innerHTML = 'Segundos';

		if (days == 1) {
			document.getElementById('days-desc').innerHTML = 'Dia';
		}
		if (hours == 1) {
			document.getElementById('hours-desc').innerHTML = 'Hora';
		}
		if (minutes == 1) {
			document.getElementById('minutes-desc').innerHTML = 'Minuto';
		}
		if (seconds == 1) {
			document.getElementById('seconds-desc').innerHTML = 'Segundo';
		}
		
	}

	timer = setInterval(showRemaining, 1000);
}