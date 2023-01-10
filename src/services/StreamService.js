export async function getFAQ() {
  try {
    const response = await fetch(
      "https://developer-community-backend.herokuapp.com/faq"
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getAgenda() {
  try {
    const response = await fetch(
      "https://developer-community-backend.herokuapp.com/agenda"
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getSpeaker() {
  try {
    const response = await fetch(
      "https://developer-community-backend.herokuapp.com/speakers"
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
