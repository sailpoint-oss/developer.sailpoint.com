export async function getFAQ() {
    try {
        const response = await fetch('http://localhost:4202/faq');
        return await response.json();
    } catch (error) {
        return [];
    }
}