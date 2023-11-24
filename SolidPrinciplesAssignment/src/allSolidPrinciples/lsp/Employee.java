package allSolidPrinciples.lsp;

import allSolidPrinciples.isp.BonusCalculator;

public class Employee implements BonusCalculator {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public double calculateBonus() {
        return salary * 0.1;
    }
}
