import moment from 'moment';

const dateFormatter = (str: string) => {
    const newData = moment(str);
    return newData;
};

export default dateFormatter;
