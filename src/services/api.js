export const getNav = async () => {
    try {
        const URL = 'https://sitestestapi.experiment.school/pageRole/byDomain/localhost';
        const res = await fetch(URL);
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error', error)
    }
}