const company = {
 name: 'Street Dev OKC',
 slogan: 'Street Dev OKC is a premier digital solutions company specializing in website design and development. Our team of skilled freelancers is dedicated to creating visually stunning, highly functional, and mobile-friendly websites that cater to the unique needs of our clients.',
 summary: "Street Dev OKC is a premier digital solutions company specializing in website design and development. Our team of skilled freelancers is dedicated to creating visually stunning, highly functional, and mobile-friendly websites that cater to the unique needs of our clients. We offer a wide range of services, including custom web design, e-commerce solutions, and digital marketing. Our goal is to help businesses establish a strong online presence and achieve their digital marketing goals. Whether you need a simple website or a complex e-commerce platform, we have the expertise and experience to deliver exceptional results. Contact us today to learn more about our services and how we can help your business succeed in the digital marketplace.",
 contact: 'Tommy Overstreet',
 phone: '903-268-3537',
 email: 'admin@ostreetdev.com',
 street: '11308 SW 5th St',
 city: 'Yukon',
 state: 'OK',
 zip: '73099',
 address: function () {
  return `${this.street} ${this.city}, ${this.state} ${this.zip}`;
 },
 copyright: function () {
  return `&copy; ${currentYear} ${this.name}`;
 }
};


// Render Company Information
tempX('.company-name', company.name);
tempX('.navbar-brand', company.name);

tempX('#introHeading', company.name);
tempX('#introSubHeading', company.slogan);
tempX('.company-slogan', company.slogan);
tempX('.copyright', company.copyright());