package allSolidPrinciples.dip;

import allSolidPrinciples.isp.ReportGenerator;
import allSolidPrinciples.ocp.Employee;

public class HRManager extends Employee implements ReportGenerator {
    public HRManager(String name, double salary) {
        super(name, salary);
    }

    @Override
    public String generateReport() {
        return "HR report for " + name;
    }
}