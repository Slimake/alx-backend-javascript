import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
      return `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`;
    })
    .catch(() => {
      console.error('Signup system offline');
      return 'Signup system offline';
    });
}
