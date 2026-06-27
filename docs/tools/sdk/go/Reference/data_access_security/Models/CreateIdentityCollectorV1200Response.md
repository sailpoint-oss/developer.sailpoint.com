---
id: v1-create-identity-collector-v1200-response
title: CreateIdentityCollectorV1200Response
pagination_label: CreateIdentityCollectorV1200Response
sidebar_label: CreateIdentityCollectorV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateIdentityCollectorV1200Response', 'V1CreateIdentityCollectorV1200Response'] 
slug: /tools/sdk/go/dataaccesssecurity/models/create-identity-collector-v1200-response
tags: ['SDK', 'Software Development Kit', 'CreateIdentityCollectorV1200Response', 'V1CreateIdentityCollectorV1200Response']
---

# CreateIdentityCollectorV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** | The unique identifier of the created identity collector. | [optional] 
**Name** | Pointer to **string** | The display name of the created identity collector. | [optional] 

## Methods

### NewCreateIdentityCollectorV1200Response

`func NewCreateIdentityCollectorV1200Response() *CreateIdentityCollectorV1200Response`

NewCreateIdentityCollectorV1200Response instantiates a new CreateIdentityCollectorV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateIdentityCollectorV1200ResponseWithDefaults

`func NewCreateIdentityCollectorV1200ResponseWithDefaults() *CreateIdentityCollectorV1200Response`

NewCreateIdentityCollectorV1200ResponseWithDefaults instantiates a new CreateIdentityCollectorV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CreateIdentityCollectorV1200Response) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreateIdentityCollectorV1200Response) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreateIdentityCollectorV1200Response) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *CreateIdentityCollectorV1200Response) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CreateIdentityCollectorV1200Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateIdentityCollectorV1200Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateIdentityCollectorV1200Response) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateIdentityCollectorV1200Response) HasName() bool`

HasName returns a boolean if a field has been set.


