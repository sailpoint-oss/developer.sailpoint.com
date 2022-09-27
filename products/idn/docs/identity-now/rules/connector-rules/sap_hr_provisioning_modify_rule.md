---
id: sap-provisioning-modify-rule
title: SAP HR Provisioning Modify Rule
pagination_label: SAP HR Provisioning Modify Rule
sidebar_label: SAP HR Provisioning Modify Rule
sidebar_class_name: sapHRProvisioningModifyRule
keywords: ["cloud", "rules", "sap"]
description:
  This rule performs SAP HR modification operations during
  provisioning. This rule is typically used for attribute sync to custom SAP HR
  attributes.
slug: /docs/rules/connector-rules/sap-provisioning-modify-rule
tags: ["Rules"]
---

## Overview

This rule performs SAP HR modification operations during provisioning. 
This rule is typically used for attribute sync to custom SAP HR attributes.

## Execution

- **Connector Execution** - This rule executes within the virtual appliance. It 
  may offer special abilities to perform connector-related functions, and it may
  offer managed connections to sources.
- **Logging** - Logging statements are viewable within the ccg.log on the
  virtual appliance, and they are viewable by SailPoint personnel.

![Rule Execution](../img/connector_execution.png)

## Input

| Argument    | Type                                              | Purpose                                                                                                                    |
| ----------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| application | sailpoint.object.Application                      | Reference to the application object.                                                                                        |
| schema      | sailpoint.object.Schema                           | Reference to the application schema.                                                                                        |
| destination | com.sap.conn.jco.JCoDestination                   | Connected and ready-to-use SAP destination object that can be used to call BAPI function modules and call to SAP tables. |
| plan        | sailpoint.object.ProvisioningPlan                 | Provisioning plan containing the provisioning request(s).                                                                   |
| request     | sailpoint.object.ProvisioningPlan.AbstractRequest | AccountRequest being processed. It is always null for this global rule. It is only set for SapHrOperationProvisioning.                  |
| connector   | sailpoint.connector.SAPHRConnector                | Application connector being used for the operation.                                                                         |

## Output

| Argument | Type                                | Purpose                                                                                                     |
| -------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| result   | sailpoint.object.ProvisioningResult | ProvisioningResult object containing the provisioning request's status (success, failure, retry, etc.). |

## Template

```xml
<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">
<Rule name="Example Rule" type="SapHrOperationProvisioning">
  <Description>Describe your rule here.</Description>
  <Source><![CDATA[

  // Add your logic here.

  ]]></Source>
</Rule>
```

## Example

