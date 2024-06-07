


export const getData = async () => {

    try {
        const res = await fetch('/api/users'); // assuming your API route is at /api/GET
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in getting data (service) =>', error);
        throw error; // or handle the error appropriately
    }
};