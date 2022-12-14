export async function getFAQ() {
    try {
        const response = await fetch('http://localhost:4202/faq');
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getAgenda() {
    try {
        const response = await fetch('http://localhost:4202/agenda');
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getSpeaker() {
    try {
        const response = await fetch('http://localhost:4202/speakers');
        return await response.json();
    } catch (error) {
        return [];
    }
}