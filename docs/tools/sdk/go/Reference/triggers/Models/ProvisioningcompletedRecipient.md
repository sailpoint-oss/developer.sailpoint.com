---
id: v1-provisioningcompleted-recipient
title: ProvisioningcompletedRecipient
pagination_label: ProvisioningcompletedRecipient
sidebar_label: ProvisioningcompletedRecipient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningcompletedRecipient', 'V1ProvisioningcompletedRecipient'] 
slug: /tools/sdk/go/triggers/models/provisioningcompleted-recipient
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedRecipient', 'V1ProvisioningcompletedRecipient']
---

# ProvisioningcompletedRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Provisioning recipient DTO type. | 
**Id** | **string** | Provisioning recipient's identity ID. | 
**Name** | **string** | Provisioning recipient's display name. | 

## Methods

### NewProvisioningcompletedRecipient

`func NewProvisioningcompletedRecipient(type_ string, id string, name string, ) *ProvisioningcompletedRecipient`

NewProvisioningcompletedRecipient instantiates a new ProvisioningcompletedRecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningcompletedRecipientWithDefaults

`func NewProvisioningcompletedRecipientWithDefaults() *ProvisioningcompletedRecipient`

NewProvisioningcompletedRecipientWithDefaults instantiates a new ProvisioningcompletedRecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ProvisioningcompletedRecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProvisioningcompletedRecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProvisioningcompletedRecipient) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *ProvisioningcompletedRecipient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProvisioningcompletedRecipient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProvisioningcompletedRecipient) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ProvisioningcompletedRecipient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProvisioningcompletedRecipient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProvisioningcompletedRecipient) SetName(v string)`

SetName sets Name field to given value.



