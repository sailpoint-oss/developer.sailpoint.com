---
id: v2024-service-desk-source
title: ServiceDeskSource
pagination_label: ServiceDeskSource
sidebar_label: ServiceDeskSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ServiceDeskSource', 'V2024ServiceDeskSource'] 
slug: /tools/sdk/go/v2024/models/service-desk-source
tags: ['SDK', 'Software Development Kit', 'ServiceDeskSource', 'V2024ServiceDeskSource']
---

# ServiceDeskSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of source for service desk integration template. | [optional] 
**Id** | Pointer to **string** | ID of source for service desk integration template. | [optional] 
**Name** | Pointer to **string** | Human-readable name of source for service desk integration template. | [optional] 

## Methods

### NewServiceDeskSource

`func NewServiceDeskSource() *ServiceDeskSource`

NewServiceDeskSource instantiates a new ServiceDeskSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceDeskSourceWithDefaults

`func NewServiceDeskSourceWithDefaults() *ServiceDeskSource`

NewServiceDeskSourceWithDefaults instantiates a new ServiceDeskSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ServiceDeskSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ServiceDeskSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ServiceDeskSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ServiceDeskSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ServiceDeskSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceDeskSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceDeskSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ServiceDeskSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ServiceDeskSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceDeskSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceDeskSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ServiceDeskSource) HasName() bool`

HasName returns a boolean if a field has been set.


