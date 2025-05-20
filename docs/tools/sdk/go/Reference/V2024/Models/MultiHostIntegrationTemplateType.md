---
id: v2024-multi-host-integration-template-type
title: MultiHostIntegrationTemplateType
pagination_label: MultiHostIntegrationTemplateType
sidebar_label: MultiHostIntegrationTemplateType
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationTemplateType', 'V2024MultiHostIntegrationTemplateType'] 
slug: /tools/sdk/go/v2024/models/multi-host-integration-template-type
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationTemplateType', 'V2024MultiHostIntegrationTemplateType']
---

# MultiHostIntegrationTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | This is the name of the type. | [optional] 
**Type** | **string** | This is the type value for the type. | 
**ScriptName** | **string** | This is the scriptName attribute value for the type. | 

## Methods

### NewMultiHostIntegrationTemplateType

`func NewMultiHostIntegrationTemplateType(type_ string, scriptName string, ) *MultiHostIntegrationTemplateType`

NewMultiHostIntegrationTemplateType instantiates a new MultiHostIntegrationTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationTemplateTypeWithDefaults

`func NewMultiHostIntegrationTemplateTypeWithDefaults() *MultiHostIntegrationTemplateType`

NewMultiHostIntegrationTemplateTypeWithDefaults instantiates a new MultiHostIntegrationTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MultiHostIntegrationTemplateType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrationTemplateType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrationTemplateType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MultiHostIntegrationTemplateType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *MultiHostIntegrationTemplateType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultiHostIntegrationTemplateType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultiHostIntegrationTemplateType) SetType(v string)`

SetType sets Type field to given value.


### GetScriptName

`func (o *MultiHostIntegrationTemplateType) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *MultiHostIntegrationTemplateType) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *MultiHostIntegrationTemplateType) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.



