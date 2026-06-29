---
id: connectorruleupdaterequest
title: Connectorruleupdaterequest
pagination_label: Connectorruleupdaterequest
sidebar_label: Connectorruleupdaterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectorruleupdaterequest', 'Connectorruleupdaterequest'] 
slug: /tools/sdk/python/connector-rule-management/models/connectorruleupdaterequest
tags: ['SDK', 'Software Development Kit', 'Connectorruleupdaterequest', 'Connectorruleupdaterequest']
---

# Connectorruleupdaterequest

ConnectorRuleUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the rule | [required]
**description** | **str** | a description of the rule's purpose | [optional] 
**type** |  **Enum** [  'BuildMap',    'ConnectorAfterCreate',    'ConnectorAfterDelete',    'ConnectorAfterModify',    'ConnectorBeforeCreate',    'ConnectorBeforeDelete',    'ConnectorBeforeModify',    'JDBCBuildMap',    'JDBCOperationProvisioning',    'JDBCProvision',    'PeopleSoftHRMSBuildMap',    'PeopleSoftHRMSOperationProvisioning',    'PeopleSoftHRMSProvision',    'RACFPermissionCustomization',    'ResourceObjectCustomization',    'SAPBuildMap',    'SapHrManagerRule',    'SapHrOperationProvisioning',    'SapHrProvision',    'SuccessFactorsOperationProvisioning',    'WebServiceAfterOperationRule',    'WebServiceBeforeOperationRule',    'ResourceObjectCustomization' ] | the type of rule | [required]
**signature** | [**ConnectorrulecreaterequestSignature**](connectorrulecreaterequest-signature) |  | [optional] 
**source_code** | [**Sourcecode**](sourcecode) |  | [required]
**attributes** | **object** | a map of string to objects | [optional] 
**id** | **str** | the ID of the rule to update | [required]
}

## Example

```python
from sailpoint.connector_rule_management.models.connectorruleupdaterequest import Connectorruleupdaterequest

connectorruleupdaterequest = Connectorruleupdaterequest(
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
attributes={},
id='8113d48c0b914f17b4c6072d4dcb9dfe'
)

```
[[Back to top]](#) 

