import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const uploadResponse = await uploadPhoto();
    const createUserResponse = await createUser();

    return ({ photo: uploadResponse, user: createUserResponse });
  } catch (err) {
    return ({ photo: null, user: null });
  }
};

export default asyncUploadUser;
