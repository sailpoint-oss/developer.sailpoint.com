export async function getFAQ() {
    try {
        const response = await fetch('http://localhost:4200/faq');
        return await response.json();
    } catch (error) {
        return [];
    }
}