---
id: beta-provisioning-completed-recipient
title: ProvisioningCompletedRecipient
pagination_label: ProvisioningCompletedRecipient
sidebar_label: ProvisioningCompletedRecipient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningCompletedRecipient', 'BetaProvisioningCompletedRecipient'] 
slug: /tools/sdk/go/beta/models/provisioning-completed-recipient
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRecipient', 'BetaProvisioningCompletedRecipient']
---

# ProvisioningCompletedRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Provisioning recipient DTO type. | 
**Id** | **string** | Provisioning recipient&#39;s identity ID. | 
**Name** | **string** | Provisioning recipient&#39;s name. | 

## Methods

### NewProvisioningCompletedRecipient

`func NewProvisioningCompletedRecipient(type_ string, id string, name string, ) *ProvisioningCompletedRecipient`

NewProvisioningCompletedRecipient instantiates a new ProvisioningCompletedRecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCompletedRecipientWithDefaults

`func NewProvisioningCompletedRecipientWithDefaults() *ProvisioningCompletedRecipient`

NewProvisioningCompletedRecipientWithDefaults instantiates a new ProvisioningCompletedRecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ProvisioningCompletedRecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ProvisioningCompletedRecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ProvisioningCompletedRecipient) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *ProvisioningCompletedRecipient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ProvisioningCompletedRecipient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ProvisioningCompletedRecipient) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ProvisioningCompletedRecipient) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProvisioningCompletedRecipient) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProvisioningCompletedRecipient) SetName(v string)`

SetName sets Name field to given value.



