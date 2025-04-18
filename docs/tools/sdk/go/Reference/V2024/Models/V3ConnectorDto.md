---
id: v2024-v3-connector-dto
title: V3ConnectorDto
pagination_label: V3ConnectorDto
sidebar_label: V3ConnectorDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'V3ConnectorDto', 'V2024V3ConnectorDto'] 
slug: /tools/sdk/go/v2024/models/v3-connector-dto
tags: ['SDK', 'Software Development Kit', 'V3ConnectorDto', 'V2024V3ConnectorDto']
---

# V3ConnectorDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The connector name | [optional] 
**Type** | Pointer to **string** | The connector type | [optional] 
**ScriptName** | Pointer to **string** | The connector script name | [optional] 
**ClassName** | Pointer to **NullableString** | The connector class name. | [optional] 
**Features** | Pointer to **[]string** | The list of features supported by the connector | [optional] 
**DirectConnect** | Pointer to **bool** | true if the source is a direct connect source | [optional] [default to false]
**ConnectorMetadata** | Pointer to **map[string]interface{}** | A map containing metadata pertinent to the connector | [optional] 
**Status** | Pointer to **string** | The connector status | [optional] 

## Methods

### NewV3ConnectorDto

`func NewV3ConnectorDto() *V3ConnectorDto`

NewV3ConnectorDto instantiates a new V3ConnectorDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV3ConnectorDtoWithDefaults

`func NewV3ConnectorDtoWithDefaults() *V3ConnectorDto`

NewV3ConnectorDtoWithDefaults instantiates a new V3ConnectorDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V3ConnectorDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V3ConnectorDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V3ConnectorDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *V3ConnectorDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *V3ConnectorDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V3ConnectorDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V3ConnectorDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *V3ConnectorDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetScriptName

`func (o *V3ConnectorDto) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *V3ConnectorDto) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *V3ConnectorDto) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.

### HasScriptName

`func (o *V3ConnectorDto) HasScriptName() bool`

HasScriptName returns a boolean if a field has been set.

### GetClassName

`func (o *V3ConnectorDto) GetClassName() string`

GetClassName returns the ClassName field if non-nil, zero value otherwise.

### GetClassNameOk

`func (o *V3ConnectorDto) GetClassNameOk() (*string, bool)`

GetClassNameOk returns a tuple with the ClassName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassName

`func (o *V3ConnectorDto) SetClassName(v string)`

SetClassName sets ClassName field to given value.

### HasClassName

`func (o *V3ConnectorDto) HasClassName() bool`

HasClassName returns a boolean if a field has been set.

### SetClassNameNil

`func (o *V3ConnectorDto) SetClassNameNil(b bool)`

 SetClassNameNil sets the value for ClassName to be an explicit nil

### UnsetClassName
`func (o *V3ConnectorDto) UnsetClassName()`

UnsetClassName ensures that no value is present for ClassName, not even an explicit nil
### GetFeatures

`func (o *V3ConnectorDto) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *V3ConnectorDto) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *V3ConnectorDto) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *V3ConnectorDto) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### SetFeaturesNil

`func (o *V3ConnectorDto) SetFeaturesNil(b bool)`

 SetFeaturesNil sets the value for Features to be an explicit nil

### UnsetFeatures
`func (o *V3ConnectorDto) UnsetFeatures()`

UnsetFeatures ensures that no value is present for Features, not even an explicit nil
### GetDirectConnect

`func (o *V3ConnectorDto) GetDirectConnect() bool`

GetDirectConnect returns the DirectConnect field if non-nil, zero value otherwise.

### GetDirectConnectOk

`func (o *V3ConnectorDto) GetDirectConnectOk() (*bool, bool)`

GetDirectConnectOk returns a tuple with the DirectConnect field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectConnect

`func (o *V3ConnectorDto) SetDirectConnect(v bool)`

SetDirectConnect sets DirectConnect field to given value.

### HasDirectConnect

`func (o *V3ConnectorDto) HasDirectConnect() bool`

HasDirectConnect returns a boolean if a field has been set.

### GetConnectorMetadata

`func (o *V3ConnectorDto) GetConnectorMetadata() map[string]interface{}`

GetConnectorMetadata returns the ConnectorMetadata field if non-nil, zero value otherwise.

### GetConnectorMetadataOk

`func (o *V3ConnectorDto) GetConnectorMetadataOk() (*map[string]interface{}, bool)`

GetConnectorMetadataOk returns a tuple with the ConnectorMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorMetadata

`func (o *V3ConnectorDto) SetConnectorMetadata(v map[string]interface{})`

SetConnectorMetadata sets ConnectorMetadata field to given value.

### HasConnectorMetadata

`func (o *V3ConnectorDto) HasConnectorMetadata() bool`

HasConnectorMetadata returns a boolean if a field has been set.

### GetStatus

`func (o *V3ConnectorDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *V3ConnectorDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *V3ConnectorDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *V3ConnectorDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


