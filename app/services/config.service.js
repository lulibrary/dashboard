var App = {
    institutionId: '',
    institutionName: '',
    institutionDataCiteSymbol: '',
    startDateDefault: '20000101',
    endDateDefault: '20350101', //moment().add(20, 'years').format('YYYYMMDD'),       
    startDate: '20000101',
    endDate: '20350101', //moment().add(20, 'years').format('YYYYMMDD'),
    faculty: '',
    facultyDefault: '',
    facultyMap: {},
    departmentMap: {},
    updateDelay: 30000,
    loadingText: ' Loading... '
};