```java
<?xml version='1.0' encoding='UTF-8'?>

<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">

<Rule name="Example Rule" type="SapHrOperationProvisioning">

  <Description>

This rule is used by the SAP HR connector for provisioning of the data.

</Description>

  <Source><![CDATA[
  import sailpoint.object.*;
  import sailpoint.object.ProvisioningPlan.AccountRequest;
  import sailpoint.object.ProvisioningPlan.AttributeRequest;
  import sailpoint.object.ProvisioningPlan.ObjectOperation;
  import sailpoint.object.ProvisioningPlan.AccountRequest.Operation;
  import sailpoint.tools.Util;
  import java.text.SimpleDateFormat;
  import java.util.Date;
  import java.util.Map;
  import java.util.HashMap;
  import com.sap.conn.jco.AbapException;
  import com.sap.conn.jco.JCoDestination;
  import com.sap.conn.jco.JCoException;
  import sailpoint.connector.ConnectorException;
  import com.sap.conn.jco.JCoFunction;
  import com.sap.conn.jco.JCoParameterField;
  import com.sap.conn.jco.JCoParameterFieldIterator;
  import com.sap.conn.jco.JCoParameterList;
  import com.sap.conn.jco.JCoStructure;
  import com.sap.conn.jco.JCoTable;
  import com.sap.conn.jco.JCoContext;

  // subtype values for email , Telephone or system user name
  String SUBTYPE_EMAIL = "0010"; //Sub info type for email address
  String SUBTYPE_PHONE= "0020"; //Sub info type for telephone number
  String SUBTYPE_SY_USERNAME= "0001";  //Sub info type for sy-username which can be mapped to SAMAccountName of AD

  ProvisioningResult result = new ProvisioningResult();

  //This function will modify the email address , Telephone or system user name if recieved in the plan
  public void doProvision() throws Exception {
    List<AccountRequest> accReqList = plan.getAccountRequests();
    String accNativeIdentity = null;
    String endDateStr = "", beginDateStr = "";
    SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");

    if (!Util.isEmpty(accReqList)) {
      for( AccountRequest accountReq : accReqList ) {
        result.setStatus( ProvisioningResult.STATUS_COMMITTED );
        accNativeIdentity = accountReq.getNativeIdentity();

        // For update operation only Email,Telephone,SY-UNAME atrribute are supported
        AttributeRequest emailAttr = accountReq.getAttributeRequest("Email");
        AttributeRequest phoneAttrib = accountReq.getAttributeRequest("Telephone");
        AttributeRequest syUserAttrib = accountReq.getAttributeRequest("System user name (SY-UNAME)");
        HashMap beginEndDateList = getCommunicationData( accNativeIdentity );

        //Finding the email attribute in provisioning plan and trying to modify the account's email id
        if ( null != emailAttr ) {
          if(null !=beginEndDateList && beginEndDateList.containsKey("emailBegin")) {
            beginDateStr = formatter.format(beginEndDateList.get("emailBegin"));
            endDateStr = formatter.format(beginEndDateList.get("emailEnd"));
          }
          modifyCommunicationData(accNativeIdentity, emailAttr.getValue(), SUBTYPE_EMAIL,beginDateStr,endDateStr);
        }

        //Finding the Telephone attribute in provisioning plan and trying to modify the account's phone
        if ( null != phoneAttrib ) {
          if(null !=beginEndDateList && beginEndDateList.containsKey("phoneBegin")) {
            beginDateStr = formatter.format(beginEndDateList.get("phoneBegin"));
            endDateStr = formatter.format(beginEndDateList.get("phoneEnd"));
          }
          modifyCommunicationData(accNativeIdentity, phoneAttrib.getValue(), SUBTYPE_PHONE,beginDateStr,endDateStr);
        }

        //Finding the system user name attribute in provisioning plan and trying to modify the account's System User Name
        if ( null != syUserAttrib) {
          if(null !=beginEndDateList && beginEndDateList.containsKey("syUserBegin")) {
            beginDateStr = formatter.format(beginEndDateList.get("syUserBegin"));
            endDateStr = formatter.format(beginEndDateList.get("syUserEnd"));
          }
          modifyCommunicationData(accNativeIdentity,syUserAttrib.getValue(), SUBTYPE_SY_USERNAME,beginDateStr,endDateStr);
        }
      }
    }
  }

  // This function will get the communication details about a given employee
  // In this example the email, Telephone and system user name begin and end date will be retrieved
  public HashMap getCommunicationData( String id ) throws Exception {
    HashMap commAttrsList = new HashMap();
    JCoFunction getCommDetail = connector.getFunction(destination, "BAPI_EMPLCOMM_GETDETAILEDLIST");
    getCommDetail.getImportParameterList().setValue("EMPLOYEENUMBER", id);
    getCommDetail.getImportParameterList().setValue("TIMEINTERVALLOW", new Date());
    getCommDetail.getImportParameterList().setValue("TIMEINTERVALHIGH", new Date());

    try {
      getCommDetail.execute(destination);
    } catch (Exception e) {
      connector.checkForExceptions(getCommDetail);
      throw new Exception(e);
    }

    JCoTable commTable = getCommDetail.getTableParameterList().getTable("COMMUNICATION");
    if ( commTable != null ) {
      int rows = commTable.getNumRows();
      for (int i = 0; i < rows; i++) {
        commTable.setRow(i);
        String commType = commTable.getString("SUBTYPE");
        commAttrsList = getDateData(commTable, commAttrsList, commType);
      }
    }
    return commAttrsList;
  }


  // function captures the begin date and end date
  public HashMap getDateData(JCoTable commTable, HashMap commAttrsList, String commType) {
    Date validBegDate = commTable.getDate("VALIDBEGIN");
    Date validEndDate = commTable.getDate("VALIDEND");
    if ( validBegDate != null && validEndDate != null ) {
      if (commType.equals(SUBTYPE_EMAIL)) {
        commAttrsList.put("emailBegin", validBegDate);
        commAttrsList.put("emailEnd", validEndDate);
      } else if (commType.equals(SUBTYPE_PHONE)) {
        commAttrsList.put("phoneBegin", validBegDate);
        commAttrsList.put("phoneEnd", validEndDate);
      }else if (commType.equals(SUBTYPE_SY_USERNAME)) {
        commAttrsList.put("syUserBegin", validBegDate);
        commAttrsList.put("syUserEnd", validEndDate);
      }
    }
    return commAttrsList;
  }


  /**Function modifies the email address , Telephone number and System user name of SAP HR record.
  If Email or Phone is present(assigned) then used BAPI_EMPLCOMM_CHANGE
  If Email or Phone is not present(assigned) then used BAPI_EMPLCOMM_CREATE
  * @param userId
  * @param parValue
  * @param type
  * @param begDate
  * @param endDate
  * @throws ConnectorException
  */

  private void modifyCommunicationData( String userId, String parValue, String type,String begDate,String endDate ) throws ConnectorException {
    JCoFunction jcoFunctionObject;
    if (begDate.length() > 1 ) { //If date is alreday present then use BAPI_EMPLCOMM_CHANGE to modify data
      jcoFunctionObject = connector.getFunction(destination,"BAPI_EMPLCOMM_CHANGE");
    } else { //If date is not present then use BAPI_EMPLCOMM_CREATE to add data
      jcoFunctionObject = connector.getFunction(destination,"BAPI_EMPLCOMM_CREATE");
    }

    // BAPI locks the record for processing
    JCoFunction functionEnqueue = destination.getRepository().getFunction("BAPI_EMPLOYEE_ENQUEUE");
    functionEnqueue.getImportParameterList().setValue("NUMBER", userId);
    if ( functionEnqueue == null )
      throw new RuntimeException("BAPI_EMPLOYEE_ENQUEUE not found in SAP.");

    // BAPI to modify Communication data - email and phone
    if ( jcoFunctionObject == null )
      throw new RuntimeException("BAPI_EMPLCOMM_CHANGE not found in SAP.");

    String returnPersonnelID = null;
    jcoFunctionObject.getImportParameterList().setValue("EMPLOYEENUMBER", userId); // Personal Number
    jcoFunctionObject.getImportParameterList().setValue("SUBTYPE", type); // SubType 0010/0020 - Email/Phone
    jcoFunctionObject.getImportParameterList().setValue("VALIDITYBEGIN", begDate); // Begin Date
    jcoFunctionObject.getImportParameterList().setValue("VALIDITYEND", endDate); // End Date
    jcoFunctionObject.getImportParameterList().setValue("COMMUNICATIONID", parValue); // Email Address to modify

    // BAPI unlocks the record after processing
    JCoFunction functionDequeue = destination.getRepository().getFunction("BAPI_EMPLOYEE_DEQUEUE");
    functionDequeue.getImportParameterList().setValue("NUMBER", userId);
    if ( functionDequeue == null )
      throw new RuntimeException("BAPI_EMPLOYEE_DEQUEUE not found in SAP.");

    try {
      // executing Bapis
      JCoContext.begin(destination);
      functionEnqueue.execute(destination);
      jcoFunctionObject.execute(destination);
      functionDequeue.execute(destination);
    } catch (ConnectorException e) {
      throw e;
    } finally {
      JCoContext.end(destination);
    }
  }

  doProvision();
  return result;

    ]]></Source>

</Rule>
```
