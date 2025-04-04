---
id: v2025-multi-host-integrations-connector-attributes
title: MultiHostIntegrationsConnectorAttributes
pagination_label: MultiHostIntegrationsConnectorAttributes
sidebar_label: MultiHostIntegrationsConnectorAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsConnectorAttributes', 'V2025MultiHostIntegrationsConnectorAttributes'] 
slug: /tools/sdk/go/v2025/models/multi-host-integrations-connector-attributes
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsConnectorAttributes', 'V2025MultiHostIntegrationsConnectorAttributes']
---

# MultiHostIntegrationsConnectorAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxAllowedSources** | Pointer to **int32** | Maximum sources allowed count of a Multi-Host Integration | [optional] 
**LastSourceUploadCount** | Pointer to **int32** | Last upload sources count of a Multi-Host Integration | [optional] 
**ConnectorFileUploadHistory** | Pointer to [**MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory**](multi-host-integrations-connector-attributes-connector-file-upload-history) |  | [optional] 
**MultihostStatus** | Pointer to **string** | Multi-Host integration status. | [optional] 
**ShowAccountSchema** | Pointer to **bool** | Show account schema | [optional] [default to true]
**ShowEntitlementSchema** | Pointer to **bool** | Show entitlement schema | [optional] [default to true]
**MultiHostAttributes** | Pointer to [**MultiHostIntegrationsConnectorAttributesMultiHostAttributes**](multi-host-integrations-connector-attributes-multi-host-attributes) |  | [optional] 

## Methods

### NewMultiHostIntegrationsConnectorAttributes

`func NewMultiHostIntegrationsConnectorAttributes() *MultiHostIntegrationsConnectorAttributes`

NewMultiHostIntegrationsConnectorAttributes instantiates a new MultiHostIntegrationsConnectorAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsConnectorAttributesWithDefaults

`func NewMultiHostIntegrationsConnectorAttributesWithDefaults() *MultiHostIntegrationsConnectorAttributes`

NewMultiHostIntegrationsConnectorAttributesWithDefaults instantiates a new MultiHostIntegrationsConnectorAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMaxAllowedSources

`func (o *MultiHostIntegrationsConnectorAttributes) GetMaxAllowedSources() int32`

GetMaxAllowedSources returns the MaxAllowedSources field if non-nil, zero value otherwise.

### GetMaxAllowedSourcesOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetMaxAllowedSourcesOk() (*int32, bool)`

GetMaxAllowedSourcesOk returns a tuple with the MaxAllowedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAllowedSources

`func (o *MultiHostIntegrationsConnectorAttributes) SetMaxAllowedSources(v int32)`

SetMaxAllowedSources sets MaxAllowedSources field to given value.

### HasMaxAllowedSources

`func (o *MultiHostIntegrationsConnectorAttributes) HasMaxAllowedSources() bool`

HasMaxAllowedSources returns a boolean if a field has been set.

### GetLastSourceUploadCount

`func (o *MultiHostIntegrationsConnectorAttributes) GetLastSourceUploadCount() int32`

GetLastSourceUploadCount returns the LastSourceUploadCount field if non-nil, zero value otherwise.

### GetLastSourceUploadCountOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetLastSourceUploadCountOk() (*int32, bool)`

GetLastSourceUploadCountOk returns a tuple with the LastSourceUploadCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSourceUploadCount

`func (o *MultiHostIntegrationsConnectorAttributes) SetLastSourceUploadCount(v int32)`

SetLastSourceUploadCount sets LastSourceUploadCount field to given value.

### HasLastSourceUploadCount

`func (o *MultiHostIntegrationsConnectorAttributes) HasLastSourceUploadCount() bool`

HasLastSourceUploadCount returns a boolean if a field has been set.

### GetConnectorFileUploadHistory

`func (o *MultiHostIntegrationsConnectorAttributes) GetConnectorFileUploadHistory() MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory`

GetConnectorFileUploadHistory returns the ConnectorFileUploadHistory field if non-nil, zero value otherwise.

### GetConnectorFileUploadHistoryOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetConnectorFileUploadHistoryOk() (*MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory, bool)`

