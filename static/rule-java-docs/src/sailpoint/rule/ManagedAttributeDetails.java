/*
 * Copyright (C) 2021 SailPoint Technologies, Inc., All Rights Reserved.
 */
package sailpoint.rule;

import java.util.Map;

/**
 * Model to represent MangedAttribute "view" returned by IdnRuleUtil.
 */
public class ManagedAttributeDetails {
    private String description;
    private Map<String, Object> attributes;
    private String name;
    private String value;
    private String type;

    public String getDescription() {
        return description;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }

    public String getType() {
        return type;
    }

}