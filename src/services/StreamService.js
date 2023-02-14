import md5 from 'crypto-js/md5';

export const URL = 'https://developer-community-backend-de.herokuapp.com';


export async function getFAQ() {
  try {
    const response = await fetch(URL + '/faq');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAgenda() {
  try {
    const response = await fetch(URL + '/agenda');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getSpeaker() {
  try {
    const response = await fetch(URL + '/speakers');
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getRegistration() {
  try {
    const response = await fetch(URL + '/registration');
    return await response.json();
  } catch (error) {
    return false;
  }
}

export async function submitSurvey(session, rating, feedback) {
  if (rating < 1) return false;
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      session,
      rating,
      feedback,
    }),
    redirect: 'follow',
  };

  const response = await fetch(URL + '/survey', requestOptions).catch(
    (error) => {
      console.log('error', error);
      return false;
    },
  );

  const validated = await response.text();

  if (validated) {
    return true;
  } else {
    return false;
  }
}

export async function submitAttendance(email, name, title, company) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        email,
        name,
        title,
        company,
      }),
      redirect: 'follow',
    };

    const response = await fetch(URL + '/attend', requestOptions).catch(
      (error) => {
        console.log('error', error);
        return false;
      },
    );

    const validated = await response.text();

    if (validated) {
      console.log('setting login status');
      const uuid = md5(email);
      localStorage.setItem('entry-status', uuid);
      return uuid;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
