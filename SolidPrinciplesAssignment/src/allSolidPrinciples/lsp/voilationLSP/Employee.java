package allSolidPrinciples.lsp.voilationLSP;

public class Employee  {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    public String showName(){

        return name;
    }

}
