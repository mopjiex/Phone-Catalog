interface Property {
    title: string;
    key: string;
}

const properties: Property[] = [
    {title: 'Производитель', key: 'manufacturer'},
    {title: 'Год релиза', key: 'releaseYear'},
    {title: 'Диагональ экрана', key: 'diagonal'},
    {title: 'Страна производитель', key: 'country'},
    {title: 'Объем памяти', key: 'memory'},
    {title: 'Частота обновления экрана', key: 'screenRefreshRate'},
    {title: 'NFC', key: 'nfs'},
    {title: 'Поддержка ESIM', key: 'esim'},
    {title: 'Поддержка беспроводной зарядки', key: 'wirelessCharging'},
    {title: 'Стоимость', key: 'cost'},
];

export {properties};