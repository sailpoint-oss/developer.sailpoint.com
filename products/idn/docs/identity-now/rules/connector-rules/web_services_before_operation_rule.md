# Web Services Before Operation Rule

## Overview

This rule is used to calculate attributes before a web-service operation call.

## Execution

- **Connector Execution** - This rule executes within the Virtual Appliance and may offer special abilities to perform connector-related functions, and may offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the Virtual Appliance and by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument         | Type                                              | Purpose                                                                    |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| application      | sailpoint.object.Application                      | Application whose data file is being processed.                            |
| provisioningPlan | sailpoint.object.ProvisioningPlan            | Used to update the payload of the http request. Provisioning plan has an account request which defines the operation to be performed on the account. An account request can contain multiple attributes requests and each attribute request represents an operation on a single account attribute. This argument enables the user to update the body/payload or URL attributes of endpoint object using the provisioningPlan information.|
| requestEndPoint  | sailpoint.connector.webservices.EndPoint     | Current request information; contains the header, body, context url, method type, response attribute map, successful response code |
| restClient       | sailpoint.connector.webservices.WebServicesClient | This is a WebServicesClient (HttpClient) object that would enable the user to call Web Services API to target system. |
| oldResponseMap   | java.util.Map                                     | The response object returned from earlier endpoint configuration of same operation type like Account Aggregation, Get Object and so on. |

## Output

| Argument         | Type                                              | Purpose                                                                    |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| EndPoint / Map   | sailpoint.connector.webservices.EndPoint / sailpoint.connector.webservices.Map | The rule allows user to return the Endpoint object (requestEndPoint) or a map. The map can hold **updatedEndPoint** and **connectorStateMap** keys where the value expected is **Endpoint** (requestEndPoint) and **connectorStateMap** object respectively. The **connectorStateMap** object is a map that contains key and value of the attribute that must be updated in the application through rule.

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="WebServiceBeforeOperationRule">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

```java
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="WebServiceBeforeOperationRule">
  <Description>This rule is used by the  Web Services connector before performing any operation like testconnection, aggregation etc.</Description>
  <Source><![CDATA[
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import connector.common.JsonUtil;
import connector.common.Util;
import sailpoint.connector.webservices.EndPoint;
import sailpoint.connector.webservices.WebServicesClient;
import sailpoint.object.Application;
import sailpoint.object.ProvisioningPlan;
import sailpoint.object.ProvisioningPlan.AccountRequest;              
                
        Map body = requestEndPoint.getBody();
        String jsonBody = (String) body.get("jsonBody");
        log.info("Rule - Modify Body: running");

        try {

            Map jsonMap = JsonUtil.toMap(jsonBody);
            if (jsonMap != null) {
                Object roleEntry = jsonMap.get("webSiteAndRole");
                String role = "";
                if (roleEntry != null && roleEntry instanceof ArrayList) {
                    ArrayList rolesArray = (ArrayList) roleEntry;
                    if (rolesArray.size() > 0) {
                        role = (String) rolesArray.get(0);
                    }
                } else if (roleEntry != null) {
                    role = (String) roleEntry;
                }

                jsonMap.remove("webSiteAndRole");
                jsonMap.put("webSiteAndRole", role);

                log.info("Rule - Modify Body: setting webSiteAndRole = " + role);
                String webID = "";
                if (provisioningPlan != null) {
                    log.info("Rule - Modify Body: plan is not null");
                    for (AccountRequest accReq : Util.iterate(provisioningPlan.getAccountRequests())) {
                        log.info("Rule - Modify Body: iterating over account requests");
                        for (ProvisioningPlan.AttributeRequest attReq : Util.iterate(accReq.getAttributeRequests())) {
                            log.info("Rule - Modify Body: iterating over attribute requests");
                            String attrName = attReq.getName();
                            String value = null;
                            if (attrName != null && "webId".equalsIgnoreCase(attrName)) {
                                webID = (String) attReq.getValue();
                                log.info("Rule - Modify Body: setting webID = " + webID);
                            }
                        }
                    }
                } else {
                    log.info("Rule - Modify Body: plan is null");
                }

                if (!"".equals(webID)) {
                    jsonMap.put("webID", webID);
                }

                // Add in any other missing fields that are required
                if (!jsonMap.containsKey("webLogonEmail")) {
                    jsonMap.put("webLogonEmail", "");
                }
                if (!jsonMap.containsKey("taxID")) {
                    jsonMap.put("taxID", "");
                }
                if (!jsonMap.containsKey("taxIdType")) {
                    jsonMap.put("taxIdType", "");
                }
                if (!jsonMap.containsKey("actorLogonId")) {
                    jsonMap.put("actorLogonId", "");
                }

                String finalBody = JsonUtil.render(jsonMap);
                body.put("jsonBody", finalBody);
                requestEndPoint.setBody(body);
            }
        } catch (Exception ex) {
            log.error("Rule - Modify Body: " + ex);
        }

        return requestEndPoint;​
  ]]></Source>
</Rule>
```
