import ThanhVienCongTy.GiamDoc;
import ThanhVienCongTy.KeToan;
import ThanhVienCongTy.NhanVienVP;
import ThanhVienCongTy.ThanhVien;

import java.util.Scanner;

public class Runner {
    public static void main(String[] args) {

            Scanner scanner = new Scanner(System.in);
            ThanhVien thanhvien ;
            String chucvu = scanner.nextLine();
            switch (chucvu) {
                case "Giám Đốc":
                    thanhvien = new GiamDoc("Tứ");
                    break;
                case "Nhân Viên Văn Phòng":
                    thanhvien = new NhanVienVP("Tứ");
                    break;
                case "Kế Toán":
                    thanhvien = new KeToan("Tứ");
                    break;
                default:
                    System.out.println("Chức vụ không hợp lệ!");
                    return;
            }
        System.out.println(thanhvien.getTen() + " (" + thanhvien.getChucVu() + ") phải làm: " + thanhvien.CongViec());
    }
}
