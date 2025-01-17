package backend;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

public class FileHandler {

    // Method to load orders from the orders.json file
    public static List<Order> loadOrders() {
        Gson gson = new Gson();
        List<Order> orders = null;

        try (FileReader reader = new FileReader("src/data/orders.json")) {
            Type orderListType = new TypeToken<List<Order>>() {}.getType();
            orders = gson.fromJson(reader, orderListType);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return orders;
    }

    // Method to save orders to the orders.json file
    public static void saveOrders(List<Order> orders) {
        Gson gson = new Gson();

        try (FileWriter writer = new FileWriter("src/data/orders.json")) {
            gson.toJson(orders, writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Method to load products from the products.json file
    public static List<Product> loadProducts() {
        Gson gson = new Gson();
        List<Product> products = null;

        try (FileReader reader = new FileReader("src/data/products.json")) {
            Type productListType = new TypeToken<List<Product>>() {}.getType();
            products = gson.fromJson(reader, productListType);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return products;
    }

    // Method to save products to the products.json file
    public static void saveProducts(List<Product> products) {
        Gson gson = new Gson();

        try (FileWriter writer = new FileWriter("src/data/products.json")) {
            gson.toJson(products, writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
