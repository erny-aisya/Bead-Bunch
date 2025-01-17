package backend;

import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.List;

public class ProductServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Load the products using the loadProducts method from FileHandler
        List<Product> products = FileHandler.loadProducts();  // Ensure the loadProducts() method is defined in FileHandler

        // Set the products attribute to be used in the view (JSP or response)
        request.setAttribute("products", products);

        // Forward the request to the JSP page or send response
        request.getRequestDispatcher("/products.jsp").forward(request, response);  // Adjust the forwarding path as needed
    }
}
