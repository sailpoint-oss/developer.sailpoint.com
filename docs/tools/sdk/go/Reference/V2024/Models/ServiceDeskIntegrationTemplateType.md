---
id: v2024-service-desk-integration-template-type
title: ServiceDeskIntegrationTemplateType
pagination_label: ServiceDeskIntegrationTemplateType
sidebar_label: ServiceDeskIntegrationTemplateType
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceDeskIntegrationTemplateType', 'V2024ServiceDeskIntegrationTemplateType'] 
slug: /tools/sdk/go/v2024/models/service-desk-integration-template-type
tags: ['SDK', 'Software Development Kit', 'ServiceDeskIntegrationTemplateType', 'V2024ServiceDeskIntegrationTemplateType']
---

# ServiceDeskIntegrationTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | This is the name of the type. | [optional] 
**Type** | **string** | This is the type value for the type. | 
**ScriptName** | **string** | This is the scriptName attribute value for the type. | 

## Methods

### NewServiceDeskIntegrationTemplateType

`func NewServiceDeskIntegrationTemplateType(type_ string, scriptName string, ) *ServiceDeskIntegrationTemplateType`

NewServiceDeskIntegrationTemplateType instantiates a new ServiceDeskIntegrationTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceDeskIntegrationTemplateTypeWithDefaults

`func NewServiceDeskIntegrationTemplateTypeWithDefaults() *ServiceDeskIntegrationTemplateType`

NewServiceDeskIntegrationTemplateTypeWithDefaults instantiates a new ServiceDeskIntegrationTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ServiceDeskIntegrationTemplateType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceDeskIntegrationTemplateType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceDeskIntegrationTemplateType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ServiceDeskIntegrationTemplateType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ServiceDeskIntegrationTemplateType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ServiceDeskIntegrationTemplateType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ServiceDeskIntegrationTemplateType) SetType(v string)`

SetType sets Type field to given value.


### GetScriptName

`func (o *ServiceDeskIntegrationTemplateType) GetScriptName() string`

GetScriptName returns the ScriptName field if non-nil, zero value otherwise.

### GetScriptNameOk

`func (o *ServiceDeskIntegrationTemplateType) GetScriptNameOk() (*string, bool)`

GetScriptNameOk returns a tuple with the ScriptName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScriptName

`func (o *ServiceDeskIntegrationTemplateType) SetScriptName(v string)`

SetScriptName sets ScriptName field to given value.



