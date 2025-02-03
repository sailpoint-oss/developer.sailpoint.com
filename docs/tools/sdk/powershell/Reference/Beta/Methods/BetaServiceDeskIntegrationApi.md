---
id: beta-service-desk-integration
title: ServiceDeskIntegration
pagination_label: ServiceDeskIntegration
sidebar_label: ServiceDeskIntegration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceDeskIntegration', 'BetaServiceDeskIntegration'] 
slug: /tools/sdk/powershell/beta/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegration', 'BetaServiceDeskIntegration']
---


# ServiceDeskIntegration
  Use this API to build an integration between Identity Security Cloud and a service desk ITSM (IT service management) solution.
Once an administrator builds this integration between Identity Security Cloud and a service desk, users can use Identity Security Cloud to raise and track tickets that are synchronized between Identity Security Cloud and the service desk.

In Identity Security Cloud, administrators can create a service desk integration (sometimes also called an SDIM, or Service Desk Integration Module) by going to Admin &gt; Connections &gt; Service Desk and selecting &#39;Create.&#39;

To create a Generic Service Desk integration, for example, administrators must provide the required information on the General Settings page, the Connectivity and Authentication information, Ticket Creation information, Status Mapping information, and Requester Source information on the Configure page.
Refer to [Integrating SailPoint with Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html) for more information about the process of setting up a Generic Service Desk in Identity Security Cloud.

Administrators can create various service desk integrations, all with their own nuances.
The following service desk integrations are available:

- [Atlassian Cloud Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_cloud/help/integrating_jira_cloud_sd/introduction.html)

- [Atlassian Server Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_server/help/integrating_jira_server_sd/introduction.html)

- [BMC Helix ITSM Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_ITSM_sd/help/integrating_bmc_helix_itsm_sd/intro.html)

- [BMC Helix Remedyforce Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_remedyforce_sd/help/integrating_bmc_helix_remedyforce_sd/intro.html)

- [Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html)

