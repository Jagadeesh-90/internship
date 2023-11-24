package allSolidPrinciples.ocp;

import allSolidPrinciples.srp.EmployName;

public class Employee extends EmployName  {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        super(name);
        this.name = name;
        this.salary = salary;
    }
    public double calculateBonus() {
        return salary * 0.1;
    }
}
