const URL = 'https://developer-community-backend.herokuapp.com';

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

export async function submitSurvey(session, rating, feedback) {
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

  fetch(URL + '/survey', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
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
      localStorage.setItem('entry-status', 1);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
