export const CONTACT_INFO = {
  whatsappPhoneNumber: '212710572210', // This is the first number, used by openWhatsApp
  secondaryPhoneNumber: '212679691113', // New second number (formatted correctly)
  emailAddress: 'alphamind.academy.institue@gmail.com', // New email
  whatsappMessage: "Bonjour, j'ai besoin d'aide à propos de ",
};

export const openWhatsApp = (message: string = CONTACT_INFO.whatsappMessage) => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};