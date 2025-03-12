package LopHoc;

import java.util.ArrayList;
import java.util.List;

public class LopHocImpl implements  LopHoc {
    String tenLop;
    private List<SinhVien> danhSachSv = new ArrayList<>();

    public LopHocImpl(String tenLop) {
        this.tenLop = tenLop;
    }

    @Override
    public void themSinhVien(SinhVien sv) {
        danhSachSv.add(sv);
    }

    @Override
    public void responseNotification(String noti) {
        System.out.println("Lớp trưởng lớp " + tenLop+ " thông báo");
        for (SinhVien sv : danhSachSv) {
            sv.requestNotification(noti);
        }
    }
}