- [ServiceNow Service Desk](https://documentation.sailpoint.com/connectors/servicenow/sdim/help/integrating_servicenow_sdim/intro.html)

- [Zendesk Service Desk](https://documentation.sailpoint.com/connectors/zendesk/help/integrating_zendesk_sd/introduction.html)
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaServiceDeskIntegration**](#create-service-desk-integration) | **POST** `/service-desk-integrations` | Create new Service Desk integration
[**Remove-BetaServiceDeskIntegration**](#delete-service-desk-integration) | **DELETE** `/service-desk-integrations/{id}` | Delete a Service Desk integration
[**Get-BetaServiceDeskIntegration**](#get-service-desk-integration) | **GET** `/service-desk-integrations/{id}` | Get a Service Desk integration
[**Get-BetaServiceDeskIntegrationList**](#get-service-desk-integration-list) | **GET** `/service-desk-integrations` | List existing Service Desk integrations
[**Get-BetaServiceDeskIntegrationTemplate**](#get-service-desk-integration-template) | **GET** `/service-desk-integrations/templates/{scriptName}` | Service Desk integration template by scriptName
[**Get-BetaServiceDeskIntegrationTypes**](#get-service-desk-integration-types) | **GET** `/service-desk-integrations/types` | List Service Desk integration types
[**Get-BetaStatusCheckDetails**](#get-status-check-details) | **GET** `/service-desk-integrations/status-check-configuration` | Get the time check configuration
[**Update-BetaServiceDeskIntegration**](#patch-service-desk-integration) | **PATCH** `/service-desk-integrations/{id}` | Patch a Service Desk Integration
[**Send-BetaServiceDeskIntegration**](#put-service-desk-integration) | **PUT** `/service-desk-integrations/{id}` | Update a Service Desk integration
[**Update-BetaStatusCheckDetails**](#update-status-check-details) | **PUT** `/service-desk-integrations/status-check-configuration` | Update the time check configuration


## create-service-desk-integration

Create a new Service Desk integration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ServiceDeskIntegrationDto | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | True  | The specifics of a new integration to create

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Details of the created integration | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ServiceDeskIntegrationDto = @"{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}"@
# Create new Service Desk integration
try {
    $Result = ConvertFrom-JsonToServiceDeskIntegrationDto -Json $ServiceDeskIntegrationDto
    New-BetaServiceDeskIntegration-BetaServiceDeskIntegrationDto $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaServiceDeskIntegration -BetaServiceDeskIntegrationDto $ServiceDeskIntegrationDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaServiceDeskIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-service-desk-integration

Delete an existing Service Desk integration by ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of Service Desk integration to delete

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Service Desk integration with the given ID successfully deleted | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "anId" # String | ID of Service Desk integration to delete
# Delete a Service Desk integration
try {
    Remove-BetaServiceDeskIntegration-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaServiceDeskIntegration -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaServiceDeskIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-service-desk-integration

Get an existing Service Desk integration by ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Service Desk integration to get

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | ServiceDeskIntegrationDto with the given ID | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "anId" # String | ID of the Service Desk integration to get
# Get a Service Desk integration
try {
    Get-BetaServiceDeskIntegration-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaServiceDeskIntegration -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaServiceDeskIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-service-desk-integration-list

Get a list of Service Desk integration objects.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in*
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type

[**ServiceDeskIntegrationDto[]**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of ServiceDeskIntegrationDto | ServiceDeskIntegrationDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
$Filters = 'id eq 2c91808b6ef1d43e016efba0ce470904' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
# List existing Service Desk integrations
try {
    Get-BetaServiceDeskIntegrationList
    
    # Below is a request that includes all optional parameters
    # Get-BetaServiceDeskIntegrationList -BetaOffset $Offset -BetaLimit $Limit -BetaSorters $Sorters -BetaFilters $Filters -BetaCount $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaServiceDeskIntegrationList"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-service-desk-integration-template

This API endpoint returns an existing Service Desk integration template by scriptName.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the Service Desk integration template to get

### Return type

[**ServiceDeskIntegrationTemplateDto**](../models/service-desk-integration-template-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the ServiceDeskIntegrationTemplateDto with the specified scriptName. | ServiceDeskIntegrationTemplateDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the Service Desk integration template to get
# Service Desk integration template by scriptName
try {
    Get-BetaServiceDeskIntegrationTemplate-BetaScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-BetaServiceDeskIntegrationTemplate -BetaScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaServiceDeskIntegrationTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-service-desk-integration-types

This API endpoint returns the current list of supported Service Desk integration types.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**ServiceDeskIntegrationTemplateType[]**](../models/service-desk-integration-template-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with an array of the currently supported Service Desk integration types. | ServiceDeskIntegrationTemplateType[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# List Service Desk integration types
try {
    Get-BetaServiceDeskIntegrationTypes
    
    # Below is a request that includes all optional parameters
    # Get-BetaServiceDeskIntegrationTypes  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaServiceDeskIntegrationTypes"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-status-check-details

Get the time check configuration of queued SDIM tickets.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | QueuedCheckConfigDetails containing the configured values | QueuedCheckConfigDetails
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Get the time check configuration
try {
    Get-BetaStatusCheckDetails
    
    # Below is a request that includes all optional parameters
    # Get-BetaStatusCheckDetails  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaStatusCheckDetails"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-service-desk-integration

Update an existing Service Desk integration by ID with a PATCH request.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Service Desk integration to update
 Body  | PatchServiceDeskIntegrationRequest | [**PatchServiceDeskIntegrationRequest**](../models/patch-service-desk-integration-request) | True  | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | ServiceDeskIntegrationDto as updated | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "anId" # String | ID of the Service Desk integration to update
$PatchServiceDeskIntegrationRequest = @""@
# Patch a Service Desk Integration
try {
    $Result = ConvertFrom-JsonToPatchServiceDeskIntegrationRequest -Json $PatchServiceDeskIntegrationRequest
    Update-BetaServiceDeskIntegration-BetaId $Id -BetaPatchServiceDeskIntegrationRequest $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaServiceDeskIntegration -BetaId $Id -BetaPatchServiceDeskIntegrationRequest $PatchServiceDeskIntegrationRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaServiceDeskIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-service-desk-integration

Update an existing Service Desk integration by ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Service Desk integration to update
 Body  | ServiceDeskIntegrationDto | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | True  | The specifics of the integration to update

### Return type

[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | ServiceDeskIntegrationDto as updated | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "anId" # String | ID of the Service Desk integration to update
$ServiceDeskIntegrationDto = @"{
  "ownerRef" : "",
  "cluster" : "xyzzy999",
  "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "provisioningConfig" : {
    "managedResourceRefs" : [ {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb051111",
      "name" : "My Source 1"
    }, {
      "type" : "SOURCE",
      "id" : "2c9180855d191c59015d291ceb052222",
      "name" : "My Source 2"
    } ],
    "provisioningRequestExpiration" : 7,
    "noProvisioningRequests" : true,
    "universalManager" : true,
    "planInitializerScript" : {
      "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
    }
  },
  "name" : "Service Desk Integration Name",
  "description" : "A very nice Service Desk integration",
  "attributes" : {
    "property" : "value",
    "key" : "value"
  },
  "clusterRef" : "",
  "type" : "ServiceNowSDIM",
  "beforeProvisioningRule" : ""
}"@
# Update a Service Desk integration
try {
    $Result = ConvertFrom-JsonToServiceDeskIntegrationDto -Json $ServiceDeskIntegrationDto
    Send-BetaServiceDeskIntegration-BetaId $Id -BetaServiceDeskIntegrationDto $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaServiceDeskIntegration -BetaId $Id -BetaServiceDeskIntegrationDto $ServiceDeskIntegrationDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaServiceDeskIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-status-check-details

Update the time check configuration of queued SDIM tickets.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | QueuedCheckConfigDetails | [**QueuedCheckConfigDetails**](../models/queued-check-config-details) | True  | The modified time check configuration

### Return type

[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | QueuedCheckConfigDetails as updated | QueuedCheckConfigDetails
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$QueuedCheckConfigDetails = @"{
  "provisioningStatusCheckIntervalMinutes" : "30",
  "provisioningMaxStatusCheckDays" : "2"
}"@
# Update the time check configuration
try {
    $Result = ConvertFrom-JsonToQueuedCheckConfigDetails -Json $QueuedCheckConfigDetails
    Update-BetaStatusCheckDetails-BetaQueuedCheckConfigDetails $Result
    
    # Below is a request that includes all optional parameters
    # Update-BetaStatusCheckDetails -BetaQueuedCheckConfigDetails $QueuedCheckConfigDetails  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaStatusCheckDetails"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


