import axios from 'axios';

export default async function FetchImages(page, query) {
    if (query) {
        const { data } = await axios.get('https://pixabay.com/api/', {
            params: {
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
                key: '38536697-e893b9b28b2dbccb55a145c33',
                page,
                q: query,
            },
        });
        return data;
    }
}