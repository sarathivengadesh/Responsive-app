import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import React from 'react';

export const summaryData = [
    {
        id:1,
        color:"#4463F7",
        icon: <AccessAlarmsIcon style={{fill:"#4463F7"}} />,
        totalCount:75,
        title:"Total Orders",
         status:"Increase",
         percent:3
    },{
        id:2,
        color:"#F55D5C",
        icon: <AdUnitsIcon style={{fill:"#F55D5C"}} />,
        totalCount:70,
        title:"Total Delivered",
        status:"Decrease",
        percent:3
    },
    {
        id:3,
        color:"#F45C5B",
        icon: <AdUnitsIcon style={{fill:"#F45C5B"}} />,
        totalCount:5,
        title:"Total Cancelled",
        status:"Decrease",
        percent:3
    },
    {
        id:4,
        color:"#EE6AB6",
        icon: <AdUnitsIcon style={{fill:"#EE6AB6"}} />,
        totalCount:"$37k",
        title:"Total Revenue",
        status:"Increase",
        percent:3
    }
]

export const options = [
    {
        id:1,
        icon: <AdUnitsIcon style={{fill:"#EE6AB6"}} />,
        title:"Total Revenue",
        color:"#EE6AB6"
        
    },
    {
        id:2,
        icon:<AccessAlarmsIcon style={{fill:"#4463F7"}} />,
        title:"Popular Dishes",
        color:"#4463F7"
    },
    {
        id:3,
        icon:<AccessAlarmsIcon style={{fill:"#4463F7"}} />,
        title:"Menus",
        color:"#4463F7"
    }
]

export const feedBackForm = [
    {
        name: "Alice Johnson",
        description: "The app is really intuitive and easy to use. I was able to find everything I needed quickly. Great job!",
        rating: 4
    },
    {
        name: "David Brown",
        description: "I love the features of this app, especially the user interface. However, sometimes it lags a bit. Overall, very satisfied.",
        rating: 3
    },
    {
        name: "Maria Garcia",
        description: "The customer support is excellent. They resolved my issues promptly. The app itself is very handy for daily tasks.",
        rating: 5
    },
    {
        name: "James Smith",
        description: "This app has made my life so much easier. The notifications are timely and useful. A few minor bugs, but nothing major.",
        rating: 3
    }
];

export const orderTitle=[
    {headerName:"Name",field:"name",resizable:true,minWidth:100,flex:1,renderCell:params=><div>{params?.value}</div>,headerClassName:"super-app-theam--header"},
    {headerName:"Order",field:"orderDate",resizable:true,minWidth:100,flex:1,renderCell:params=><div>{params?.value}</div>,headerClassName:"super-app-theam--header"},
    {headerName:"Value",field:"worthOfOrder",resizable:true,minWidth:100,flex:1,renderCell:params=><div>{params?.value}</div>,headerClassName:"super-app-theam--header"},
    {headerName:"Deliver Stauts",field:"delivered",resizable:true,minWidth:100,flex:1,renderCell:params=><div>{params?.value}</div>,headerClassName:"super-app-theam--header"}
]
export const orderHeader=["Customer","OrderDate","Amount","Status"];
export const orders = [
    {
        id:1,
        name: "John Doe",
        orderDate: "2023-07-01",
        worthOfOrder: 250.75,
        delivered: "Delivered"
    },
    {
        id:2,
        name: "Jane Smith",
        orderDate: "2023-07-03",
        worthOfOrder: 125.50,
        delivered: "Delivered"
    },
    {
        id:3,
        name: "Michael Johnson",
        orderDate: "2023-07-05",
        worthOfOrder: 300.00,
        delivered: "Pending"
    },
    {
        id:4,
        name: "Emily Davis",
        orderDate: "2023-07-07",
        worthOfOrder: 80.25,
        delivered: "Cancelled"
    },
    {
        id:5,
        name: "David Wilson",
        orderDate: "2023-07-09",
        worthOfOrder: 220.45,
        delivered: "Delivered"
    },
    {
        id:6,
        name: "Sarah Brown",
        orderDate: "2023-07-11",
        worthOfOrder: 180.30,
        delivered: "Pending"
    },
    {
        id:7,
        name: "Chris Lee",
        orderDate: "2023-07-13",
        worthOfOrder: 99.99,
        delivered: "Pending"
    },
    {
        id:8,
        name: "Jessica Taylor",
        orderDate: "2023-07-15",
        worthOfOrder: 150.60,
        delivered: "Delivered"
    },
    {
        id:9,
        name: "Matthew Harris",
        orderDate: "2023-07-17",
        worthOfOrder: 250.00,
        delivered: "Cancelled"
    },
    {
        id:10,
        name: "Olivia Martin",
        orderDate: "2023-07-19",
        worthOfOrder: 175.25,
        delivered: "Delivered"
    }
];

export const pieChartData =[{name:"net profit",value:70,color:"#7495FE"},{name:"net profit",value:30,color:"#2C3365"}]

export const CustomMenu = [
    {value:"weekly",lable:"Weekly"},
    {value:"daily",lable:"Daily"},
    {value:"monthly",lable:"Monthly"}
]

export const weeklyData= [
    {
      name: '3',
      value: 4000
    },
    {
      name: '6',
      value: 3000
    },
    {
      name: '9',
      value: 2000
    },
    {
      name: '12',
      value: 2780
    },
    {
      name: '15',
      value: 1890
    },
    {
      name: '18',
      value: 2390
    },
    {
      name: '21',
      value: 3490
    },
    {
      name: '24',
      value: 4000
    },
    {
      name: '27',
      value: 3000
    },
    {
      name: '30',
      value: 2000
    },
    {
      name: '33',
      value: 2780
    },
    {
      name: '36',
      value: 1890
    },
    {
      name: '39',
      value: 2390
    },
    {
      name: '42',
      value: 3490
    },
  ];
export const monthlyData= [
    {
      name: '1',
      value: 1000
    },
    {
      name: '2',
      value: 2780
    },
    {
      name: '3',
      value: 1890
    },
    {
      name: '4',
      value: 2390
    },
    {
      name: '5',
      value: 3490
    },
    {
        name: '6',
        value: 1000
      },
      {
        name: '7',
        value: 2780
      },
      {
        name: '8',
        value: 1890
      },
      {
        name: '9',
        value: 2390
      },
      {
        name: '10',
        value: 3490
      },
      {
        name: '11',
        value: 2390
      },
      {
        name: '12',
        value: 3490
      },
];

export const dailyData= [
    {
      name: '10',
      value: 4000
    },
    {
      name: '20',
      value: 3000
    },
    {
      name: '30',
      value: 2000
    },
    {
      name: '40',
      value: 2780
    },
    {
      name: '50',
      value: 1890
    },
    {
      name: '60',
      value: 2390
    },
    {
      name: '70',
      value: 3490
    },
    {
      name: '80',
      value: 4000
    },
    {
      name: '90',
      value: 3000
    },
    {
      name: '100',
      value: 2000
    },
    {
      name: '110',
      value: 2780
    },
    {
      name: '120',
      value: 1890
    },
    {
      name: '130',
      value: 2390
    },
    {
      name: '140',
      value: 3490
    },
  ];