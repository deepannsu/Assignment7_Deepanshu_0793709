var constraintsContact = {
  email: {
      presence: true,
      email: true,
  },
  phone: {
      presence: true,
      format: {
          pattern: /[0-9]{10}/,
          message: "Please enter a valid 10-digit phone number.",
      },
  },
  address: {
      presence: true,
  },
};

var constraintsPayment = {
  'credit-card': {
      presence: true,
      format: {
          pattern: /[0-9]{10}/,
          message: "Please enter a valid 10-digit credit card number.",
      },
  },
  expiry: {
      presence: true,
      date: {
          format: 'YYYY-MM',
      },
  },
  cvv: {
      presence: true,
      format: {
          pattern: /[0-9]{3}/,
          message: "Please enter a valid 3-digit CVV number.",
      },
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contact-info-form');
  var paymentForm = document.getElementById('payment-info-form');

  contactForm.addEventListener('submit', function (e) {
      var errors = validate(contactForm, constraintsContact);

      if (errors) {
          e.preventDefault(); 
         
      }
  });

  paymentForm.addEventListener('submit', function (e) {
      var errors = validate(paymentForm, constraintsPayment);

      if (errors) {
          e.preventDefault(); 
          
      }
  });
});
