import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types'; 


const data = [
  {
    name: 'To Kill a Mockingbird',
    totalPages: 281,
  },
  {
    name: '1984',
    totalPages: 328,
  },
  {
    name: 'The Great Gatsby',
    totalPages: 180,
  },
  {
    name: 'Pride and Prejudice',
    totalPages: 279,
  },
  {
    name: 'The Catcher in the Rye',
    totalPages: 224,
  },
  {
    name: 'The Hobbit',
    totalPages: 310,
  },
  {
    name: 'The Lord of the Rings',
    totalPages: 1178,
  },
  {
    name: 'The Chronicles of Narnia',
    totalPages: 1248,
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    totalPages: 309,
  },
];

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;

  const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
     Z`
  );

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
  return (
    <div className='ml-8 mt-4'>
      <h2>Bar Chart - Total Pages of Read-list Books</h2>
      <BarChart width={1000} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomBar />} />
      </BarChart>
    </div>
  );
};

Chart.propTypes={
    props:PropTypes.object
}

export default Chart;
