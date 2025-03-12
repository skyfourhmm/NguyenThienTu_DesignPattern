package model;

import org.json.JSONObject;
import org.json.XML;

public class ConvertAdapter implements JsonTaget{

    private XMLAdaptee adaptee;
    public ConvertAdapter(XMLAdaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void send(String json) {
        String xml = this.translate(json);
        adaptee.receive(xml);
    }

    public String translate(String json) {
        JSONObject jsonString = new JSONObject(json);

        // Chuyển sang XML
        String xml = XML.toString(json, "product");
        return "chuỗi json sau khi được chuyển đổi "+ xml;
    }
}
