package allSolidPrinciples.srp;

public class Manager {
    String name;
    double salary;
    public Manager(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    public double calculateBonus() {
        return salary * 0.2;
    }
}
