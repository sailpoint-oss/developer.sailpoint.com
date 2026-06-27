---
id: v1-accountunlockrequest
title: Accountunlockrequest
pagination_label: Accountunlockrequest
sidebar_label: Accountunlockrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountunlockrequest', 'V1Accountunlockrequest'] 
slug: /tools/sdk/go/accounts/models/accountunlockrequest
tags: ['SDK', 'Software Development Kit', 'Accountunlockrequest', 'V1Accountunlockrequest']
---

# Accountunlockrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** | Pointer to **string** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**UnlockIDNAccount** | Pointer to **bool** | If set, the IDN account is unlocked after the workflow completes. | [optional] 
**ForceProvisioning** | Pointer to **bool** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [optional] 

## Methods

### NewAccountunlockrequest

`func NewAccountunlockrequest() *Accountunlockrequest`

NewAccountunlockrequest instantiates a new Accountunlockrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountunlockrequestWithDefaults

`func NewAccountunlockrequestWithDefaults() *Accountunlockrequest`

NewAccountunlockrequestWithDefaults instantiates a new Accountunlockrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalVerificationId

`func (o *Accountunlockrequest) GetExternalVerificationId() string`

GetExternalVerificationId returns the ExternalVerificationId field if non-nil, zero value otherwise.

### GetExternalVerificationIdOk

`func (o *Accountunlockrequest) GetExternalVerificationIdOk() (*string, bool)`

GetExternalVerificationIdOk returns a tuple with the ExternalVerificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalVerificationId

`func (o *Accountunlockrequest) SetExternalVerificationId(v string)`

SetExternalVerificationId sets ExternalVerificationId field to given value.

### HasExternalVerificationId

`func (o *Accountunlockrequest) HasExternalVerificationId() bool`

HasExternalVerificationId returns a boolean if a field has been set.

### GetUnlockIDNAccount

`func (o *Accountunlockrequest) GetUnlockIDNAccount() bool`

GetUnlockIDNAccount returns the UnlockIDNAccount field if non-nil, zero value otherwise.

### GetUnlockIDNAccountOk

`func (o *Accountunlockrequest) GetUnlockIDNAccountOk() (*bool, bool)`

GetUnlockIDNAccountOk returns a tuple with the UnlockIDNAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnlockIDNAccount

`func (o *Accountunlockrequest) SetUnlockIDNAccount(v bool)`

SetUnlockIDNAccount sets UnlockIDNAccount field to given value.

### HasUnlockIDNAccount

`func (o *Accountunlockrequest) HasUnlockIDNAccount() bool`

HasUnlockIDNAccount returns a boolean if a field has been set.

### GetForceProvisioning

`func (o *Accountunlockrequest) GetForceProvisioning() bool`

GetForceProvisioning returns the ForceProvisioning field if non-nil, zero value otherwise.

### GetForceProvisioningOk

`func (o *Accountunlockrequest) GetForceProvisioningOk() (*bool, bool)`

GetForceProvisioningOk returns a tuple with the ForceProvisioning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceProvisioning

`func (o *Accountunlockrequest) SetForceProvisioning(v bool)`

SetForceProvisioning sets ForceProvisioning field to given value.

### HasForceProvisioning

`func (o *Accountunlockrequest) HasForceProvisioning() bool`

HasForceProvisioning returns a boolean if a field has been set.


