package allSolidPrinciples.lsp;

import allSolidPrinciples.ocp.Employee;
import allSolidPrinciples.isp.ReportGenerator;

public class HRManager extends Employee  implements ReportGenerator {
    public HRManager(String name, double salary) {
        super(name, salary);
    }

    @Override
    public String generateReport() {
        return "HR report for " + name;
    }
}