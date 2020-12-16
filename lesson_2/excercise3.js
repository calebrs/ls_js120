function createInvoice(services = {}) {
  let phone = services.phone || 3000;
  let internet = services.internet || 5500;
  
  return {
    phone: phone,
    internet: internet,
    payments: [],
    
    total() {
      return this.phone + this.internet;
    },
    
    addPayment(payment) {
      this.payments.push(payment);
    },
    
    addPayments(payments) {
      payments.forEach(this.addPayment, this)
    },
    
    paymentTotal() {
      return this.payments.reduce((accum, payment) => accum + payment.total(), 0);
    },
    
    amountDue() {
      return this.total() - this.paymentTotal();
    },
    
  }
}

function createPayment(services = {}) {
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount || 0,
    total() {
      return this.internet + this.phone + this.amount;
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
//console.log(invoice);
console.log(invoice.amountDue());       // this should return 0