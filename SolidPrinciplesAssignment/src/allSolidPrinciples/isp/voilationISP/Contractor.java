package allSolidPrinciples.isp.voilationISP;

public class Contractor implements AllInterface {
    protected String name;
    protected double salary;

    public Contractor(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public double calculateBonus() {
        return salary * 5;
    }

    @Override
    public String generateReport() {
        return name;
    }
}
