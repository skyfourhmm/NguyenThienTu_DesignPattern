package model;

public class Table implements CoffeComponent{

    private double price;
    private String name;

    public Table(double price, String name) {
        this.price = price;
        this.name = name;
    }

    @Override
    public void showProperty() {
        System.out.println("Name Table: " + name + " Price: " + price);
    }

    @Override
    public double totalPrice() {
        return price;
    }
}
