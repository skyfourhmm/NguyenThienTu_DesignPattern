import model.ConvertAdapter;
import model.JsonTaget;
import model.XMLAdaptee;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        JsonTaget json = new ConvertAdapter(new XMLAdaptee());
        json.send("{\n" +
                "  \"name\": \"Cà phê\",\n" +
                "  \"price\": 50\n" +
                "}");
    }
}
