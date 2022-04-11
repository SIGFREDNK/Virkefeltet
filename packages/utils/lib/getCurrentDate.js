const getCurrentDate = () => {
    const today = new Date();
    return [
        today.getFullYear(),
        ('0' + (today.getMonth() + 1)).slice(-2),
        ('0' + today.getDate()).slice(-2)
    ].join('-');
};

export default getCurrentDate;