GetConnectorFileUploadHistoryOk returns a tuple with the ConnectorFileUploadHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorFileUploadHistory

`func (o *MultiHostIntegrationsConnectorAttributes) SetConnectorFileUploadHistory(v MultiHostIntegrationsConnectorAttributesConnectorFileUploadHistory)`

SetConnectorFileUploadHistory sets ConnectorFileUploadHistory field to given value.

### HasConnectorFileUploadHistory

`func (o *MultiHostIntegrationsConnectorAttributes) HasConnectorFileUploadHistory() bool`

HasConnectorFileUploadHistory returns a boolean if a field has been set.

### GetMultihostStatus

`func (o *MultiHostIntegrationsConnectorAttributes) GetMultihostStatus() string`

GetMultihostStatus returns the MultihostStatus field if non-nil, zero value otherwise.

### GetMultihostStatusOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetMultihostStatusOk() (*string, bool)`

GetMultihostStatusOk returns a tuple with the MultihostStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihostStatus

`func (o *MultiHostIntegrationsConnectorAttributes) SetMultihostStatus(v string)`

SetMultihostStatus sets MultihostStatus field to given value.

### HasMultihostStatus

`func (o *MultiHostIntegrationsConnectorAttributes) HasMultihostStatus() bool`

HasMultihostStatus returns a boolean if a field has been set.

### GetShowAccountSchema

`func (o *MultiHostIntegrationsConnectorAttributes) GetShowAccountSchema() bool`

GetShowAccountSchema returns the ShowAccountSchema field if non-nil, zero value otherwise.

### GetShowAccountSchemaOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetShowAccountSchemaOk() (*bool, bool)`

GetShowAccountSchemaOk returns a tuple with the ShowAccountSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowAccountSchema

`func (o *MultiHostIntegrationsConnectorAttributes) SetShowAccountSchema(v bool)`

SetShowAccountSchema sets ShowAccountSchema field to given value.

### HasShowAccountSchema

`func (o *MultiHostIntegrationsConnectorAttributes) HasShowAccountSchema() bool`

HasShowAccountSchema returns a boolean if a field has been set.

### GetShowEntitlementSchema

`func (o *MultiHostIntegrationsConnectorAttributes) GetShowEntitlementSchema() bool`

GetShowEntitlementSchema returns the ShowEntitlementSchema field if non-nil, zero value otherwise.

### GetShowEntitlementSchemaOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetShowEntitlementSchemaOk() (*bool, bool)`

GetShowEntitlementSchemaOk returns a tuple with the ShowEntitlementSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowEntitlementSchema

`func (o *MultiHostIntegrationsConnectorAttributes) SetShowEntitlementSchema(v bool)`

SetShowEntitlementSchema sets ShowEntitlementSchema field to given value.

### HasShowEntitlementSchema

`func (o *MultiHostIntegrationsConnectorAttributes) HasShowEntitlementSchema() bool`

HasShowEntitlementSchema returns a boolean if a field has been set.

### GetMultiHostAttributes

`func (o *MultiHostIntegrationsConnectorAttributes) GetMultiHostAttributes() MultiHostIntegrationsConnectorAttributesMultiHostAttributes`

GetMultiHostAttributes returns the MultiHostAttributes field if non-nil, zero value otherwise.

### GetMultiHostAttributesOk

`func (o *MultiHostIntegrationsConnectorAttributes) GetMultiHostAttributesOk() (*MultiHostIntegrationsConnectorAttributesMultiHostAttributes, bool)`

GetMultiHostAttributesOk returns a tuple with the MultiHostAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiHostAttributes

`func (o *MultiHostIntegrationsConnectorAttributes) SetMultiHostAttributes(v MultiHostIntegrationsConnectorAttributesMultiHostAttributes)`

SetMultiHostAttributes sets MultiHostAttributes field to given value.

### HasMultiHostAttributes

`func (o *MultiHostIntegrationsConnectorAttributes) HasMultiHostAttributes() bool`

HasMultiHostAttributes returns a boolean if a field has been set.


