'use strict';

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
  return `${this.city}, ${this.state} ${this.zip}`;
 },
 copyright: function () {
  return `&copy; ${currentYear} ${this.name}`;
 },
  foq: function () {
   return `Frequently Asked Questions`;
 }
};

const team = {
 members: [
  {
   name: 'Tommy Overstreet',
   title: 'Founder & CEO',
   bio: 'Tommy Overstreet is the founder and CEO of Street Dev OKC. He is a skilled web developer with over 20 years of experience in the industry. Tommy is passionate about helping businesses succeed in the digital marketplace and is dedicated to providing exceptional web design and development services to his clients.'
  },
  {
   name: 'John Doe',
   title: 'Web Developer',
   bio: 'John Doe is a talented web developer with a passion for creating visually stunning and highly functional websites. He has a keen eye for design and is dedicated to delivering exceptional results for his clients.'
  },
  {
   name: 'Jane Smith',
   title: 'Graphic Designer',
   bio: 'Jane Smith is a talented graphic designer with a passion for creating visually stunning and highly functional websites. She has a keen eye for design and is dedicated to delivering exceptional results for her clients.'
  },
  {
   name: 'Mike Johnson',
   title: 'Digital Marketer',
   bio: 'Mike Johnson is a skilled digital marketer with a passion for helping businesses succeed in the digital marketplace. He is dedicated to delivering exceptional results for his clients and is committed to helping them achieve their digital marketing goals.'
  }
 ]
};


// Render Company Information
tempX('.company-name', company.name);
tempX('.navbar-brand', company.name);
tempX('.offcanvas-title', company.name);
tempX('#companyName', company.name);
tempX('#introHeading', company.name);
tempX('#introSubHeading', company.slogan);
tempX('.company-slogan', company.slogan);
tempX('.copyright', company.copyright());
tempX('.phone', company.phone);
tempX('.email', company.email);
tempX('.address', company.address());