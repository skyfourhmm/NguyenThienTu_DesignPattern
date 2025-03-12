package model;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class CoffeComposite implements CoffeComponent {
    private List<CoffeComponent> products = new ArrayList<>();

    public CoffeComposite(List<CoffeComponent> products) {
        this.products = products;
    }

    @Override
    public void showProperty() {
        for (CoffeComponent product : products) {
            product.showProperty();
        }
    }

    @Override
    public double totalPrice() {
        double total = 0;
        for (CoffeComponent product : products) {
            total += product.totalPrice();
        }
        return total;
    }
}
