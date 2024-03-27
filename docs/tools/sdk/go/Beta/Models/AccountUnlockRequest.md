---
id: account-unlock-request
title: AccountUnlockRequest
pagination_label: AccountUnlockRequest
sidebar_label: AccountUnlockRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountUnlockRequest'] 
slug: /tools/sdk/go/beta/models/account-unlock-request
tags: ['SDK', 'Software Development Kit', 'AccountUnlockRequest']
---

# AccountUnlockRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** |  Pointer to **string** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**UnlockIDNAccount** |  Pointer to **bool** | If set, the IDN account is unlocked after the workflow completes. | [optional] 
**ForceProvisioning** |  Pointer to **bool** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. | [optional] 

## Methods

### NewAccountUnlockRequest

`func NewAccountUnlockRequest() *AccountUnlockRequest`

NewAccountUnlockRequest instantiates a new AccountUnlockRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUnlockRequestWithDefaults

`func NewAccountUnlockRequestWithDefaults() *AccountUnlockRequest`

NewAccountUnlockRequestWithDefaults instantiates a new AccountUnlockRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalVerificationId

`func (o *AccountUnlockRequest) GetExternalVerificationId() string`

GetExternalVerificationId returns the ExternalVerificationId field if non-nil, zero value otherwise.

### GetExternalVerificationIdOk

`func (o *AccountUnlockRequest) GetExternalVerificationIdOk() (*string, bool)`

GetExternalVerificationIdOk returns a tuple with the ExternalVerificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalVerificationId

`func (o *AccountUnlockRequest) SetExternalVerificationId(v string)`

SetExternalVerificationId sets ExternalVerificationId field to given value.

### HasExternalVerificationId

`func (o *AccountUnlockRequest) HasExternalVerificationId() bool`

HasExternalVerificationId returns a boolean if a field has been set.

### GetUnlockIDNAccount

`func (o *AccountUnlockRequest) GetUnlockIDNAccount() bool`

GetUnlockIDNAccount returns the UnlockIDNAccount field if non-nil, zero value otherwise.

### GetUnlockIDNAccountOk

`func (o *AccountUnlockRequest) GetUnlockIDNAccountOk() (*bool, bool)`

GetUnlockIDNAccountOk returns a tuple with the UnlockIDNAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnlockIDNAccount

`func (o *AccountUnlockRequest) SetUnlockIDNAccount(v bool)`

SetUnlockIDNAccount sets UnlockIDNAccount field to given value.

### HasUnlockIDNAccount

`func (o *AccountUnlockRequest) HasUnlockIDNAccount() bool`

HasUnlockIDNAccount returns a boolean if a field has been set.

### GetForceProvisioning

`func (o *AccountUnlockRequest) GetForceProvisioning() bool`

GetForceProvisioning returns the ForceProvisioning field if non-nil, zero value otherwise.

### GetForceProvisioningOk

`func (o *AccountUnlockRequest) GetForceProvisioningOk() (*bool, bool)`

GetForceProvisioningOk returns a tuple with the ForceProvisioning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceProvisioning

`func (o *AccountUnlockRequest) SetForceProvisioning(v bool)`

SetForceProvisioning sets ForceProvisioning field to given value.

### HasForceProvisioning

`func (o *AccountUnlockRequest) HasForceProvisioning() bool`

HasForceProvisioning returns a boolean if a field has been set.


[[Back to top]](#) 


