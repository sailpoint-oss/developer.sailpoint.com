---
id: v2024-connector-detail1
title: ConnectorDetail1
pagination_label: ConnectorDetail1
sidebar_label: ConnectorDetail1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorDetail1', 'V2024ConnectorDetail1'] 
slug: /tools/sdk/python/v2024/models/connector-detail1
tags: ['SDK', 'Software Development Kit', 'ConnectorDetail1', 'V2024ConnectorDetail1']
---

# ConnectorDetail1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The connector name | [optional] 
**source_config_xml** | **str** | XML representation of the source config data | [optional] 
**source_config** | **str** | JSON representation of the source config data | [optional] 
**direct_connect** | **bool** | true if the source is a direct connect source | [optional] 
**file_upload** | **bool** | Connector config's file upload attribute, false if not there | [optional] 
**uploaded_files** | **str** | List of uploaded file strings for the connector | [optional] 
**connector_metadata** | **object** | Object containing metadata pertinent to the UI to be used | [optional] 
}

## Example

```python
from sailpoint.v2024.models.connector_detail1 import ConnectorDetail1

connector_detail1 = ConnectorDetail1(
name='JDBC',
source_config_xml='<Form connectorName='Active Directory - Direct' directConnect='true' name='Active Directory' status='released' type='SourceConfig' xmlns='http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd'>
	<Field defaultValue='true' hidden='true' name='cloudAuthEnabled' type='boolean' value='true'> </Field> </Form>',
source_config='{Form={Field={_defaultValue=true, _hidden=true, _name=cloudAuthEnabled, _type=boolean, _value=true}, _xmlns=http://www.sailpoint.com/xsd/sailpoint_form_1_0.xsd, _connectorName=Active Directory - Direct, _directConnect=true, _name=Active Directory, _status=released, _type=SourceConfig, __text=\n\t}}',
direct_connect=True,
file_upload=False,
uploaded_files='[]',
connector_metadata={supportedUI=EXTJS}
)

```
[[Back to top]](#) 

