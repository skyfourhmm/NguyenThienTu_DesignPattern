package LopHoc;

public class SinhVienImpl implements SinhVien {

    String tenSinhVien;

    public SinhVienImpl(String tenSinhVien) {
        this.tenSinhVien = tenSinhVien;
    }

    @Override
    public void requestNotification(String notification) {
        System.out.println("sinh vien "+ tenSinhVien + " nhan duoc thong bao " + notification);
    }
}
