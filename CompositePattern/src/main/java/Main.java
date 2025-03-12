import model.CoffeComponent;
import model.CoffeComposite;
import model.Table;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        CoffeComponent product1 = new Table( 100, "bàn số 1");
        CoffeComponent product2 = new Table( 98, "bàn số 2");
        CoffeComponent product3 = new Table( 200, "bàn số 3");

        List<CoffeComponent> products = Arrays.asList(product1, product2, product3);
        CoffeComponent product = new CoffeComposite(products);

        product.showProperty();
        System.out.println("total price of coffe: " + product.totalPrice());
    }
}
