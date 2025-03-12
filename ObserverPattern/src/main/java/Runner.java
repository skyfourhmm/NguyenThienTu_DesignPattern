

import LopHoc.LopHocImpl;
import LopHoc.SinhVienImpl;

import java.util.Scanner;

public class Runner {
    public static void main(String[] args) {
        LopHocImpl lopHoc = new LopHocImpl("KTPM17C");

        SinhVienImpl sv1 = new SinhVienImpl("Nguyen Van A");
        SinhVienImpl sv2 = new SinhVienImpl("Nguyen Van B");
        SinhVienImpl sv3 = new SinhVienImpl("Nguyen Van C");

        lopHoc.themSinhVien(sv1);
        lopHoc.themSinhVien(sv2);
        lopHoc.themSinhVien(sv3);

        lopHoc.responseNotification("sinh vien nghi");
    }
}
