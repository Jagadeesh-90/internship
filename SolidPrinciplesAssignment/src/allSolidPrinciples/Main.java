package allSolidPrinciples;

import allSolidPrinciples.dip.ReportViewer;
import allSolidPrinciples.isp.ReportGenerator;
import allSolidPrinciples.isp.voilationISP.Contractor;
import allSolidPrinciples.lsp.HRManager;
import allSolidPrinciples.srp.EmployName;
import allSolidPrinciples.ocp.Employee;
import allSolidPrinciples.srp.Manager;
import allSolidPrinciples.lsp.SalesPerson;

public class Main {
    public static void main(String[] args) {
        Manager manager = new Manager("Alice", 80000);
        SalesPerson salesPerson = new SalesPerson("Bob", 60000);
        EmployName employName=new EmployName("Jagadeesh");
        System.out.println("Manager bonus: " + manager.calculateBonus());
        System.out.println("Salesperson bonus: " + salesPerson.calculateBonus());
        System.out.println("employee name: "+employName.showName());

        Employee employee=new Employee("john",5000);
        EmployName employees = new Employee("John", 50000);
        System.out.println("Employee bonus: " + employee.calculateBonus());

        ReportGenerator hrManager = new HRManager("Carol", 90000);
        System.out.println("manager bonus"+ hrManager.generateReport() );

        Employee employee1=new HRManager("Pj",10000);
        System.out.println(employee1.calculateBonus());
        System.out.println("manager bonus"+ ((HRManager) employee1).generateReport());

        ReportViewer reportViewer = new ReportViewer(hrManager);
        reportViewer.viewReport();
        ReportViewer rp=new ReportViewer(hrManager);

        Contractor contractor=new Contractor("Jaggu",4000);
        System.out.println(contractor.generateReport());
        System.out.println(contractor.calculateBonus());
    }
}
