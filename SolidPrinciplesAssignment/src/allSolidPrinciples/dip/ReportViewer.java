package allSolidPrinciples.dip;

import allSolidPrinciples.isp.ReportGenerator;

public class ReportViewer {
    private ReportGenerator reportGenerator;

    public ReportViewer(ReportGenerator reportGenerator) {

        this.reportGenerator = reportGenerator;
    }

    public void viewReport() {

        System.out.println(reportGenerator.generateReport());
    }
}
