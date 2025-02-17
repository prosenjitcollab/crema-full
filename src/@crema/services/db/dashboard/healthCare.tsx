import {HealthCare} from '../../../../types/models/dashboards/HealthCare';

const healthCareData: HealthCare = {
  drState: [
    {
      id: 1,
      category: 'Dentist',
      name: 'Dr. Matthew K. Gentry',
      bgColor: '#0A8FDC',
      time: '9 AM',
      icon: '/assets/images/dashboard/dentist.svg',
    },
    {
      id: 2,
      category: 'Heart Specialist',
      name: 'Dr. Edna J. Weeks',
      bgColor: '#00B59C',
      time: '10 AM',
      icon: '/assets/images/dashboard/heart.svg',
    },
    {
      id: 3,
      category: 'Neurologist',
      name: 'Dr. Audrey Thompson',
      bgColor: '#B745FF',
      time: '9 AM',
      icon: '/assets/images/dashboard/neuro.svg',
    },
    {
      id: 4,
      category: 'Pulmonologist',
      name: 'Dr. Laurie Hopson',
      bgColor: '#3A3849',
      time: '10 AM',
      icon: '/assets/images/dashboard/pulmo.svg',
    },
  ],
  heathStatics: {
    dataOne: [
      {month: 'Jan', number: 150},
      {month: 'Feb', number: 280},
      {month: 'Mar', number: 180},
      {month: 'Apr', number: 290},
      {month: 'May', number: 190},
      {month: 'Jun', number: 320},
      {month: 'Jul', number: 240},
      {month: 'Aug', number: 300},
      {month: 'Sep', number: 270},
      {month: 'Oct', number: 350},
      {month: 'Nov', number: 280},
      {month: 'Dec', number: 380},
    ],
    dataTwo: [
      {month: 'Jan', number: 20},
      {month: 'Feb', number: 170},
      {month: 'Mar', number: 40},
      {month: 'Apr', number: 200},
      {month: 'May', number: 70},
      {month: 'Jun', number: 270},
      {month: 'Jul', number: 100},
      {month: 'Aug', number: 310},
      {month: 'Sep', number: 130},
      {month: 'Oct', number: 350},
      {month: 'Nov', number: 170},
      {month: 'Dec', number: 200},
    ],
    dataThree: [
      {month: 'Jan', number: 110},
      {month: 'Feb', number: 230},
      {month: 'Mar', number: 100},
      {month: 'Apr', number: 290},
      {month: 'May', number: 160},
      {month: 'Jun', number: 320},
      {month: 'Jul', number: 220},
      {month: 'Aug', number: 450},
      {month: 'Sep', number: 260},
      {month: 'Oct', number: 490},
      {month: 'Nov', number: 240},
      {month: 'Dec', number: 200},
    ],
  },
  newpatients: [
    {month: 'Aug', number: 350},
    {month: 'Sep', number: 260},
    {month: 'Oct', number: 350},
    {month: 'Nov', number: 240},
    {month: 'Dec', number: 340},
    {month: 'Jul', number: 220},
  ],

  cancelVisits: [
    {month: 'Jan', number: 110},
    {month: 'Feb', number: 230},
    {month: 'Mar', number: 180},
    {month: 'Apr', number: 250},
    {month: 'May', number: 160},
    {month: 'Jun', number: 260},
  ],

  topDoctors: [
    {
      id: 1,
      name: 'Dr Nail Wagner',
      speciality: 'Heart Specialist',
      profile_pic: '/assets/images/avatar/A2.jpg',
      rating: '5',
      scheduled: false,
    },
    {
      id: 2,
      name: 'Dr. Kane Williamson',
      speciality: 'Psychiatrist',
      profile_pic: '/assets/images/avatar/A3.jpg',
      rating: '5',
      scheduled: false,
    },
    {
      id: 3,
      name: 'Dr Tom Bundle',
      speciality: 'Neurologist',
      profile_pic: '/assets/images/avatar/A4.jpg',
      rating: '5',
      scheduled: true,
    },
    {
      id: 4,
      name: 'Dr Tom Bundle',
      speciality: 'Neurologist',
      profile_pic: '/assets/images/avatar/A5.jpg',
      rating: '5',
      scheduled: false,
    },
    {
      id: 5,
      name: 'Jone B. Rilea',
      speciality: 'Heart Specialist',
      profile_pic: '/assets/images/avatar/A6.jpg',
      rating: '5',
      scheduled: false,
    },
  ],
  upcomingAppointment: [
    {
      id: 1,
      name: 'Dr Nail Wagner',
      speciality: 'Heart Specialist',
      profile_pic: '/assets/images/avatar/A10.jpg',
      appointmentTime: '9:30',
      appointmentDate: ' 15 Aug',
    },
    {
      id: 2,
      name: 'Dr. Kane Williamson',
      speciality: 'Psychiatrist',
      profile_pic: '/assets/images/avatar/A13.jpg',
      appointmentTime: '9:30',
      appointmentDate: ' 15 Aug',
    },
    {
      id: 3,
      name: 'Dr. Tom Bundle',
      speciality: 'Neurologist',
      profile_pic: '/assets/images/avatar/A14.jpg',
      appointmentTime: '9:30',
      appointmentDate: ' 15 Aug',
    },
    {
      id: 4,
      name: 'Jone B. Rilea',
      speciality: 'Rheumatologist',
      profile_pic: '/assets/images/avatar/A15.jpg',
      appointmentTime: '9:30',
      appointmentDate: ' 15 Aug',
    },
    {
      id: 5,
      name: 'Jone B. Rilea',
      speciality: 'Heart Specialist',
      profile_pic: '/assets/images/avatar/A16.jpg',
      appointmentTime: '9:30',
      appointmentDate: ' 15 Aug',
    },
  ],
  notifications: [
    {
      id: 1,
      title: 'You confirmed to dermatologist',
      time: '1 days  ago',
      color: '#0A8FDC',
    },
    {
      id: 2,
      title: 'Your results are available to download',
      time: '2 days  ago',
      color: '#0A8FDC',
    },
    {
      id: 3,
      title: 'Dr. John Smith cancelled your visit',
      time: '2 days  ago',
      color: '#F44D50',
    },
    {
      id: 4,
      title: 'Dr. Ann Doe changed date of your visit',
      time: '3 days  ago',
      color: '#F44D50',
    },
    {
      id: 5,
      title: 'You confirmed to dermatologist',
      time: '3 days  ago',
      color: '#F44D50',
    },
    {
      id: 6,
      title: 'Dr. Ann Doe changed date of your visit',
      time: '4 days  ago',
      color: '#0A8FDC',
    },
  ],
  hospitalStatics: [
    {
      id: 1,
      value: '3,256',
      name: 'Total Patient',
      icon: '/assets/images/dashboard/icon-patient.svg',
    },
    {
      id: 2,
      value: '694',
      name: 'Available Staff',
      icon: '/assets/images/dashboard/icon-available-staff.svg',
    },
    {
      id: 3,
      value: '$4,435',
      name: 'Avg Treat Cost',
      icon: '/assets/images/dashboard/icon-avg-cost.svg',
    },
    {
      id: 4,
      value: '1,150',
      name: 'Available Cars',
      icon: '/assets/images/dashboard/icon-available-car.svg',
    },
  ],
  recentpatients: [
    {
      id: '#SK231',
      name: 'Ina Hughes',
      profile_pic: '/assets/images/avatar/A10.jpg',
      gender: 'Male',
      weight: '76',
      assignedDr: 'Dr. Michael Clark',
      date: '08-12-2020',
      status: 'Typhoid',
      color: '#0A8FDC',
    },
    {
      id: '#SK232',
      name: 'Myrtie Ferguson',
      profile_pic: '/assets/images/avatar/A11.jpg',
      gender: 'Female',
      assignedDr: 'Dr. Pauline',
      date: '07-30-2020',
      weight: '65',
      status: 'Dengue',
      color: '#49BD65',
    },
    {
      id: '#SK233',
      name: 'Johnny Herrera',
      profile_pic: '/assets/images/avatar/A12.jpg',
      weight: '67',
      gender: 'Male',
      assignedDr: 'Dr. David',
      date: '07-30-2020',
      status: 'Cancer',
      color: '#F44D50',
    },
    {
      id: '#SK234',
      name: 'Jone B. Rilea',
      profile_pic: '/assets/images/avatar/A14.jpg',
      weight: '80',
      gender: 'Male',
      assignedDr: 'Dr. Tom Bundle',
      date: '07-30-2020',
      status: 'Covid 19',
      color: '#F44D50',
    },
  ],
  hospitalActivity: [
    {name: 'Jan', consultations: 150, patients: 270},
    {name: 'Feb', consultations: 250, patients: 200},
    {name: 'Mar', consultations: 180, patients: 280},
    {name: 'Apr', consultations: 278, patients: 250},
    {name: 'May', consultations: 250, patients: 300},
    {name: 'Jun', consultations: 350, patients: 250},
    {name: 'Jul', consultations: 280, patients: 300},
    {name: 'Aug', consultations: 340, patients: 240},
    {name: 'Sep', consultations: 280, patients: 300},
    {name: 'Oct', consultations: 400, patients: 270},
    {name: 'Nov', consultations: 250, patients: 240},
    {name: 'Dec', consultations: 400, patients: 270},
  ],
  bloodCard: [
    {
      id: 1,
      name: 'Blood Pressure',
      icon: '/assets/images/dashboard/icon-blood.svg',
      measurement: '1141/90 mmhg',
      color: '#F25766',
    },
    {
      id: 2,
      name: 'Blood Glucose',
      icon: '/assets/images/dashboard/icon-bloodgroup.svg',
      measurement: '140 mg/dl',
      color: '#2A8853',
    },
    {
      id: 3,
      name: 'Respiration Rate',
      icon: '/assets/images/dashboard/icon-beat.svg',
      measurement: '60 beats min',
      color: '#DA8E16',
    },
    {
      id: 4,
      name: 'Immunity Rate',
      icon: '/assets/images/dashboard/icon-immune.svg',
      measurement: '4800 μL',
      color: '#2717A4',
    },
  ],
  appointmentCards: [
    {
      id: 1,
      name: 'All Appointment',
      value: '1878',
      icon: '/assets/images/dashboard/icon-appointment.svg',
      chartValue: '2.68',
      chartTime: 'Since last month',
      chartData: [
        {month: 'Jan', users: 1000},
        {month: 'Feb', users: 600},
        {month: 'Mar', users: 1100},
        {month: 'Apr', users: 900},
        {month: 'May', users: 1000},
        {month: 'Jun', users: 500},
      ],
      color: '#F77568',
    },
    {
      id: 2,
      name: 'Surgery',
      value: '1878',
      icon: '/assets/images/dashboard/icon-surgery.svg',
      chartValue: '2.68',
      chartTime: 'Since last month',
      chartData: [
        {month: 'Jan', users: 1000},
        {month: 'Feb', users: 600},
        {month: 'Mar', users: 1100},
        {month: 'Apr', users: 900},
        {month: 'May', users: 1000},
        {month: 'Jun', users: 500},
      ],
      color: '#265ED7',
    },
  ],
  heartCard: {
    id: 1,
    title: 'Heart Rate',
    measurement: '122',
    unit: 'bpm',
    graphData: [
      {name: '1', rate: 50},
      {name: '2', rate: 52},
      {name: '3', rate: 67},
      {name: '4', rate: 0},
      {name: '5', rate: 90},
      {name: '6', rate: 67},
      {name: '7', rate: 70},
      {name: '8', rate: 45},
      {name: '9', rate: 50},
      {name: '10', rate: 63},
      {name: '11', rate: 50},
      {name: '12', rate: 48},
    ],
    color: '#FD3A84',
  },
  temperatureCard: {
    id: 1,
    title: 'Heart Rate',
    measurement: '122',
    unit: 'bpm',
    graphData: [
      {name: '1', rate: 50},
      {name: '2', rate: 52},
      {name: '3', rate: 67},
      {name: '4', rate: 0},
      {name: '5', rate: 90},
      {name: '6', rate: 67},
      {name: '7', rate: 70},
      {name: '8', rate: 45},
      {name: '9', rate: 50},
      {name: '10', rate: 63},
      {name: '11', rate: 50},
      {name: '12', rate: 48},
    ],
    color: '#0A8FDC',
  },
  doses: [
    {
      id: 1,
      value: 'Vitamin D',
      name: '2 Times everyday',
      icon: '/assets/images/dashboard/icon-vitamin.svg',
    },
    {
      id: 2,
      value: 'Immune Renew',
      name: '3 Times everyday',
      icon: '/assets/images/dashboard/icon-immune.svg',
    },
  ],
  yourActivity: [
    {day: 'Sun', visits: 50},
    {day: 'Mon', visits: 52},
    {day: 'Tue', visits: 67},
    {day: 'Wed', visits: 30},
    {day: 'Thu', visits: 90},
    {day: 'Fri', visits: 67},
    {day: 'Sat', visits: 57},
  ],
};

export default healthCareData;
