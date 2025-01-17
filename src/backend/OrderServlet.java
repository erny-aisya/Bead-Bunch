package backend;

import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.List;

public class OrderServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Extract order details from the request and save them
        Order order = new Gson().fromJson(request.getReader(), Order.class);
        List<Order> orders = FileHandler.loadOrders();  // Ensure the loadOrders() method is defined in FileHandler
        orders.add(order);
        FileHandler.saveOrders(orders);  // Ensure saveOrders() is defined in FileHandler
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
