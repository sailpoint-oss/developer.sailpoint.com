---
id: v1-multihostintegrations-connector-attributes
title: MultihostintegrationsConnectorAttributes
pagination_label: MultihostintegrationsConnectorAttributes
sidebar_label: MultihostintegrationsConnectorAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultihostintegrationsConnectorAttributes', 'V1MultihostintegrationsConnectorAttributes'] 
slug: /tools/sdk/go/multihostintegration/models/multihostintegrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsConnectorAttributes', 'V1MultihostintegrationsConnectorAttributes']
---

# MultihostintegrationsConnectorAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxAllowedSources** | Pointer to **int32** | Maximum sources allowed count of a Multi-Host Integration | [optional] 
**LastSourceUploadCount** | Pointer to **int32** | Last upload sources count of a Multi-Host Integration | [optional] 
**ConnectorFileUploadHistory** | Pointer to [**MultihostintegrationsConnectorAttributesConnectorFileUploadHistory**](multihostintegrations-connector-attributes-connector-file-upload-history) |  | [optional] 
**MultihostStatus** | Pointer to **string** | Multi-Host integration status. | [optional] 
**ShowAccountSchema** | Pointer to **bool** | Show account schema | [optional] [default to true]
**ShowEntitlementSchema** | Pointer to **bool** | Show entitlement schema | [optional] [default to true]
**MultiHostAttributes** | Pointer to [**MultihostintegrationsConnectorAttributesMultiHostAttributes**](multihostintegrations-connector-attributes-multi-host-attributes) |  | [optional] 

## Methods

### NewMultihostintegrationsConnectorAttributes

`func NewMultihostintegrationsConnectorAttributes() *MultihostintegrationsConnectorAttributes`

NewMultihostintegrationsConnectorAttributes instantiates a new MultihostintegrationsConnectorAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultihostintegrationsConnectorAttributesWithDefaults

`func NewMultihostintegrationsConnectorAttributesWithDefaults() *MultihostintegrationsConnectorAttributes`

NewMultihostintegrationsConnectorAttributesWithDefaults instantiates a new MultihostintegrationsConnectorAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxAllowedSources

`func (o *MultihostintegrationsConnectorAttributes) GetMaxAllowedSources() int32`

GetMaxAllowedSources returns the MaxAllowedSources field if non-nil, zero value otherwise.

### GetMaxAllowedSourcesOk

`func (o *MultihostintegrationsConnectorAttributes) GetMaxAllowedSourcesOk() (*int32, bool)`

GetMaxAllowedSourcesOk returns a tuple with the MaxAllowedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAllowedSources

`func (o *MultihostintegrationsConnectorAttributes) SetMaxAllowedSources(v int32)`

SetMaxAllowedSources sets MaxAllowedSources field to given value.

### HasMaxAllowedSources

`func (o *MultihostintegrationsConnectorAttributes) HasMaxAllowedSources() bool`

HasMaxAllowedSources returns a boolean if a field has been set.

### GetLastSourceUploadCount

`func (o *MultihostintegrationsConnectorAttributes) GetLastSourceUploadCount() int32`

GetLastSourceUploadCount returns the LastSourceUploadCount field if non-nil, zero value otherwise.

### GetLastSourceUploadCountOk

`func (o *MultihostintegrationsConnectorAttributes) GetLastSourceUploadCountOk() (*int32, bool)`

GetLastSourceUploadCountOk returns a tuple with the LastSourceUploadCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSourceUploadCount

`func (o *MultihostintegrationsConnectorAttributes) SetLastSourceUploadCount(v int32)`

SetLastSourceUploadCount sets LastSourceUploadCount field to given value.

### HasLastSourceUploadCount

`func (o *MultihostintegrationsConnectorAttributes) HasLastSourceUploadCount() bool`

HasLastSourceUploadCount returns a boolean if a field has been set.

### GetConnectorFileUploadHistory

`func (o *MultihostintegrationsConnectorAttributes) GetConnectorFileUploadHistory() MultihostintegrationsConnectorAttributesConnectorFileUploadHistory`

GetConnectorFileUploadHistory returns the ConnectorFileUploadHistory field if non-nil, zero value otherwise.

### GetConnectorFileUploadHistoryOk

