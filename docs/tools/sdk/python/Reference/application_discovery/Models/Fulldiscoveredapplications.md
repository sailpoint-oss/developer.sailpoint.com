---
id: fulldiscoveredapplications
title: Fulldiscoveredapplications
pagination_label: Fulldiscoveredapplications
sidebar_label: Fulldiscoveredapplications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Fulldiscoveredapplications', 'Fulldiscoveredapplications'] 
slug: /tools/sdk/python/application-discovery/models/fulldiscoveredapplications
tags: ['SDK', 'Software Development Kit', 'Fulldiscoveredapplications', 'Fulldiscoveredapplications']
---

# Fulldiscoveredapplications

Discovered applications with their respective associated sources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the discovered application. | [optional] 
**name** | **str** | Name of the discovered application. | [optional] 
**discovery_source** | **str** | Source from which the application was discovered. | [optional] 
**discovered_vendor** | **str** | The vendor associated with the discovered application. | [optional] 
**description** | **str** | A brief description of the discovered application. | [optional] 
**recommended_connectors** | **[]str** | List of recommended connectors for the application. | [optional] 
**discovered_at** | **datetime** | The timestamp when the application was last received via an entitlement aggregation invocation  or a manual csv upload, in ISO 8601 format. | [optional] 
**created_at** | **datetime** | The timestamp when the application was first discovered, in ISO 8601 format. | [optional] 
**status** | **str** | The status of an application within the discovery source.  By default this field is set to \"ACTIVE\" when the application is discovered.  If an application has been deleted from within the discovery source, the status will be set to \"INACTIVE\". | [optional] 
**associated_sources** | **[]str** | List of associated sources related to this discovered application. | [optional] 
**operational_status** | **str** | The operational status of the application. | [optional] 
**discovery_source_category** | **str** | The category of the discovery source. | [optional] 
**license_count** | **int** | The number of licenses associated with the application. | [optional] 
**is_sanctioned** | **bool** | Indicates whether the application is sanctioned. | [optional] [default to False]
**logo** | **str** | URL of the application's logo. | [optional] 
**app_url** | **str** | The URL of the application. | [optional] 
**groups** | **[]object** | List of groups associated with the application. | [optional] 
**users_count** | **str** | The count of users associated with the application. | [optional] 
**application_owner** | **[]str** | The owners of the application. | [optional] 
**it_application_owner** | **[]str** | The IT owners of the application. | [optional] 
**business_criticality** | **str** | The business criticality level of the application. | [optional] 
**data_classification** | **str** | The data classification level of the application. | [optional] 
**business_unit** | **str** | The business unit associated with the application. | [optional] 
**install_type** | **str** | The installation type of the application. | [optional] 
**environment** | **str** | The environment in which the application operates. | [optional] 
**risk_score** | **int** | The risk score of the application ranging from 0-100, 100 being highest risk. | [optional] 
**is_business** | **bool** | Indicates whether the application is used for business purposes. | [optional] [default to True]
**total_signins_count** | **int** | The total number of sign-in accounts for the application. | [optional] 
**risk_level** |  **Enum** [  'High',    'Medium',    'Low' ] | The risk level of the application. | [optional] 
**is_privileged** | **bool** | Indicates whether the application has privileged access. | [optional] [default to False]
**warranty_expiration** | **str** | The warranty expiration date of the application. | [optional] 
**attributes** | **object** | Additional attributes of the application useful for visibility of governance posture. | [optional] 
}

## Example

```python
from sailpoint.application_discovery.models.fulldiscoveredapplications import Fulldiscoveredapplications

fulldiscoveredapplications = Fulldiscoveredapplications(
id='',
name='ExampleApp',
discovery_source='csv',
discovered_vendor='ExampleVendor',
description='An application for managing examples.',
recommended_connectors=["ConnectorA","ConnectorB"],
discovered_at='2023-01-01T12:00Z',
created_at='2023-01-01T12:00Z',
status='ACTIVE',
associated_sources=["e0cc5d7d-bf7f-4f81-b2af-8885b09d9923","a0303682-5e4a-44f7-bdc2-6ce6112549c1"],
operational_status='Operational',
discovery_source_category='sso',
license_count=175,
is_sanctioned=True,
logo='https://spdojtest1.oktapreview.com/api/v1/apps/0oaeuef9hiipHcMgR0h7/logo',
app_url='https://spdojtest1.oktapreview.com/home/salesforce/0oaeuef9hiipHcMgR0h7/24',
groups=[{"map":{"id":"id","name":"JIRA Users","nativeIdentifiers":{"map":{"distinguishedName":"CN=Engineering users,OU=Engineering,DC=corp,DC=example,DC=com","id":"nativeId","objectSid":"S-1-5-21-717838489-685202119-709183397-1177"}},"type":"EXTERNAL_GROUP|LOCAL_GROUP"}}],
users_count='175',
application_owner=["owner1@example.com","owner2@example.com"],
it_application_owner=["itowner1@example.com","itowner2@example.com"],
business_criticality='High',
data_classification='Restricted',
business_unit='Finance',
install_type='On Premise',
environment='Production',
risk_score=1,
is_business=False,
total_signins_count=1,
risk_level='Low',
is_privileged=False,
warranty_expiration='2023-09-25T14:07:27.000+0000',
attributes={"features":["IMPORT_PROFILE_UPDATES","IMPORT_USER_SCHEMA","IMPORT_NEW_USERS"],"identityStack":"NOT_SHARED","selfService":false,"signOnMode":"SAML_2_0"}
)

```
[[Back to top]](#) 

