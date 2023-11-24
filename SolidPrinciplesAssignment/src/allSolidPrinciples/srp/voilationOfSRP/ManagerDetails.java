package allSolidPrinciples.srp.voilationOfSRP;

public class ManagerDetails {
    String name;
    double salary;
    public ManagerDetails(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    public double calculateBonus() {

        return salary * 0.2;
    }
    public String showName() {
        return name;
    }
    public void print(){
        System.out.println("hello everyone" );
    }
}
