import { CompactTable } from '@table-library/react-table-library/compact';

const nodes = [
  {
       id:1,
       name:"Jane Doe",
       email:"janedoe3@gmail.com",
       cell_number:"0761140589",
       date: new Date(2020, 1, 15)
    },
  {
       id:2,
       name:"Jacob James",
       email:"jamesj@yahoo.com",
       cell_number:"079 234 2212",
       date: new Date(2025, 5, 16)
    },
];

const COLUMNS = [
  { label: 'Name', renderCell: (item) => item.name },
  { label: 'Email', renderCell: (item) => item.email },
  {
    label: 'Phone Number',
    renderCell: (item) => item.cell_number,
  },
    {
    label: 'Date',
    renderCell: (item) =>
      item.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  }
];

export default function Table () {
  const data = {nodes };

  return <CompactTable columns={COLUMNS} data={data} />;
};