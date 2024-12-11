export interface Referral {
  name: string;
  phone: string;
  jobType: string;
  referredBy: string;
  date: string;
  isApproved?: boolean;
}

export const referrals: Referral[] = [
  {
    name: 'Forrest Gump',
    phone: '301-575-1234',
    jobType: 'Repair',
    referredBy: 'Dan Taylor',
    date: '06/15/2023',
    isApproved: true,
  },
  {
    name: 'Rocky Balboa',
    phone: '410-559-8678',
    jobType: 'Building a home',
    referredBy: 'Paulie Pennino',
    date: '07/21/2023',
    isApproved: true,
  },
  {
    name: 'Luke Skywalker',
    phone: '240-847-4278',
    jobType: 'Repair',
    referredBy: 'Han Solo',
    date: '05/11/2023',
    isApproved: false,
  },
  {
    name: 'Gandalf Greybeard',
    phone: '301-575-1234',
    jobType: 'Adding a deck, nee...',
    referredBy: 'Frodo Baggins',
    date: '04/27/2023',
    isApproved: true,
  },
  {
    name: 'Daenerys Targaryen',
    phone: '301-552-4567',
    jobType: 'Massive leaks',
    referredBy: 'John Snow',
    date: '03/18/2023',
    isApproved: true,
  },
  {
    name: 'John McClane',
    phone: '410-556-9789',
    jobType: 'Shingle Replacement',
    referredBy: 'Al Powell',
    date: '02/10/2023',
    isApproved: true,
  },
  {
    name: 'Hermione Granger',
    phone: '301-557-8901',
    jobType: 'Skylight Installation',
    referredBy: 'Ron Weasley',
    date: '01/15/2023',
    isApproved: false,
  },
  {
    name: 'Indiana Jones',
    phone: '301-575-1234',
    jobType: 'New gutters',
    referredBy: 'Marcus Brody',
    date: '01/05/2023',
    isApproved: true,
  },
];
