---
id: webservices-after-provisioning-rule
title: Web Services After Operation Rule
pagination_label: Web Services After Operation Rule
sidebar_label: Web Services After Operation Rule
sidebar_class_name: webServicesAfterOperationRule
keywords: ['cloud', 'rules', 'webservices']
description: This rule calculates attributes after a web-service operation call.
slug: /extensibility/rules/connector-rules/webservices-after-provisioning-rule
tags: ['Rules']
---

## Overview

This rule calculates attributes after a web-service operation call.

## Execution

- **Connector Execution** - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument | Type | Purpose |
| --- | --- | --- |
| application | sailpoint.object.Application | Application whose data file is being processed. |
| processedResponseObject | List\<Map\<String, Object\>\> | List of map (account/group). The map contains a key, the identityAttribute of the application schema, and a value, all the account/group attributes (schema) passed by the connector after parsing the respective API response. |
| requestEndPoint | sailpoint.connector.webservices.Endpoint | Current request information. It contains the header, body, context url, method type, response attribute map, successful response code. |
| restClient | sailpoint.connector.webservices.WebServicesClient | WebServicesClient (HttpClient) object that enables the user to call the Web Services API target system. |
| rawResponseObject | String | String object that holds the raw response returned from the target system, which can be in JSON or XML form. |

## Output

| Argument | Type | Purpose |
| --- | --- | --- |
| updatedAccountOrGroupList | java.util.Map | `Map` object returned from the After Operation Rule. It may contain any or all of the following: an updated list of account / group resource objects, identified by key `data`/ attribute values to be updated into application by the connector state map identified by key `connectorStateMap`. Each resource (account/group) object is of type `Map`, which contains the **key-value** pair. The **key** represents the schema attribute name, and the **value** represents the account/group attribute value. |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="WebServiceAfterOperationRule">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

```json
{
  "signature": {
    "input": [
      {
        "name": "application",
        "description": "The application whose data file is being processed.",
        "type": null
      },
      {
        "name": "requestEndPoint",
        "description": "The current request information contain header, body ,response object",
        "type": null
      },
      {
        "name": "processedResponseObject",
        "description": "Response Object processed by the Web services connector",
        "type": null
      },
      {
        "name": "rawResponseObject",
        "description": "Response Object returned from the end system",
        "type": null
      },
      {
        "name": "restClient",
        "description": "REST Client Object",
        "type": null
      }
    ],
    "output": {
      "name": "Update Account/Group List",
      "description": "Update information Map contains parsed list of accounts",
      "type": null
    }
  },
  "sourceCode": {
    "version": "1.0",
    "script": "/** Your Code Here */"
  },
  "description": "Describe your rule here.",
  "type": "WebServiceAfterOperationRule",
  "name": "Example Rule",
  "attributes": {
    "sourceVersion": "1.0"
  }
}
```

## Example

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="WebServiceAfterOperationRule">
    <Description>This rule is used by the  Web Services connector after performing any operation like test connection, aggregation etc.</Description>
    <Source><![CDATA[
        import connector.common.JsonUtil;

        import java.util.HashMap;
        import java.util.Map;
        import java.util.List;
        import java.util.ArrayList;

            Map updatedMapInfo = new HashMap();
            List list = new ArrayList();
            ArrayList < String > Roles = new ArrayList<String>();
            Map response = (Map) JsonUtil.toMap(rawResponseObject);
            int roleSize = 0;
            String newName;
            List finallist = new ArrayList();
            List workspace = new ArrayList();

            log.error("RULES response at start" + response);
            if (response.get("data") != null) {

                list = (ArrayList) response.get("data");

                for (int d = 0; d < list.size(); d++) {

                    Map responseMap = (Map) list.get(d);

                    if (responseMap.get("attributes") != null) {
                        Map newmap = new HashMap();
                        Map data = (Map) responseMap.get("attributes");
                        newmap.put("firstName", data.get("firstName"));
                        newmap.put("lastName", data.get("lastName"));
                        newmap.put("displayName", data.get("displayName"));
                        newmap.put("userName", data.get("userName"));
                        newmap.put("email", data.get("email"));

                        if (data.get("workspaceMemberships") != null) {

                            ArrayList Workspacedetail = (ArrayList) data.get("workspaceMemberships");

                            for (int i = 0; i < Workspacedetail.size(); i++) {

                                Map work = (Map) Workspacedetail.get(i);

                                for (int w = 0; w < work.size(); w++) {

                                    if (work.get("workspaceName") != null) {

                                        workspace.add(work.get("workspaceName"));

                                        Roles = (ArrayList) work.get("workspaceRoles");

                                        for (int r = 0; r < Roles.size(); r++) {

                                            if (Roles.get(r) != null) {
                                                newName = Roles.get(r).toString() + " - " + work.get("workspaceName");

                                                if (newName != null) {
                                                    Roles.set(r, newName);
                                                    newmap.put("workspaceRoles", Roles);

                                                }

                                            }
                                        }
                                    }
                                    break;
                                }
                            }
                        }

                        finallist.add(newmap);

                    }
                }

            }
            log.error("RULES newmap at end" + newmap);
            log.error("RULES Finallist at end" + finallist);

            log.error("RULES processedResponseObject Before is " + processedResponseObject);

            updatedMapInfo.put("data", finallist);
            log.error("RULES updatedMapInfo is " + updatedMapInfo);

            log.error("RULES processedResponseObject after is " + processedResponseObject);
            return updatedMapInfo;
        ]]></Source>
</Rule>
```

## Attach to source

Refer to [Attaching Connector-Related Rules to Sources](./index.md#webserviceafteroperation-rule) for details on how to attach your rule to your source.
