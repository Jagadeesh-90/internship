package allSolidPrinciples.ocp.voilationOCP;

import allSolidPrinciples.srp.EmployName;

public class Employee  {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    public String showName() {

        return name+"palla";
    }

    public double calculateBonus() {
        return salary * 0.1;
    }
}
