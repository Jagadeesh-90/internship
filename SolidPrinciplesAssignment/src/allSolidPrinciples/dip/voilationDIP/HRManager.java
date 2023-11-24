package allSolidPrinciples.dip.voilationDIP;

import allSolidPrinciples.isp.ReportGenerator;
import allSolidPrinciples.ocp.Employee;

public class HRManager extends Employee  {
    public HRManager(String name, double salary) {

        super(name, salary);
    }

    public String generateReport() {

        return "HR report for " + name;
    }
}