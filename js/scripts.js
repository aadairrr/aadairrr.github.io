const maxShadowDistance = 20;
const maxShadowBlur = 12;
const $body = $("body");
const $cardimg = $(".card__img");
const $cardimage = $(".card__image");
const $card = $(".card");
const $cardbody = $(".card__body");
const $cardfooter = $(".card__footer");

function mouseMove(event) {
	const pageWidth = $body.width();
	const pageHeight = $body.height();
	const x = (event.clientX / pageWidth) * 2 - 1;
	const y = (event.clientY / pageHeight) * 2 - 1;
	const distance = Math.max(Math.abs(x), Math.abs(y));

	setShadow(x, y, distance);
}

function setShadow(x, y, distance) {
	const xShadow = x * maxShadowDistance;
	const yShadow = y * maxShadowDistance;
	const shadowBlur = distance * maxShadowBlur + 1;
	const shadowOpacity = (1 - distance) * 0.5 + 0.2;

	$cardimg.css(
        "transform",
        `translate(${xShadow}px, ${yShadow}px)`
	);
    $cardimage.css(
        "transform",
        `translate(${xShadow/4}px, ${yShadow/4}px)`
	);
    
    $card.css(
        "transform",
        `translate(${xShadow/4}px, ${yShadow/4}px)`
	);
    
    $cardbody.css(
        "transform",
        `translate(${xShadow/8}px, ${yShadow/8}px)`
	);
    $cardfooter.css(
        "transform",
        `translate(${xShadow/8}px, ${yShadow/8}px)`
	);
}

$body.mousemove(mouseMove);



