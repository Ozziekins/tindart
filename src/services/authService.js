import axios from 'axios'
import { userActions } from '../store/user/user.slice';

class AuthService {
  // for testing on localhost
  // API_ENDPOINT = 'http://localhost:3003'
  // API_ENDPOINT = '/.netlify/functions/tindart-api'

  // We will save token in auth service field
  TOKEN

  // We would get status of auth by looking into token.
  // -------
  // Note that this method don't notify react component to do rerender,
  // but we design app in way that when TOKEN changed, page would be rerendered
  // and therefore would access changed value
  // But we can refuse from this antipattern with using context or redux state
  isAuthorized() {
    return !!this.TOKEN
  }

  async signupUser(login, password) {
    try {
      const response = await axios.post('/.netlify/functions/signup', { login, password })

      if (response.data?.token) {
        this.TOKEN = response.data.token
      }
    } catch (e) {
      if (e.response) {
        throw new Error(e.response.data.message)
      }
      throw e
    }
  }

  async loginUser(login, password, dispatch) {
    try {
      const response = await axios.post('/.netlify/functions/login', { login, password })

      if (response.data?.token) {
        window.sessionStorage.setItem('Token', response.data.token)
        this.TOKEN = response.data.token

        dispatch(userActions.fetchUserData(login));
      }
    } catch (e) {
      if (e.response) {
        throw new Error(e.response.data.message)
      }
      throw e
    }
  }

  // Logout is just vanishing token in our case
  logout() {
    this.TOKEN = undefined
  }

  async submitProfileChanges(login, displayName, description, photo) {
    const response = await fetch('/.netlify/functions/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        displayName,
        description,
        photo
      }),
    });
  
    if (!response.ok) {
      console.error('Profile update failed');
    }
  }

  async getUserData(login) {
    try {
      const response = await axios.get('/.netlify/functions/get-user-data', {
      params: { login },
    });
    return response;
    } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
    }
  }

  async submitFaves(login, favourites) {
    try {
      const response = await axios.post('/.netlify/functions/save-favourites', { login, favourites });

      if (response.data?.message) {
        console.log('Favourites saved successfully');
      }
    } catch (error) {
      console.error('Failed to submit favourites:', error);
      throw error;
    }
  }

  async getUserFaves(login) {
    try {
      const response = await axios.get('/.netlify/functions/fetch-favourites', {
        params: { login },
      });
      return response;
    } catch (error) {
      console.error('Failed to fetch user favourites:', error);
      throw error;
    }
  }


  async submitUploads(login, uploads) {
    try {
      const response = await axios.post('/.netlify/functions/save-uploads', { login, uploads });

      if (response.data?.message) {
        console.log('Uploads saved successfully');
      }
    } catch (error) {
      console.error('Failed to submit uploads:', error);
      throw error;
    }
  }

  async getUserUploads(login) {
    try {
      const response = await axios.get('/.netlify/functions/fetch-uploads', {
        params: { login },
      });
      return response;
    } catch (error) {
      console.error('Failed to fetch user uploads:', error);
      throw error;
    }
  }

  async clearUploads(login) {
    try {
      const response = await axios.post('/.netlify/functions/remove-uploads', { login });

      if (response.data?.message) {
        console.log('Uploads cleared successfully');
      }
    } catch (error) {
      console.error('Failed to clear uploads:', error);
      throw error;
    }
  }

  async submitComments(login, comments) {
    try {
      const response = await axios.post('/.netlify/functions/save-comments', { login, comments });

      if (response.data?.message) {
        console.log('Comments submitted successfully');
      }
    } catch (error) {
      console.error('Failed to submit comments:', error);
      throw error;
    }
  }

  async getUserComments(login) {
    try {
      const response = await axios.get('/.netlify/functions/fetch-comments', {
        params: { login },
      });
      return response;
    } catch (error) {
      console.error('Failed to fetch user comments:', error);
      throw error;
    }
  }

  async sendMessage(message) {
    try {
      const response = await axios.post('/.netlify/functions/send-me-message', { message });

      if (response.data?.success) {
        console.log('Message sent successfully');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    }
  }

}

const authService = new AuthService()

export default authService