`func (o *MultihostintegrationsConnectorAttributes) GetConnectorFileUploadHistoryOk() (*MultihostintegrationsConnectorAttributesConnectorFileUploadHistory, bool)`

GetConnectorFileUploadHistoryOk returns a tuple with the ConnectorFileUploadHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorFileUploadHistory

`func (o *MultihostintegrationsConnectorAttributes) SetConnectorFileUploadHistory(v MultihostintegrationsConnectorAttributesConnectorFileUploadHistory)`

SetConnectorFileUploadHistory sets ConnectorFileUploadHistory field to given value.

### HasConnectorFileUploadHistory

`func (o *MultihostintegrationsConnectorAttributes) HasConnectorFileUploadHistory() bool`

HasConnectorFileUploadHistory returns a boolean if a field has been set.

### GetMultihostStatus

`func (o *MultihostintegrationsConnectorAttributes) GetMultihostStatus() string`

GetMultihostStatus returns the MultihostStatus field if non-nil, zero value otherwise.

### GetMultihostStatusOk

`func (o *MultihostintegrationsConnectorAttributes) GetMultihostStatusOk() (*string, bool)`

GetMultihostStatusOk returns a tuple with the MultihostStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihostStatus

`func (o *MultihostintegrationsConnectorAttributes) SetMultihostStatus(v string)`

SetMultihostStatus sets MultihostStatus field to given value.

### HasMultihostStatus

`func (o *MultihostintegrationsConnectorAttributes) HasMultihostStatus() bool`

HasMultihostStatus returns a boolean if a field has been set.

### GetShowAccountSchema

`func (o *MultihostintegrationsConnectorAttributes) GetShowAccountSchema() bool`

GetShowAccountSchema returns the ShowAccountSchema field if non-nil, zero value otherwise.

### GetShowAccountSchemaOk

`func (o *MultihostintegrationsConnectorAttributes) GetShowAccountSchemaOk() (*bool, bool)`

GetShowAccountSchemaOk returns a tuple with the ShowAccountSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowAccountSchema

`func (o *MultihostintegrationsConnectorAttributes) SetShowAccountSchema(v bool)`

SetShowAccountSchema sets ShowAccountSchema field to given value.

### HasShowAccountSchema

`func (o *MultihostintegrationsConnectorAttributes) HasShowAccountSchema() bool`

HasShowAccountSchema returns a boolean if a field has been set.

### GetShowEntitlementSchema

`func (o *MultihostintegrationsConnectorAttributes) GetShowEntitlementSchema() bool`

GetShowEntitlementSchema returns the ShowEntitlementSchema field if non-nil, zero value otherwise.

### GetShowEntitlementSchemaOk

`func (o *MultihostintegrationsConnectorAttributes) GetShowEntitlementSchemaOk() (*bool, bool)`

GetShowEntitlementSchemaOk returns a tuple with the ShowEntitlementSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowEntitlementSchema

`func (o *MultihostintegrationsConnectorAttributes) SetShowEntitlementSchema(v bool)`

SetShowEntitlementSchema sets ShowEntitlementSchema field to given value.

### HasShowEntitlementSchema

`func (o *MultihostintegrationsConnectorAttributes) HasShowEntitlementSchema() bool`

HasShowEntitlementSchema returns a boolean if a field has been set.

### GetMultiHostAttributes

`func (o *MultihostintegrationsConnectorAttributes) GetMultiHostAttributes() MultihostintegrationsConnectorAttributesMultiHostAttributes`

GetMultiHostAttributes returns the MultiHostAttributes field if non-nil, zero value otherwise.

### GetMultiHostAttributesOk

`func (o *MultihostintegrationsConnectorAttributes) GetMultiHostAttributesOk() (*MultihostintegrationsConnectorAttributesMultiHostAttributes, bool)`

GetMultiHostAttributesOk returns a tuple with the MultiHostAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiHostAttributes

`func (o *MultihostintegrationsConnectorAttributes) SetMultiHostAttributes(v MultihostintegrationsConnectorAttributesMultiHostAttributes)`

SetMultiHostAttributes sets MultiHostAttributes field to given value.

### HasMultiHostAttributes

`func (o *MultihostintegrationsConnectorAttributes) HasMultiHostAttributes() bool`

HasMultiHostAttributes returns a boolean if a field has been set.


