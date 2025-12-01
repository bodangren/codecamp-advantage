const students = [
  { id: 1, name: 'Alice Johnson', course: 'React Fundamentals', progress: 75 },
  { id: 2, name: 'Bob Smith', course: 'Node.js Basics', progress: 60 },
  { id: 3, name: 'Charlie Brown', course: 'Full Stack Development', progress: 90 },
  { id: 4, name: 'Diana Ross', course: 'JavaScript Advanced', progress: 85 },
];

export default function StudentProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Student Progress</h1>
      <table className="min-w-full bg-white">
        <caption className="sr-only">Student Progress Overview</caption>
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Course
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                {student.course}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${student.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      aria-label={`Progress: ${student.progress}%`}
                    ></div>
                  </div>
                  <div className="text-right">{student.progress}%</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
