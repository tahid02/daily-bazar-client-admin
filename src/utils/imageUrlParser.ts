// const baseUrl = 'https://res.cloudinary.com/shadincloudinarytraining/image/upload/'
const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const imageUrlParser = (imageUrlLastSegment: string) => {
  return `https://res.cloudinary.com/shadincloudinarytraining/image/upload/${imageUrlLastSegment}`;
};

export default imageUrlParser;
