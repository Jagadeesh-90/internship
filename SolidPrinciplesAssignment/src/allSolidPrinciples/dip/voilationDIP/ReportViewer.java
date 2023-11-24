package allSolidPrinciples.dip.voilationDIP;

public class ReportViewer {
   // private ReportGenerator reportGenerator;
private HRManager hrManager;
   public ReportViewer(){
       this.hrManager=new HRManager("pj",2000);
   }

    public void viewReport() {

        System.out.println(hrManager.generateReport());
    }
}
