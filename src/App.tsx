import './index.css';
import { employees, getTotalPayout } from './data/employees';
import { FullTimeEmployee, Contractor } from './models/Employee';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const totalPayout = getTotalPayout(employees);

  return (
    <div className="min-h-screen bg-pink-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-8">
        <header className="space-y-3">
         
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Employee Payroll Demo
          </h1>
        
        </header>

        <main className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <section className="space-y-4">
            <h2 className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
              Employees 
            </h2>

            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-900/80">
                  <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Details</th>
                    <th className="px-4 py-3 font-semibold text-right">Monthly Pay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {employees.map((employee) => {
                    const isFullTime = employee instanceof FullTimeEmployee;
                    const isContractor = employee instanceof Contractor;
                    const pay = employee.calculatePay();

                    return (
                      <tr key={employee.id} className="hover:bg-slate-900/80 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-100">{employee.name}</td>
                        <td className="px-4 py-3 text-xs font-semibold text-slate-100">
                          {employee.getType()}
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-300">
                          {isFullTime && (
                            <span>
                              Fixed monthly salary:{' '}
                              <span className="text-slate-100">
                                {currencyFormatter.format((employee as FullTimeEmployee).monthlySalary)}
                              </span>
                            </span>
                          )}
                          {isContractor && (
                            <span>
                              Hourly rate{' '}
                              <span className="text-slate-100">
                                {currencyFormatter.format((employee as Contractor).hourlyRate)}
                              </span>{' '}
                              ×{' '}
                              <span className="text-slate-100">
                                {(employee as Contractor).hoursWorked.toLocaleString()}
                              </span>{' '}
                              hours
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-xs uppercase tracking-wide text-slate-400 block">Monthly Pay</span>
                          <span className="text-sm font-semibold text-sky-300">
                            {currencyFormatter.format(pay)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <aside className="space-y-4 rounded-2xl border border-sky-500/30 bg-slate-900/80 px-5 py-5 shadow-lg">
            <h2 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
              Total Company Payout (This Month)
            </h2>

            <div className="space-y-2">
              <p className="text-3xl font-bold text-sky-300">
                {currencyFormatter.format(totalPayout)}
              </p>
              
            </div>

           
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
