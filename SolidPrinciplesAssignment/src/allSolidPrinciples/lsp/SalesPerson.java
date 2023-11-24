package allSolidPrinciples.lsp;

import allSolidPrinciples.isp.BonusCalculator;

public class SalesPerson implements BonusCalculator {
    protected String name;
    protected double salary;
    public SalesPerson(String name, double salary) {

        this.name = name;
        this.salary = salary;
    }
    public double calculateBonus() {
        return salary * 0.15;
    }
}