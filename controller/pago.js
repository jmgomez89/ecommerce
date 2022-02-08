import mercadopago from "mercadopago"


mercadopago.configure({
    access_token: "TEST-2526105000325997-020800-7e1bd12150947dc991d01eaa81776de8-149580108",
});

console.log('------ Sistema de pago iniciado -------')


const feedback = (req, res) => {
	let info = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	}
    console.log(info)

    res.redirect('/')
}

export default {
    feedback
}