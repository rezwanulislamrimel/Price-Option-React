import { Line, LineChart, XAxis, YAxis } from 'recharts';
const LineCharts = () => {
  const data = [
    {
      "name": "Student 1",
      "mathMarks": 85,
      "banglaMarks": 78,
      "englishMarks": 90
    },
    {
      "name": "Student 2",
      "mathMarks": 78,
      "banglaMarks": 82,
      "englishMarks": 88
    },
    {
      "name": "Student 3",
      "mathMarks": 92,
      "banglaMarks": 88,
      "englishMarks": 94
    },
    {
      "name": "Student 4",
      "mathMarks": 65,
      "banglaMarks": 70,
      "englishMarks": 75
    },
    {
      "name": "Student 5",
      "mathMarks": 89,
      "banglaMarks": 95,
      "englishMarks": 91
    },
    {
      "name": "Student 6",
      "mathMarks": 75,
      "banglaMarks": 80,
      "englishMarks": 85
    },
    {
      "name": "Student 7",
      "mathMarks": 96,
      "banglaMarks": 92,
      "englishMarks": 98
    },
    {
      "name": "Student 8",
      "mathMarks": 70,
      "banglaMarks": 65,
      "englishMarks": 72
    },
    {
      "name": "Student 9",
      "mathMarks": 88,
      "banglaMarks": 78,
      "englishMarks": 89
    },
    {
      "name": "Student 10",
      "mathMarks": 82,
      "banglaMarks": 87,
      "englishMarks": 80
    }
  ];

  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <Line dataKey='banglaMarks' stroke='red' type="monotone" ></Line>
        <Line dataKey='mathMarks' stroke='green' type="monotone" ></Line>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default LineCharts;
