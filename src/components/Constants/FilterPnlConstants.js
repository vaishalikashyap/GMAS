export const filterpnl =  {
    height : '300px' ,
    border: '1px gray solid',
    padding: '10px 10px 10px 10px',
    marginTop : 10,
    marginLeft: 10,
    marginRight : '40%',
    marginBottom:10,
};

export const tabelPnl = {
    width: '100%',
    marginTop: 20,
    borderCollapse: 'collapse',
    borderTop: '1px solid #ccc',
    borderLeft: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    textAlign: 'left',
    clear: 'both',
}

export const tableFrameComp = [
    {
        label: 'Customer ID',
        compType : 'textbox',
        key: 'customerID',
    },
    {
        label: 'Account No',
        compType : 'textbox',
        key: 'accountNo',
    },
    {
        label: 'Transaction Date',
        compType : 'daterange',
        keyOne: 'startdate',
        keyTwo: 'enddate',
    },
];
