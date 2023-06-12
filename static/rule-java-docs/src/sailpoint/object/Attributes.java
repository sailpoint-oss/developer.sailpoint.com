package sailpoint.object;

import java.util.*;

public class Attributes<K, V> extends HashMap<K, V> {
    public Map<K, V> getMap() {
        return new HashMap<>();
    }

    public List getList(String attributeName) {
        return new ArrayList();
    }

    public List<String> getStringList(String name) {
        return new ArrayList<>();
    }

    public String getString(String attributeName) {
        return "attributeValue";
    }

    public List<String> getKeys() {
        return new ArrayList<>();
    }
}
