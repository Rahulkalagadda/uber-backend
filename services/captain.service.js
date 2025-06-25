import Captain from '../models/captain.model.js';

export async function createCaptain(data) {
    return await Captain.create(data);
}

// ...other service functions...