// dataManager.js

// Shared data storage
let programs = [
    { id: 1, title: 'Computer Science', institution: 'National University of Lesotho', duration: '4 years' },
    { id: 2, title: 'Business Administration', institution: 'Limkokwing University', duration: '3 years' }
];
let institutions = [
    { id: 1, name: 'National University of Lesotho', location: 'Roma', programs: 50 },
    { id: 2, name: 'Limkokwing University', location: 'Maseru', programs: 30 }
];
let resources = [
    { id: 1, title: 'Application Guide', type: 'PDF', url: 'https://example.com/guide.pdf' },
    { id: 2, title: 'Scholarship Information', type: 'Web Page', url: 'https://example.com/scholarships' }
];
let opportunities = [
    { id: 1, title: 'Software Developer Internship', company: 'Tech Innovators', location: 'Maseru' },
    { id: 2, title: 'Marketing Assistant', company: 'Global Brands', location: 'Leribe' }
];

// Get data for a specific type
function getData(type) {
    switch (type) {
        case 'programs':
            return programs;
        case 'institutions':
            return institutions;
        case 'resources':
            return resources;
        case 'opportunities':
            return opportunities;
        default:
            return [];
    }
}

// Add new item to a specific type
function addData(type, newData) {
    const id = Math.max(...getData(type).map(item => item.id), 0) + 1;
    const data = { id, ...newData };
    switch (type) {
        case 'programs':
            programs.push(data);
            break;
        case 'institutions':
            institutions.push(data);
            break;
        case 'resources':
            resources.push(data);
            break;
        case 'opportunities':
            opportunities.push(data);
            break;
    }
    return data;
}

// Edit an existing item
function editData(type, id, updatedData) {
    const data = getData(type);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedData };
        return data[index];
    }
    return null;
}

// Delete an item
function deleteData(type, id) {
    const data = getData(type);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        return true;
    }
    return false;
}

// Export functions
export { getData, addData, editData, deleteData };
