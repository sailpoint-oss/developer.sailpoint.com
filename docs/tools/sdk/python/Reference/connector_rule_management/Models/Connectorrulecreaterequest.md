---
id: connectorrulecreaterequest
title: Connectorrulecreaterequest
pagination_label: Connectorrulecreaterequest
sidebar_label: Connectorrulecreaterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorrulecreaterequest', 'Connectorrulecreaterequest'] 
slug: /tools/sdk/python/connector-rule-management/models/connectorrulecreaterequest
tags: ['SDK', 'Software Development Kit', 'Connectorrulecreaterequest', 'Connectorrulecreaterequest']
---

# Connectorrulecreaterequest

ConnectorRuleCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the rule | [required]
**description** | **str** | a description of the rule's purpose | [optional] 
**type** |  **Enum** [  'BuildMap',    'ConnectorAfterCreate',    'ConnectorAfterDelete',    'ConnectorAfterModify',    'ConnectorBeforeCreate',    'ConnectorBeforeDelete',    'ConnectorBeforeModify',    'JDBCBuildMap',    'JDBCOperationProvisioning',    'JDBCProvision',    'PeopleSoftHRMSBuildMap',    'PeopleSoftHRMSOperationProvisioning',    'PeopleSoftHRMSProvision',    'RACFPermissionCustomization',    'ResourceObjectCustomization',    'SAPBuildMap',    'SapHrManagerRule',    'SapHrOperationProvisioning',    'SapHrProvision',    'SuccessFactorsOperationProvisioning',    'WebServiceAfterOperationRule',    'WebServiceBeforeOperationRule',    'ResourceObjectCustomization' ] | the type of rule | [required]
**signature** | [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**source_code** | [**Sourcecode**](sourcecode) |  | [required]
**attributes** | **object** | a map of string to objects | [optional] 
}

## Example

```python
from sailpoint.connector_rule_management.models.connectorrulecreaterequest import Connectorrulecreaterequest

connectorrulecreaterequest = Connectorrulecreaterequest(
name='WebServiceBeforeOperationRule',
description='This rule does that',
type='BuildMap',
signature=sailpoint.connector_rule_management.models.connectorrulecreaterequest_signature.connectorrulecreaterequest_signature(
                    input = [
                        sailpoint.connector_rule_management.models.argument.Argument(
                            name = 'firstName', 
                            description = 'the first name of the identity', 
                            type = 'String', )
                        ], 
                    output = sailpoint.connector_rule_management.models.argument.Argument(
                        name = 'firstName', 
                        description = 'the first name of the identity', 
                        type = 'String', ), ),
source_code=sailpoint.connector_rule_management.models.source_code.Source Code(
                    version = '1.0', 
                    script = 'return "Mr. " + firstName;', ),
attributes={}
)

```
[[Back to top]](#) 

